import {Col} from "react-bootstrap";
const ProjectCard=({title,descrption,imgUrl})=>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                <div className="proj-text">
                    <h4>{title}</h4>
                    <span>{descrption}</span>
                </div>

            </div>
        </Col>
    )
}
export default ProjectCard;