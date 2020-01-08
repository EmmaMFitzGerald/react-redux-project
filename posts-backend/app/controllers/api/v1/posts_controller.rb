class Api::V1::PostsController < ApplicationController

        before_action :set_user

        def index
            @posts = @user.posts
            render json: @posts
        end

        def show
            @post = Post.find(param[:id])
            render json: @post
        end

        def create
            @post = @user.posts.new(post_params)
            if @post.save
                render json: @user
            else 
                render json: {error: 'Error saving post'}
            end
        end 

        def update
            @post = Post.find(params[:id])
            @post.update(title: params["post"]["title"], 
                category: params["post"]["category"], 
                content: params["post"]["content"])
            @post.save
            render json: @post
        end

        def destroy
            @post = Post.find(params[:id])
            @user = User.find(@post.user_id)
            @post.destroy 
            render json: @user  
        end 

        private
        def set_user
            @user = User.find(params[:user_id])
        end 
        
        def post_params 
            params.require(:post).permit(:title, :category, :content, :user_id)
        end 

end
  
