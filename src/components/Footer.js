import { Col, Container, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/images/logo.svg";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.jpg";
import navIcon3 from "../assets/images/nav-icon3.svg";

export const Footer = ()=>{
    return(
    <footer className="footer">
        <Container>
            <Row className="align-items-center">
                <MailchimpForm/>
                <Col sm={6}>
                    <img src={logo} alt="logo"/>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/khrystyna-bindiuk-800494254/"><img src={navIcon1} alt="icon"/></a>
                        <a href="https://github.com/magnifiq"><img src={navIcon2} alt="icon"/></a>
                        <a href="https://www.instagram.com/cri.ma_/"><img src={navIcon3} alt="icon"/></a>
                    </div>
                    <p>CopyRight 2022. All Rights Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>)
}