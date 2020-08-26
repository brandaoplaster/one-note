class Api::V1::NotesController < ApplicationController
  before_action :set_note, only: [:update, :destroy, :show]

  def create
    @note = Note.new(note_params.merge(user: current_user))

    if @note.save
      render json: { message: "Nota criada com sucesso!" }, status: :created
    else
      render json: { message: "Error ao criar a nota, tente mais tarde!" }, status: :unprocessable_entity
    end
  end

  def update
    if @note.update(note_params)
      render json: {  message: "Nota atualizada com sucesso!" }, status: :ok
    else
      render json: { message: "Error ao atualizar a nota!" }, status: :unprocessable_entity
    end
  end

  def destroy
    @note.destroy
    render json: { message: "Nota removida com sucesso!" }, status: :ok
  end

  def index
    @notes = current_user.notes
    render :json => @notes.to_json(:include => [:users, :tags])
  end

  def show
    render :json => @note.to_json(:include => [:user, :tags])
  end

  private 

    def note_params
      params.require(:note).permit(:title, :body)
    end

    def set_note
      @note = Note.find(params[:id])
    end
end
