/**
 * Created by Administrator on 2017/10/31.
 */
$(()=> {
    "use strict";
    let flag = true;
    let account = $("#js-input-account");
    let pwd = $("#js-input-pwd");
    $("#js-login").click(function () {
        let accountVal = account.val();
        let pwdVal = pwd.val();
        if (accountVal == "123456" && pwdVal == "123456") {
            swal({
                title: '登陆成功',
                type: 'success',
                showCancelButton: false,
                showConfirmButton: false
            });
            setTimeout(function () {
                location.href = "index.html";
            }, 1000);
        } else {
            swal({
                title: '登录失败',
                type: 'error',
                showCancelButton: false,
                showConfirmButton: true
            });
        }
    });

    //点击图标切换显示密码
    $("#js-browse").click(function () {
        if (flag) {
            $(this).attr("src", "../img/off-browse.png");
            $("#js-input-pwd").attr("type", "password");
        } else {
            $(this).attr("src", "../img/on-browse.png");
            $("#js-input-pwd").attr("type", "text");
        }
        flag = !flag;
    });
});
