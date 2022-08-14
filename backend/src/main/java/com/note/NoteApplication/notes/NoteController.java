package com.note.NoteApplication.notes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("notes")
public class NoteController {

    private final NoteService noteService;

    @Autowired
    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping
    public ResponseEntity<List<NoteDTO>> listAll(){
        return ResponseEntity.ok(noteService.listAll());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<NoteDTO>> getById(@PathVariable Long id){
        return ResponseEntity.ok(noteService.getById(id));
    }
    @PostMapping(consumes = {"application/json"})
    public ResponseEntity<NoteDTO> saveNote( @RequestBody NoteDTO noteDTO) {
        NoteDTO savedNote = noteService.save(noteDTO);
        return new ResponseEntity<>(savedNote, HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<NoteDTO> updateNote(@PathVariable Long id, @RequestBody NoteDTO noteDTO){
        noteDTO.setId(id);
        NoteDTO updatedNote = this.noteService.update(noteDTO);
        return ResponseEntity.ok(updatedNote);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNote(@PathVariable Long id){
        noteService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
