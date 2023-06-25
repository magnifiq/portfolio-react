import {Col} from "react-bootstrap";


export const ProjectCard=({title, description, imgUrl, urlGit})=>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="img"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <p><a href={urlGit}>GitHub Code</a></p>
                </div>
            </div>
        </Col>
    )
}