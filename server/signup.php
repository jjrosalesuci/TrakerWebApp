<?php 

    /*
    @user = User.create auth_params
    render json: { token: Token.encode(@user.id) }
    
     */
     
     echo json_encode(array('token'=>'123132'));
?>