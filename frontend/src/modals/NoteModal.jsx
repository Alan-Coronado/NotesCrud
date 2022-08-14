import { Button, Form, Modal } from "react-bootstrap";

const NoteModal =(props)=> {
    const {show, onHide, isEdit, noteData, handleChange, handleSubmit,errors } = props;

    return(
        <Modal
            show={show}
            onHide={onHide}
            centered={true}
            backdrop='static'
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title>{(isEdit)? 'Edit Note' : 'Create Note' }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                        type="text"
                        value={noteData.title}
                        onChange={e => (handleChange('title', e.target.value))}
                        isInvalid={errors.title}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.title}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Content</Form.Label>
                        <Form.Control
                        as='textarea'
                        rows={3}
                        value={noteData.content}
                        onChange={e => (handleChange('content', e.target.value))}
                        isInvalid={errors.content}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.content}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='light' onClick={onHide} >Cancel</Button>
                <Button variant='light' onClick={e => handleSubmit(e, isEdit)} >Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NoteModal;