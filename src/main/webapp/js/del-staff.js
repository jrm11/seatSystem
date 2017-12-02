/**
 * Created by Administrator on 2017/11/1.
 */
$(".js-del-staff").click(function () {
    BootstrapDialog.show({
        title: "删除员工",
        message: "确认删除此员工?",
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