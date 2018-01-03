var FaceMappingApp = Class.extend({
	init: function (scope) {
		var self = this;

		this.tmp = {};

		this.jq = {};
		this.jq.scope = scope;

		this.jq.imageTrace = this.jq.scope.find(".imageTrace");

		this.TRACEDAREA_EYE_LEFT = 1,
		this.TRACEDAREA_EYE_RIGHT = 2,
		this.TRACEDAREA_LIPS = 3,
		this.TRACEDAREA_TEETH = 4,
		this.TRACEDAREA_FACE = 5,
		this.TRACEDAREA_EYEBROW_LEFT = 6,
		this.TRACEDAREA_EYEBROW_RIGHT = 7,
		this.TRACEDAREA_NOSE = 8,
		this.TRACEDAREA_CYOH = 9,

		this.TRACEDAREA_EYELINER_LEFT_WINGED = 10,
		this.TRACEDAREA_EYELINER_RIGHT_WINGED = 11,
		this.TRACEDAREA_EYELINER_LEFT_CATEYE = 12,
		this.TRACEDAREA_EYELINER_RIGHT_CATEYE = 13,

		this.TRACEDAREA_EYESHADOW_LEFT_WASH = 14,
		this.TRACEDAREA_EYESHADOW_RIGHT_WASH = 15,
		this.TRACEDAREA_EYESHADOW_LEFT_CLASSIC_LID = 16,
		this.TRACEDAREA_EYESHADOW_RIGHT_CLASSIC_LID = 17,
		this.TRACEDAREA_EYESHADOW_LEFT_CLASSIC_CONTOUR = 18,
		this.TRACEDAREA_EYESHADOW_RIGHT_CLASSIC_CONTOUR = 19,
		this.TRACEDAREA_EYESHADOW_LEFT_CLASSIC_HIGHLIGHT = 20,
		this.TRACEDAREA_EYESHADOW_RIGHT_CLASSIC_HIGHLIGHT = 21,
		this.TRACEDAREA_EYESHADOW_LEFT_SMOKEY_LID = 22,
		this.TRACEDAREA_EYESHADOW_RIGHT_SMOKEY_LID = 23,
		this.TRACEDAREA_EYESHADOW_LEFT_SMOKEY_CONTOUR = 24,
		this.TRACEDAREA_EYESHADOW_RIGHT_SMOKEY_CONTOUR = 25,
		this.TRACEDAREA_EYESHADOW_LEFT_SMOKEY_HIGHLIGHT = 26,
		this.TRACEDAREA_EYESHADOW_RIGHT_SMOKEY_HIGHLIGHT = 27,
		this.TRACEDAREA_EYESHADOW_LEFT_2TONE_LID = 28,
		this.TRACEDAREA_EYESHADOW_RIGHT_2TONE_LID = 29,
		this.TRACEDAREA_EYESHADOW_LEFT_2TONE_HIGHLIGHT = 30,
		this.TRACEDAREA_EYESHADOW_RIGHT_2TONE_HIGHLIGHT = 31,

		this.TRACEDAREA_BLUSH_APPLE_LEFT = 32,
		this.TRACEDAREA_BLUSH_APPLE_RIGHT = 33,
		this.TRACEDAREA_BLUSH_FLUSH_LEFT = 34,
		this.TRACEDAREA_BLUSH_FLUSH_RIGHT = 35,
		this.TRACEDAREA_BLUSH_CONTOUR_LEFT = 36,
		this.TRACEDAREA_BLUSH_CONTOUR_RIGHT = 37,
		this.TRACEDAREA_BLUSH_SUNKISSED_LEFT = 38,
		this.TRACEDAREA_BLUSH_SUNKISSED_RIGHT = 39,

		this.TRACEDAREA_CONCEALER_UNDEREYE_LEFT = 40,
		this.TRACEDAREA_CONCEALER_UNDEREYE_RIGHT = 41,

		this.TRACEDAREA_TZONE = 42,

		// bitmaps
		this.TRACEDAREA_CONTACT_LEFT = 43,
		this.TRACEDAREA_CONTACT_RIGHT = 44,
		this.TRACEDAREA_EARRING_LEFT = 45,
		this.TRACEDAREA_EARRING_RIGHT = 46,
		this.TRACEDAREA_HAIR = 47,
		this.TRACEDAREA_FACIAL_HAIR = 48,
		this.TRACEDAREA_GLASSES = 49,
		this.TRACEDAREA_HEADWEAR = 50,
		this.TRACEDAREA_NECKLACE = 51,
		this.TRACEDAREA_COVER = 52,
		this.TRACEDAREA_NAILS = 53,

		// traced area for all eyeshadows
		this.TRACEDAREA_EYESHADOW_LEFT = 54,
		this.TRACEDAREA_EYESHADOW_RIGHT = 55,

		this.TRACEDAREA_SCARF = 56,

		this.TRACEDAREA_LAST_INDEX = 56,

		// not stored, used to trace multiple areas together
		this.TRACEDAREA_EYESHADOW_LEFT_CLASSIC_ALL = 1001,
		this.TRACEDAREA_EYESHADOW_RIGHT_CLASSIC_ALL = 1002,
		this.TRACEDAREA_EYESHADOW_LEFT_SMOKEY_ALL = 1003,
		this.TRACEDAREA_EYESHADOW_RIGHT_SMOKEY_ALL = 1004,
		this.TRACEDAREA_EYESHADOW_LEFT_2TONE_ALL = 1005,
		this.TRACEDAREA_EYESHADOW_RIGHT_2TONE_ALL = 1006,

		// status constants
		this.STATUS_NOT_TRACED = 0,
		this.STATUS_TRACED = 1,
		this.STATUS_GUESSED = 2,
		this.STATUS_NOT_PRESENT = 3

		//this.stylePhotoArray = ["leftEye", "rightEye", "mouth", "leftEyeBrow", "rightEyeBrow", "face", "TRACEDAREA_BLUSH_APPLE_LEFT"];
		// Need to create an array of 72 points

		this.eyeShadowTraced = false;
		this.blushTraced = false;

		this.pointCollectionArray = [];
		this.shapeArray = new Array();

		if (!this.eyeShadowTraced) {
			// vmeHtml5.startTracingMode(4);
			// vmeHtml5.stopTracingMode();
			this.eyeShadowTraced = true;
		}

		if (!this.blushTraced) {
			//vmeHtml5.startTracingMode(7);
			//vmeHtml5.stopTracingMode();
			this.blushTraced = true;
		}

		//this.setState(tracedAreaId);
	},

	resize: function(e) {
		var self = e.data.self;
		self.setState(self.tmp.featureId,self.tmp.style,self.tmp.instanceIndex, self.tmp.tracedAreaId)
	},

	pointDistance: function (point1, point2) {
		var distX = point1.x - point2.x;
		var distY = point1.y - point2.y;
		var distance = Math.sqrt(distX * distX + distY * distY);
		return distance;
	},

	pointNormalize: function (point, scale) {
		var norm = Math.sqrt(point.x * point.x + point.y * point.y);
		if (norm != 0) {
			point.x = scale * point.x / norm;
			point.y = scale * point.y / norm;
		}
	},

	pointPolar: function (len, angle) {
		return { x: len * Math.cos(angle), y: len * Math.sin(angle) };
	},

	calcControlPoints: function (p) {
		var controlPts = new Array(); // An array to store the two control points (of a cubic Bezier curve) for each point

		// Loop through all the points (except the first and last if not a closed line) to get curve control points for each.
		for (var i = 0; i < p.length; i++) {
			// The previous, current, and next points
			var p0 = (i - 1 < 0) ? p[p.length - 2] : p[i - 1]; // If the first point (of a closed line), use the second-to-last point as the previous point
			var p1 = p[i];
			var p2 = (i + 1 == p.length) ? p[1] : p[i + 1]; // If the last point (of a closed line), use the second point as the next point

			var a = this.pointDistance(p0, p1); // Distance from previous point to current point
			if (a < 0.001) a = .001; // Correct for near-zero distances, which screw up the angles or something
			var b = this.pointDistance(p1, p2); // Distance from current point to next point
			if (b < 0.001) b = .001;
			var c = this.pointDistance(p0, p2); // Distance from previous point to next point
			if (c < 0.001) c = .001;
			var acosAngle = (b * b + a * a - c * c) / (2 * b * a);
			var C = Math.acos(acosAngle); // Angle formed by the two sides of the triangle (described by the three points above) adjacent to the current point
			if (isNaN(C)) { C = 0; }

			// Duplicate set of points. Start by giving previous and next points values RELATIVE to the current point.
			var aPt = { x: p0.x - p1.x, y: p0.y - p1.y };
			var bPt = { x: p1.x, y: p1.y };
			var cPt = { x: p2.x - p1.x, y: p2.y - p1.y };

			if (a > b) {
				this.pointNormalize(aPt, b); // Scale the segment to aPt (bPt to aPt) to the size of b (bPt to cPt) if b is shorter.
			} else if (b > a) {
				this.pointNormalize(cPt, a); // Scale the segment to cPt (bPt to cPt) to the size of a (aPt to bPt) if a is shorter.
			}
			aPt.x += p1.x; // offset
			aPt.y += p1.y;
			cPt.x += p1.x;
			cPt.y += p1.y;

			// Get the sum of the two vectors, which is perpendicular to the line along which our curve control points will lie.
			var ax = bPt.x - aPt.x; // x component of the segment from previous to current point
			var ay = bPt.y - aPt.y;
			var bx = bPt.x - cPt.x; // x component of the segment from next to current point
			var by = bPt.y - cPt.y;
			var rx = ax + bx; // sum of x components
			if (rx == 0) { rx = .001; } // avoid div by zero
			var theta = Math.atan((ay + by) / rx); // angle of the new vector

			// get z and anglefactor from
			var currentAngleFactor = p[i].a;
			var currentZ = p[i].z;
			var controlScaleFactor = C / Math.PI; // Scale the distance based on the acuteness of the angle. Prevents big loops around long, sharp-angled triangles.
			var controlDist = Math.min(a, b) * currentZ; // Distance of curve control points from current point: a fraction the length of the shorter adjacent triangle side
			controlDist *= ((1 - currentAngleFactor) + currentAngleFactor * controlScaleFactor); // Mess with this for some fine-tuning

			var controlAngle = theta + Math.PI / 2; // The angle from the current point to control points: the new vector angle plus 90 degrees (tangent to the curve).
			var controlPoint2 = this.pointPolar(controlDist, controlAngle); // Control point 2, curving to the next point.
			var controlPoint1 = this.pointPolar(controlDist, controlAngle + Math.PI); // Control point 1, curving from the previous point (180 degrees away from control point 2).

			// Offset control points to put them in the correct absolute position
			controlPoint1.x += p1.x; // offset
			controlPoint1.y += p1.y;
			controlPoint2.x += p1.x;
			controlPoint2.y += p1.y;

			if (this.pointDistance(controlPoint2, p2) > this.pointDistance(controlPoint1, p2)) {
				controlPts[i] = new Array(controlPoint2, controlPoint1); // Add the two control points to the array in reverse order
			} else {
				controlPts[i] = new Array(controlPoint1, controlPoint2); // Otherwise add the two control points to the array in normal order
			}
		}
		return controlPts;
	},

	clearAllShapes: function () {
		var canvas = document.getElementById('myCanvas');
		var context = canvas.getContext('2d');
		context.clearRect(0, 0, canvas.width, canvas.height);
	},

	drawShapes: function (cmd) {

		this.clearAllShapes();

		var canvas = document.getElementById('myCanvas');
		var context = canvas.getContext('2d');

		for (var i = 0; i < this.shapeArray.length; i++) {
			var tracedArea = this.shapeArray[i];
			if (tracedArea != null) {
				if( TracingUtils.doesTracedAreaHavePoints( tracedArea ) )
				{
					var currentCollection = this.pointCollectionArray[tracedArea];
					var points = currentCollection.getCoords();
					var color = "rgba(255,255,255, 0.3)";
					if(tracedArea == 4) {
						color = "rrgba(255,255,255, 0.3)";
					}
					var length = points.length;

					this.drawShape(points, context, color);

					if (points.length > length) {
						if (points[0].x == points[points.length - 1].x && points[0].y == points[points.length - 1].y) {
							points.length = points.length - 1;
						}
					}

					if (currentCollection.hasChanged() || cmd ==='reset') {
						setPointsForTracedArea(tracedArea, points);
					}
					else {
						//console.log("nothing changed");
					}
				}
				else
				{
					var currentCollection = this.pointCollectionArray[tracedArea];
					var points = currentCollection.getCoords();

					if (currentCollection.hasChanged()) {
						setLocationForTracedArea(tracedArea, points[0]);
					}
					else {
						//console.log("nothing changed");
					}

					this.drawShapeBitmap(tracedArea,context);
				}
			}
		}

	},

	drawShapeBitmap: function (tracedArea, g) {
		// TODO: draw bitmap shapes (contacts, glasses, etc.)
		var point = TracingUtils.pointToAbsolute( new Point(0,0), tracedArea );
		var cx = point.x + Alcon.Session.vmePhotoWidth / 2;
		var cy = point.y + Alcon.Session.vmePhotoHeight / 2;
		var scale = Alcon.Vme.vmeHtml5.model.photoTrace[tracedArea].scaleX;
		g.beginPath();
		g.arc( cx, cy, 6 * scale, 0, Math.PI * 2, false );
		g.fillStyle = "rgba(255,255,255, 0.3)";
		g.fill();
	},

	// p: array of points
	// g: context of a canvas
	drawShape: function (p, g, color) {

		p.push(p[0]);
		var controlPts = this.calcControlPoints(p); // Calculate all the curve control points

		// Start drawing the curve
		g.beginPath();
		g.moveTo(p[0].x, p[0].y);
		//console.log("Drawing Shape Start");

		for (var i = 0; i < p.length - 1; i++) {
			var pa = p[i];
			var pb = controlPts[i][1];
			var pc = controlPts[i + 1][0];
			var pd = p[i + 1];
			var pax = pa.x;
			var pay = pa.y;
			var pbx = pb.x - pax;
			var pby = pb.y - pay;
			var pcx = pc.x - pax;
			var pcy = pc.y - pay;
			var pdx = pd.x - pax;
			var pdy = pd.y - pay;

			var step = 1 / this.pointDistance(p[i], p[i + 1]);
			if (isNaN(step)) { step = .1; }
			step = Math.min(Math.max(step, .1), .5); // adjust numbers for less/more detail
			for (var t = step; t < 1; t += step) {
				g.lineTo(
					(t * t * pdx + 3 * (1 - t) * (t * pcx + (1 - t) * pbx)) * t + pax,
					(t * t * pdy + 3 * (1 - t) * (t * pcy + (1 - t) * pby)) * t + pay);
			}
			g.lineTo(pd.x, pd.y);
		}
		g.closePath();
		g.fillStyle = color;
		g.strokeStyle = "rgba(255,255,255, 0.9)";
		g.fill();
		g.stroke();
		//console.log("Drawing Shape End");
	},
	/*
	getTracedAreaForIndex: function (index) {
	return index;

	var tracedArea = 0;
	switch (index) {
	case this.LEFT_EYE:
	tracedArea = 1;
	break;
	case this.RIGHT_EYE:
	tracedArea = 2;
	break;
	case this.MOUTH:
	tracedArea = 3;
	break;
	case this.LEFT_EYEBROW:
	tracedArea = 6;
	break;
	case this.RIGHT_EYEBROW:
	tracedArea = 7;
	break;
	case this.FACE:
	tracedArea = 5;
	break;
	case this.TRACEDAREA_BLUSH_APPLE_LEFT:
	tracedArea = 32;
	break;
	case this.TRACEDAREA_BLUSH_APPLE_RIGHT:
	tracedArea = 33;
	break;
	}
	return tracedArea;
	},
	*/

	setState: function (featureId, style, instanceIndex, tracedAreaId, cmd) {
		this.tmp = {
			featureId: featureId,
			style: style,
			instanceIndex: instanceIndex,
			tracedAreaId: tracedAreaId
		};

		this.clearEverything();
		var tracingChildren = new Array();
		var isTwoSided = false;

		if (tracedAreaId == null || tracedAreaId == 0) {
		  // in tracingChildren will added values 1 and 2 (left, right eyes)

		  tracedAreaId = TracingUtils.tracedAreaForFeature(featureId, style, instanceIndex);
		  tracingChildren[0] = tracedAreaId;

		  if (TracingUtils.isTracedAreaTwoSided(tracedAreaId)) {
		    isTwoSided = true;
		    tracingChildren[1] = TracingUtils.getTracedAreaOtherSide(tracedAreaId);
			}
		}
		else {
			if (tracedAreaId instanceof Array) {
				for (var i = 0; i < tracedAreaId.length; i++) {
					tracingChildren[i] = tracedAreaId[i];
				}
			}
			else {
				tracingChildren[0] = tracedAreaId;
			}
		}


		for (var i = 0; i < tracingChildren.length; i++) {
		  this.shapeArray[tracingChildren[i]] = tracingChildren[i];
		}

		var viewportWidth = $(".mask").width();
		var viewportHeight = $(".mask").height();
		var bounds = []; // coordinates for all traced areas
		var zoom = 1;

		// calculate coordinates for all traced areas
		for (var i = 0; i < this.shapeArray.length; i++) {

		  if (this.shapeArray[i]){
		    tracedAreaId = this.shapeArray[i];

		    if (this.shapeArray[tracedAreaId] == null)
		      this.shapeArray[tracedAreaId] = tracedAreaId;
		    TracingUtils.guessTracedArea(tracedAreaId);

		  	if (cmd === 'reset') {
				bounds.push(Alcon.Config.aTracedBounds[tracedAreaId])
			} else {
				var b = getBoundsForTracedArea_Internal(tracedAreaId);
				bounds.push(b);
				if (!Alcon.Config.oTracedCords.hasOwnProperty(tracedAreaId)) {
					Alcon.Config.aTracedBounds[tracedAreaId] = b;
				}
			}
		  }
		}

		var allXBounds = [],
				allYBounds = [];
		for (var i = 0; i < bounds.length; i++) {
			allXBounds.push(bounds[i][0].x);
			allYBounds.push(bounds[i][0].y);

			allXBounds.push(bounds[i][1].x);
			allYBounds.push(bounds[i][1].y);
		};

		var boundMinX = Math.min.apply(Math, allXBounds);
		var boundMaxX = Math.max.apply(Math, allXBounds);
		var boundMinY = Math.min.apply(Math, allYBounds);
		var boundMaxY = Math.max.apply(Math, allYBounds);

		// set zoom value
		var zoomX = viewportWidth / (boundMaxX - boundMinX);
		var zoomY = viewportHeight / (boundMaxY - boundMinY);
		var zoom = Math.min(zoomX, zoomY);
		zoom = Math.max(Math.min(zoom, 5), 0.1);

		// no need to zoom for hair
		if (featureId == 34 || featureId == 9 || featureId == 11 || featureId == 24 ) {
			zoom = 1
		} else if (featureId == 25) {
			zoom = 1.5
		}

		// set scale value for canvas
		var scale = "scale(" + zoom + ")";
		console.log( "Viewport: " + viewportWidth + "*" + viewportHeight + " / " +  "TracedArea: " + (boundMaxX - boundMinX) + "*" + (boundMaxY - boundMinY) + " / " + "Scale: " + scale + " " + zoom );

		// set coordinates values for canvas
		var midX = boundMinX + (boundMaxX - boundMinX) / 2;
		var midY = boundMinY + (boundMaxY - boundMinY) / 2;

		var left = Math.round(-Alcon.Session.vmePhotoWidth / 2 * (1 - zoom) + ((midX + Alcon.Session.vmePhotoWidth / 2) * -1) * zoom + (viewportWidth / 2));
		var top = Math.round(-Alcon.Session.vmePhotoHeight / 2 * (1 - zoom) + ((midY + Alcon.Session.vmePhotoHeight / 2) * -1) * zoom + (viewportHeight / 2));

		this.jq.imageTrace.css({
			"-webkit-transform": scale,
			"-moz-transform": scale,
			"-o-transform": scale,
			"-ms-transform": scale,
			"transform": scale,
			"top": top,
			"left": left
		});

		$("#myCanvas").css({
			"-webkit-transform": scale,
			"-moz-transform": scale,
			"-o-transform": scale,
			"-ms-transform": scale,
			"transform": scale,
			"top": top,
			"left": left
		});


		// set and draw points for all traced shapes
		for (var i = 0; i < this.shapeArray.length; i++) {
		  if (this.shapeArray[i]){
		    tracedAreaId = this.shapeArray[i];
		    if (cmd === 'reset') {
				var points = new PointsGenerator(this.jq.imageTrace, Alcon.Config.oTracedCords[tracedAreaId], zoom, tracedAreaId);
			} else {
				var pnt = getPointsForTracedArea(tracedAreaId);
				var points = new PointsGenerator(this.jq.imageTrace, pnt, zoom, tracedAreaId);
				if (!Alcon.Config.oTracedCords.hasOwnProperty(tracedAreaId)) {
					Alcon.Config.oTracedCords[tracedAreaId] = pnt;
				}
			}
		  	this.pointCollectionArray[tracedAreaId] = points;
		  }
		}

		// increase dot size according to the zoom value
		$('div.marker').css({
			"transform": "scale(" + 1 / zoom + ")"
		});

		this.drawShapes(cmd);
	},

	clearEverything: function () {
		$(".pointtracing").remove();
		var canvas = document.getElementById('myCanvas');
		var context = canvas.getContext('2d');
		context.clearRect(0, 0, canvas.width, canvas.height);
		this.shapeArray = new Array();
	},

	enable: function() {
		$(window).on('resize', {self: this}, this.resize);
	},

	destroy: function() {
		$(window).off('resize', this.resize)
	},

	clearFeature: function (featureIndex) {
		//how to remove just these points
		//$(".pointtracing").remove();

		// for (var i = 0; i < this.pointCollectionArray[tracedAreaId].length; i++) {
		$("." + featureIndex).remove();
		this.shapeArray[featureIndex] = null;
		this.drawShapes();
		//}
	},

	next: function () {
		tracedAreaId = tracedAreaId + 1;
		this.setState(tracedAreaId);
	},

	reset: function (featureId, tracedAreas) {
		this.setState(featureId, 0, 0, tracedAreas, 'reset');
	},

	back: function () {
		tracedAreaId = tracedAreaId - 1;
		this.setState(tracedAreaId);
	}

	//	removeAllClasses: function () {
	//		for (var i = 0; i < this.stylePhotoArray.length; i++) {
	//			var style = this.stylePhotoArray[i];
	//			this.jq.imageTrace.removeClass(style);
	//		}
	//	}
});
