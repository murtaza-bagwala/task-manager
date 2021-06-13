# frozen_string_literal: true

FactoryBot.define do
  factory :task do
    content { 'MyText' }
    deadline { Time.now.strftime('%FT%R') }
    user { nil }

  factory :task_with_comments do

      after(:create) do |task, evaluator|
        create_list(:comment, 2, task: task)
      end
    end  
  end
end
