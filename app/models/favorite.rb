class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :note

  validates_uniqueness_of :note_id, scope: :note, :message => "Note already favored!"
end
