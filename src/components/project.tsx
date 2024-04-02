import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./project-card";

// import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Skill Chaat",
      description: "A website where web development Course are available ",
      imgUrl: './proj1.png',
    },
    {
      title: "Portfolio Website",
      description: "My portfolio website",
      imgUrl: './proj2.png',
    },
    {
      title: "Hafsa Commerce",
      description: "My ecommerce website",
      imgUrl: './proj3.png',
    },
 
  ];
  
  const projects2 = [
    {
      title: "Calculator",
      description: "Calculator made with Typescript",
      imgUrl: './cal1.png',
    },
    {
      title: "Number Guessing Game ",
      description: "Number Guessing Game made with Typescript",
      imgUrl: './no1.png',
    },
    {
      title: "ATM",
      description: "ATM made with Typescript",
      imgUrl: './atm1.png',
    },
    {
      title: "Student Management System",
      description: "A management system for typescript",
      imgUrl: './std1.png',
    },
    {
      title: "Word Counter",
      description: "Word Counter to count number of words",
      imgUrl: './word1.png',
    },
    {
      title: "Todo App",
      description: "Simple app to organize tasks.",
      imgUrl: './todo1.png',
    },
    {
      title: "Currency Converter",
      description: "Convert currencies easily",
      imgUrl: './currency1.png',
    },
  ];
  
  const projects3 = [
    // {
    //   title: "Cat Photo App",
    //   description: "A cute Website with HTML and CSS about Cats all Things About cat.",
    //   imgUrl: './proj1.png',
    // },
    // {
    //   title: "Survey Form",
    //   description: "Gather feedback easily. Customizable and responsive with HTML and CSS.",
    //   imgUrl: './proj2.png',
    // },
  
    {
      title: "Salt n Pepper Clone",
      description: "Classic Food Website. Interactive website clone with HTML and CSS.",
      imgUrl: './saltnpepper1.png',
    },
    
    {
      title: "Pepsi Website  ",
      description: "Classic Design of Pepsi Website Clone. Made with HTML and CSS.",
      imgUrl: './pepsi1.png',
    },
    
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 className="text-white">Projects</h2>
                <p className=" mb-4">Discover my latest web development projects showcasing innovation and creativity.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">NextJs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Typescript</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Html, Css</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
         
             <Tab.Pane eventKey="first"> 
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project }
                                />
                            )
                          })
                        }
                      </Row>                     
                      </Tab.Pane>
                      
                    <Tab.Pane eventKey="third">
                  
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project }
                                />
                            )
                          })
                        }
                      </Row>                     
                   
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}