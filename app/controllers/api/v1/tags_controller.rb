class Api::V1::TagsController < ApplicationController
  before_action :set_tags, only: [:update, :destroy]

  def index
    @tags = current_user.tags
    render :json => @tags.to_json()
  end

  def create
    @tag = Tag.find_or_create_by(tag_params)
    render json: { message: "Tag criada com sucesso!" }, status: :ok
  end

  def update
  end

  def destroy
    @tag = Tag.find_by(title: params[:title], user: current_user)
    @note = Note.find(params[:note_id])
    @note.tags.delete(@tag.id)
    @tag.destroy if @tag.notes.count == 0

    render json: { message: "Tag removida com sucesso!" }, status: :ok
  end

  private

    def tag_params
      params.require(:tag).permit(:title).merge(user: current_user)
    end

    def set_tag
      @note = Note.find(params[:note_id])
    end
end
