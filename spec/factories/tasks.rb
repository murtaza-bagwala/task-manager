# frozen_string_literal: true

FactoryBot.define do
  factory :task do
    content { 'MyText' }
    deadline { Time.now.strftime('%FT%R') }
    user { nil }
  end
end
