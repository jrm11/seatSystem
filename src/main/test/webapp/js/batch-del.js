/**
 * Created by Administrator on 2017/11/1.
 */
$(".js-batch-del").click(function () {
    BootstrapDialog.show({
        title: "删除员工",
        message: "确认删除选中的员工?",
        size: BootstrapDialog.SIZE_SMALL,
        type : BootstrapDialog.TYPE_DANGER,
        buttons: [
            {
                label: "取消", cssClass: "btn-default",
                action: function (cancel) {
                    cancel.close();
                }
            },{
                label: "确定", cssClass: "btn-primary",

            }

        ]
    })
    ;
});