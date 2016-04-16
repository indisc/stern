
/* hochhaus */
$(document).ready(function(){
	$("#big-img-hochhaus img").click(function(){
		var quelle 	= $(this).find(".pic-description").attr("src");
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

$(document).ready(function(){
	$("figure, img").click(function(){
		var quelle 	= $(this).find("section picture").attr("src");
		$("figure #pic-hochhaus").attr({"src":quelle});
	});

});
