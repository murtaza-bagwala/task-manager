# frozen_string_literal: true

class Comment < ApplicationRecord
  belongs_to :task
  validates :comment, presence: true
end
