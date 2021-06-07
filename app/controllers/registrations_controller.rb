class RegistrationsController < Devise::RegistrationsController
  before_action :configure_permitted_parameters

  def create
    user = User.new(sign_up_params)
    if user.save
      token = user.generate_jwt
      render json: { token: token }, status: :created
    else
      render json: { errors: { 'email or password' => ['is invalid'] } }, status: :unprocessable_entity
    end

  end

  protected
    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :avatar])
      devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name, :avatar])
    end
end
