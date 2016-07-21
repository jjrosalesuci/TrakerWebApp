<?php 

    /*@user = User.find_by email: params[:email] if params[:email].present?

    if @user && @user.authenticate(params[:password])
      render json: { token: Token.encode(@user.id) }
    else
      render json: { message: 'Invalid credentials' }, status: :unauthorized
    end    
    */
    
    
    echo json_encode (array('token'=>'636353'));
?>