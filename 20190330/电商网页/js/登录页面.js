$(function(){
	$("#register").html("<div class='pic'></div>" +
	"<p>登录</p>" +
	"<a class='a'href='http://127.0.0.1:8020/www/%E7%94%B5%E5%95%86%E7%BD%91%E9%A1%B5/html/%E7%9D%BF%E4%B9%90%E9%A6%96%E9%A1%B5.html'>取消</a>"
    );
    $("#content").html("<div class='in'><input type='text' maxlength='11' name='anwser' placeholder='请输入你的用户名' />" +
    "<br /><br /><input type='password' maxlength='6' placeholder='请输入密码' /></div>" +
    "<a class=a1 href='#'>忘记密码？</a>" +
    "<a class=a2 href='http://127.0.0.1:8020/www/%E7%94%B5%E5%95%86%E7%BD%91%E9%A1%B5/html/%E6%B3%A8%E5%86%8C%E9%A1%B5%E9%9D%A2.html'>立即注册</a>"
    );
    $("#click").html(
    "<div class='a3'><a href='http://127.0.0.1:8020/www/%E7%94%B5%E5%95%86%E7%BD%91%E9%A1%B5/html/%E7%9D%BF%E4%B9%90%E9%A6%96%E9%A1%B5.html'><input type='submit' value='login'/></a></div>"
    );
})