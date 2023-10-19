(function(){

  var sliderUL = $('div.slider').children('ul'),
  	screens = sliderUL.find('li'),
		screenWidth = screens.width(), 
		screenLength = screens.length, 
		current = 1,
		totalScreenWidth = screenLength * screenWidth;

	var h1 = $('div.header').children('h1');

	$('#screen-nav').find('button').on('click', function() {
		var direction = $(this).data('dir'),
			loc = screenWidth;

		(direction === 'next') ? ++current : --current;

		if(current === 0) {
			current = screenLength;
			loc = totalScreenWidth - screenWidth;
			direction = 'next';
		} else if (current - 1 === screenLength) { 
			current = 1;
			loc = 0;
		}

		transition(sliderUL, loc, direction);

	});

	function transition(container, loc, direction) {
		var unit; 

		if(direction && loc !== 0) {
			unit = (direction === 'next') ? '-=' : '+=';
		}

		container.animate({
			'margin-left': unit ? (unit + loc) : loc 
		});
	};
	


	  $.each(gameData, function (key, value) {
		console.log("key", key);

	
		 if ( key < 11){
	
		$("#firstScreen").append(
		  `<div class="  ${value.divStyle} ">
			<h2 class="title">${value.devName}</h2>
				<p class=" ${ value.divSize }">${value.gameName}</p>
			<a href="${value.gmaeLink}" target ="_blank" class ="btn btn-success" >Play</a>
			<a href="${value.reopLInk}" target = "_blank" class="link">See the Code</a>
			</div>
					`
		);}
		else{
			$("#secondScreen").append(
				`<div class="  ${value.divStyle} ">
				  <h2 class="title">${value.devName}</h2>
					  <p class=" ${ value.divSize }">${value.gameName}</p>
				  <a href="${value.gmaeLink}" target ="_blank" class ="btn btn-success" >Play</a>
				  <a href="${value.reopLink}" target = "_blank" class="link">See the Code</a>
				  </div>
						  `			
	  );}
	  });
	  

})();