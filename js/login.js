function activate_login_js(){

    // 修改 login 头像
    function login_avatar(img_path){
        $(".login-avatar img:first").attr("src",img_path);
        
    }


    // add login controller to connect btn
    $('.connect-btn button').click(function(){
        var login_name = $('.login-name input[type="text"]').val();
        var login_img_path = $('.login-avatar img').attr('src');
        if(login_name.length != 0 && login_img_path){
            $('.login-window').css('display', 'none');
            $('.app').css('display', 'flex');
            $('.user-wrapper .user-avatar img').attr('src', login_img_path);
            $('.user-wrapper .user-name').text(login_name);
        }else{
            alert('User name can not be empty!');
            return;
        }
        
    });

    $(".avatar-options img").each(function(){
        $(this).click (function(){
            $(".avatar-options img").each(function(){
                $(this).removeClass('avatar-focus')
            })
            $(this).addClass('avatar-focus')
            var img_path = $(this).attr("src");         
            login_avatar(img_path);      
        })
    })

};


