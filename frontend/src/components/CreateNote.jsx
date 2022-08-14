import { Button } from "react-bootstrap";

const CreateNote =(props)=> {
    const {showModal} = props;

    return(
        <Button variant='light' onClick={showModal} >Create Note</Button>
    );
}

export default CreateNote;