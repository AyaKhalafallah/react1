import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import contactImg from "../assets/images/contact-img.svg"
import TrackVisibility from 'react-on-screen';

const Contact=()=>{
    const formIntialDetails={
        firstName:"",
        lastName:"",
        phone:"",email:""
    }
const[formDetails,setformDetails]=useState(formIntialDetails)
const[buttonText,setbuttonText]=useState("send")
const[status,setstatus]=useState({})
const onFormUpdate=(category,value)=>{
    setformDetails({...formDetails,[category]:value})
}
const handleSubmit=()=>{}
return(
    <section className="contact" id="contact">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                <TrackVisibility>
                {({isVisible})=>
                        <div className={isVisible?"animate__animated animate__bounce":""}>
                    <img src={contactImg} className="cimg"/>
                    </div>}
                    </TrackVisibility>
                </Col>
                <Col md={6}>
                    <h2>
                        Get In Touch
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <div className="fline">
                            <Col sm={6}>
                                <input type="text" value={formIntialDetails.firstName} placeholder="First name" onChange={(e)=>onFormUpdate("firstName",e.target.value)}/>
                            </Col>
                            <Col sm={6}>
                            <input type="text" value={formIntialDetails.lastName} placeholder="Last name" onChange={(e)=>onFormUpdate("lastName",e.target.value)}/>

                            </Col>
                            </div>
                            <div className="sline">
                            <Col sm={6}>
                            <input type="email" value={formIntialDetails.email} placeholder="Email" onChange={(e)=>onFormUpdate("email",e.target.value)}/>

                            </Col>

                            <Col sm={6}>
                            <input type="tel" value={formIntialDetails.lastName} placeholder="Phone" onChange={(e)=>onFormUpdate("phone",e.target.value)}/>

                            </Col>
                            </div>
                            <div className="tline">
                            <Col sm={6}>
                            <textarea className="texta" rows="6" value={formDetails.message} placeholder="Message" onChange={(e)=>onFormUpdate("message",e.tatget.value)}></textarea>
                          
                          
                              <br/>
                            <button className="cbtn" type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {status.message && 
                            <Col>
                            <p className={status.success===false? "danger": "success"}>{status.message}</p>
                            </Col>
                           
                            }
                             </div>

                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
)
}
export default Contact;