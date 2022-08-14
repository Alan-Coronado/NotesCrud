import { Button, Card, Col, Row } from "react-bootstrap";

const Note =(props)=> {
    const { data, editNote, deleteNote, archiveNote } = props;
    const { id, title, content, active } = data;

    return(
        <Col>
            <Card xs={4} key={props.key} className="mb-2">
                <Card.Title className="text-center" >{title}</Card.Title>
                <Card.Body>
                    <Row>
                        <Col><i className="bi-sticky" style={{'fontSize':'6rem'}} /></Col>
                        <Col>{content}</Col>
                    </Row>
                </Card.Body>
                <Card.Footer className="text-end"> 
                    <Button variant="light" onClick={e => archiveNote(e, id, active)} >{(!active)? <i className="bi-upload" /> : <i className="bi-archive-fill" />}</Button>
                    <Button variant="light" onClick={e => editNote(e, id)} >{<i className="bi-pencil-fill" />}</Button>
                    <Button variant="light" onClick={e => deleteNote(e, id)} >{<i className="bi-trash-fill" />}</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default Note;