import { Container } from "react-bootstrap";
import logo from "../assets/images/logo.svg"
import navIcon1 from "../assets/images/nav-icon1.svg"
import navIcon2 from "../assets/images/nav-icon2.svg"
import navIcon3 from "../assets/images/nav-icon3.svg"
import {Row,Col } from "react-bootstrap";
import Newsletter from"./Newsletter"
const Footer=()=>
{
return(
    <footer className="footer">
        <Container>
            <Row classNamealign-item-center>
                {/* <MailchimpForm/> */}
                <Newsletter/>
                <Col sm={6}>
                    <img className="footerimg" src={logo} alt="Logo"/>
                </Col>
<Col sm={6} className="text-center text-sm-end">
    <div className="social-icon">
        <a href="https://www.linkedin.com/in/ayakhalafallah/" target="_blank">
            <img src={navIcon1}/>
        </a>
        <a href="#">
            <img src={navIcon2}/>
        </a>
        <a href="#">
            <img src={navIcon3}/>
        </a>

    </div>
    <p>CopyRight 2023 all rights reserved here by Aya Khalafallah </p>
</Col>
            </Row>
        </Container>
    </footer>
)
}
export default Footer;
