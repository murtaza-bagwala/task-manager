class TasksController < ApplicationController
  before_action :authenticate_user!
  include TasksHelper

  def index
    @tasks = current_user.tasks
    	.select(:id, :content, :deadline, :completed)
    	.includes(:comments)

   	tasks_with_comments = helpers.tasks_with_comments(@tasks)
   
    render json: {
      tasks: tasks_with_comments
    }, status: :ok
  end

  def create
    @task = current_user.tasks.create!(task_params)
    render json: {
      task: @task
    }, status: :created
  end

  def update
    @task = Task.find(params[:id])
    @task.update!(task_params)

    render json: {
      task: @task
    }, status: :ok
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy!
    render json: {
      message: 'record deleted'
    }, status: :ok
  end

  private

  def task_params
    params.require(:task).permit(:content, :deadline, :completed)
  end
end
