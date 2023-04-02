import { Container,Row ,Col} from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import {Nav} from "react-bootstrap"
import ProjectCard from "./ProjectCard"
import colorSharp2 from "../assets/images/color-sharp2.png"
import projectImg1 from "../assets/images/project-img1.png"
import projectImg2 from "../assets/images/project-img2.png"
import projectImg3 from "../assets/images/project-img3.png"
import Contact from "./Contact"
import TrackVisibility from 'react-on-screen';



const Projects=()=>{
    const projects=[{
        title:"Business Startup",
        descrption:"Design & Development",
        imgUrl:projectImg1
    },
    {
      title:"Business Startup",
        descrption:"Design & Development",
        imgUrl:projectImg2
    },{
      title:"Business Startup",
      descrption:"Design & Development",
        imgUrl:projectImg3
    },{
      title:"Business Startup",
      descrption:"Design & Development",
      imgUrl:projectImg1
  },{
    title:"Business Startup",
    descrption:"Design & Development",
    imgUrl:projectImg2
},{
  title:"Business Startup",
        descrption:"Design & Development",
  imgUrl:projectImg3
}]
    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({isVisible})=>
                        <div className={isVisible?"animate__animated animate__bounce":""}>
                    <h2>Projects
                        </h2>
                        <p>My name is Aya, I live in Cairo, and this is my first project in React</p>
                        </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs"defaultActiveKey="first" >
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
  <Nav.Item>
    <Nav.Link eventKey="first">First section</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="second">Second section</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="third">
      Third section
    </Nav.Link>
  </Nav.Item>
</Nav>
<Tab.Content>
  <Tab.Pane eventKey="first">
<Row>
  {
    projects.map((project, index)=>{
      return(
<ProjectCard key={index} {...project}/>      )
    })
  }
</Row>
  </Tab.Pane>
  <Tab.Pane eventKey="second"  >     
</Tab.Pane>


  <Tab.Pane eventKey="third" >
    <p>text for test</p>

  </Tab.Pane>

  
</Tab.Content>
</Tab.Container>
                        </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" src={colorSharp2}/> */}
        </section>
    )
}


export default Projects;