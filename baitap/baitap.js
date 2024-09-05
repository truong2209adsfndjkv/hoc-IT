
function register(){
    var fullName = document.getElementById("fullname").value;
    var email = document.getElementById('email').value;
    var passWord = document.getElementById("password").value;
    var confirmPassWord = document.getElementById('confirmpassword').value;
    var birthDay = document.getElementById('birthday').value;

    if (fullName === "" || email === "" || passWord === "" || confirmPassWord === "" || birthDay === ""){
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
    }else if (passWord !==confirmPassWord){
        alert("vui lòng điền mật khẩu trùng khớp");
        return;
    }else{
        console.log("Mật khẩu hợp lệ")
    }
    
 

    localStorage.setItem("fullname",`${fullName}`)
    localStorage.setItem("email",`${email}`)
    localStorage.setItem("passWord",`${passWord}`)
    localStorage.setItem("birthDay",`${birthDay}`)

    $("#fullname").val("");
    $("#email").val("");
    $("#password").val("")
    $("#confirmpassword").val("")
    $("#birthday").val("")
}
function reset(){
    $("#fullname").val("");
   $("#email").val("");
   $("#password").val("")
   $("#confirmpassword").val("")
   $("#birthday").val("")
    
}
