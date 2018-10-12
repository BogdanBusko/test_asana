class Account::TasksController < ApplicationController
  def create
    @project = Project.find(params[:project_id])
    @task = @project.tasks.create(task_params)
    redirect_to account_project_path(@project.id)
  end

  private

  def task_params
    params.require(:task).permit(:title, :description)
  end
end
