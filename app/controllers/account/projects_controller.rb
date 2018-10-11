class Account::ProjectsController < ApplicationController
  def index
    @projects = Project.all.order(id: :desc)
  end

  def show
    @project = Project.find(params[:id])
    @tasks = @project.tasks
  end

  def create
    project = Project.create(project_params)
    redirect_to account_projects_path
  end

  private

  def project_params
    params.require(:project).permit(:name)
  end
end
