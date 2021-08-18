export default function Bio() {
    return (
        <div className="bio-container">
            <div className="card-group">
                <div className="card">
                    <h3 className="card-header">Get to know me</h3>
                    <div className="card-body">

                        <h4 className="card-title">Education</h4>
                        <p className="card-text">BA in Communication Studies from UW - River Falls</p>
                        <p className="card-text">UMN Full Stack Coding Certification</p>

                        <h4 className="card-title">Project Interests</h4>
                        <p className="card-text">social media</p>
                        <p className="card-text">e-commerce</p>
                        <p className="card-text">music</p>
                        <p className="card-text">events industry</p>
                    </div>
                </div>
                <div className="card" id="img-card">
                    <img className="headshot" src="./assets/headshotPic.jpg" height="300" width="200" alt="Headshot Pic" />
                    <div className="card-body">
                        <p className="card-text">
                            Always keep learing!
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}
