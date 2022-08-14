package com.note.NoteApplication.notes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteRepository extends JpaRepository<NoteModel, Long> {

    List<NoteModel> findAllByOrderByIdAsc();
}
