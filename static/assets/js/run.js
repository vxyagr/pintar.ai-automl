var numb = 0;
$("#float-run").click(function(){
	
	functionCall(numb);
  	
});

var input_col = [];
$( document ).ready(function() {
    $(".function-call").each(function(){
	var cellId = $(this).text();
	input_col.push(cellId);	
	});
});



function functionCall(param){
	try{
		var intervalId ;
		var catch_param;
		// console.log("number :",param);
		// console.log("masuk length:",input_col.length);
		var cellId = input_col[param]

		var params = cellId.split(",");
		var fnName = params[0];
		if(params.length === 3){
			window[fnName](params[1],params[2]);
		}else{
			window[fnName](params[1]);
		}

		intervalId = setInterval(function () {
	        // console.log("catch_param :,",catch_param);
	        if(params.length === 3){
				catch_param = $('#'+params[1]).children('.output-card').find('.output-card__inner').html();
			}else{
				catch_param = $('#'+params[1]).children('.output-card').find('.error-ouput').html();	
			}

	        if (catch_param !== "running . . .") {
	            clearInterval(intervalId);
	            numb = numb + 1;
	            var time;
	            if(input_col.length === numb){
	            	time = 1000;
	            }else{
	            	// time = 10000;
	            	time = 5000;
	            }
	            setTimeout(function() {
	            	functionCall(numb);
	            }, time);
	            // console.log("if");
	            
	        }
	        // else{
	        // 	console.log("else");
	        // }
	    }, 500);
	}catch(e){
		alert("Successfully process run all.");
		$('.loading-process-page').removeClass('loading-show');
	}	
}