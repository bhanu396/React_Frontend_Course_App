import React ,{ Component}from "react";
import { Button, Label , Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props)
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
            isModalOpen : false
        }
        
    }
    handleSubmit(values){
        console.log("current state is" + JSON.stringify(values));
        alert("current state is" + JSON.stringify(values));
    }
    toggleModal(){
        this.setState({
            isModalOpen :!this.state.isModalOpen
        });
    }
    render(){
        return(
            <div>
                <Button color="secondary" outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg">Submit Comment</span>
                </Button>
            <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                        <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
    
                            <Row className="form-group">
                                <Label md={12} htmlFor="rating">Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={12} htmlFor="userName">User Name</Label>
                                <Col md={12}>
                                    <Control.text model=".userName" name ="userName"
                                    className="form-control"
                                    placeholder="Your Name"
                                    validators={{
                                        required, minLength : minLength(3), maxLength: maxLength(15)
                                    }}/>
                                    <Errors className="text-danger" model=".userName" show="touched" 
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 3 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                    
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>

                        </ModalBody>
                    </Modal>
            </div>
            
        )
    }
}

export default CommentForm;