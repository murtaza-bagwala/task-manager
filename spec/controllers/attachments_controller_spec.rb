# frozen_string_literal: true

require 'spec_helper'
require 'rails_helper'

RSpec.describe AttachmentsController, type: :controller do
  user = FactoryBot.create(:user)

  before(:each) do
    login_with(user)
  end

  describe '#create' do
    context 'When create is called with valid attributes' do
      it 'should create an attachment and returns status as 201' do
        task1 = FactoryBot.create(:task, user: user)

        payload = {
          name: Rack::Test::UploadedFile.new("#{Rails.root}/spec/fixtures/file.jpeg"),
          task_id: task1.id
        }

        post :create, params: payload

        expect(response).to have_http_status(201)
        expect(response.parsed_body['attachment']['name']).to eq('file.jpeg')
      end
    end

    context 'When create is called with restricted file type' do
      it 'should return an error saying invalid attribute' do
        task2 = FactoryBot.create(:task, user: user)

        payload = {
          name: Rack::Test::UploadedFile.new("#{Rails.root}/spec/fixtures/test.mkv"),
          task_id: task2.id
        }

        post :create, params: payload

        expect(response).to have_http_status(422)
        expect(response.parsed_body['message']).to eq('Validation failed: Name You are not allowed to upload "mkv" files, allowed types: jpg, jpeg, gif, png, pdf')
      end
    end
  end
end
