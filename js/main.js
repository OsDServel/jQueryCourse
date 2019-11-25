// console.log('Hello World!');

// $(document).ready(function(){
// 	console.log('We are ready');
// 	console.log(document);
// 	console.log($(document));
// });

// $(document).ready(function(){
// 	$('body').text('Hello World');
// });

// $(document).ready(function(){
// 	$('body').text('<strong>Hello World</strong>');
// }); //this one using 'text' as a function does not read, the '<strong></>' tags that ask the text to be written in BOLD letters.
// //hence, we use, "html.()" instead
// $(document).ready(function(){
// 	$('body').html('<strong>Hello World</strong>');
// });

// $(document).ready(function(){
// 	$('#fire').addClass('highlight');
// });

// $(document).ready(function(){  
// 	$('.solid').addClass('highlight');  //then add class of highlight, to any element with class of 'solid' in document.
// });  //NOTE: you may also add two different selectors, by seperating them with a comma. i.e...

// $(document).ready(function(){
// 	$('.non-solid, .solid').addClass('highlight');
// }); //however, both selected attributes most be contained within the quotation marks.


// $(document).ready(function(){
// 	$('#container >>> .non-solid').addClass('highlight');
// });





















//ONE SELECTOR

// $(document).ready(function(){
// 	$('#container input:required').addClass('highlight');
// });


//SECOND SELECTOR
// $(document).ready(function(){
// 	$('#container input[placeholder="E-mail"]').addClass('highlight');
// });

//NOTE: i dont have to put in the "" after "placeholder=", but if i dont, it doesnt read spaces in between words, therefore its much easier to just add the quotation marks out of habit


//THIRD SELECTOR
// $(document).ready(function(){
// 	$('#container input[placeholder*="Name"]').addClass('highlight');
// });

//if you add an * before the = it will grab any element with a placeholder of "Name".



// $(document).ready(function(){
// 	$('#container')
// 		.find('.hot')
// 		.children()
// 		.last()
// 		.prev()
// 		// .first()
// 		// .next()
// 		.addClass('highlight');
// })

// you can you use, ".first(), .next(), .last(), prev()""



// $(document).ready(function(){
// 	$('#snow')
// 		.parent()
// 		.find('.title')
// 		.addClass('highlight');


// 	console.log($('#snow').closest('.temperature'));
// })









































///////////////////////
// CHANGE EVENT SECTION
//////////////////////

// $('.box').click(function(){
// 	$('.box').css('background-color: red;')
// })

// $(document).ready(function(){
// 	$('.box').on('click', function(){
// 		// console.log('Hello.')   //checking to make sure the box works
// 		// $('.box').addClass('highlight');   //addClass of highlight on click
// 		$('.box').toggleClass('highlight');
// 	})
// })


// $(document).ready(function(){
// 	$('.box').on('click', '.box-button', function(){
// 		$(this).parent().toggleClass('highlight')
// 	} )
// })


// $(document).ready(function(){
// 	$('#select-menu').on('change', function(){
// 		// console.log('Hello');  //funtional
// 		console.log($('#select-menu option:selected').val()); //console log value of selected input
// 	})
// })

// $(document).ready(function(){
// 	$('#select-menu').on('change', function(){
// 		let name= $('#select-menu option:selected').text();
// 		let distance= $('#select-menu option:selected').val();
// 		let price= $('#select-menu option:selected').data('price');

// 		// console.log(price);

// 		if(distance){
// 			$('#feedback-message').text('You are signing up for a '+ name+ ', which costs $' +price +', to a distance of '+ distance+ ' km.');
// 		//IF the selection has distance pass this string above
// 		} else{
// 			$('#feedback-message').text('');
// 		// Else, pass an empty string, therefore clearing the screen of text
// 			// $('#feedback-message').empty();
// 		//OR you can use the 'empty()' function
// 		}
// 	})
// })
//NOTE: when writing variables, make sure you add a method to return or display a value. i.e 'console.log'

















// ///////////
//KEY DOWN VS KEY UP/
////////////////////

// $(document).ready(function(){
// 	$('#input-name').on('keyup', function(){
// 		// console.log('Press!');
// 		let name= $(this).val();
// 		$('#feedback-message').text('Pleased to meet you, ' + name);
// 		// if(name.text= 'alberto'){
// 		// 	name= "lil' bitch!";
// 		// }
// 	});

// 	$('a').on('click', function(event){
// 		event.preventDefault(); //prevents anchor tag from event, instead adds a text to be written instead
// 		$('#feedback-message').text('That\'s fine!');

// 	});
// });





///////////////
//SETTING UP STORE ITEMS
////////////////////
// CREATING ITEMS DYNAMICALLY
/////////////////////
//REMOVING ELEMENTS
////////////////
//TOGGLE VISIBILITY
/////////////////
//FADE AND SLIDE
//////////////
//ANIMATE
///////////////
//AJAX
////////////
$(document).ready(function(){
	$('#button-create-item').on('click', function(){
		let name= $('#input-create-item').val();
		let html= '';

		html+= '<div class="item">';
		html+= '<div class="name">' +name + '</div>'
		html+= '<img id="myImg" src="img/beach.jpg">';

		html+= '<div class="description">Lorem ipsum dolor sit amet, consectur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>';
		html+= '<div class="price">499</div>';
		html+= '<button class="item-add">Add to cart</button>';
		html+= '<button class="item-remove">Remove</button><br>';

		html+= '<a class="more-info-link" href="#">More info</a>';
		html+= '<div class="more-info">Lorem ipsum dolor sit amet</div></div>';

		$('#container').prepend(html);
	});
//code to toggle more-info visibility
	$('#container').on('click', '.more-info-link', function(event){
		// $('.more-info').toggle(); // having this code makes it so that it appears, but it does not fegister for new items. however it does register for all boxes, when the original is clicked... but you cant click the new boxes to toggle visibility.
		event.preventDefault(); // by adding 'event.preventDefault()' it triggers the function in a way that it will not scroll back up the page everytime the link is clicked.

		$(this).parent().find('.more-info').slideToggle('slow');
		$(this).animate({"opacity": 0, "margin-left": 10}, 'fast')
	//"we need to pass an object, with the properties we want to change"
		$(this).animate({"opacity": 1.0, "margin-left": 0}, 'fast')

	})

	$('#container').on('click', '.item-remove', function(){
		$(this).parent().remove(); //so when we click, we want the elemenet to grab its 'Parent', which is 'dic' class of 'item', to remove itself.
	
	})
	$.ajax('data/item.json', function(response){
		console.log(response);
	});
});
//NOTE: you can add 'append', which will add items to the end of the list. Or use 'prepend' which will add items to the beggining of the list.

//NOTE: we can use 'empty()', instead of 'remove()', only problem with that is that instead of removing all traces of the HTML, is simply empties out the div, leaving an empty div in the process, which is not very pretty, and not what we want.

//NOTE: we added the event listener to ('#container'), even though we want to use '.item-remove', as the 'delegate'. Otherwise, '.item-remove' is not registered when the DOM is created, hence the next items created will have the class of '.item-remove', but not the funtionality of the button.

//NOTE: 1000 as a parameter in toggle(), results in the animation taking 1 second. Anything less is but a fraction of a second. You may also pass in a string of, 'fast', or 'slow', as a set speed for the animation

//NOTE: AGAIN, if you dont want to use TWO buttons to 'fadeIn()', or 'fadeOut()', like 'hide()' or 'show()', you can use 'fadeToggle()', which works as needed.


//NOTE: jQuery methods

//show()
//hide()
//toggle()

//fadeIn()
//fadeOut()
//fadeToggle()

//slideIn()
//slideOut()
//slideToggle()