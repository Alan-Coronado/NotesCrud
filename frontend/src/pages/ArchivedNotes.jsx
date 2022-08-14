import { Container, Row, Col } from "react-bootstrap";
import ListNotes from "../components/ListNotes";

const ArchivedNotes =(props)=> {
    const { data, switchViews, editNote, deleteNote, archiveNote } =  props;

    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <h2 >Archived Notes</h2>
                    </Col>
                    <Col>
                        <h2 onClick={switchViews} >{'<'}Go back to unarchived Notes</h2>
                    </Col>
                </Row>
            </Container>
            <Container>
                <ListNotes data={data} editNote={editNote} deleteNote={deleteNote} archiveNote={archiveNote}/>
            </Container>
        </>
    );
}

export default ArchivedNotes;