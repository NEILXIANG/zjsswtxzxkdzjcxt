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
//name 就是 iframe 的 id 和 name 值
function open(url, name, width, height, title) {
    $.ligerDialog.open({ url:url, name:name, width:width, height:height, title:title, buttons:[
        { text:'确定', onclick:function (item, dialog) {
            //提交连接
            dialog.setUrl("#");
            //运行 iframe 内的方法
            //window.frames['myFrame'].say();
            //提交 iframe 里的 form
            //window.frames['ysl'].document.forms['form1'].submit();
        } },
        { text:'取消', onclick:function (item, dialog) {
            dialog.hidden();
        } }
    ], isResize:true
    });
}