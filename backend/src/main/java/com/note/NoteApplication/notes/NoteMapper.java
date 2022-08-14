package com.note.NoteApplication.notes;

public interface NoteMapper {
    NoteDTO toDTO(NoteModel entity);
    NoteModel fromDTO(NoteDTO entity);
}
