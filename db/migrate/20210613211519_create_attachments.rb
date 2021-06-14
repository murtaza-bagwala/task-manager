class CreateAttachments < ActiveRecord::Migration[6.1]
  def change
    create_table :attachments, id: :uuid do |t|
      t.text :name
      t.text :url
      t.references :task, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
