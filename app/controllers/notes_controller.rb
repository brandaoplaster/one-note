class NotesController < ApplicationController
  
  def create
    @note = Note.new(note_params.merge(user: current_user))

    if @note.save
      render json: { message: "Nota criada com sucesso!" }, status: :created
    else
      render json: { message: "Error ao criar a nota, tente mais tarde!" }, status: :unprocessable_entity
    end
  end

  def update
  end

  def destroy
  end

  def index
  end

  def show
  end

  private 

    def note_params
      params.require(:note).permit(:title, :body)
    end
end
