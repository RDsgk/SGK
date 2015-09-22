	
     var theTable = document.getElementById("host_list");
     var totalPage = document.getElementById("spanTotalPage");
     var pageNum = document.getElementById("spanPageNum");


     var spanPre = document.getElementById("spanPre");
     var spanNext = document.getElementById("spanNext");
     var spanFirst = document.getElementById("spanFirst");
     var spanLast = document.getElementById("spanLast");


     //var numberRowsInTable = 150;
     var pageSize = 10;
     //var page = 1;


     //下一页
     function next() {
         page++;
	 jump()
     }


     //上一页
     function pre() {
         page--;
	 jump()
     }


     //第一页
     function first() {
	 page = 1
	 jump()
     }


     //最后一页
     function last() {
	 page = pageCount()
  	 jump()
     }

     function jump() {
	 var url = window.location.href.split("?",1) + "?count=" + numberRowsInTable + "&page=" + page
         var tmp = String(window.location.href.split("?",1))
         if (tmp.indexOf("search") >= 0){
             if(typeof(app_name) != "undefined" & typeof(phone_check) != "undefined"){
         	if(app_name != "False") url += "&app_name=" + app_name
         	if(phone_check != "False") url += "&phone_check=" + phone_check
	     }
         }
         else{
	     if(typeof(asma) != "undefined" & typeof(leak) != "undefined" & typeof(vul) != "undefined"){
         	if(asma != "False") url += "&asma=" + asma
         	if(leak != "False") url += "&leak=" + leak
         	if(vul != "False") url += "&vul=" + vul
             }
         }
       
         window.location.href = url
     }

     //总共页数
     function pageCount() {
         var count = 0;
         if (numberRowsInTable % pageSize != 0) count = 1;
         return parseInt(numberRowsInTable / pageSize) + count;
     }


     //显示链接
     function preLink() { spanPre.innerHTML = "<a href='javascript:pre();'>上一页</a>"; }
     function preText() { spanPre.innerHTML = "上一页"; }


     function nextLink() { spanNext.innerHTML = "<a href='javascript:next();'>下一页</a>"; }
     function nextText() { spanNext.innerHTML = "下一页"; }


     function firstLink() { spanFirst.innerHTML = "<a href='javascript:first();'>第一页</a>"; }
     function firstText() { spanFirst.innerHTML = "第一页"; }


     function lastLink() { spanLast.innerHTML = "<a href='javascript:last();'>最后一页</a>"; }
     function lastText() { spanLast.innerHTML = "最后一页"; }


     //隐藏表格
     function init() {

         totalPage.innerHTML = pageCount();
         pageNum.innerHTML = page;

	 if(page != 1) {firstLink();preLink();}
	 else {firstText();preText();}
	 if(page != pageCount()) {lastLink();nextLink();}
 	 else {lastText();nextText();}

     }


     init();
 
