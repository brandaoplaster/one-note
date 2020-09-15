class Api::V1::TagsController < ApplicationController
  before_action :set_tag, only: [:update, :destroy]

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
    @tag.destroy if @tag.notes.count == 0
    render json: { message: "Tag removida com sucesso!" }, status: :ok
  end

  private

    def tag_params
      params.require(:tag).permit(:title).merge(user: current_user)
    end

    def set_tag
      @tag = Tag.find(params[:id])
    end
end
