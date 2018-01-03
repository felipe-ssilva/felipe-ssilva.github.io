var PointTrace = Class.extend({
    init: function (scope, data, zoom, traceFeature) {
        var self = this;

        this.jq = {};
        this.scope = scope;
        this.data = data;
        this.zoom = zoom;

        this.$currentDiv = $("<div class='pointtracing " + traceFeature +"'><div class='marker'></div></div>");
        this.scope.append(this.$currentDiv);
        //this.$currentDiv.addClass(traceFeature);

        this.jq.$html = $("html");
        var pointerX;
        var pointerY;

        this.$currentDiv.draggable({

            containment: ".mask",
            start: function (evt, ui) {
                pointerY = (evt.pageY - $('.imageTrace').offset().top) / zoom - parseInt($(evt.target).css('top'));
                pointerX = (evt.pageX - $('.imageTrace').offset().left) / zoom - parseInt($(evt.target).css('left'));
                console.log('dragstart');
            },
            drag: function (evt, ui) {
                var canvasTop = $('.imageTrace').offset().top;
                var canvasLeft = $('.imageTrace').offset().left;
                var canvasHeight = $('.imageTrace').height();
                var canvasWidth = $('.imageTrace').width();

                // Fix for zoom
                ui.position.top = Math.round((evt.pageY - canvasTop) / zoom - pointerY);
                ui.position.left = Math.round((evt.pageX - canvasLeft) / zoom - pointerX);

                // Check if element is outside canvas
                if (ui.position.left < 0) ui.position.left = 0;
                if (ui.position.left + $(this).width() > canvasWidth) ui.position.left = canvasWidth - $(this).width();
                if (ui.position.top < 0) ui.position.top = 0;
                if (ui.position.top + $(this).height() > canvasHeight) ui.position.top = canvasHeight - $(this).height();

                // Finally, make sure offset aligns with position
                ui.offset.top = Math.round(ui.position.top + canvasTop);
                ui.offset.left = Math.round(ui.position.left + canvasLeft);
                console.log('dragend');
                self.changed = true;
            }

        });

        this.$currentDiv.on("dragstop", function (event, ui) {
            console.log('dragstop');
            faceMappingApp.drawShapes();
        });

        this.isDown = false;
        this.changed = false;

        if (Alcon.Config.bMobile || Alcon.Config.bIsTablet) {
            var xNew = this.data.x - 6;
            var yNew = this.data.y - 6;
        } else {
            var xNew = this.data.x - 4;
            var yNew = this.data.y - 4;
        }

        this.$currentDiv.css({ "left": xNew, "top": yNew });
    },

    reset: function () {

        if (Alcon.Config.bMobile || Alcon.Config.bIsTablet) {
            var xNew = this.data.x - 6;
            var yNew = this.data.y - 6;
        } else {
            var xNew = this.data.x - 4;
            var yNew = this.data.y - 4;
        }

        this.$currentDiv.css({"left":xNew, "top":yNew});
        this.changed = true;
        faceMappingApp.drawShapes();
    }
});
