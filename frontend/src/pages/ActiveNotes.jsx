import { Container, Row, Col } from "react-bootstrap";
import ListNotes from "../components/ListNotes";
import CreateNote from "../components/CreateNote";

const ActiveNotes =(props)=> {
    const { data, switchViews, showModal, editNote, deleteNote, archiveNote } =  props;

    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <h2>My notes</h2>
                    </Col>
                    <Col>
                        <CreateNote showModal={showModal} />
                    </Col>
                    <Col>
                        <h1 onClick={switchViews}>Archived Notes</h1>
                    </Col>
                </Row>
            </Container>
            <Container>
                {
                    (data == null) ? <p>Agrega una nota</p> : <ListNotes data={data} editNote={editNote} deleteNote={deleteNote} archiveNote={archiveNote}/>
                }
            </Container>
        </>
    );
}

export default ActiveNotes;