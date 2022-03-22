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

    context 'When create is called with empty content' do
      it 'should return an error saying invalid attribute' do
        payload = {
          task: {
            content: ''
          }
        }

        post :create, params: payload

        expect(response).to have_http_status(422)
        expect(response.parsed_body['message']).to eq("Validation failed: Content can't be blank")
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
            deadline: Time.now.strftime('%FT%R'),
            completed: true
          },
          id: task.id
        }

        put :update, params: payload
        expect(response).to have_http_status(200)
        expect(response.parsed_body['task']['content']).to eq(payload[:task][:content])
        expect(response.parsed_body['task']['deadline']).to include(payload[:task][:deadline])
        expect(response.parsed_body['task']['completed']).to eq(payload[:task][:completed])
      end
    end

    context 'When update is called with past deadline' do
      it 'should return an error with status as 422' do
        task = FactoryBot.create(:task, user: user)

        payload = {
          task: {
            content: 'watch movie',
            deadline: '2021-06-01T10:30',
            completed: true
          },
          id: task.id
        }

        put :update, params: payload
        expect(response).to have_http_status(422)
        expect(response.parsed_body['message']).to eq("Validation failed: Deadline can't be in the past")
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
