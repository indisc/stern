
// /* hochhaus */
$(document).ready(function(){
	$("picture img").click(function(){
		var quelle 	= $(this).find(".pic-description img").attr("src");
		$("#big-hochhaus").attr({"src":quelle});

	});
});



/* objekt hochaus-rochlitz*/

// $(document).ready(function(){
// 	$("figure picture img").click(function(){
// 		var quelle 	= $(this).attr("srcset");
// 		$("#pic-hochhaus").attr({"srcset":quelle});

// 	});
// });
