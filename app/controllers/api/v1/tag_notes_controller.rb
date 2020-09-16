class Api::V1::TagNotesController < ApplicationController
  def create
    @tag_note = TagsNote.new(tag_notes_params)
    if @tag_note.save
      render json: { message: "Adicionado tag a esta note com sucesso!" }, status: :created
    else
      render :json { message: "Erro ao adicionar tag a esta note!" }, status: :unprocessable_entity
    end
  end

  def destroy
  end

  private

    def tag_notes_params
      params.require(:tag_note).permit(:tag_id, :note_id)
    end
end
