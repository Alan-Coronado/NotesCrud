package com.note.NoteApplication.notes;

import java.util.List;
import java.util.Optional;

public interface NoteService {
    List<NoteDTO> listAll();
    Optional<NoteDTO> getById(Long id);
    NoteDTO save(NoteDTO noteDTO);
    NoteDTO update(NoteDTO noteDTO);
    void delete(Long id);
}
