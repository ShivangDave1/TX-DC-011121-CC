class CreateAppearances < ActiveRecord::Migration[5.1]
  def change
    create_table :appearances do |t|
      t.references :guest
      t.references :episode
      t.integer :rating
      t.timestamps
    end
  end
end
