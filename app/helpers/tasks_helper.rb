# frozen_string_literal: true

module TasksHelper
  def tasks_with_comments(tasks)
    tasks.map do |task|
      {
        id: task.id,
        content: task.content,
        deadline: task.deadline,
        completed: task.completed,
        comments: task.comments
      }
    end
  end
end
