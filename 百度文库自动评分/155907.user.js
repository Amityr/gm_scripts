// ==UserScript==
// @name		百度文库评分
// @description	百度文库评分
// @include     http://wenku.baidu.com/view/*.html
// @namespace	http://www.sbwtw.cn/
// @author		sbwtws@gmail.com
// @version		1.0.2
// ==/UserScript==

var addr=window.location.href;
var trueDownAdr="undefined";

GM_xmlhttpRequest({
    method:"get",
    url:"http://idown.org/cloud/down.php",
    data:"url="+addr,
    onload:function(res){
        var reg=/\/view\/[a-z0-9]{24}/g;
        alert(res.responseText);
    }
});*/
