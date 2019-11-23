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

$(document).ready(function(){
	
});








