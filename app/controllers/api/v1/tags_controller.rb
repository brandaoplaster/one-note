class Api::V1::TagsController < ApplicationController

  def index
    @tags = current_user.tags
    render :json => @tags.to_json()
  end

  def add_to_note
    @tag = Tag.find_or_create_by(title: params[:title], user: current_user)
    @note = Note.find(params[:note_id])
    @note.tags << @tag
  end

  def remove_from_note
    @tag = Tag.find_by(title: params[:title], user: current_user)
    @note = Note.find(params[:note_id])
    @note.tags.delete(@tag.id)
    @tag.destroy if @tag.notes.count == 0

    render json: { message: "Tag removida com sucesso!" }, status: :ok
  end
end
