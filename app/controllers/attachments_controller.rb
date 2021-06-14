# frozen_string_literal: true

class AttachmentsController < ApplicationController
  before_action :authenticate_user!

  def create
    @task = Task.find(params[:task_id])
    @attachment = @task.attachments.create!(attachment_params)
    serialized_attachment = @attachment.serialize_attributes

    render json: {
      attachment: serialized_attachment
    }, status: :created
  end

  private

  def attachment_params
    params.permit(:name)
  end
end
