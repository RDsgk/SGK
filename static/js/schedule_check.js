$(document).ready(function(){
   $.post(window.location.href, function(data){
        console.log(data);
        json_obj = JSON.parse(data);
        console.log(json_obj);
	console.log(json_obj.length);
        console.log(json_obj[0]);
        if(json_obj[0].status == 'complete'| json_obj[0].status == 'active'){
	    $('tspan:first').parent().prev().attr("fill","#1BB635");
	    $('tspan:first').parent().prev().attr("stroke","#1BB635");
	    if($('tspan:first').parent().prev().data()==null){
                 $('tspan:first').parent().parent().parent().parent().prev().children().children().children().attr("fill","#1BB635");
                 $('tspan:first').parent().parent().parent().parent().prev().children().children().children().attr("stroke","#1BB635");
            }
        }else{
	    $('tspan:first').parent().prev().attr("fill","#1BB635");
            $('tspan:first').parent().prev().attr("stroke","#000000");
            if($('tspan:first').parent().prev().data()==null){
                 $('tspan:first').parent().parent().parent().parent().prev().children().children().children().attr("fill","#1BB635");
                 $('tspan:first').parent().parent().parent().parent().prev().children().children().children().attr("stroke","#000000");
            }
	}
	for(i=0;i<json_obj.length;i++){
	    var current = json_obj[i];
	    console.log(current);
	    console.log(current.activity);
	    $('tspan').each(function(){
	   	if($(this).text() == current.activity){
		   // $(this).parent().prev().attr("stroke","#ff7575");
		   // if($(this).parent().prev().data()==null){
		//	$(this).parent().parent().parent().parent().prev().children().children().children().attr("stroke","#ff7575");
		  //  }
		    if(current.status=='active'){
			$(this).parent().prev().attr("fill","#1BB635");
			$(this).parent().prev().attr("stroke","#000000");
			 if($(this).parent().prev().data()==null){
				 $(this).parent().parent().parent().parent().prev().children().children().children().attr("fill","#1BB635");
				 $(this).parent().parent().parent().parent().prev().children().children().children().attr("stroke","#000000");
				}
			}else if(current.status=='complete'){
				$(this).parent().prev().attr("fill","#1BB635");
				$(this).parent().prev().attr("stroke","#1BB635");
			 	if($(this).parent().prev().data()==null){
				 $(this).parent().parent().parent().parent().prev().children().children().children().attr("fill","#1BB635");
				 $(this).parent().parent().parent().parent().prev().children().children().children().attr("stroke","#1BB635");
				}
			}else if(current.status=='line') {
				$(this).parent().prev().attr("stroke","#1BB635");
			 if($(this).parent().prev().data()==null){
				 $(this).parent().parent().parent().parent().prev().children().children().children().attr("stroke","#1BB635");
				}
				}
		}
	    })
	}
   });
});



