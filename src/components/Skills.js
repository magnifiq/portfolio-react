import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container, Row, Col} from "react-bootstrap";
import meter1 from "../assets/images/meter1.svg";
import meter2 from "../assets/images/meter2.svg";
import meter3 from "../assets/images/meter3.svg";
import colorSharp from "../assets/images/color-sharp.png";


export const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
         
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>I love to create things from scratch, so I'm interested in gaining essential skills and doing my best to expand my horizons. 
                        Nowadays, I'm keen on practicing JavaScript, React and jQuery.</p>
                        <Carousel 
                        responsive={responsive} 
                        infinite={true} 
                        className="skill-slider" 
                        removeArrowOnDeviceType={['tablet', 'mobile']} 
                        containerClass="react-multi-carousel-list-margin-0px-10px">
                            <div className="item">
                                <img src={meter3} alt="img"/>
                                <h5>HTML, CSS and Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="img"/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="img"/>
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="img"/>
                                <h5>jQuery</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="colorSharp"/>
        </section>
    )
}