package com.note.NoteApplication.notes;

import org.springframework.stereotype.Component;

@Component
public class NoteMapperImpl implements NoteMapper {

    @Override
    public NoteDTO toDTO(NoteModel entity) {
        if(entity == null){
            return null;
        }
        NoteDTO noteDTO = new NoteDTO();
        noteDTO.setId(entity.getId());
        noteDTO.setTitle(entity.getTitle());
        noteDTO.setContent(entity.getContent());
        noteDTO.setActive(entity.getActive());

        return noteDTO;
    }

    @Override
    public NoteModel fromDTO(NoteDTO entity) {
        if(entity==null){
            return null;
        }
        NoteModel noteModel = new NoteModel();
        noteModel.setId(entity.getId());
        noteModel.setTitle(entity.getTitle());
        noteModel.setContent(entity.getContent());
        noteModel.setActive(entity.getActive());

        return noteModel;
    }
}