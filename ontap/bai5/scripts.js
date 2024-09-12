$(document).ready(function() {
    $("#myform").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            pwd: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            name: {
                required: "Vui lòng nhập tên"
            },
            email: {
                required: "Vui lòng nhập email",
                email: "Email không hợp lệ"
            },
            pwd: {
                required: "Vui lòng nhập mật khẩu",
                minlength: "Vui lòng nhập mật khẩu nhiều hơn 7 kí tự"
            }
        }
    });
});
