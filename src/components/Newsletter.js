import{Row,Col} from  "react-bootstrap";
import { useState } from "react";
const Newsletter=()=>{
const[email,setemail]=useState("")
    return(
    <Col lg={12}>
    <div className="newsletter-bx">
        <Row>
            <Col>
            <h3>See My Projects At Once & Leave Here Your E-mail Address</h3>
            </Col>
            <Col md={6} xl={7}>
                <form>
<div className="new-email-bx">
    <input value={email} type="email" onChange={(e)=>setemail(e.target.value)} placeholder="Email Adress" />
<button type="submit">Submit</button>
</div>
                </form>
            
            </Col>
        </Row>
        </div>

        </Col>
    )
}
export default Newsletter;