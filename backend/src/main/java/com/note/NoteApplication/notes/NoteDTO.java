package com.note.NoteApplication.notes;

public class NoteDTO {
    private Long id;
    private String title;
    private String content;
    private Boolean active;


    public NoteDTO() {
    }
    public NoteDTO(String title, String content) {
        this.title = title;
        this.content = content;
    }
    public NoteDTO(Long id, String title, String content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
    public NoteDTO(Long id, String title, String content, Boolean active) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.active = active;
    }

    public Long getId() {
        return id;
    }
    public String getTitle() {
        return title;
    }
    public String getContent() {
        return content;
    }
    public Boolean getActive() {
        return active;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public void setContent(String content) {
        this.content = content;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }
}