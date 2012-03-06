/**
 * Created by JetBrains WebStorm.
 * User: ulear
 * Date: 12-3-1
 * Time: 上午9:14
 * To change this template use File | Settings | File Templates.
 */
var proData =
    [
        { id:1, text:'杭州市' },
        { id:2, text:'宁波市' },
        { id:3, text:'温州市' },
        { id:4, text:'嘉兴市' },
        { id:5, text:'湖州市' },
        { id:6, text:'绍兴市' },
        { id:7, text:'金华市' },
        { id:8, text:'衢州市' },
        { id:9, text:'舟山市' },
        { id:10, text:'台州市' },
        { id:11, text:'丽水市' }
    ];
var cityData =
    [
        { id:1, text:'上城区', pid:1 },
        { id:2, text:'下城区', pid:1 },
        { id:3, text:'市辖区', pid:2 },
        { id:4, text:'海曙区', pid:2 },
        { id:5, text:'市辖区', pid:3 },
        { id:6, text:'海曙区', pid:3 },
        { id:7, text:'市辖区', pid:4 },
        { id:8, text:'海曙区', pid:4 },
        { id:9, text:'市辖区', pid:5 },
        { id:10, text:'海曙区', pid:5 },
        { id:11, text:'市辖区', pid:6 },
        { id:12, text:'海曙区', pid:6 },
        { id:13, text:'市辖区', pid:7 },
        { id:14, text:'海曙区', pid:7 },
        { id:15, text:'市辖区', pid:8 },
        { id:16, text:'海曙区', pid:8 },
        { id:17, text:'市辖区', pid:9 },
        { id:18, text:'海曙区', pid:9 },
        { id:19, text:'市辖区', pid:10 },
        { id:20, text:'海曙区', pid:10 },
        { id:21, text:'市辖区', pid:11 },
        { id:22, text:'海曙区', pid:11 }
    ];

$("#txtPro").ligerComboBox({ data:proData, isMultiSelect:false,
    onSelected:function (newvalue) {
        var newData = new Array();
        for (var i = 0; i < cityData.length; i++) {
            if (cityData[i].pid == newvalue) {
                newData.push(cityData[i]);
            }
        }
        $("#txtCity").ligerGetComboBoxManager().setData(newData);
    }
});
$("#txtCity").ligerComboBox({ data:null, isMultiSelect:false, isShowCheckBox:false,
    onSelected:function (cityvalue, citytext) {
        //取地市
        //console.log('id:' + cityvalue + ' name:' + citytext);
    }
});