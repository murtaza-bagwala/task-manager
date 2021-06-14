# frozen_string_literal: true

module TasksHelper
  def tasks_with_comments_and_attachments(tasks)
    tasks.map do |task|
      {
        id: task.id,
        content: task.content,
        deadline: task.deadline,
        completed: task.completed,
        comments: task.comments,
        attachments: task.attachments.map { |attachment| attachment.serialize_attributes}
      }
    end
  end
end
