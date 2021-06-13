# frozen_string_literal: true

class CommentsController < ApplicationController
  before_action :authenticate_user!

  def create
    @task = Task.find(params[:task_id])
    @comment = @task.comments.create!(comment_params)
    render json: {
      comment: @comment
    }, status: :created
  end

  private

  def comment_params
    params.require(:comment).permit(:comment)
  end
end
