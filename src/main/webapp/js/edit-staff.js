/**
 * Created by Administrator on 2017/11/1.
 */
$(".js-edit-staff").click(function () {
    BootstrapDialog.show({
        title: "编辑员工",
        message: function (dialog) {
            var $message = $('<div></div>');
            var pageToLoad = dialog.getData('pageToLoad');
            $message.load(pageToLoad);
            return $message;
        },
        data: {
            'pageToLoad': 'edit-staff.html'
        },
        buttons: [
            {
                label: "取消", cssClass: "btn-default",
                action: function (cancel) {
                    cancel.close();
                }
            },
            {
                label: "确定", cssClass: "btn-primary",

            }]
    });
});