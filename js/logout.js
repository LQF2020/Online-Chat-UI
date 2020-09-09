function activate_logout_js(){
    
    // add log out controller to log_out button
    $('#log-out').click(function(){
        $('.app').css('display', 'none');
        $('.login-window').css('display', 'flex'); 
    })
 
}