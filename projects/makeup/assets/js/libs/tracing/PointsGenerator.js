var PointsGenerator = Class.extend({
    init: function (scope, data, zoom, traceFeature) {
        
        this.data = data;
        this.jq = {};
        this.jq.scope = scope;
        this.jq.$html = $("html");
        this.jq.zoom = zoom;
        this.traceFeature = traceFeature;

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            this.touch = true;
        }
        else {
            this.touch = false;
        }

        var self = this;

        this.jq.scope.bind("click", function (event) {
            //console.log(event);
        });

        this.pointsDataArray = this.data;
        this.pointsArray = [];
        this.makePoints(this.pointsDataArray);
    },
    
    hasChanged: function() {
    	var changed = false;
    	for (var i = 0; i < this.pointsArray.length; i++) {
    		changed = changed || this.pointsArray[i].changed;
    	}
    	return changed;
    },

    getCoords: function () {
        var points = new Array();
        var s = "";
        for (var i = 0; i < this.pointsArray.length; i++) {
           
            var point = this.pointsArray[i];
            var x = 3 + parseFloat(point.$currentDiv.css("left").replace("px", ""));
            var y = 3 + parseFloat(point.$currentDiv.css("top").replace("px", ""));
            s += x + ',' + y + " -- ";
            points.push({ x: x, y: y, z: point.data.z, a: point.data.a });
        }
        console.log( s );
        return points;
    },

    testFunction: function () {
        for (var i = 0; i < this.pointsArray.length; i++) {
            var point = this.pointsArray[i];
            point.reset();
        }
    },

    makePoints: function (array) {
        var self = this;
       
        var htmlString = "";
        for (var i = 0; i < array.length; i++) {
            var point = new PointTrace(this.jq.scope, array[i], this.jq.zoom, this.traceFeature);
            this.pointsArray.push(point);
        }

        /*
        if (this.touch === false) {
         
        }
        else {
          
        }
        */
    },
    /*
    start: function (e) {
      
        var orig = e.originalEvent;
        var pos = $(e.currentTarget).position();
        offset = {
            x: (orig.changedTouches[0].pageX - pos.left) / zoom,
            y: (orig.changedTouches[0].pageY - pos.top) / zoom
        };
    },

    moveMe: function (e) {

        e.preventDefault();
        var orig = e.originalEvent;
        $(this).css({
            top: (orig.changedTouches[0].pageY - offset.y) / zoom,
            left: (orig.changedTouches[0].pageX - offset.x) / zoom
        });
    }
    */

});
