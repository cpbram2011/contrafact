class Api::UsersController < ApplicationController

    def create 
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def find
        
        @user = User.find_username(params[:username])
        if @user
            render json: true
        else
            render json: false
        end
            
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
