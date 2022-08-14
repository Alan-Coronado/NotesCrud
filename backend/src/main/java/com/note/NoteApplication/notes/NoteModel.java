package com.note.NoteApplication.notes;

import javax.persistence.*;

@Entity
@Table(name = "notes")
public class NoteModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private Boolean active;


    //constructors
    public NoteModel() {
    }
    public NoteModel(String title, String content, Boolean active) {
        this.title = title;
        this.content = content;
        this.active = active;
    }
    public NoteModel(Long id, String title, String content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
    public NoteModel(Long id, String title, String content, Boolean active) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.active = active;
    }


    //getters
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

    //setters
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