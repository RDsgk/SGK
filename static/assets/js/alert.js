// JavaScript Document by DK 
  function   process(v){   
  if(v=="createjob"){   
  document.theForm.action="/sf/create-job-list/";   
  }
  else if(v=="deletejob"){   
  document.theForm.action="/sf/delete-job/";   
  }   
  else if(v=="createtask"){   
  document.theForm.action="/sf/create-task-list/";   
  }   
  else if(v=="deletetask"){   
  document.theForm.action="/sf/delete-task/";   
  }   
  else if(v=="edittask"){   
  document.theForm.action="/sf/edit-task-list/";   
  }   
  else if(v=="displayresult"){   
  document.theForm.action="/sf/display-result/";   
  }
  else if(v=="start"){   
  document.theForm.action="/sf/task-manage-start/";   
  }   
  else if(v=="cancel"){   
  document.theForm.action="/sf/task-manage-cancel/";   
  }
  else if(v=="deletepu"){
  document.theForm.action="/custom/pu/template/delete-pu";
  }
  document.theForm.submit();   
  }   
  
function sAlert_jobdel(str){
	var msgw,msgh,bordercolor;
   msgw=400;//提示窗口的宽度
   msgh=150;//提示窗口的高度
   titleheight=25 //提示窗口标题高度
   bordercolor="#D3CFD0";//提示窗口的边框颜色
   titlecolor="#D3CFD0";//提示窗口的标题颜色
   
   var sWidth,sHeight;
   sWidth=document.body.offsetWidth;
   sHeight=document.body.offsetHeight;
   

   var bgObj=document.createElement("div");
   bgObj.setAttribute('id','bgDiv');
   bgObj.style.position="absolute";
   bgObj.style.top="0";
   bgObj.style.background="#777";
   bgObj.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75";
   bgObj.style.opacity="0.6";
   bgObj.style.left="0";
   bgObj.style.width=sWidth + "px";
   bgObj.style.height=sHeight + "px";
   bgObj.style.zIndex = "10000";
   
   
   var msgObj=document.createElement("div")
   msgObj.setAttribute("id","msgDiv");
   msgObj.setAttribute("align","center");
   msgObj.style.background="white";
   msgObj.style.border="5px solid " + bordercolor;
      msgObj.style.position = "absolute";
            msgObj.style.left = "50%";
            msgObj.style.top = "50%";
            msgObj.style.font="12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif";
            msgObj.style.marginLeft = "-225px" ;
            msgObj.style.marginTop = -75+document.documentElement.scrollTop+"px";
            msgObj.style.width = msgw + "px";
            msgObj.style.height =msgh + "px";
            msgObj.style.textAlign = "center";
            msgObj.style.lineHeight ="25px";
            msgObj.style.zIndex = "10001";
			
		var btn1 = document.createElement("input");
	btn1.setAttribute("id","btnMks");
	btn1.setAttribute("value","确定");
	btn1.setAttribute("type","button");
	btn1.setAttribute("width","150px");
	btn1.setAttribute("height","20px");
	btn1.style.paddingTop="3px";
	btn1.style.paddingBottom="3px";
	btn1.style.paddingLeft="8px";
	btn1.style.paddingRight="8px";
	btn1.style.marginTop="40px";
     btn1.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     btn1.style.opacity="0.75";
     btn1.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     btn1.style.cursor="pointer";
	 btn1.onclick=function(){
          document.body.removeChild(bgObj);
                document.getElementById("msgDiv").removeChild(title);
                document.body.removeChild(msgObj);
                }
	var btn2 = document.createElement("input");
	btn2.setAttribute("id","btnMks");
	btn2.setAttribute("value","确定");
	btn2.setAttribute("type","button");
	btn2.setAttribute("width","150px");
	btn2.setAttribute("height","20px");
	btn2.style.paddingTop="3px";
	btn2.style.paddingBottom="3px";
	btn2.style.paddingLeft="8px";
	btn2.style.paddingRight="8px";
	btn2.style.marginTop="40px";
     btn2.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     btn2.style.opacity="0.75";
     btn2.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     btn2.style.cursor="pointer";
	 btn2.onclick=function(){
           process('deletejob');
                }
	var btn3 = document.createElement("input");
	btn3.setAttribute("id","btnMks");
	btn3.setAttribute("value","取消");
	btn3.setAttribute("type","button");
	btn3.setAttribute("width","150px");
	btn3.setAttribute("height","20px");
	btn3.style.paddingTop="3px";
	btn3.style.paddingBottom="3px";
	btn3.style.paddingLeft="8px";
	btn3.style.paddingRight="8px";
	btn3.style.marginTop="40px";
	btn3.style.marginLeft="20px";
     btn3.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     btn3.style.opacity="0.75";
     btn3.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     btn3.style.cursor="pointer";
	 btn3.onclick=function(){
          document.body.removeChild(bgObj);
                document.getElementById("msgDiv").removeChild(title);
                document.body.removeChild(msgObj);
                }


     var title=document.createElement("h4");
     title.setAttribute("id","msgTitle");
     title.setAttribute("align","right");
     title.style.margin="0";
     title.style.padding="3px";
     title.style.background=bordercolor;
     title.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     title.style.opacity="0.75";
     title.style.border="1px solid " + bordercolor;
     title.style.height="18px";
     title.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     title.style.color="white";
     title.style.cursor="pointer";
     title.innerHTML="关闭";
     title.onclick=function(){
          document.body.removeChild(bgObj);
                document.getElementById("msgDiv").removeChild(title);
                document.body.removeChild(msgObj);
                }
var bool=false;
	for(i=0;i<document.getElementsByName("job_item").length;i++){
	if(document.getElementsByName("job_item").item(i).checked){
			bool=true;
       }}
	if(bool==false){
	document.body.appendChild(bgObj);
    document.body.appendChild(msgObj);
    document.getElementById("msgDiv").appendChild(title);
     var txt=document.createElement("p");
     txt.style.margin="1em 0"
     txt.setAttribute("id","msgTxt");
	 txt.style.color="#000"
	 txt.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif"
     txt.innerHTML=str;
     document.getElementById("msgDiv").appendChild(txt);
	 document.getElementById("msgDiv").appendChild(btn1);
	}else{
		document.body.appendChild(bgObj);
    	document.body.appendChild(msgObj);
    	document.getElementById("msgDiv").appendChild(title);
     	var txt=document.createElement("p");
     	txt.style.margin="1em 0"
     	txt.setAttribute("id","msgTxt");
	 	txt.style.color="#000"
	 	txt.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif"
     	txt.innerHTML="删除是不可恢复的，确定要删除？";
     	document.getElementById("msgDiv").appendChild(txt);
	 	document.getElementById("msgDiv").appendChild(btn2);
		document.getElementById("msgDiv").appendChild(btn3);
	
	}
}


/*--------------------------------------------------------华丽丽的分割线--------------------------------------------*/

function sAlert_task(str){
   var msgw,msgh,bordercolor;
   msgw=400;//提示窗口的宽度
   msgh=150;//提示窗口的高度
   titleheight=25 //提示窗口标题高度
   bordercolor="#D3CFD0";//提示窗口的边框颜色
   titlecolor="#D3CFD0";//提示窗口的标题颜色
   
   var sWidth,sHeight;
   sWidth=document.body.offsetWidth;
   sHeight=document.body.offsetHeight;

   var bgObj=document.createElement("div");
   bgObj.setAttribute('id','bgDiv');
   bgObj.style.position="absolute";
   bgObj.style.top="0";
   bgObj.style.background="#777";
   bgObj.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75";
   bgObj.style.opacity="0.6";
   bgObj.style.left="0";
   bgObj.style.width=sWidth + "px";
   bgObj.style.height=sHeight + "px";
   bgObj.style.zIndex = "10000";
   
   
   var msgObj=document.createElement("div")
   msgObj.setAttribute("id","msgDiv");
   msgObj.setAttribute("align","center");
   msgObj.style.background="white";
   msgObj.style.border="5px solid " + bordercolor;
      msgObj.style.position = "absolute";
            msgObj.style.left = "50%";
            msgObj.style.top = "50%";
            msgObj.style.font="12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif";
            msgObj.style.marginLeft = "-225px" ;
            msgObj.style.marginTop = -75+document.documentElement.scrollTop+"px";
            msgObj.style.width = msgw + "px";
            msgObj.style.height =msgh + "px";
            msgObj.style.textAlign = "center";
            msgObj.style.lineHeight ="25px";
            msgObj.style.zIndex = "10001";
			
		var btn1 = document.createElement("input");
	btn1.setAttribute("id","btnMks");
	btn1.setAttribute("value","确定");
	btn1.setAttribute("type","button");
	btn1.setAttribute("width","150px");
	btn1.setAttribute("height","20px");
	btn1.style.paddingTop="3px";
	btn1.style.paddingBottom="3px";
	btn1.style.paddingLeft="8px";
	btn1.style.paddingRight="8px";
	btn1.style.marginTop="40px";
     btn1.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     btn1.style.opacity="0.75";
     btn1.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     btn1.style.cursor="pointer";
	 btn1.onclick=function(){
          document.body.removeChild(bgObj);
                document.getElementById("msgDiv").removeChild(title);
                document.body.removeChild(msgObj);
                }

     var title=document.createElement("h4");
     title.setAttribute("id","msgTitle");
     title.setAttribute("align","right");
     title.style.margin="0";
     title.style.padding="3px";
     title.style.background=bordercolor;
     title.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     title.style.opacity="0.75";
     title.style.border="1px solid " + bordercolor;
     title.style.height="18px";
     title.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     title.style.color="white";
     title.style.cursor="pointer";
     title.innerHTML="关闭";
     title.onclick=function(){
          document.body.removeChild(bgObj);
                document.getElementById("msgDiv").removeChild(title);
                document.body.removeChild(msgObj);
                }
var bool=false;
	for(i=0;i<document.getElementsByName("job_item").length;i++){
	if(document.getElementsByName("job_item").item(i).checked){
			bool=true;
       }}
	 for(i=0;i<document.getElementsByName("conn_id").length;i++){
	if(document.getElementsByName("conn_id").item(i).checked){
			bool=true;
       }}
	if(bool==false){
	document.body.appendChild(bgObj);
    document.body.appendChild(msgObj);
    document.getElementById("msgDiv").appendChild(title);
     var txt=document.createElement("p");
     txt.style.margin="1em 0"
     txt.setAttribute("id","msgTxt");
	 txt.style.color="#000"
	 txt.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif"
     txt.innerHTML=str;
     document.getElementById("msgDiv").appendChild(txt);
	 document.getElementById("msgDiv").appendChild(btn1);
	}else{
		/*此处填写执行语句*/
		process('createtask');
	
	}
}
/*--------------------------------------------------------华丽丽的分割线--------------------------------------------*/
function sAlert_deltask(str){
   var msgw,msgh,bordercolor;
   msgw=400;//提示窗口的宽度
   msgh=150;//提示窗口的高度
   titleheight=25 //提示窗口标题高度
   bordercolor="#D3CFD0";//提示窗口的边框颜色
   titlecolor="#D3CFD0";//提示窗口的标题颜色
   
   var sWidth,sHeight;
   sWidth=document.body.offsetWidth;
   sHeight=document.body.offsetHeight;

   var bgObj=document.createElement("div");
   bgObj.setAttribute('id','bgDiv');
   bgObj.style.position="absolute";
   bgObj.style.top="0";
   bgObj.style.background="#777";
   bgObj.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75";
   bgObj.style.opacity="0.6";
   bgObj.style.left="0";
   bgObj.style.width=sWidth + "px";
   bgObj.style.height=sHeight + "px";
   bgObj.style.zIndex = "10000";
   
   
   var msgObj=document.createElement("div")
   msgObj.setAttribute("id","msgDiv");
   msgObj.setAttribute("align","center");
   msgObj.style.background="white";
   msgObj.style.border="5px solid " + bordercolor;
      msgObj.style.position = "absolute";
            msgObj.style.left = "50%";
            msgObj.style.top = "50%";
            msgObj.style.font="12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif";
            msgObj.style.marginLeft = "-225px" ;
            msgObj.style.marginTop = -75+document.documentElement.scrollTop+"px";
            msgObj.style.width = msgw + "px";
            msgObj.style.height =msgh + "px";
            msgObj.style.textAlign = "center";
            msgObj.style.lineHeight ="25px";
            msgObj.style.zIndex = "10001";
			
		var btn1 = document.createElement("input");
	btn1.setAttribute("id","btnMks");
	btn1.setAttribute("value","确定");
	btn1.setAttribute("type","button");
	btn1.setAttribute("width","150px");
	btn1.setAttribute("height","20px");
	btn1.style.paddingTop="3px";
	btn1.style.paddingBottom="3px";
	btn1.style.paddingLeft="8px";
	btn1.style.paddingRight="8px";
	btn1.style.marginTop="40px";
     btn1.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     btn1.style.opacity="0.75";
     btn1.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     btn1.style.cursor="pointer";
	 btn1.onclick=function(){
          document.body.removeChild(bgObj);
                document.getElementById("msgDiv").removeChild(title);
                document.body.removeChild(msgObj);
                }
	var btn2 = document.createElement("input");
	btn2.setAttribute("id","btnMks");
	btn2.setAttribute("value","确定");
	btn2.setAttribute("type","button");
	btn2.setAttribute("width","150px");
	btn2.setAttribute("height","20px");
	btn2.style.paddingTop="3px";
	btn2.style.paddingBottom="3px";
	btn2.style.paddingLeft="8px";
	btn2.style.paddingRight="8px";
	btn2.style.marginTop="40px";
     btn2.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     btn2.style.opacity="0.75";
     btn2.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     btn2.style.cursor="pointer";
	 btn2.onclick=function(){
            process('deletetask');
                }
	var btn3 = document.createElement("input");
	btn3.setAttribute("id","btnMks");
	btn3.setAttribute("value","取消");
	btn3.setAttribute("type","button");
	btn3.setAttribute("width","150px");
	btn3.setAttribute("height","20px");
	btn3.style.paddingTop="3px";
	btn3.style.paddingBottom="3px";
	btn3.style.paddingLeft="8px";
	btn3.style.paddingRight="8px";
	btn3.style.marginTop="40px";
	btn3.style.marginLeft="20px";
     btn3.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     btn3.style.opacity="0.75";
     btn3.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     btn3.style.cursor="pointer";
	 btn3.onclick=function(){
          document.body.removeChild(bgObj);
                document.getElementById("msgDiv").removeChild(title);
                document.body.removeChild(msgObj);
                }

     var title=document.createElement("h4");
     title.setAttribute("id","msgTitle");
     title.setAttribute("align","right");
     title.style.margin="0";
     title.style.padding="3px";
     title.style.background=bordercolor;
     title.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     title.style.opacity="0.75";
     title.style.border="1px solid " + bordercolor;
     title.style.height="18px";
     title.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     title.style.color="white";
     title.style.cursor="pointer";
     title.innerHTML="关闭";
     title.onclick=function(){
          document.body.removeChild(bgObj);
                document.getElementById("msgDiv").removeChild(title);
                document.body.removeChild(msgObj);
                }
var bool=false;
	for(i=0;i<document.getElementsByName("task_item").length;i++){
	if(document.getElementsByName("task_item").item(i).checked){
			bool=true;
       }}
	if(bool==false){
	document.body.appendChild(bgObj);
    document.body.appendChild(msgObj);
    document.getElementById("msgDiv").appendChild(title);
     var txt=document.createElement("p");
     txt.style.margin="1em 0"
     txt.setAttribute("id","msgTxt");
	 txt.style.color="#000"
	 txt.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif"
     txt.innerHTML=str;
     document.getElementById("msgDiv").appendChild(txt);
	 document.getElementById("msgDiv").appendChild(btn1);
	}else{
		document.body.appendChild(bgObj);
    	document.body.appendChild(msgObj);
    	document.getElementById("msgDiv").appendChild(title);
     	var txt=document.createElement("p");
     	txt.style.margin="1em 0"
     	txt.setAttribute("id","msgTxt");
	 	txt.style.color="#000"
	 	txt.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif"
     	txt.innerHTML="删除是不可恢复的，确定要删除？";
     	document.getElementById("msgDiv").appendChild(txt);
	 	document.getElementById("msgDiv").appendChild(btn2);
		document.getElementById("msgDiv").appendChild(btn3);
	}
}
/*--------------------------------------------------------华丽丽的分割线--------------------------------------------*/
function sAlert_edittask(str){
   var msgw,msgh,bordercolor;
   msgw=400;//提示窗口的宽度
   msgh=150;//提示窗口的高度
   titleheight=25 //提示窗口标题高度
   bordercolor="#D3CFD0";//提示窗口的边框颜色
   titlecolor="#D3CFD0";//提示窗口的标题颜色
   
   var sWidth,sHeight;
   sWidth=document.body.offsetWidth;
   sHeight=document.body.offsetHeight;

   var bgObj=document.createElement("div");
   bgObj.setAttribute('id','bgDiv');
   bgObj.style.position="absolute";
   bgObj.style.top="0";
   bgObj.style.background="#777";
   bgObj.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75";
   bgObj.style.opacity="0.6";
   bgObj.style.left="0";
   bgObj.style.width=sWidth + "px";
   bgObj.style.height=sHeight + "px";
   bgObj.style.zIndex = "10000";
   
   
   var msgObj=document.createElement("div")
   msgObj.setAttribute("id","msgDiv");
   msgObj.setAttribute("align","center");
   msgObj.style.background="white";
   msgObj.style.border="5px solid " + bordercolor;
      msgObj.style.position = "absolute";
            msgObj.style.left = "50%";
            msgObj.style.top = "50%";
            msgObj.style.font="12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif";
            msgObj.style.marginLeft = "-225px" ;
            msgObj.style.marginTop = -75+document.documentElement.scrollTop+"px";
            msgObj.style.width = msgw + "px";
            msgObj.style.height =msgh + "px";
            msgObj.style.textAlign = "center";
            msgObj.style.lineHeight ="25px";
            msgObj.style.zIndex = "10001";
			
		var btn1 = document.createElement("input");
	btn1.setAttribute("id","btnMks");
	btn1.setAttribute("value","确定");
	btn1.setAttribute("type","button");
	btn1.setAttribute("width","150px");
	btn1.setAttribute("height","20px");
	btn1.style.paddingTop="3px";
	btn1.style.paddingBottom="3px";
	btn1.style.paddingLeft="8px";
	btn1.style.paddingRight="8px";
	btn1.style.marginTop="40px";
     btn1.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     btn1.style.opacity="0.75";
     btn1.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     btn1.style.cursor="pointer";
	 btn1.onclick=function(){
          document.body.removeChild(bgObj);
                document.getElementById("msgDiv").removeChild(title);
                document.body.removeChild(msgObj);
                }

     var title=document.createElement("h4");
     title.setAttribute("id","msgTitle");
     title.setAttribute("align","right");
     title.style.margin="0";
     title.style.padding="3px";
     title.style.background=bordercolor;
     title.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     title.style.opacity="0.75";
     title.style.border="1px solid " + bordercolor;
     title.style.height="18px";
     title.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     title.style.color="white";
     title.style.cursor="pointer";
     title.innerHTML="关闭";
     title.onclick=function(){
          document.body.removeChild(bgObj);
                document.getElementById("msgDiv").removeChild(title);
                document.body.removeChild(msgObj);
                }
var bool=false;
	for(i=0;i<document.getElementsByName("task_item").length;i++){
	if(document.getElementsByName("task_item").item(i).checked){
			bool=true;
       }}
	if(bool==false){
	document.body.appendChild(bgObj);
    document.body.appendChild(msgObj);
    document.getElementById("msgDiv").appendChild(title);
     var txt=document.createElement("p");
     txt.style.margin="1em 0"
     txt.setAttribute("id","msgTxt");
	 txt.style.color="#000"
	 txt.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif"
     txt.innerHTML=str;
     document.getElementById("msgDiv").appendChild(txt);
	 document.getElementById("msgDiv").appendChild(btn1);
	}else{
		/*此处填写执行语句*/
		process('edittask');
	
	}
}
/*--------------------------------------------------------华丽丽的分割线--------------------------------------------*/
function sAlert_readytask(str){
   var msgw,msgh,bordercolor;
   msgw=400;//提示窗口的宽度
   msgh=150;//提示窗口的高度
   titleheight=25 //提示窗口标题高度
   bordercolor="#D3CFD0";//提示窗口的边框颜色
   titlecolor="#D3CFD0";//提示窗口的标题颜色
   
   var sWidth,sHeight;
   sWidth=document.body.offsetWidth;
   sHeight=document.body.offsetHeight;

   var bgObj=document.createElement("div");
   bgObj.setAttribute('id','bgDiv');
   bgObj.style.position="absolute";
   bgObj.style.top="0";
   bgObj.style.background="#777";
   bgObj.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75";
   bgObj.style.opacity="0.6";
   bgObj.style.left="0";
   bgObj.style.width=sWidth + "px";
   bgObj.style.height=sHeight + "px";
   bgObj.style.zIndex = "10000";
   
   
   var msgObj=document.createElement("div")
   msgObj.setAttribute("id","msgDiv");
   msgObj.setAttribute("align","center");
   msgObj.style.background="white";
   msgObj.style.border="5px solid " + bordercolor;
      msgObj.style.position = "absolute";
            msgObj.style.left = "50%";
            msgObj.style.top = "50%";
            msgObj.style.font="12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif";
            msgObj.style.marginLeft = "-225px" ;
            msgObj.style.marginTop = -75+document.documentElement.scrollTop+"px";
            msgObj.style.width = msgw + "px";
            msgObj.style.height =msgh + "px";
            msgObj.style.textAlign = "center";
            msgObj.style.lineHeight ="25px";
            msgObj.style.zIndex = "10001";
			
		var btn1 = document.createElement("input");
	btn1.setAttribute("id","btnMks");
	btn1.setAttribute("value","确定");
	btn1.setAttribute("type","button");
	btn1.setAttribute("width","150px");
	btn1.setAttribute("height","20px");
	btn1.style.paddingTop="3px";
	btn1.style.paddingBottom="3px";
	btn1.style.paddingLeft="8px";
	btn1.style.paddingRight="8px";
	btn1.style.marginTop="40px";
     btn1.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     btn1.style.opacity="0.75";
     btn1.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     btn1.style.cursor="pointer";
	 btn1.onclick=function(){
          document.body.removeChild(bgObj);
                document.getElementById("msgDiv").removeChild(title);
                document.body.removeChild(msgObj);
                }

     var title=document.createElement("h4");
     title.setAttribute("id","msgTitle");
     title.setAttribute("align","right");
     title.style.margin="0";
     title.style.padding="3px";
     title.style.background=bordercolor;
     title.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     title.style.opacity="0.75";
     title.style.border="1px solid " + bordercolor;
     title.style.height="18px";
     title.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     title.style.color="white";
     title.style.cursor="pointer";
     title.innerHTML="关闭";
     title.onclick=function(){
          document.body.removeChild(bgObj);
                document.getElementById("msgDiv").removeChild(title);
                document.body.removeChild(msgObj);
                }
var bool=false;
	for(i=0;i<document.getElementsByName("task_item").length;i++){
	if(document.getElementsByName("task_item").item(i).checked){
			bool=true;
       }}
	if(bool==false){
	document.body.appendChild(bgObj);
    document.body.appendChild(msgObj);
    document.getElementById("msgDiv").appendChild(title);
     var txt=document.createElement("p");
     txt.style.margin="1em 0"
     txt.setAttribute("id","msgTxt");
	 txt.style.color="#000"
	 txt.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif"
     txt.innerHTML=str;
     document.getElementById("msgDiv").appendChild(txt);
	 document.getElementById("msgDiv").appendChild(btn1);
	}else{
		/*此处填写执行语句*/
		process('ready');
	
	}
}
/*--------------------------------------------------------华丽丽的分割线--------------------------------------------*/
function sAlert_runtask(str){
   var msgw,msgh,bordercolor;
   msgw=400;//提示窗口的宽度
   msgh=150;//提示窗口的高度
   titleheight=25 //提示窗口标题高度
   bordercolor="#D3CFD0";//提示窗口的边框颜色
   titlecolor="#D3CFD0";//提示窗口的标题颜色
   
   var sWidth,sHeight;
   sWidth=document.body.offsetWidth;
   sHeight=document.body.offsetHeight;

   var bgObj=document.createElement("div");
   bgObj.setAttribute('id','bgDiv');
   bgObj.style.position="absolute";
   bgObj.style.top="0";
   bgObj.style.background="#777";
   bgObj.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75";
   bgObj.style.opacity="0.6";
   bgObj.style.left="0";
   bgObj.style.width=sWidth + "px";
   bgObj.style.height=sHeight + "px";
   bgObj.style.zIndex = "10000";
   
   
   var msgObj=document.createElement("div")
   msgObj.setAttribute("id","msgDiv");
   msgObj.setAttribute("align","center");
   msgObj.style.background="white";
   msgObj.style.border="5px solid " + bordercolor;
      msgObj.style.position = "absolute";
            msgObj.style.left = "50%";
            msgObj.style.top = "50%";
            msgObj.style.font="12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif";
            msgObj.style.marginLeft = "-225px" ;
            msgObj.style.marginTop = -75+document.documentElement.scrollTop+"px";
            msgObj.style.width = msgw + "px";
            msgObj.style.height =msgh + "px";
            msgObj.style.textAlign = "center";
            msgObj.style.lineHeight ="25px";
            msgObj.style.zIndex = "10001";
			
		var btn1 = document.createElement("input");
	btn1.setAttribute("id","btnMks");
	btn1.setAttribute("value","确定");
	btn1.setAttribute("type","button");
	btn1.setAttribute("width","150px");
	btn1.setAttribute("height","20px");
	btn1.style.paddingTop="3px";
	btn1.style.paddingBottom="3px";
	btn1.style.paddingLeft="8px";
	btn1.style.paddingRight="8px";
	btn1.style.marginTop="40px";
     btn1.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     btn1.style.opacity="0.75";
     btn1.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     btn1.style.cursor="pointer";
	 btn1.onclick=function(){
          document.body.removeChild(bgObj);
                document.getElementById("msgDiv").removeChild(title);
                document.body.removeChild(msgObj);
                }

     var title=document.createElement("h4");
     title.setAttribute("id","msgTitle");
     title.setAttribute("align","right");
     title.style.margin="0";
     title.style.padding="3px";
     title.style.background=bordercolor;
     title.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     title.style.opacity="0.75";
     title.style.border="1px solid " + bordercolor;
     title.style.height="18px";
     title.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     title.style.color="white";
     title.style.cursor="pointer";
     title.innerHTML="关闭";
     title.onclick=function(){
          document.body.removeChild(bgObj);
                document.getElementById("msgDiv").removeChild(title);
                document.body.removeChild(msgObj);
                }
var bool=false;
	for(i=0;i<document.getElementsByName("task_item").length;i++){
	if(document.getElementsByName("task_item").item(i).checked){
			bool=true;
       }}
	if(bool==false){
	document.body.appendChild(bgObj);
    document.body.appendChild(msgObj);
    document.getElementById("msgDiv").appendChild(title);
     var txt=document.createElement("p");
     txt.style.margin="1em 0"
     txt.setAttribute("id","msgTxt");
	 txt.style.color="#000"
	 txt.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif"
     txt.innerHTML=str;
     document.getElementById("msgDiv").appendChild(txt);
	 document.getElementById("msgDiv").appendChild(btn1);
	}else{
		/*此处填写执行语句*/
		process('start');
	
	}
}
/*--------------------------------------------------------华丽丽的分割线--------------------------------------------*/
function sAlert_stoptask(str){
   var msgw,msgh,bordercolor;
   msgw=400;//提示窗口的宽度
   msgh=150;//提示窗口的高度
   titleheight=25 //提示窗口标题高度
   bordercolor="#D3CFD0";//提示窗口的边框颜色
   titlecolor="#D3CFD0";//提示窗口的标题颜色
   
   var sWidth,sHeight;
   sWidth=document.body.offsetWidth;
   sHeight=document.body.offsetHeight;

   var bgObj=document.createElement("div");
   bgObj.setAttribute('id','bgDiv');
   bgObj.style.position="absolute";
   bgObj.style.top="0";
   bgObj.style.background="#777";
   bgObj.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75";
   bgObj.style.opacity="0.6";
   bgObj.style.left="0";
   bgObj.style.width=sWidth + "px";
   bgObj.style.height=sHeight + "px";
   bgObj.style.zIndex = "10000";
   
   
   var msgObj=document.createElement("div")
   msgObj.setAttribute("id","msgDiv");
   msgObj.setAttribute("align","center");
   msgObj.style.background="white";
   msgObj.style.border="5px solid " + bordercolor;
      msgObj.style.position = "absolute";
            msgObj.style.left = "50%";
            msgObj.style.top = "50%";
            msgObj.style.font="12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif";
            msgObj.style.marginLeft = "-225px" ;
            msgObj.style.marginTop = -75+document.documentElement.scrollTop+"px";
            msgObj.style.width = msgw + "px";
            msgObj.style.height =msgh + "px";
            msgObj.style.textAlign = "center";
            msgObj.style.lineHeight ="25px";
            msgObj.style.zIndex = "10001";
			
		var btn1 = document.createElement("input");
	btn1.setAttribute("id","btnMks");
	btn1.setAttribute("value","确定");
	btn1.setAttribute("type","button");
	btn1.setAttribute("width","150px");
	btn1.setAttribute("height","20px");
	btn1.style.paddingTop="3px";
	btn1.style.paddingBottom="3px";
	btn1.style.paddingLeft="8px";
	btn1.style.paddingRight="8px";
	btn1.style.marginTop="40px";
     btn1.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     btn1.style.opacity="0.75";
     btn1.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     btn1.style.cursor="pointer";
	 btn1.onclick=function(){
          document.body.removeChild(bgObj);
                document.getElementById("msgDiv").removeChild(title);
                document.body.removeChild(msgObj);
                }

     var title=document.createElement("h4");
     title.setAttribute("id","msgTitle");
     title.setAttribute("align","right");
     title.style.margin="0";
     title.style.padding="3px";
     title.style.background=bordercolor;
     title.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     title.style.opacity="0.75";
     title.style.border="1px solid " + bordercolor;
     title.style.height="18px";
     title.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     title.style.color="white";
     title.style.cursor="pointer";
     title.innerHTML="关闭";
     title.onclick=function(){
          document.body.removeChild(bgObj);
                document.getElementById("msgDiv").removeChild(title);
                document.body.removeChild(msgObj);
                }
var bool=false;
	for(i=0;i<document.getElementsByName("task_item").length;i++){
	if(document.getElementsByName("task_item").item(i).checked){
			bool=true;
       }}
	if(bool==false){
	document.body.appendChild(bgObj);
    document.body.appendChild(msgObj);
    document.getElementById("msgDiv").appendChild(title);
     var txt=document.createElement("p");
     txt.style.margin="1em 0"
     txt.setAttribute("id","msgTxt");
	 txt.style.color="#000"
	 txt.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif"
     txt.innerHTML=str;
     document.getElementById("msgDiv").appendChild(txt);
	 document.getElementById("msgDiv").appendChild(btn1);
	}else{
		/*此处填写执行语句*/
		process('cancel');
	
	}
}
/*--------------------------------------------------------华丽丽的分割线--------------------------------------------*/
function sAlert_showtask(str){
   var msgw,msgh,bordercolor;
   msgw=400;//提示窗口的宽度
   msgh=150;//提示窗口的高度
   titleheight=25 //提示窗口标题高度
   bordercolor="#D3CFD0";//提示窗口的边框颜色
   titlecolor="#D3CFD0";//提示窗口的标题颜色
   
   var sWidth,sHeight;
   sWidth=document.body.offsetWidth;
   sHeight=document.body.offsetHeight;

   var bgObj=document.createElement("div");
   bgObj.setAttribute('id','bgDiv');
   bgObj.style.position="absolute";
   bgObj.style.top="0";
   bgObj.style.background="#777";
   bgObj.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75";
   bgObj.style.opacity="0.6";
   bgObj.style.left="0";
   bgObj.style.width=sWidth + "px";
   bgObj.style.height=sHeight + "px";
   bgObj.style.zIndex = "10000";
   
   
   var msgObj=document.createElement("div")
   msgObj.setAttribute("id","msgDiv");
   msgObj.setAttribute("align","center");
   msgObj.style.background="white";
   msgObj.style.border="5px solid " + bordercolor;
      msgObj.style.position = "absolute";
            msgObj.style.left = "50%";
            msgObj.style.top = "50%";
            msgObj.style.font="12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif";
            msgObj.style.marginLeft = "-225px" ;
            msgObj.style.marginTop = -75+document.documentElement.scrollTop+"px";
            msgObj.style.width = msgw + "px";
            msgObj.style.height =msgh + "px";
            msgObj.style.textAlign = "center";
            msgObj.style.lineHeight ="25px";
            msgObj.style.zIndex = "10001";
			
		var btn1 = document.createElement("input");
	btn1.setAttribute("id","btnMks");
	btn1.setAttribute("value","确定");
	btn1.setAttribute("type","button");
	btn1.setAttribute("width","150px");
	btn1.setAttribute("height","20px");
	btn1.style.paddingTop="3px";
	btn1.style.paddingBottom="3px";
	btn1.style.paddingLeft="8px";
	btn1.style.paddingRight="8px";
	btn1.style.marginTop="40px";
     btn1.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     btn1.style.opacity="0.75";
     btn1.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     btn1.style.cursor="pointer";
	 btn1.onclick=function(){
          document.body.removeChild(bgObj);
                document.getElementById("msgDiv").removeChild(title);
                document.body.removeChild(msgObj);
                }

     var title=document.createElement("h4");
     title.setAttribute("id","msgTitle");
     title.setAttribute("align","right");
     title.style.margin="0";
     title.style.padding="3px";
     title.style.background=bordercolor;
     title.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     title.style.opacity="0.75";
     title.style.border="1px solid " + bordercolor;
     title.style.height="18px";
     title.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     title.style.color="white";
     title.style.cursor="pointer";
     title.innerHTML="关闭";
     title.onclick=function(){
          document.body.removeChild(bgObj);
                document.getElementById("msgDiv").removeChild(title);
                document.body.removeChild(msgObj);
                }
var bool=false;
	for(i=0;i<document.getElementsByName("task_item").length;i++){
	if(document.getElementsByName("task_item").item(i).checked){
			bool=true;
       }}
	if(bool==false){
	document.body.appendChild(bgObj);
    document.body.appendChild(msgObj);
    document.getElementById("msgDiv").appendChild(title);
     var txt=document.createElement("p");
     txt.style.margin="1em 0"
     txt.setAttribute("id","msgTxt");
	 txt.style.color="#000"
	 txt.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif"
     txt.innerHTML=str;
     document.getElementById("msgDiv").appendChild(txt);
	 document.getElementById("msgDiv").appendChild(btn1);
	}else{
		/*此处填写执行语句*/
		process('displayresult');
	
	}
}
/*--------------------------------------------------------华丽丽的分割线--------------------------------------------*/
function sAlert_pudel(str){
	var msgw,msgh,bordercolor;
   msgw=400;//提示窗口的宽度
   msgh=150;//提示窗口的高度
   titleheight=25 //提示窗口标题高度
   bordercolor="#D3CFD0";//提示窗口的边框颜色
   titlecolor="#D3CFD0";//提示窗口的标题颜色
   
   var sWidth,sHeight;
   sWidth=document.body.offsetWidth;
   sHeight=document.body.offsetHeight;
   

   var bgObj=document.createElement("div");
   bgObj.setAttribute('id','bgDiv');
   bgObj.style.position="absolute";
   bgObj.style.top="0";
   bgObj.style.background="#777";
   bgObj.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75";
   bgObj.style.opacity="0.6";
   bgObj.style.left="0";
   bgObj.style.width=sWidth + "px";
   bgObj.style.height=sHeight + "px";
   bgObj.style.zIndex = "10000";
   
   
   var msgObj=document.createElement("div")
   msgObj.setAttribute("id","msgDiv");
   msgObj.setAttribute("align","center");
   msgObj.style.background="white";
   msgObj.style.border="5px solid " + bordercolor;
      msgObj.style.position = "absolute";
            msgObj.style.left = "50%";
            msgObj.style.top = "50%";
            msgObj.style.font="12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif";
            msgObj.style.marginLeft = "-225px" ;
            msgObj.style.marginTop = -75+document.documentElement.scrollTop+"px";
            msgObj.style.width = msgw + "px";
            msgObj.style.height =msgh + "px";
            msgObj.style.textAlign = "center";
            msgObj.style.lineHeight ="25px";
            msgObj.style.zIndex = "10001";
			
		var btn1 = document.createElement("input");
	btn1.setAttribute("id","btnMks");
	btn1.setAttribute("value","确定");
	btn1.setAttribute("type","button");
	btn1.setAttribute("width","150px");
	btn1.setAttribute("height","20px");
	btn1.style.paddingTop="3px";
	btn1.style.paddingBottom="3px";
	btn1.style.paddingLeft="8px";
	btn1.style.paddingRight="8px";
	btn1.style.marginTop="40px";
     btn1.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     btn1.style.opacity="0.75";
     btn1.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     btn1.style.cursor="pointer";
	 btn1.onclick=function(){
          document.body.removeChild(bgObj);
                document.getElementById("msgDiv").removeChild(title);
                document.body.removeChild(msgObj);
                }
	var btn2 = document.createElement("input");
	btn2.setAttribute("id","btnMks");
	btn2.setAttribute("value","确定");
	btn2.setAttribute("type","button");
	btn2.setAttribute("width","150px");
	btn2.setAttribute("height","20px");
	btn2.style.paddingTop="3px";
	btn2.style.paddingBottom="3px";
	btn2.style.paddingLeft="8px";
	btn2.style.paddingRight="8px";
	btn2.style.marginTop="40px";
     btn2.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     btn2.style.opacity="0.75";
     btn2.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     btn2.style.cursor="pointer";
	 btn2.onclick=function(){
           process('deletepu');
                }
	var btn3 = document.createElement("input");
	btn3.setAttribute("id","btnMks");
	btn3.setAttribute("value","取消");
	btn3.setAttribute("type","button");
	btn3.setAttribute("width","150px");
	btn3.setAttribute("height","20px");
	btn3.style.paddingTop="3px";
	btn3.style.paddingBottom="3px";
	btn3.style.paddingLeft="8px";
	btn3.style.paddingRight="8px";
	btn3.style.marginTop="40px";
	btn3.style.marginLeft="20px";
     btn3.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     btn3.style.opacity="0.75";
     btn3.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     btn3.style.cursor="pointer";
	 btn3.onclick=function(){
          document.body.removeChild(bgObj);
                document.getElementById("msgDiv").removeChild(title);
                document.body.removeChild(msgObj);
                }


     var title=document.createElement("h4");
     title.setAttribute("id","msgTitle");
     title.setAttribute("align","right");
     title.style.margin="0";
     title.style.padding="3px";
     title.style.background=bordercolor;
     title.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
     title.style.opacity="0.75";
     title.style.border="1px solid " + bordercolor;
     title.style.height="18px";
     title.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
     title.style.color="white";
     title.style.cursor="pointer";
     title.innerHTML="关闭";
     title.onclick=function(){
          document.body.removeChild(bgObj);
                document.getElementById("msgDiv").removeChild(title);
                document.body.removeChild(msgObj);
                }
var bool=false;
	for(i=0;i<document.getElementsByName("job_item").length;i++){
	if(document.getElementsByName("job_item").item(i).checked){
			bool=true;
       }}
	if(bool==false){
	document.body.appendChild(bgObj);
    document.body.appendChild(msgObj);
    document.getElementById("msgDiv").appendChild(title);
     var txt=document.createElement("p");
     txt.style.margin="1em 0"
     txt.setAttribute("id","msgTxt");
	 txt.style.color="#000"
	 txt.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif"
     txt.innerHTML=str;
     document.getElementById("msgDiv").appendChild(txt);
	 document.getElementById("msgDiv").appendChild(btn1);
	}else{
		document.body.appendChild(bgObj);
    	document.body.appendChild(msgObj);
    	document.getElementById("msgDiv").appendChild(title);
     	var txt=document.createElement("p");
     	txt.style.margin="1em 0"
     	txt.setAttribute("id","msgTxt");
	 	txt.style.color="#000"
	 	txt.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif"
     	txt.innerHTML="删除是不可恢复的，确定要删除？";
     	document.getElementById("msgDiv").appendChild(txt);
	 	document.getElementById("msgDiv").appendChild(btn2);
		document.getElementById("msgDiv").appendChild(btn3);
	
	}
}


/*--------------------------------------------------------华丽丽的分割线--------------------------------------------*/
