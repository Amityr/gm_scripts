<mason>
Charset=utf-8
Author=o丨Reborn
Created=2013-01-29
Update=2013-01-29
name=百度贴吧还原大图
namespace=sbwtws@gmail.com
version=0.1
Website=
Comment=
Description=百度贴吧还原大图
Usage=
Url=\.baidu\.com
</mason>
<parts>
part1=imgsrc\.baidu\.com.*/sign=.*/[a-z0-9]{20,}\.jpg@@@L3
// mason的正则好奇怪 = = 
part2=tieba\.baidu\.com.*\d{8,}
</parts>
<part1>
// 重定向
function _masonRedirect(spec){
	var picID=spec.match(/[a-z0-9]{20,}(?=\.[jpg|png|gif])/)[0];
	return 'http://imgsrc.baidu.com/forum/pic/item/'+picID+'.jpg';
}
</part1>
<part2>
<html>
<head>
<script type="text/javascript">
window.addEventListener('DOMContentLoaded',function(){
	// 遍历每个图片元素,额外多包一层,防止影响楼中的视频.
    $(".BDE_Image").each(function(){
		$(this).wrap(function(){
			return '<span/>';
		});
	});
	// 去除原来的事件
	$(".BDE_Image").each(function(){
		$(this).parent().html($(this).parent().html());
		// 保持大小

	});
    // 右下角的分享
    $(".fav-toolbar").css("padding-left","1px");
    // 连续看图
    $("#pic_to_album_tip").remove();
    // 重新为每个元素绑定事件
    $(".BDE_Image").each(function(){
        // 新元素
        var img=document.createElement("img");
	    // 图片资源
        img.src=$(this).attr("src");
        // 当点击
        $(this).click(function(){
            // 增加
            document.body.appendChild(img);
            // 为mousedown 和mouseup 共享鼠标位置
            var mousePos;
	        // 拖动事件
            $(img).mousedown(function(e){
                // 当鼠标为右键时,不判断,这样可以下载大图
                if(e.button=='2'){return ;}
                // 保存鼠标按下时位置,单击remove
	            mousePos=e.pageX/e.pageY;
                var mouse_x=e.pageX;
	            var old_y=parseInt($(this).css("top"));
	            var mouse_y=e.pageY;
	            var old_x=parseInt($(this).css("left"));
	            $(document).bind("mousemove",function(e){
	                // 移动位置
	                $(img).css({
	                    "top":e.pageY-mouse_y+old_y,
	                    "left":e.pageX-mouse_x+old_x
	                });
	            });
                return false;
            });
            // 弹起弄全局的
            $(document).mouseup(function(e){
                // 位置没变则remove
                if(e.pageX/e.pageY==mousePos){$(img).remove()};
	            $(document).unbind("mousemove");
            });
            // 鼠标滚动,jquery好像没有这个事件
            img.addEventListener('DOMMouseScroll',function(e){
                // 改变一个大小就行,改两个反而会变形
                $(img).attr('width',(img.width-e.detail*15) < 100 ? 100 : img.width-e.detail*15);
                //$(img).attr('height',img.height+img.height*e.detail*0.03);
                // 实现由中间扩大
                $(img).css({
                    "margin-top":-parseInt($(img).css("height"))/2.0+"px",
                    "margin-left":-parseInt($(img).css("width"))/2.0+"px"
                });
                // 取消浏览器默认的事件
                e.preventDefault();
                //e.stopPropagation();
                return false;
            },true);
            // 添加效果
            $(img).css({
                "position":"fixed",
                "z-index":"999",
                // 居中
                "top":"50%",
                "left":"50%",
                "margin-top":-parseInt($(img).css("height"))/2+"px",
                "margin-left":-parseInt($(img).css("width"))/2+"px",
                "border":"1px dashed hsl(40,50%,30%)",
                "box-shadow":"0px 0px 5px gray"
            });
        });
    });
},false);
</script>
</head>
</html>
</part2>
















