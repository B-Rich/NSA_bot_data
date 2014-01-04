$(document).ready(function() {
	$('input').keypress(function(e){
		if (e.which === 13) {
			var input = $('input').val();
			if (input.toLowerCase() === "help"){
				help();
			}
			$.ajax({
				url: 'getuser?u='+input
			}).done(function(result){
				if(result.error) {
					console.log("ERROR on "+r);
				}
				else {
					console.log(r);
				}
			})
		}
	})

	var help = function(){
		$('.help').fadeIn(500);
	}

});