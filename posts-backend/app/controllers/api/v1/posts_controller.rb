class API::VI::PostsController < ApplicationController

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
            render json :@post
        else 
            render json: {error: 'Error saving post'}
        end
    end 

    def set_user
        @user = User.find(params[:user_id])
    end 
    
    def post_params 
        params.require(:post).permit(:title, :category, :content)
    end 

end
