$(document).ready(function() {
	$('input').keypress(function(e){
		if (e.which === 13) {
			var input = $('input').val();
			if (input.toLowerCase() === "help") {
				console.log('Help!');
				help();
			}
			else if (input.toLowerCase() === "close") {
				console.log('Close!');
				close();
			}
			else if (input.split(':')[0] === 'nick'){
				var name = input.split(':')[1];
				query(name);
			}
		}
	});

	var help = function(){
		$('.container').fadeIn(500);
	}

	var close = function(){
		$('.container').fadeOut(500);
	}
	var click = function(){
		$('.help li').click(function(){
			var prefix = $(this).text().split(':');
			prefix = prefix.toLowerCase();
			console.log($(this).text().split(':'));
			switch (prefix) {
				case "nick":

			}
		});
	}
	click();

	var query = function(input){
		var start = new Date().getTime();
		var end, elapsed;
		$.ajax({
			url: 'getuser?u='+input
		}).done(function(result){
			if(result.error) {
				console.log("ERROR on "+result);
			}
			else {
				end = new Date().getTime();
				elapsed = (end-start);
				console.log(elapsed+"ms");

				$('.top-list>h1').text('');
				$('.top-list>h1').text(input.split(':')[1]+"'s Top Ten");
				$('.top-list > ol > li').remove();
				console.log("Result: ",result.t);
				for(i=0;i<4;i++){
					var times = ""
					if (result.t[i][1] > 1){
						times = " times"
					}
					else {
						times = " time"
					}
					$('.top-list > ol').append('<li>'+result.t[i][0]+' : '+result.t[i][1]+times+'</li>');
				}
			}
		});
	}

});