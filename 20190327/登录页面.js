$(function(){
	$("#register").html("<div class='pic'></div>" +
	"<p>登录</p>" +
	"<span>取消</span>"
    );
    $("#content").html("<div class='in'><input type='text' name='anwser'placeholder='请输入你的用户名' />" +
    "<br /><br /><input type='password' placeholder='请输入密码' /></div>" +
    "<a class=a1 href='#'>忘记密码？</a>" +
    "<a class=a2 href='#'>立即注册</a>"
    );
    $("#click").html(
    "<a href='https://www.baidu.com' target='_blank'><input type='submit' value='login'/></a>"
    )
})