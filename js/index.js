/**
 * Created by JetBrains WebStorm.
 * User: ulear
 * Date: 12-2-28
 * Time: 上午10:14
 * To change this template use File | Settings | File Templates.
 */
var tab = null;
var accordion = null;
var tree = null;
$(function () {
    //home高度滚动条
    $("#home").css("overflow-y", "auto");
    //布局
    $("#layout1").ligerLayout({
        topHeight:96,
        leftWidth:190,
        bottomHeight:20,
        height:'100%',
        onHeightChanged:f_heightChanged
    });
    var height = $(".l-layout-center").height();
    //Tab
    $("#framecenter").ligerTab({
        height:height
    });
    //面板
    $("#accordion1").ligerAccordion({
        height:height - 24,
        speed:null
    });
    $(".l-link").hover(function () {
        $(this).addClass("l-link-over");
    }, function () {
        $(this).removeClass("l-link-over");
    });
    //树
    $("#tree1").ligerTree({
        checkbox:false,
        nodeWidth:360,
        attribute:['nodename', 'url'],
        onSelect:function (node) {
            if (!node.data.url)
                return;
            var tabid = $(node.target).attr("tabid");
            if (!tabid) {
                tabid = new Date().getTime();
                $(node.target).attr("tabid", tabid)
            }
            f_addTab(tabid, node.data.text, node.data.url);
        }
    });
    tab = $("#framecenter").ligerGetTabManager();
    accordion = $("#accordion1").ligerGetAccordionManager();
    tree = $("#tree1").ligerGetTreeManager();
    dcwj_auto_open();
    $("#pageloading").hide();
});
function f_heightChanged(options) {
    if (tab) {
        tab.addHeight(options.diff);
    }
    if (accordion && options.middleHeight - 24 > 0) {
        accordion.setHeight(options.middleHeight - 24);
    }
}
function f_addTab(tabid, text, url) {
    tab.addTabItem({
        tabid:tabid,
        text:text,
        url:url
    });
}
//关闭tab选项卡
function remove_tab() {
    tab.removeSelectedTabItem();
}
//待办事宜
function dcwj_auto_open() {
    var value = "welcome.html";
    tab.addTabItem({ url:value, text:"待办事宜", showClose:false });
}
//报表管理
function xmsh() {
    var value = "bbgl_list.html";
    tab.addTabItem({ url:value, text:"报表管理" });
}