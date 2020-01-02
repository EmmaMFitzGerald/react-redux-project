module Api
    module V1
        class UsersController < ApplicationController
        
        def index
            @users = User.all 
            render json: @users
        end
        
        def create
            @user = User.new(user_params)
            if @user.save
                render json: :user
            else
                render json: {error: 'Error creating user'}
            end 
        end

        def show
            @user = User.find(params[:id])
            render json: @user
        end

        def destroy
            @user = User.find(params[:id])
            @user.destroy
        end

        def update
            @user = User.find(params[:id])
            @user.update(name: params["user"]["name"])
            @user.save
            render json: @user
        end

        private
        
        def user_params 
            params.require(:user).permit(:name)
        end 
    end
 end
end
