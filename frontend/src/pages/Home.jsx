import { React, useState, useEffect } from "react";
import NoteModal from "../modals/NoteModal";
import ActiveNotes from "./ActiveNotes";
import ArchivedNotes from "./ArchivedNotes";
import instance from "../api/api";

const Home =()=> {
    let dataInit = {
        title:'',
        content:'',
        active:true
    };
    const [noteDataList, setNoteDataList] = useState([]);
    const [home, setHome] = useState(true);
    const [showNoteModal, setShowNoteModal] = useState(false);
    const [edit, setEdit] = useState(false);
    const [noteData, setNoteData] = useState(dataInit);
    const [errors, setErrors] = useState({});

    useEffect(()=>{
        readNotes();
    },[]);

    const switchViews =()=> {
        setHome(!home);
    }

    //Modal
    const showModal =()=> {
        setShowNoteModal(true);
    }
    const hideNoteModal =()=> {
        setShowNoteModal(false);
        setEdit(false);
        setNoteData(dataInit);
    }

    //CRUD
    const createNote =()=> {
        instance.post('', noteData)
        .then( response => {
            hideNoteModal();
            readNotes();}
        );
        setNoteData(dataInit);
    }
    const readNotes =()=> {
        instance.get('')
        .then(
            response => {
                setNoteDataList(response.data)
            }
        );
    }
    const updateNote =(id)=> {
        hideNoteModal();
        instance.put(`/${id}`, noteData)
        .then(response => {
            readNotes();
            setEdit(false);
        })
    }
    const deleteNote =(e, id)=> {
        instance.delete(`/${id}`)
        .then(response => {
            readNotes();
        })
    }

    //Archive
    const archiveNote =(e, id, active)=>{
        instance.put(`/${id}`, {...noteDataList.find(i => i.id == id), ['active'] : (active)?false:true})
        .then(response => {
            readNotes();
        })

    }

    //Errors
    const errorsExist =()=> {
        const { title, content } = noteData;
        const newErrors = {};
        if(!title || title == ''){
            newErrors.title = 'Title is required';
        }
        if(!content || content == ''){
            newErrors.content = 'Content is required';
        }
        return newErrors;
    }

    //Forms
    const handleChange =(property, value)=> {
        setNoteData({...noteData, [property]: value })
        if(errors[property]){
            setErrors({...errors, [property] : null})
        }
    }
    const handleSubmit =(e, isEdit)=> {
        e.preventDefault();
        const newErrors = errorsExist();
        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors);
        } else {
            (isEdit) ? updateNote(noteData.id) : createNote();
        }
    }

    //Edit
    const editNote =(e, id)=> {
        setEdit(true);
        showModal();
        setNoteData(noteDataList.find(i => i.id == id));
    }

    return(
        <>
            {(home) ? <ActiveNotes data={noteDataList.filter(i=>i.active==true)} switchViews={switchViews} showModal={showModal} editNote={editNote} deleteNote={deleteNote} archiveNote={archiveNote} /> : <ArchivedNotes data={noteDataList.filter(i=>i.active!=true)} switchViews={switchViews} editNote={editNote} deleteNote={deleteNote} archiveNote={archiveNote}/> }
            <NoteModal 
            show={showNoteModal} 
            onHide={hideNoteModal} 
            isEdit={edit} 
            noteData={noteData}
            handleChange={handleChange} 
            handleSubmit={handleSubmit}
            updateNote={updateNote}
            errors={errors} />
        </>
    );
}

export default Home;