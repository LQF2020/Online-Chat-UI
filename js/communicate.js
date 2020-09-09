function activate_chat_js(){

    // 修改 login 头像
    function login_avatar(img_path) {
        $(".login-avatar img:first").attr("src", img_path);

    }
    $(".avatar-options img").each(function () {
        $(this).click(function () {

            var img_path = $(this).attr("src");
            login_avatar(img_path);
        })
    })

    // left side
    $('.other-users-wrapper .other-user-wrapper').each(function(){
        var _this = this;
        var chatter_name = $(_this.children[1]).text();
        $(_this).click(function(){
            $('.other-users-wrapper .other-user-wrapper').each(function(){
                $(this).removeClass("current-select");
            })
            $(_this).addClass("current-select");
            $('.current-chatter').text(chatter_name)
        })
    })
    // right side
    const me = 1;
    const chatter = 0;
    function my_message_html(incoming_message){
        var newMessage = '<div class="me-wrapper">' +
            '<div class="me-message container">' + incoming_message + '</div>' +
            '<div class="me-avatar">' +
            '<img src="./image/superman.png" alt="...">' +
            '</div></div>';
        return newMessage;
    }

    function chatter_message_html(incoming_message) {
        var newMessage =  '<div class="current-chatter-wrapper">'+
            '<div class="chatter-avatar">'+
                '<img src="./image/iron.png" alt="...">'+
            '</div>'+
                '<div class="chatter-message container">'+incoming_message+'</div>'+

            '</div>';
        return newMessage;
    }

    function update_chatWindow(incoming_message,from) {
        if(from === 1){
            var msg_html = my_message_html(incoming_message);
        }else if(from === 0){
            var msg_html = chatter_message_html(incoming_message);
        }
        $(".chat-window").append(msg_html);
    }
    
    // click btn to send message
    $("#btn-send-message").click(function(){
        var user_input_area = $("#user-input-value");
        if (user_input_area.text().length == 0 ){
            
        }else{
            update_chatWindow(user_input_area.text(), me);
            user_input_area.text("");
            $('.chat-window').scrollTop($('.chat-window')[0].scrollHeight);
        }
        
    });

    // ctrl+enter send message
    $('#user-input-value').keydown(function (e) {
        if ((event.keyCode == 10 || event.keyCode == 13)) {
            $('#btn-send-message').trigger("click");
            event.cancelBubble = true;
            event.preventDefault();
        }
    });

    $('.local-file').click(function(){
        $('#user-file-select').trigger('click');
    })



    
    
}