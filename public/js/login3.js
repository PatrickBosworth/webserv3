$(document).ready(function(){
    $("#login").click(function(){
    var user = $("#user").val();
    var password = $("#password").val();
    var tenant = $("#tenant").val();
    // Checking for blank fields.
    if( user =='' || password =='' || tenant ==''){
    $('input[type="text"],input[type="password"]').css("border","2px solid red");
    $('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
    alert("Please fill all fields...!!!!!!");
    }else {
    console.log("booyah");
    console.log(user)
    $.get("https://demo.sytelhosting.com:446/softdial/repository/default/api/auth/user",
    function(data) {
        console.log("hello");
        console.log(data);
    if(data=='Invalid Email.......') {
    $('input[type="text"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
    $('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
    alert(data);

    }else if(data=='Email or Password is wrong...!!!!'){
    $('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
    alert(data);

    } else if(data=='Successfully Logged in...'){
        console.log("success!!!")
    $("form")[0].reset();
    $('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
    alert(data);

    } else{
    alert(data);
    console.log("here we are!")
    }
    });
    }
    });
    });