import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';

 class DishDetail extends Component{
    
    render(){
            const dish = this.props.model
            const listOfComments = dish.comments.map((Comment)=>{
               return(
                   <div>
                       {/* <Card key={Comment.id}>
                           <CardText>{Comment.Comment}</CardText>
                           <CardText>{Comment.author}</CardText>
                           <CardText>{Comment.date}</CardText>
                       </Card> */}
                       {Comment.comment} <br/>
                       {Comment.author}<br/>
                       {Comment.date}<br/>
                   </div>
               );
            }) ;
        
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                <Card >
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>    
                </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                <Card>
                {listOfComments}
                </Card>
                </div>
            </div>
            
        );
 }
}
 export default DishDetail;