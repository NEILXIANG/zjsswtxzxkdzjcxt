/**
 * Created by JetBrains WebStorm.
 * User: ulear
 * Date: 12-2-23
 * Time: 下午2:15
 * To change this template use File | Settings | File Templates.
 */
$(function () {
    //获取屏幕高度
    var wh = $(window).height();
    $(".wrapper").css("height", wh);
    //错误提示
    $("#login_form").submit(function () {
        $("#un_msg, #pw_msg").show();
        return false;
    });
});