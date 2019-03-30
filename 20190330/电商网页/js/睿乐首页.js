$(function(){
	$("#logo").html("<img class='logo' src='../img/加号.svg' />" +
	"<img class='logo1' src='../img/timg.jpg' />" +
	"<img class='logo2' src='../img/73c1cd9285a1cb58c9451850ab5215c.png' />" +
	"<div class='new'><ul><li>天津市</li></ul></div>" +
	"<img class='logo3' src='../img/点点.svg' />"
    );
    $("#seek").html("<div class='go'><input type='text' name='shop' placeholder='HUAWEI P30系列' />&nbsp&nbsp<img src='../img/右-箭头.svg' /></div>" 
    );
    $("#roll").html("<div id='carousel-example-generic' class='carousel slide' data-ride='carousel'>"+
//          <!-- Wrapper for slides -->
            "<div class='carousel-inner' role='listbox'>"+
                "<div class='item active'>"+
                    "<img src='../img/banner.jpg' alt='图片找不到了...'>"+
                "</div>"+
                "<div class='item'>"+
                    "<img src='../img/floor1_本周特惠1.jpg' alt='图片找不到了...'>"+
                "</div>"+
//          <!-- Controls -->+
            "<a class='left carousel-control' href='#carousel-example-generic' role='button' data-slide='prev'>"+
                "<span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>"+
                "<span class='sr-only'>Previous</span>"+
            "</a>"+
            "<a class='right carousel-control' href='#carousel-example-generic' role='button' data-slide='next'>"+
                "<span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>"+
                "<span class='sr-only'>Next</span>"+
            "</a>"+
            "</div>"+
            "<div class='title'><b>精选商品</b></div>"+
            "<div class='commodity'>"+
            	"<div class='img'><img src='../img/O1CN01nuVh0M1POdhlHxRBp_!!0-item_pic.jpg_240x240.jpg' /><br /><p>ZARA新款    双排扣风衣外套</p></div>"+
            	"<div class='img'><img src='../img/O1CN01O0pSOq1POdhlTuM75_!!0-item_pic.jpg_240x240.jpg' /><br /><p>ZARA新款    配腰带乡村风连衣裙</p></div>"+
            "</div>"+
            "<div class='commodity1'>"+
            	"<div class='img1'><img src='../img/O1CN01pzFvS71POdhj6DWNG_!!0-item_pic.jpg_240x240.jpg' /><br /><p>ZARA新款    垂性织针衫毛衣</p></div>"+
            	"<div class='img1'><img src='../img/O1CN01KadTTC1POdhjrc9cM_!!0-item_pic.jpg_240x240.jpg' /><br /><p>ZARA新款    珠地布机车外套</p></div>"+
            "</div>"+
            "<br />"+
		"</div>");
    $("#core").html("<ul><li><a href='#'>购物车</a></li>" +
    "<li><a href='#'>我的</a></li>" +
    "<li><a href='http://127.0.0.1:8020/www/%E7%94%B5%E5%95%86%E7%BD%91%E9%A1%B5/html/%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2.html'>登录/注册</a></li>" +
    "<li><a href='#top'>回到顶部</a></li></ul>"
   );
})
