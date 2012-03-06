/**
 * Created by JetBrains WebStorm.
 * User: ulear
 * Date: 12-2-28
 * Time: 上午10:03
 * To change this template use File | Settings | File Templates.
 */
$(function () {
    //调用 form样式
    $("form").ligerForm();
    //table 焦点色
    $(".table-even tr").hover(function () {
            $(this).addClass("bgd");
        },
        function () {
            $(this).removeClass("bgd");
        });
    $("#Button3").click(function () {
        var count = $("input[name='busid']:checked").length;
        console.log(count);
    });
    //打印时间
    $("#txt1,#txt2").ligerDateEditor({ format:"yyyy年MM月dd日", labelWidth:100, labelAlign:'center' });
    //全选check
    $("#checkall").click(
        function () {
            if (this.checked) {
                $("input[name='checkname']").each(function () {
                    this.checked = true;
                });
            } else {
                $("input[name='checkname']").each(function () {
                    this.checked = false;
                });
            }
        }
    );
    //预受理显隐
    $("#txtName0").click(function () {
        $(".txtName0").show();
        $(".txtName1").hide();
    });
    $("#txtName1").click(function () {
        $(".txtName0").hide();
        $(".txtName1").show();
    });
    $("#txtName2").click(function () {
        $(".txtName0,.txtName1").hide();
    });
});
//预受理
function a_open1() {
    $.ligerDialog.open({ url:'ysl_small.html', name:'ysl', width:600, height:410, buttons:[
        { text:'确定', onclick:function (item, dialog) {
            //提交连接
            dialog.setUrl("http://127.0.0.1/zjsswtxzxkdzjcxt/");
            //提交 iframe 里的 form
            //window.frames['ysl'].document.forms['form1'].submit();
        } },
        { text:'取消', onclick:function (item, dialog) {
            dialog.hidden();
        } }
    ], isResize:true
    });
}
//承办、审核、批准
function b_open1() {
    $.ligerDialog.open({ url:'pause_small.html', width:600, height:410 });
}
//办结
function d_open1() {
    $.ligerDialog.open({ url:'bj_small.html', width:600, height:410, title:"办结" });
}
// isResize:true
function c_open1() {
    $.ligerDialog.open({ url:'xzcl_small.html', width:300, height:410 });
}
function f_open1() {
    $.ligerDialog.open({ url:'list_small.html', width:700, height:400 });
}
function j_open1() {
    $.ligerDialog.open({ url:'jsgl_small.html', width:600, height:410 });
}
//打印框
function p_open1() {
    $.ligerDialog.open({ url:'print_small.html', width:400, height:410 });
}
function x_open1() {
    $.ligerDialog.open({ url:'zygl_small.html', width:700, height:440 });
}
function y_open1() {
    $.ligerDialog.open({ url:'xzck_small.html', width:300, height:410 });
}
function z_open1() {
    $.ligerDialog.open({ url:'yjzt_small.html', width:300, height:410 });
}
//模仿 window 外层窗口
var wincount = 0;
function title() {
    return '流程配置 ' + ++wincount;
}
function window_open1() {
    $.ligerDialog.open({ url:'lcpz_list.html', width:600, height:410, showMax:true, showToggle:true, showMin:true, isResize:true, modal:false, title:title() });
}
//模仿 window 内层窗口
var wincount_child = 0;
function title_100() {
    return '流程配置添加 ' + ++wincount_child;
}
function window_open100() {
    $.ligerDialog.open({ url:'lcpz_detail.html', width:500, height:350, showMax:true, showToggle:true, showMin:true, isResize:true, modal:false, title:title_100() });
}
//模仿 window 内层窗口
var wincount_tjcl = 0;
function title_200() {
    return '添加材料 ' + ++wincount_tjcl;
}
function window_open200() {
    $.ligerDialog.open({ url:'lcpz_list.html', width:600, height:410, showMax:true, showToggle:true, showMin:true, isResize:true, modal:false, title:title_200() });
}