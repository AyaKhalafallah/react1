import { useState,useEffect } from "react"
import { Container,Row ,Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from "../assets/images/header-img.svg"
import TrackVisibility from 'react-on-screen';
import 'animate.css';

// import { isVisible } from "@testing-library/user-event/dist/utils";
const Banner=()=>{
const [loopNum,setloopNum]=useState(0)
const [isDeleting,setisDeleting]=useState(false)
const toRotate=["Data Analyst","Front End Developer","Back End Developer"]
const [text,settext]=useState("")
const[delta,setdelta]=useState(300-Math.random()*100)
const period=1800;

useEffect(()=>{
    let ticker=setInterval(()=>{tick()},delta)
return()=>{clearInterval(ticker)}
},[text])
const tick=()=>{
    let i=loopNum % toRotate.length
    let fullText=toRotate[i]
    let updatedText=isDeleting ? fullText.substring(0,text.length-1):fullText.substring(0,text.length+1)
    settext(updatedText)
    if(isDeleting){setdelta(prevDelta=>prevDelta/2)}
    if(!isDeleting && updatedText===fullText){
        setisDeleting(true)
setdelta(period)    }
else if(isDeleting&& updatedText===""){
    setisDeleting(false)
    setloopNum(loopNum+1)
    setdelta(500)
}
}

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible})=>
                        <div className={isVisible?"animate__animated animate__fadeIn":""}>
                        <span className="tagline">Welcome to my Portoflio</span>
                        <h1 className="t">{`Hi I'm Aya Khalafallah,` } <span className="wrap">{text}</span></h1>
                    <p>Herkese merhaba Bu portföyde kendimi tanıtmama izin verin</p>
                    <button onClick={()=>console.log("connect")}>Let's connect<ArrowRightCircle size={25}/></button>
                    </div>}
                    </TrackVisibility>
                  
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} />
                    </Col>
                </Row>
            </Container>

        </section>
    )


}

export default Banner;