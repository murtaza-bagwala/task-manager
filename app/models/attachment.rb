# frozen_string_literal: true

class Attachment < ApplicationRecord
  belongs_to :task
  mount_uploader :name, FileUploader

  def serialize_attributes
    {
      id: id,
      name: name.file.filename,
      url: name.url
    }
  end
end
