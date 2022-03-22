# frozen_string_literal: true

require 'spec_helper'
require 'rails_helper'

RSpec.describe TasksController, type: :controller do
  user = FactoryBot.create(:user)

  before(:each) do
    login_with(user)
  end

  describe '#index' do
    context 'When index is called for the current user' do
      it 'should return status as 200 with lists of all the tasks' do
        task1 = FactoryBot.create(:task, user: user)
        task2 = FactoryBot.create(:task, user: user)

        get :index, { format: :json }
        expect(response).to have_http_status(200)
        expect(response.parsed_body['tasks'].length).to eq(2)
      end
    end
  end

  describe '#create' do
    context 'When create is called with valid attributes' do
      it 'should create a task and returns status as 201' do
        payload = {
          task: {
            content: 'boil water',
            deadline: ''
          }
        }

        post :create, params: payload
        expect(response).to have_http_status(201)
        expect(response.parsed_body['task']['content']).to eq(payload[:task][:content])
      end
    end
  end

  describe '#update' do
    context 'When update is called for the task with id' do
      it 'should update the task and status as 200' do
        task = FactoryBot.create(:task, user: user)

        payload = {
          task: {
            content: 'watch movie',
            deadline: ''
          },
          id: task.id
        }

        put :update, params: payload
        expect(response).to have_http_status(200)
        expect(response.parsed_body['task']['content']).to eq(payload[:task][:content])
      end
    end
  end

  describe '#destroy' do
    context 'When destroy is called with id' do
      it 'should destroy the resource and return status as 200' do
        task = FactoryBot.create(:task, user: user)
        delete :destroy, params: { id: task.id }
        expect(response).to have_http_status(200)
      end
    end
  end
end
