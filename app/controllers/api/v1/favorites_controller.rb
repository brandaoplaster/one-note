class Api::V1::FavoritesController < ApplicationController
  before_action :set_favorite, only: :destroy

  def index
    @favorites = current_user.favorites
    render :json => @favorites.to_json(:include => [:note])
  end

  def create
    count_favorite = Favorite.where(user_id: current_user.id).count
    if count_favorite < 2
      @favoritable = Favorite.new(favorite_params)

      if @favoritable.save
        render json: { message: 'Successfully favored!' }, status: :created
      else
        render json: { message: 'Error favorite this note!' }, status: :unprocessable_entity
      end
    else
      render json: { message: "You can't favorite more than 5 notes" }, status: :unprocessable_entity
    end
  end

  def destroy
    @favorite.destroy
    head :ok
  end

  private

  def favorite_params
    params.require(:favorite).permit(:note_id).merge(user: current_user)
  end

  def set_favorite
    @favorite = Favorite.find_by(note_id: params[:note_id])
  end
end