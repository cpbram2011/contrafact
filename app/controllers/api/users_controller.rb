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

    def findusername
        
        @user = User.find_username(params[:username])
        if @user
            render json: true
        else
            render json: false
        end
            
    end

    def index 
        @users = User.limit(3)
        render :index    
    end

    def findemail
        @user = User.find_email(params[:email])
        
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
