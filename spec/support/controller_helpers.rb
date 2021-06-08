# frozen_string_literal: true

module ControllerHelpers
  def login_with(user)
    allow(controller).to receive(:authenticate_user!).and_return(true)
    allow(controller).to receive(:current_user).and_return(user)
  end
end
