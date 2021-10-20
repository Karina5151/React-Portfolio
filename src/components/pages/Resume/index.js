import './style.css';

import resumeImg from "../../../assets/images/Resume-screenshot.png";
import linkedInImg from "../../../assets/images/linkedIn-screenshot.png";
import githubImg from "../../../assets/images/github-screenshot.png";

// import htmlIcon from "../../../assets/icons/html.png";

export default function Resume() {
    return (
        <div className="resume col-12-lg col-6-md col-3-sm text-center">
            <h1>Learned Technologies</h1>

            <div className="skillContainer card-group align-items-stretch">

                <div className="card-body">

                    <li className="skill"><a href="https://www.w3schools.com/html/default.asp" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={process.env.PUBLIC_URL + '../../../assets/icons/html.png'} alt="logo"></img>HTML5</a></li>

                    <li className="skill"><a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noreferrer">CSS</a></li>
                    <li className="skill"><a href="https://www.javascript.com/" target="_blank" rel="noreferrer">Javascript</a></li>
                    <li className="skill"><a href="https://jquery.com/" target="_blank" rel="noreferrer">jQuery</a></li>
                    <li className="skill"><a href="https://www.w3schools.com/html/html5_webstorage.asp" target="_blank" rel="noreferrer">Local Storage</a></li>
                    <li className="skill"><a href="https://reactjs.org/" target="_blank" rel="noreferrer">React.js</a></li>
                    <li className="skill"><a href="https://www.w3schools.com/js/js_api_intro.asp" target="_blank" rel="noreferrer">API</a></li>
                    <li className="skill"><a href="https://www.w3schools.com/js/js_json.asp" target="_blank" rel="noreferrer">JSON</a></li>
                    <li className="skill"><a href="https://www.w3schools.com/js/js_ajax_intro.asp" target="_blank" rel="noreferrer">AJAX</a></li>
                    <li className="skill"><a href="https://www.mysql.com/" target="_blank" rel="noreferrer">MySQL</a></li>
                    <li className="skill"><a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">MongoDB</a></li>
                    <li className="skill"><a href="https://www.heroku.com/what" target="_blank" rel="noreferrer">Heroku</a></li>
                    <li className="skill"><a href="https://git-scm.com/" target="_blank" rel="noreferrer">Git</a></li>
                    <li className="skill"><a href="https://pages.github.com/" target="_blank" rel="noreferrer">Github Pages</a></li>
                    <li className="skill"><a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Node.js</a></li>
                    <li className="skill"><a href="https://expressjs.com/" target="_blank" rel="noreferrer">Express</a></li>
                    <li className="skill"><a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank" rel="noreferrer">PWAs</a></li>
                    <li className="skill"><a href="https://www.w3docs.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide" target="_blank" rel="noreferrer">MERN Stack</a></li>
                </div>

            </div>


            <br></br>
            {/* Links Section */}

            <section className="profLinks justify-content-center">
                {/* Resume Link */}
                <div>
                    <div><img src={resumeImg} width="270" height="235" alt="Resume" /></div>

                    <p><a href="https://docs.google.com/document/d/1Ph2WH9L_wcTSq_TiYVCkbBFgtGF_jH9b/edit?usp=sharing&ouid=114273495642259868542&rtpof=true&sd=true" target="_blank" rel="noreferrer">Professional Resume</a></p>
                </div>

                {/* LinkedIn Link */}
                <div>
                    <div><img src={linkedInImg} width="270" height="235" alt="LinkedIn" /></div>

                    <p><a href="https://www.linkedin.com/in/karina-clausen-5049aaa9/" target="_blank" rel="noreferrer">LinkedIn</a></p>
                </div>


                {/* Github Link */}
                <div>
                    <div><img src={githubImg} width="270" height="235" alt="Github" /></div>

                    <p><a href="https://github.com/Karina5151" target="_blank" rel="noreferrer">Github</a></p>
                </div>

            </section>
        </div>
    );
}

<script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>