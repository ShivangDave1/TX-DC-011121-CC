class CreateAppearances < ActiveRecord::Migration[5.1]
  def change
    create_table :appearances do |t|
      t.references :episode, foreign_key: true
      t.references :guest, foreign_key: true
      t.integer :rating

      t.timestamps
    end
  end
end
