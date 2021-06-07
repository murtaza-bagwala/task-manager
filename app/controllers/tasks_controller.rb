class TasksController < ApplicationController
	before_action :authenticate_user!

	def index
    @tasks = current_user.tasks
    render json: {
    	tasks: @tasks
    }, status: :ok
  end

  def create
    @task = current_user.tasks.create(task_params)
    render json: {
    		task: @task
    }, status: :created
  end

  def update
  	@task = Task.find(params[:id])
		@task.update(task_params)

		render json: {
			task: @task
		}, status: :ok
  end

  def destroy
  	@task = Task.find(params[:id])
  	@task.destroy!
  	render json: {
    		message: "record deleted"
    	}, status: :ok
  end

  private

  def task_params
    params.require(:task).permit(:content, :deadline)
  end
end
