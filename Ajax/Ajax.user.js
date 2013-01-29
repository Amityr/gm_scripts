// ==UserScript==
// @name        Ajax
// @namespace   http://sbwtw.cn/
// @require     http://code.jquery.com/jquery-1.9.0.min.js
// @include     * 
// @version     1.0
// ==/UserScript==

window.addEventListener('load',function(){
    $.ajax({
        url:"http://wenku.baidu.com/doc/submit/update",
        data:{
            __privacy:"1",
            charge:"1",
            cid1:"3",
            cid2:"63",
            cid3:"161",
            cid4:"0",
            ct:"20005",
            doc_id:"76d3b333580216fc700afd59",
            encode:"utf8",
            favorites:"",
            flag:"0",
            isUpdateAll:"1",
            mod:"1",
            new_doc_id:"",
            new_upload:"1",
            oe:"json",
            price:"20",
            privacy:"1",
            retType:"newResponse",
            summary:"",
            tag_str:"",
            title:"Aircrack"
        },
        dataType:"json",
        success:function(data){
            alert(data.msg);
        },
        type:"POST",
        processData:"false"
    });
//alert(/x/);
},false);
