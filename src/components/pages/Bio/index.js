import './style.css';

import landscapeImg from "../../../assets/images/landscape.jpg";
import headshotImg from "../../../assets/images/headshot.jpg";

export default function Bio() {
    return (
        <div className="bio-container">
            {/* Image Card 1 */}
            <div className="my-card" id="img-card">
                    <img className="bio-img" src={landscapeImg} alt="Landscape Pic" />
            </div>

            {/* Bio Card */}
            <div className="my-card" id="info-card">
                    <h3 className="card-header bg-dark text-white d-flex justify-content-center">Get to know me</h3>
                    <div style={{marginTop: "1rem"}}>

                        <h4 className="card-title">Education</h4>
                        <p className="card-text">Bachelor of Science in Communication Studies - University of Wisconsin - River Falls</p>
                        <p className="card-text">Full Stack Web Development Certification - University of MN</p>

                        <h4 className="card-title">Bio</h4>
                        <p className="card-text">I am from the Twin Cities, MN</p>

                        <h4 className="card-title">Objective</h4>
                        <p className="card-text">Full-Stack Web Developer leveraging a background in Communication Studies to build applications for an intuitive and impactful user experience. Passionate problem-solver with a life-long dedication to learning. Known for creativity, attention to detail, and proficient collaboration skills. Looking to join forces with a forward-thinking company for mutual growth and to become a valuable asset.</p> 
                    </div>
                </div>

            {/* Image Card 2 */}
            <div className="my-card" id="img-card">
                    <img className="bio-img" src={headshotImg} alt="Headshot Pic" /> 
            </div>
    


</div>

    );
}
