import React, { Component } from 'react';
import { Media } from 'reactstrap';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';

import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
    
        if (dish != null) {
            return (
               

                    <Card >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                               <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                           
                            <h3>{dish.label}</h3>
                            <h4> Price :{dish.price}</h4>
                            <h5> Category :{dish.category} </h5>
                            {dish.description}
                       
                    </Card>
             
            );
        }

        else {
            return
            (

                <div></div>
            )
        }


    }

function RenderComments({ comments }) {
    if (comments != null) {
            const dishcomment = comments.map((comment) => {
                return (
                   
                    <div >
                        <h6>
                           Comment:
                        </h6>
                        <p>
                            Coustmer Rating: {comment.rating}<br />
                            Comment: {comment.comment}<br />
                            Author: {comment.author}<br />
                            Date: {comment.date}
                        </p>
                    </div >

                );

            });
                    
            return (
                <div >
                    {dishcomment}
                </div>)

        }
               
        else {

            return
            (
                <div></div>

            );
        }
                    
    }       

const DishDetail = (props) => {
    if (props.dish != null) 
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
            ) 
            
      
                       
    else return (
        <div></div>
        )

       
}
                
export default DishDetail;


           



      









       

   


   











      