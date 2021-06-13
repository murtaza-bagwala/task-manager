class Task < ApplicationRecord
  belongs_to :user
  validates :content, presence: true

  validate :deadline_cannot_be_in_the_past

  has_many :comments

  def deadline_cannot_be_in_the_past
    if deadline.present? && deadline < Date.today
      errors.add(:deadline, "can't be in the past")
    end
  end    
end
