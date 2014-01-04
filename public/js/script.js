$(document).ready(function() {
	$('input').keypress(function(e){
		if (e.which === 13) {
			var input = $('input').val();
			if (input.toLowerCase() === "help"){
				console.log('Help!')
				help();
			}
			else if (input.split(':')[0] === 'nick'){
				console.log(input.split(':')[1])
				$.ajax({
					url: 'getuser?u='+input.split(':')[1]
				}).done(function(result){
					if(result.error) {
						console.log("ERROR on "+r);
					}
					else {
						console.log(r);
					}
				})
			}
		}
	})

	var help = function(){
		$('.help').fadeIn(500);
	}

});