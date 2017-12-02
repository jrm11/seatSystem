/**
 * Created by Administrator on 2017/11/11.
 */
$(function () {
    $(".index-item").click(function () {
        location.href = "student-detail.html"
    })
    $(".js-del-train-camp").click(function (e) {
        var This = $(this);
        e.stopPropagation();
        BootstrapDialog.show({
            title: "删除训练营",
            message: "确认删除此训练营?",
            size: BootstrapDialog.SIZE_SMALL,
            type: BootstrapDialog.TYPE_DANGER,
            buttons: [
                {
                    label: "取消", cssClass: "btn-default",
                    action: function (cancel) {
                        cancel.close();
                    }
                }, {
                    label: "确定", cssClass: "btn-primary",
                    action: function (cancel) {
                        This.parent().parent().parent().parent().parent().remove();
                        cancel.close();
                    }
                }]
        });

    });

//        当没有训练营的时提示用户添加训练营
    (function () {
        var len = $(".js-index-content ul li").length;
        if (len == 0) {
            BootstrapDialog.show({
                title: "",
                message: "当前没有训练营，是否添加训练营?",
                size: BootstrapDialog.SIZE_SMALL,
                type: BootstrapDialog.TYPE_PRIMARY,
                buttons: [
                    {
                        label: "取消", cssClass: "btn-default",
                        action: function (cancel) {
                            cancel.close();
                        }
                    }, {
                        label: "确定", cssClass: "btn-primary",
                        action: function () {
                            location.href = "add-training-camp.html";
                        }
                    }
                ]
            });
        }
    })();
});
