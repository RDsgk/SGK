HTMLEncode=function(txt){
	txt = txt.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#39;");
	return txt;
}
HTMLDecode=function(txt){
	txt = txt.replace(/&amp;/g,'&')
		.replace(/&quot;/g,'"').replace(/&#39;/g,"'")
		.replace(/&lt;info&gt;/g,'<info>').replace(/&lt;\/info&gt;/g,'</info>')
		.replace(/&lt;safety_score&gt;/g,'<safety_score>').replace(/&lt;\/safety_score&gt;/g,'</safety_score>')
		.replace(/&lt;risk_paths&gt;/g,'<risk_paths>').replace(/&lt;\/risk_paths&gt;/g,'</risk_paths>')
		.replace(/&gt;&lt;sink_tags&gt;/g,'><sink_tags>').replace(/&lt;\/sink_tags&gt;/g,'</sink_tags>')
		.replace(/&lt;SinkTag&gt;/g,'<SinkTag>').replace(/&lt;\/SinkTag&gt;/g,'</SinkTag>')
		.replace(/&lt;TriggerLevel&gt;/g,'<TriggerLevel>').replace(/&lt;\/TriggerLevel&gt;/g,'</TriggerLevel>')
		.replace(/&lt;SendType&gt;/g,'<SendType>').replace(/&lt;\/SendType&gt;/g,'</SendType>')
		.replace(/&lt;SendAddr&gt;/g,'<SendAddr>').replace(/&lt;\/SendAddr&gt;/g,'</SendAddr>')
		.replace(/&lt;Evidence&gt;/g,'<Evidence>').replace(/&lt;\/Evidence&gt;/g,'</Evidence>')
		.replace(/&lt;finger_img_small&gt;/g,'<finger_img_small>').replace(/&lt;\/finger_img_small&gt;/g,'</finger_img_small>')
		.replace("&lt;?xml version=\"1.0\" ?&gt;","<?xml version=\"1.0\" ?>")
		.replace("<risk_paths>&lt;path","<risk_paths><path").replace(/&lt;\/path&gt;&lt;path/g,"</path><path").replace("&lt;/path&gt;</risk_paths>","</path></risk_paths>")	
		
	return txt;
}
loadXMLFromStr = function(xmlString){
        var xmlDoc=null;
        //判断浏览器的类型
        //支持IE浏览器 
        if(!window.DOMParser && window.ActiveXObject){   //window.DOMParser 判断是否是非ie浏览器
            var xmlDomVersions = ['MSXML.2.DOMDocument.6.0','MSXML.2.DOMDocument.3.0','Microsoft.XMLDOM'];
            for(var i=0;i<xmlDomVersions.length;i++){
                try{
                    xmlDoc = new ActiveXObject(xmlDomVersions[i]);
                    xmlDoc.async = false;
                    xmlDoc.loadXML(xmlString); //loadXML方法载入xml字符串
                    break;
                }catch(e){
                }
            }
        }
        //支持Mozilla浏览器
        else if(window.DOMParser && document.implementation && document.implementation.createDocument){
            try{
                /* DOMParser 对象解析 XML 文本并返回一个 XML Document 对象。
                 * 要使用 DOMParser，使用不带参数的构造函数来实例化它，然后调用其 parseFromString() 方法
                 * parseFromString(text, contentType) 参数text:要解析的 XML 标记 参数contentType文本的内容类型
                 * 可能是 "text/xml" 、"application/xml" 或 "application/xhtml+xml" 中的一个。注意，不支持 "text/html"。
                 */
                domParser = new  DOMParser();
                xmlDoc = domParser.parseFromString(xmlString, 'text/xml');
            }catch(e){
            }
        }
        else{
            return null;
        }

        return xmlDoc;
    }


var url = 'http://172.18.246.8/risk-iframe/?id='+app_md5
var xhr = new XMLHttpRequest();   
var xml_res;
    function crossDomainRequest() {   
      document.getElementById("ifrm").innerHTML = "开始……";   
      if (xhr) {   
        xhr.open('GET', url, true);   
        xhr.onreadystatechange = handler;   
        xhr.send();   
      } else {   
        document.getElementById("ifrm").innerHTML = "不能创建 XMLHttpRequest";   
      }   
    }   
    function handler(evtXHR) {   
      if (xhr.readyState == 4) {   
        if (xhr.status == 200) {   
          var response = xhr.responseText; 
          xml_res = response;
          //document.getElementById("ifrm").innerHTML = "结果：" + response;   
	  parseXMLStr();
        } else {   
          document.getElementById("ifrm").innerHTML = "不允许跨域请求。";   
        }   
      }   
      else {   
        document.getElementById("ifrm").innerHTML += "<br/>执行状态 readyState：" + xhr.readyState;   
      }   
    } 
crossDomainRequest() 


function parseXMLStr(){
var xml = loadXMLFromStr(HTMLDecode(xml_res))
var risk_count = xml.getElementsByTagName("path").length
if(risk_count){
	content = '<table  cellspacing=0 cellpadding=0> <tr><td rowspan="'+risk_count+'"><img src="/static/icon/init.png"></td>'
	pathNodes = xml.getElementsByTagName("path")
	for(var i=0;i<risk_count;i++){
		path = pathNodes[i]
		sink_tags =path.firstChild
		for(var j=0;j<sink_tags.childNodes.length;j++){
			SinkTag = sink_tags.childNodes[j]
			info = SinkTag.firstChild.nodeValue
			content += '<td><img src="/static/icon/arrow.png" width=33 height=34 ></td><td><img src="/static/icon/'+info+'.png"  title="'+info+'" width=53 height=54 ></td>'
		}
		SendType = path.childNodes[2]
		info = SendType.firstChild.nodeValue
		content += '<td><img src=/static/icon/arrow.png width=33 height=34 ></td><td><img src=/static/icon/'+info+'.png  title="'+info+'" width=33 height=34 ></td></tr>'
	}	
}else{
	content="无"
}
document.getElementById("ifrm").innerHTML=content
}

