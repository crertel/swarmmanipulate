/**
   SImplifies Canvas drawing operations.
   
   TODO: have drawRobot function.
   
    Extract the draw stuff from massive_manipulation.js into drawutils.js . Ideally we want to be able to call something as simple as drawutils.drawCircle( x, y, radius, color) instead of the current pile of canvas code. This is hugely useful.
   
*/

var drawutils = (function(){
    
    var context = null;
    var $canvas = null;

    var drawCircle = function (x,y,radius,color) {
	    context.strokeStyle = color; 
	    context.beginPath();
        context.arc(x,y,radius,0,2*Math.PI);
        context.stroke();
    };

    
   var drawRobot = function (x,y,theta,radius,colorFill,colorEdge) {
	    context.strokeStyle = colorEdge; 
        context.fillStyle = colorFill;
	    context.beginPath();
        context.arc(x,y,radius,0,2*Math.PI);
        context.fill();
        context.stroke();
    };

    var drawPolygon = function( x,y,radius,sides,rotate,color) {
        //default value for rotate if needed
        rotate = typeof rotate !== 'undefined' ? rotate : 0;
        $canvas.drawPolygon({
            fillStyle: color,
            x: x, y: y,
            radius: radius,
            sides: sides,
            rotate: rotate
        });
    };

    var drawRect = function (x,y,w,h,color,angle) {
	//default value for angle if needed
	angle = typeof angle !== 'undefined' ? angle : 0;
        $canvas.drawRect({
            fillStyle:color,
            x: x, y: y,
            width: w, height: h, cornerRadius: 0, rotate: angle
        });
    };

    var drawEmptyRect = function (x,y,w,h,color) {
	//default value for angle if needed
	angle = typeof angle !== 'undefined' ? angle : 0;
        $canvas.drawRect({
            strokeStyle:color,
            x: x, y: y,
            width: w, height: h, cornerRadius: 0, rotate: angle
        });
    };



    var init = function () {
        context = $("#canvas")[0].getContext('2d');
        $canvas = $("#canvas");
    };

    var clearCanvas = function() {
        $canvas.clearCanvas();
    };
    
    return { drawCircle : drawCircle,
             drawPolygon : drawPolygon,
             drawRect : drawRect,
             drawEmptyRect : drawEmptyRect,
             drawRobot: drawRobot,
             clearCanvas : clearCanvas,
             init : init
    };
})();
