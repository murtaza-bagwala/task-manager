module ExceptionHandler
  extend ActiveSupport::Concern

  included do
    rescue_from ActionController::UnknownFormat, with: :unsupported_media_type
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound do |e|
      json_response({ message: e.message }, :not_found)
    end
  end

  def not_found
    msg = I18n.t 'controllers.report.query.record_not_found'
    render_with_options(
      json: { error: msg },
      status: :not_found
    )
  end

  private

  # JSON response with message; Status code 422 - unprocessable entity
  def unprocessable_entity(e)
    json_response({ message: e.message }, :unprocessable_entity)
  end

  def json_response(object, status = :ok)
    render json: object, status: status
  end

end