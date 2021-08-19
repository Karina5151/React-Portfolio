import './style.css';
import landscapeImg from "../../../assets/images/landscape.jpg";
import headshotImg from "../../../assets/images/headshot.jpg";

export default function Bio() {
    return (
        <div className="bio-container">
            <div className="card-group">

                {/* Image Card 1 */}
                <div className="card" id="img-card">
                    <img className="headshot" src={landscapeImg} height="300" width="200" alt="Landscape Pic" />
                    <div className="card-body">
                        <p className="card-text">
                            Always keep learning!
                        </p>
                    </div>
                </div>

                {/* Bio Card */}
                <div className="card">
                    <h3 className="card-header">Get to know me</h3>
                    <div className="card-body">

                        <h4 className="card-title">Education</h4>
                        <p className="card-text">BA in Communication Studies from UW - River Falls</p>
                        <p className="card-text">UMN Full Stack Coding Certification</p>

                        <h4 className="card-title">Bio</h4>
                        <p className="card-text">I am from the Twin Cities, MN</p>
                        
                    </div>
                </div>

                {/* Image Card 2 */}
                <div className="card" id="img-card">
                    <img className="headshot" src={headshotImg} height="300" width="200" alt="Headshot Pic" />
                    <div className="card-body">
                        <p className="card-text">
                            Always keep learning!
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}
