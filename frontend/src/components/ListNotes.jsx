import { Row } from "react-bootstrap";
import Note from "./Note";

const ListNotes =(props)=> {
    const { data, editNote, deleteNote, archiveNote } = props; 

    return(
        <Row xs={1} md={2} lg={3} >
            {
                data.map(
                    (i, index)=>(
                      <Note data={i} index={index} editNote={editNote} deleteNote={deleteNote} archiveNote={archiveNote} />
                    )
                )
            }
        </Row>
    );
}

export default ListNotes;