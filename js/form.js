/**
 * Created by JetBrains WebStorm.
 * User: ulear
 * Date: 12-3-13
 * Time: 下午3:19
 * To change this template use File | Settings | File Templates.
 */
$(function () {
    //调用 form样式
    $("form").ligerForm();
    //form提交未填写提示
    $.metadata.setType("attr", "validate");
    var v = $("form").validate({
        debug:true,
        errorPlacement:function (lable, element) {
            if (element.hasClass("l-textarea")) {
                element.ligerTip({ content:lable.html(), target:element[0] });
            } else if (element.hasClass("l-text-field")) {
                element.parent().ligerTip({ content:lable.html(), target:element[0] });
            } else {
                lable.appendTo(element.parents("td:first").next("td"));
            }
        },
        success:function (lable) {
            lable.ligerHideTip();
            lable.remove();
        },
        submitHandler:function () {
            $("form .l-text,.l-textarea").ligerHideTip();
            //console.log("Submitted!")
        }
    });
});