# frozen_string_literal: true

FactoryBot.define do
  factory :task do
    content { 'MyText' }
    deadline { '2021-06-07 20:59:38' }
    user { nil }
  end
end
