// import Carousel from 'react-bootstrap/Carousel';
import Carousel from 'react-multi-carousel';

import d from "../assets/images/banner-bg.png"
import { Container,Row ,Col} from "react-bootstrap";
import meter1 from"../assets/images/meter1.svg"
import meter2 from"../assets/images/meter2.svg"
import meter3 from"../assets/images/meter3.svg"
import colorSharp from "../assets/images/color-sharp.png"
import "react-multi-carousel/lib/styles.css";

const Skills=()=>{

    const responsive={
        superLargeDesktop:{breakpoint:{max:4000,min:3000},
    items:5},
    desktop:{breakpoint:{max:3000,min:1024},
    items:3},
    tablet:{breakpoint:{max:1024,min:464},
    items:2},mobile:{breakpoint:{max:464},min:0,
    items:1}}
return(
   


    
<section className='skill' id="skills">
    <container>
        <Row>
            <Col>
            <div className='skill-bx'>
                <h2>
                    Skills
                </h2>
                <p>You Can See my Skills  here </p>
                <Carousel responsive={responsive} infinite={true} className="skill-slide">
<div className='item'>
    <img src={meter1}/>
    <h2>Front End</h2>
</div>
<div className='item'>
<img src={meter2}/>
    <h2>Machine Learning</h2>
</div>
<div className='item'>
<img src={meter3}/>
    <h2>
    Data Analysis
    </h2>
</div>
                </Carousel>
                
            </div>
            </Col>
        </Row>
    </container>
    <img className='background-imge-left' src={colorSharp}/>
</section>
)

}






export default Skills;