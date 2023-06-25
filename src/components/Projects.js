import {Container, Row, Col, Nav, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/images/color-sharp2.png";
import weather_app from "../assets/images/weather_app.png";
import spotify from "../assets/images/spotify.png";
import note from "../assets/images/note.png";
import hangman from "../assets/images/hangman.png";
import todo from "../assets/images/todo.png";
import chatgpt from "../assets/images/chatgpt.png";
import reservation from "../assets/images/reservation.png";
import ghibli from "../assets/images/ghibli.png";
import scription from "../assets/images/scription.png";
import bonbons from "../assets/images/bonbons.png";
import pig from "../assets/images/pig.png";
import vacation from "../assets/images/vacation.png";
import "animate.css";
import TrackVisibility from "react-on-screen";


export const Projects=()=>{
    const projects_react=[
        {title: "Spotify clone",
        description: "The Spotify clone that implements basic features such as connecting with user's account and playing songs",
        imgUrl: spotify,
        urlGit: "https://github.com/magnifiq/spotify_clone",
        },
        {title: "Note app",
        description: "The note app that helps a user to make notes",
        imgUrl: note,
        urlGit: "https://github.com/magnifiq/magnifiq.github.io",
        },
        {title: "The hangman game",
        description: "The hangman game where a user tries to find out a word. There is a list of words(application, programming, interface, wizard) that a user needs to guess",
        imgUrl: hangman,
        urlGit: "https://github.com/magnifiq/hangman-react",
        },
        {title: "Weather app",
        description: "The app uses weather API to show a user forecasts in a specific city",
        imgUrl: weather_app,
        urlGit: "https://github.com/magnifiq/weather-app-react",
        },
        {title: "ChatGPT clone",
        description: "The ChatGPT clone is able to give answers on user's questions",
        imgUrl: chatgpt,
        urlGit: "https://github.com/magnifiq/chatgpt-clone/tree/main",
        },
        {title: "ToDo list",
        description: "The ToDo list app that can be used to write down user's goals",
        imgUrl: todo,
        urlGit: "https://github.com/magnifiq/todo-list-react",
        },
        
    ];

    const projects_js=[
        {title: "The seat reservation system",
        description: "The app where a user can select a seat, book it with his personal data and change his reservation",
        imgUrl: reservation,
        urlGit: "https://github.com/magnifiq/reservation-system-js-course-project-from_University_of_California",
        },
        {title: "The game of PIG",
        description: "The game of PIG for two players",
        imgUrl: pig,
        urlGit: "https://github.com/magnifiq/game-of-pig-js-course-project-from_University_of_California",
        },
        {title: "Scription website",
        description: "The website for a business company",
        imgUrl: scription,
        urlGit: "https://github.com/magnifiq/scription-website-js-course-project-from_University_of_California--HONOR",
        },
        {title: "Bonbons crush game",
        description: "The game where a user needs to combine three same items in a row or a column to get points",
        imgUrl: bonbons,
        urlGit: "https://github.com/magnifiq/Bonbons-crush-game",
        },
        {title: "The website of Studio Ghibli",
        description: "The website where a user can see descriptions of films and also choose the way of sorting lists of movies either by title or release date or viewers' score",
        imgUrl: ghibli,
        urlGit: "https://github.com/magnifiq/studio-ghibli-js-course-project-from-University-of-California--HONOR",
        },
        {title: "The vacation destination list",
        description: "The app where a user can add information about destinations that he/she wants to visit",
        imgUrl: vacation,
        urlGit: "https://github.com/magnifiq/vacation-destination--js-course-project-from_University_of_California",
        },
        
    ];

         
    
    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                    {({isVisible})=>
                        <div  className={isVisible ? "animate__animated animate__slideInUp " : ""}>
                        <h2>Projects</h2>
                        <p>There are several projects that I did. For finding more, check my GitHub :)</p>
                        </div>}
                    </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">React</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">JavaScript and jQuery</Nav.Link>
                                </Nav.Item>
                                
                            </Nav>
                            <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {projects_react.map((project, index)=>{
                                        return(
                                            <ProjectCard
                                            key={index}
                                            {...project}/>
                                        )
                                    })}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Row>
                                    {projects_js.map((project, index)=>{
                                        return(
                                            <ProjectCard
                                            key={index}
                                            {...project}/>
                                        )
                                    })}
                                </Row>
                            </Tab.Pane>
                            
                        </Tab.Content>
                        </Tab.Container> 
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} className="background-image-right" alt="colorSharp2"/>
        </section>
    )
       
}