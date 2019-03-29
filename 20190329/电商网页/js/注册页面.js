$(function(){
	$("#register").html("<div class='pic'></div>" +
	"<p>注册</p>" +
	"<a class='a'href='http://127.0.0.1:8020/www/%E7%94%B5%E5%95%86%E7%BD%91%E9%A1%B5/html/%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2.html'>取消</a>"
    );
    $("#content").html("<div class='in'><input type='text' maxlength='11' name='anwser' placeholder='手机号码' />" +
    "<br /><br /><input type='password'  maxlength='6' placeholder='六位数字密码' /></div>" 
    );
    $("#code").html("<div class='code1'><input type='text' name='code' placeholder='输入验证码' /></div>" +
    "<div class='code2'><a href='#'><input type='submit' value='获取验证码'/></a></div>"
    );
    $("#click").html(
    "<div class='login'><a href='http://127.0.0.1:8020/www/%E7%94%B5%E5%95%86%E7%BD%91%E9%A1%B5/html/%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2.html'><input type='submit' value='确认注册'/></a></div>"
    );
})