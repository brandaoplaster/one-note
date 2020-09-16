class Api::V1::TagNotesController < ApplicationController
  before_action :set_tag_notes, only: [:destroy]

  def create
    @tag_note = TagsNote.new(tag_notes_params)
    if @tag_note.save
      render json: { message: "Adicionado tag a esta note com sucesso!" }, status: :created
    else
      render :json { message: "Erro ao adicionar tag a esta note!" }, status: :unprocessable_entity
    end
  end

  def destroy
    @tag_note.destroy
    render json: { message: "Desvinculado  com sucesso!" }, status: :ok
  end

  private

    def tag_notes_params
      params.require(:tag_note).permit(:tag_id, :note_id)
    end

    def set_tag_notes
      @tag_note = TagsNote.find(tag_id: params[:tag_id], note_id: params[:note_id])
    end
end
