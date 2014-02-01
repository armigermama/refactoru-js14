$(function(){


//	Data/////////

	var getCoordinates = function (e) {
		var evt = e ? e:window.event;
		var clickX = 0;
		var clickY = 0;
		if ((evt.clientX || evt.clientY) && document.body &&
	    document.body.scrollLeft!=null) {
			clickX = evt.clientX + document.body.scrollLeft;
			clickY = evt.clientY + document.body.scrollTop;
			}
		if ((evt.clientX || evt.clientY) &&
	    document.compatMode=='CSS1Compat' && 
	    document.documentElement && 
	    document.documentElement.scrollLeft!=null) {
			clickX = evt.clientX + document.documentElement.scrollLeft;
			clickY = evt.clientY + document.documentElement.scrollTop;
			}
		if (evt.pageX || evt.pageY) {
			clickX = evt.pageX;
			clickY = evt.pageY;
		}
		// alert (evt.type.toUpperCase() + ' mouse event:'
		// 	+'\n pageX = ' + clickX
		// 	+'\n pageY = ' + clickY 
		// 	+'\n clientX = ' + evt.clientX
		// 	+'\n clientY = '  + evt.clientY 
		// 	+'\n screenX = ' + evt.screenX 
		// 	+'\n screenY = ' + evt.screenY
		// )
		return {x: clickX, y: clickY};
	};


//	DOM manipulation/////////////////

	//Rendering Drop Pin
	var createDropPin = function(x,y) {
		var offset = $('#container').offset();
		console.log(offset);
		console.log('insidecreateDropPinfunction');
		var divEl = $('<div class="drop-pin"><img src="images/Gold-ingot.png"></div>');
		divEl.css({top: y - offset.top - 15, left: x - offset.left - 15});
		$('#container').append(divEl);
		if (confirm'Would you like to enter a note for this gold dig pin?')){
			createDataForm();
		}
	};

	//Rendering Note form When Drop Pin Confirm === true
	var createDataForm = function(){
		var blackOverlayEl = $('<div id="black-overlay"></div>');
		var lightboxContentEl =	$('<div id="lightbox-content"></div>');
		var textareaEl = $('<textarea cols="4" rows="50" data-pin-id="" placeholder="secrets about this gold dig goes here..."autofocus>');
		var closeButtonEl= $('<div><a class="button close-lightbox">Close</a></div>');
		$('#container').append(blackOverlayEl);
		$('#black-overlay').append(lightboxContentEl);
		$('#lightbox-content').append(textareaEl,closeButtonEl);
	};
	

//	Form Processing////////////////////


//	Events//////////////////////////
	

	//Click Event for Drop Pin
	$('#map-img').click(function(e){
		console.log('insideclickfunction');
		coord = getCoordinates(e);
		console.log(coord);
		createDropPin(coord.x, coord.y);
	});

	//Click Event to Remove Drop Pin
	$('#container').on('click','.drop-pin',function(){
		$(this).remove();
	});
















});