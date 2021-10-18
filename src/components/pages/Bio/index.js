import './style.css';

import landscapeImg from "../../../assets/images/landscape.jpg";
import headshotImg from "../../../assets/images/headshot.jpg";

export default function Bio() {
    return (
        <div className="bio-container">
            <div className="card-group">

                {/* Image Card 1 */}
                <div className="card" id="img-card">
                    <img className="landscape-img" src={landscapeImg} alt="Landscape Pic" />
                    {/* <div className="card-body">
                    </div> */}
                </div>

                {/* Bio Card */}
                <div className="card">
                    <h3 className="card-header bg-dark text-white d-flex justify-content-center">Get to know me</h3>
                    <div className="card-body">

                        <h4 className="card-title">Education</h4>
                        <p className="card-text">BA in Communication Studies from UW - River Falls</p>
                        <p className="card-text">UMN Full Stack Coding Certification</p>

                        <h4 className="card-title">Bio</h4>
                        <p className="card-text">I am from the Twin Cities, MN</p>

                        <h4 className="card-title">Objective</h4>
                        <p className="card-text">Full-Stack Web Developer leveraging a background in Communication Studies to build applications for an intuitive and impactful user experience. Passionate problem-solver with a life-long dedication to learning. Known for creativity, attention to detail, and proficient collaboration skills. Looking to join forces with a forward-thinking company for mutual growth and to become a valuable asset.
</p>
                        
                    </div>
                </div>

                {/* Image Card 2 */}
                <div className="card" id="img-card">
                    <img className="headshot-img" src={headshotImg} alt="Headshot Pic" />
                    {/* <div className="card-body">
                    </div> */}
                </div>
            </div>
        </div>

    );
}
