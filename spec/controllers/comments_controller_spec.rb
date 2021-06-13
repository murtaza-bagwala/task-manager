# frozen_string_literal: true

require 'spec_helper'
require 'rails_helper'

RSpec.describe CommentsController, type: :controller do
  user = FactoryBot.create(:user)

  before(:each) do
    login_with(user)
  end

  describe '#create' do
    context 'When create is called with valid attributes' do
      it 'should create a comment and returns status as 201' do
        task1 = FactoryBot.create(:task, user: user)

        payload = {
          comment: {
            comment: 'will check'
          },
          task_id: task1.id
        }

        post :create, params: payload

        expect(response).to have_http_status(201)
        expect(response.parsed_body['comment']['comment']).to eq(payload[:comment][:comment])
      end
    end

    context 'When create is called with empty comment' do
      it 'should return an error saying invalid attribute' do
        task2 = FactoryBot.create(:task, user: user)

        payload = {
          comment: {
            comment: ''
          },
          task_id: task2.id
        }

        post :create, params: payload

        expect(response).to have_http_status(422)
        expect(response.parsed_body['message']).to eq("Validation failed: Comment can't be blank")
      end
    end
  end
end
