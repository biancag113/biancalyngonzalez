import React from 'react';
import './Projects.css'
import Project from "./project";

const Projects = props => {
    return(
        <>
        <div className="portfolio">
          <div className="project">
            <Project
              name={"Point of Care"}
              git={"https://github.com/biancag113/p4-poct-cv"}
              live={"https://dev.d1zmy4ykz8dpuj.amplifyapp.com/"}
              img={
                "https://portfolio-photos-bg.s3-us-west-2.amazonaws.com/poct.jpg"
              }
            />
          </div>
          <div className="project">
            <Project
              name={"QR Code Reader"}
              git={"https://github.com/biancag113/backend-QR-code-app"}
              live={"https://dev.d1zmy4ykz8dpuj.amplifyapp.com/"}
              img={
                "https://portfolio-photos-bg.s3-us-west-2.amazonaws.com/QRcode.jpg"
              }
            />
          </div>
          <div className="project">
            <Project
              name={"Frontline Coding"}
              git={"https://github.com/biancag113/frontlinecoding"}
              live={"https://www.frontlinecoding.com"}
              img={
                "https://portfolio-photos-bg.s3-us-west-2.amazonaws.com/frontline.jpg"
              }
            />
          </div>
        </div>
      </>
  );
};

export default Projects;