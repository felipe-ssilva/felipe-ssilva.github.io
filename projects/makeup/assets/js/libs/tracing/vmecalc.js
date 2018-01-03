function pointToAbsoluteTracing( point, tracedArea )
{
	var p = new Object();
	
	// scale
	p.x = point.x * tracedArea.scaleX;
	p.y = point.y * tracedArea.scaleY;
	
	// rotate
	var angleRadians = tracedArea.rotation * ( Math.PI / 180 );
	var sinVal = Math.sin( angleRadians );
	var cosVal = Math.cos(angleRadians);
	
    var px = p.x;
	p.x = p.x * cosVal - p.y * sinVal;
	p.y = p.y * cosVal + px * sinVal;

	// move			
	p.x += tracedArea.location.x;
	p.y += tracedArea.location.y;
	
	// copy z/a properties
	p.z = point.z;
	p.a = point.a;
	
	return p;
}

/*
function pointFromAbsoluteTracing(point, tracedArea)
{
	var p = new Object();
	
	// move			
	p.x = point.x - tracedArea.location.x;
	p.y = point.y - tracedArea.location.y;
	
	// rotate
	var angleRadians = -tracedArea.rotation * ( Math.PI / 180 );
	var sinVal = Math.sin( angleRadians );
	var cosVal = Math.cos( angleRadians );
	p.x = p.x * cosVal - p.y * sinVal;
	p.y = p.y * cosVal + p.x * sinVal;
	
	// scale
	p.x /= tracedArea.scaleX;
	p.y /= tracedArea.scaleY;
	
	return p;
}
*/

function stringToTracedArea( s )
{
	var tracedArea = new Object();
	var arr = s.replace(/},/g,"").split( "{" );
	var arr1 = arr[ 0 ].split( "," );
	tracedArea.id = parseInt( arr1[ 0 ] ); // this is not part of the Flash object
	tracedArea.status = parseInt( arr1[ 1 ] );
	tracedArea.location = new Object();
	tracedArea.location.x = parseFloat( arr1[ 2 ] );
	tracedArea.location.y = parseFloat( arr1[ 3 ] );
	tracedArea.rotation = parseFloat( arr1[ 4 ] );
	tracedArea.scaleX = parseFloat( arr1[ 5 ] );
	tracedArea.scaleY = parseFloat( arr1[ 6 ] );
	tracedArea.indexLeft = parseInt( arr1[ 7 ] );
	tracedArea.indexRight = parseInt( arr1[ 8 ] );
	
	var points = new Array();
	var arrP = (typeof arr[1]==='undefined') ? [] : arr[ 1 ].split( "," );
	var arrZ = (typeof arr[2]==='undefined') ? [] : arr[ 2 ].split( "," );
	var arrA = (typeof arr[3]==='undefined') ? [] : arr[ 3 ].split( "," );
	for( var i = 0; i < arrZ.length; i++ )
	{
		var point = new Object();
		point.x = parseFloat( arrP[ i * 2 ] );
		point.y = parseFloat( arrP[ i * 2 + 1 ] );
		point.z = parseFloat( arrZ [ i ] );
		point.a = parseFloat( arrA [ i ] );
		points.push( point );
	}
	tracedArea.points = points;
	return tracedArea;
}

function tracedAreaToAbsoluteCoords( tracedArea )
{
	var points = new Array();
	for( var i = 0; i < tracedArea.points.length; i++ )
	{
		points.push( pointToAbsoluteTracing( tracedArea.points[ i ], tracedArea ) );
	}
	return points;
}

function absoluteCoordsToTracedArea( points, id, indexLeft, indexRight )
{
	var tracedArea = new TracedAreaVO();
	tracedArea.id = id;
	tracedArea.status = 1; // 1 = traced
	tracedArea.location = new Object();
	tracedArea.location.x = points[ indexLeft ].x + ( points[ indexRight ].x - points[ indexLeft ].x ) / 100 * 50;
	tracedArea.location.y = points[ indexLeft ].y + ( points[ indexRight ].y - points[ indexLeft ].y ) / 100 * 50;
	
	var distX = points[ indexLeft ].x - points[ indexRight ].x;
	var distY = points[ indexLeft ].y - points[ indexRight ].y;
	var radians = Math.atan( -1 * distY / distX );
	var rotation = -radians * ( 180 / Math.PI );
	if ( points[ indexLeft ].x >= points[ indexRight ].x )
	{
		rotation += 180;
	}
	tracedArea.rotation = rotation;
	
	var length = Math.sqrt( distX * distX + distY * distY );
	var absLength = 100;
	switch( id )
	{
		case 1 : //TracedArea.TRACEDAREA_EYE_LEFT
		case 2 : //TracedArea.TRACEDAREA_EYE_RIGHT
			absLength = 70;
			break;
		case 3 : //TracedArea.TRACEDAREA_LIPS
			absLength = 120;
			break;
		case 6 : //TracedArea.TRACEDAREA_EYEBROW_LEFT
		case 7 : //TracedArea.TRACEDAREA_EYEBROW_RIGHT
			length = 105;
			break;
	}
	tracedArea.scaleX = length / absLength;
	tracedArea.scaleY = length / absLength;
	tracedArea.indexLeft = indexLeft;
	tracedArea.indexRight = indexRight;
	
	tracedArea.points = new Array();
	for( var i = 0; i < points.length; i++ )
	{
	    //var point = pointFromAbsoluteTracing(points[i], tracedArea);
	    var point = TracingUtils.pointToRelative( points[i], tracedArea );
		if( ( i == indexLeft ) || ( i == indexRight ) )
		{
			point.z = 0.1;
			point.a = 0.9;
		}
		else
		{
			point.z = 0.5;
			point.a = 0.5;
		}
		tracedArea.points.push( point );
	}
	return tracedArea;
}

/*
function roundTo2( n )
{
	return Math.round( n * 10000 ) / 10000;
}
*/

function tracedAreaToString( tracedArea )
{
	var s = "";
	s += tracedArea.id + ",";
	s += tracedArea.status + ",";
	s += MathUtils.roundTo( tracedArea.location.x, 4 ) + ",";
	s += MathUtils.roundTo( tracedArea.location.y, 4 ) + ",";
	s += MathUtils.roundTo( tracedArea.rotation, 4 ) + ",";
	s += MathUtils.roundTo( tracedArea.scaleX, 4 ) + ",";
	s += MathUtils.roundTo( tracedArea.scaleY, 4 ) + ",";
	s += tracedArea.indexLeft + ",";
	s += tracedArea.indexRight + ",";
	
	var sP = "";
	var sZ = "";
	var sA = "";
	for( var i = 0; i < tracedArea.points.length; i++ )
	{
		sP += MathUtils.roundTo( tracedArea.points[ i ].x, 4 ) + "," + MathUtils.roundTo( tracedArea.points[ i ].y, 4 ) + ",";
		sZ += tracedArea.points[ i ].z + ",";
		sA += tracedArea.points[ i ].a + ",";
	}
	s += "{" + sP.substr(0,sP.length-1) + "},";
	s += "{" + sZ.substr(0,sZ.length-1) + "},";
	s += "{" + sA.substr(0,sA.length-1) + "},";
	return s;
}

function pointsToBitmapCoords( points, bitmapWidth, bitmapHeight )
{
	var newPoints = new Array();
	for( var i = 0; i < points.length; i++ )
	{
		var p = new Object();
		p.x = points[ i ].x + bitmapWidth / 2;
		p.y = points[ i ].y + bitmapHeight / 2;
		p.z = points[ i ].z;
		p.a = points[ i ].a;
		newPoints.push( p );
	}
	return newPoints;
}

/*
function pointsFromBitmapCoords( points, bitmapWidth, bitmapHeight )
{
	var newPoints = new Array();
	for( var i = 0; i < points.length; i++ )
	{
		var p = new Object();
		p.x = points[ i ].x - bitmapWidth / 2;
		p.y = points[ i ].y - bitmapHeight / 2;
		newPoints.push( p );
	}
	return newPoints;
}
*/
 
// returns a TracedAreaVO object
function getTracedArea( tracedArea )
{
    return stringToTracedArea(Alcon.Vme.vmeHtml5.getPhotoTrace(tracedArea, false));
}

// convenience function that wraps all of the above
function getPointsForTracedArea( tracedArea )
{
	var tracedAreaVO = getTracedArea( tracedArea );
	var points;
	if( TracingUtils.doesTracedAreaHavePoints( tracedArea ) )
	{
		points = pointsToBitmapCoords( tracedAreaToAbsoluteCoords( tracedAreaVO ), Alcon.Session.vmePhotoWidth, Alcon.Session.vmePhotoHeight );
	}
	else
	{
		points = pointsToBitmapCoords( [ TracingUtils.pointToAbsolute( new Point( 0, 0 ), tracedArea ) ], Alcon.Session.vmePhotoWidth, Alcon.Session.vmePhotoHeight );
	}
	//var indexLeft = tracedArea.indexLeft;
	//var indexRight = tracedArea.indexRight;
	return points;
}

// convenience function that sets points
// assumes no new points have been added or removed
function setPointsForTracedArea( tracedArea, points )
{
	//points = pointsFromBitmapCoords( points, Alcon.Session.vmePhotoWidth, Alcon.Session.vmePhotoHeight );
	points = TracingUtils.pointsFromBitmapScale( points );
	var tracedAreaVO = getTracedArea( tracedArea );
	tracedAreaVO = absoluteCoordsToTracedArea(points, tracedArea, tracedAreaVO.indexLeft, tracedAreaVO.indexRight);
	//console.log('tracedArea: ' + tracedArea + ',' + 'tracedAreaVO.indexLeft: ' + tracedAreaVO.indexLeft + "," + "tracedAreaVO.indexRight" + tracedAreaVO.indexRight);
	var s = tracedAreaToString(tracedAreaVO);
	Alcon.Vme.vmeHtml5.setPhotoTrace(s);
}

// sets the location only
function setLocationForTracedArea( tracedArea, point )
{
	var tracedAreaVO = getTracedArea( tracedArea );
	//console.log( tracedAreaVO );
	tracedAreaVO.status = 1; // status = traced
	tracedAreaVO.location.x = point.x - Alcon.Session.vmePhotoWidth / 2; // convert from bitmap coords to absolute coords
	tracedAreaVO.location.y = point.y - Alcon.Session.vmePhotoHeight / 2;
	//console.log( tracedAreaVO );
	var s = tracedAreaToString(tracedAreaVO);
	Alcon.Vme.vmeHtml5.setPhotoTrace(s);
}

function getBoundsForTracedArea_Internal( tracedArea )
{
	
	if( TracingUtils.doesTracedAreaHavePoints( tracedArea ) )
	{
		var points = Alcon.Vme.vmeHtml5.getTracedAreaPoints(tracedArea);
    	var bounds = Alcon.Vme.vmeHtml5.getBoundingBox(points);
    	bounds = Alcon.Vme.vmeHtml5.extendBoundingBox(bounds, 25); // extend by 25%	
	}
    else
    {
    	// return a 50x50 area as the boundary
    	var pointTL = TracingUtils.pointToAbsolute( new Point(-25,-25), tracedArea );
    	var pointBR = TracingUtils.pointToAbsolute( new Point(25,25), tracedArea );
    	bounds = [ pointTL, pointBR ];
    }
    //console.log( "bounds for tracedArea: " + tracedArea + " " + bounds );
	return bounds;
}