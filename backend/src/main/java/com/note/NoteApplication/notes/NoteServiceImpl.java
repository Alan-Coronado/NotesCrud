package com.note.NoteApplication.notes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class NoteServiceImpl implements NoteService {

    private final NoteRepository noteRepository;
    private final NoteMapper noteMapper;

    @Autowired
    public NoteServiceImpl(NoteRepository noteRepository, NoteMapper noteMapper) {
        this.noteRepository = noteRepository;
        this.noteMapper = noteMapper;
    }

    @Override
    public List<NoteDTO> listAll() {
        return noteRepository.findAllByOrderByIdAsc()
                .stream()
                .map(this.noteMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<NoteDTO> getById(Long id) {
        return noteRepository.findById(id)
                .map(this.noteMapper::toDTO);
    }

    @Override
    public NoteDTO save(NoteDTO noteDTO) {
        boolean exists = noteDTO.getId() != null && noteRepository.existsById(noteDTO.getId());
        if(exists){

        }
        return this.noteMapper.toDTO(noteRepository.save(this.noteMapper.fromDTO(noteDTO)));
    }

    @Override
    public NoteDTO update(NoteDTO noteDTO) {
        boolean exists = noteRepository.existsById(noteDTO.getId());
        if(!exists){

        }
        return this.noteMapper.toDTO(noteRepository.save(this.noteMapper.fromDTO(noteDTO)));
    }

    @Override
    public void delete(Long id) {
        boolean exists = noteRepository.existsById(id);
        if(!exists){

        }
        noteRepository.deleteById(id);
    }
}