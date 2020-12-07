class Api::CommentsController < ApplicationController


    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render json: true
        else
            render json: false
        end
    end


    def comment_params
        params.require(:comment).permit(:song_id, :body, :author)
    end
end