import './style.css';

import resumeImg from "../../../assets/images/Resume-screenshot.png";
import linkedInImg from "../../../assets/images/linkedIn-screenshot.png";
import githubImg from "../../../assets/images/github-screenshot.png";

import htmlIcon from "../../../assets/icons/html.png";
import cssIcon from "../../../assets/icons/css.png";
import jsIcon from "../../../assets/icons/js.png";
import jQueryIcon from "../../../assets/icons/jquery.png";
import jsonIcon from "../../../assets/icons/json.png";
import ajaxIcon from "../../../assets/icons/ajax.png";
import mongodbIcon from "../../../assets/icons/mongodb.png";
import expressIcon from "../../../assets/icons/express.png";
import reactIcon from "../../../assets/icons/react.png";
import nodeIcon from "../../../assets/icons/node.png";
import apiIcon from "../../../assets/icons/api.png";
import mySQLIcon from "../../../assets/icons/mysql.png";
import sequelizeIcon from "../../../assets/icons/sequelize.png";
import handlebarsIcon from "../../../assets/icons/handlebars.png";
import storageIcon from "../../../assets/icons/storage.png";
import bootstrapIcon from "../../../assets/icons/bootstrap.png";
import momentIcon from "../../../assets/icons/moment.png";
import responsiveDesignIcon from "../../../assets/icons/responsiveDesign.png";
import domIcon from "../../../assets/icons/dom.png";

export default function Resume() {
    return (
        <div className="resume col-12-lg col-6-md col-3-sm text-center">
            <h1>Learned Technologies</h1>

            <div className="skillContainer card-group align-items-stretch">
                <ul className="skills">

                    {/* HTML */}
                    <li className="skill">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer"><img src={htmlIcon} width="70" height="70" alt="logo"></img><p>HTML</p></a>
                    </li>

                    {/* CSS */}
                    <li className="skill"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer"><img src={cssIcon} width="70" height="70" alt="logo"></img><p>CSS</p></a></li>

                    {/* Javascript */}
                    <li className="skill"><a href="https://www.javascript.com/" target="_blank" rel="noreferrer"><img src={jsIcon} width="70" height="70" alt="logo"></img><p>Javascript</p></a></li>

                    {/* jQuery */}
                    <li className="skill"><a href="https://jquery.com/" target="_blank" rel="noreferrer"><img src={jQueryIcon} width="70" height="70" alt="logo"></img><p>jQuery</p></a></li>

                    {/* JSON */}
                    <li className="skill"><a href="https://www.json.org/json-en.html" target="_blank" rel="noreferrer"><img src={jsonIcon} width="70" height="70" alt="logo"></img><p>JSON</p></a></li>

                    {/* AJAX */}
                    <li className="skill"><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX" target="_blank" rel="noreferrer"><img src={ajaxIcon} width="70" height="70" alt="logo"></img><p>AJAX</p></a></li>

                    {/* MongoDB */}
                    <li className="skill"><a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src={mongodbIcon} width="70" height="70" alt="logo"></img><p>MongoDB</p></a></li>

                    {/* Express.js */}
                    <li className="skill"><a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src={expressIcon} width="70" height="70" alt="logo"></img><p>Express.js</p></a></li>

                    {/* React.js */}
                    <li className="skill"><a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src={reactIcon} width="70" height="70" alt="logo"></img><p>React.js</p></a></li>

                    {/* Node.js */}
                    <li className="skill"><a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src={nodeIcon} width="70" height="70" alt="logo"></img><p>Node.js</p></a></li>

                    {/* API */}
                    <li className="skill"><a href="https://developer.mozilla.org/en-US/docs/Web/API" target="_blank" rel="noreferrer"><img src={apiIcon} width="70" height="70" alt="logo"></img><p>API</p></a></li>

                     {/* MySQL */}
                     <li className="skill"><a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src={mySQLIcon} width="70" height="70" alt="logo"></img><p>MySQL</p></a></li>

                     {/* Sequelize */}
                     <li className="skill"><a href="https://sequelize.org/" target="_blank" rel="noreferrer"><img src={sequelizeIcon} width="70" height="70" alt="logo"></img><p>Sequelize</p></a></li>

                    {/* Handlebars */}
                    <li className="skill"><a href="https://handlebarsjs.com/" target="_blank" rel="noreferrer"><img src={handlebarsIcon} width="70" height="70" alt="logo"></img><p>Handlebars</p></a></li>

                    {/* Local Storage */}
                    <li className="skill"><a href="https://www.w3schools.com/html/html5_webstorage.asp" target="_blank" rel="noreferrer"><img src={storageIcon} width="70" height="70" alt="logo"></img><p>Local Storage</p></a></li>

                    {/* Bootstrap */}
                    <li className="skill"><a href="https://www.javascript.com/" target="_blank" rel="noreferrer"><img src={bootstrapIcon} width="70" height="70" alt="logo"></img><p>Bootstrap</p></a></li>

                    {/* Moment.js */}
                    <li className="skill"><a href="https://www.javascript.com/" target="_blank" rel="noreferrer"><img src={momentIcon} width="70" height="70" alt="logo"></img><p>Moment.js</p></a></li>

                    {/* Responsive Design */}
                    <li className="skill"><a href="https://www.javascript.com/" target="_blank" rel="noreferrer"><img src={responsiveDesignIcon} width="70" height="70" alt="logo"></img><p>Responsive Design</p></a></li>

                    {/* DOM Traversal */}
                    <li className="skill"><a href="https://www.javascript.com/" target="_blank" rel="noreferrer"><img src={domIcon} width="70" height="70" alt="logo"></img><p>DOM Traversal</p></a></li>

                    {/* User Authentication */}
                    <li className="skill"><a href="https://www.javascript.com/" target="_blank" rel="noreferrer"><img src={apiIcon} width="70" height="70" alt="logo"></img><p>User Authentication</p></a></li>

                    {/* Continuous Integration */}
                    <li className="skill"><a href="https://www.javascript.com/" target="_blank" rel="noreferrer"><img src={apiIcon} width="70" height="70" alt="logo"></img><p>Continuous Integration</p></a></li>

                    {/* ORM */}
                    <li className="skill"><a href="https://www.javascript.com/" target="_blank" rel="noreferrer"><img src={apiIcon} width="70" height="70" alt="logo"></img><p>ORM</p></a></li>

                    {/* OOP */}
                    <li className="skill"><a href="https://www.javascript.com/" target="_blank" rel="noreferrer"><img src={apiIcon} width="70" height="70" alt="logo"></img><p>OOP</p></a></li>
                    
                    {/* Unit Testing */}
                    <li className="skill"><a href="https://www.javascript.com/" target="_blank" rel="noreferrer"><img src={apiIcon} width="70" height="70" alt="logo"></img><p>Unit Testing</p></a></li>

                    {/* Progressive Web Applications */}
                    <li className="skill"><a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank" rel="noreferrer"><img src={apiIcon} width="70" height="70" alt="logo"></img><p>Progressive Web Applications</p></a></li>

                    {/* Git */}
                    <li className="skill"><a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src={apiIcon} width="70" height="70" alt="logo"></img><p>Git</p></a></li>

                    {/* Github */}
                    <li className="skill"><a href="https://pages.github.com/" target="_blank" rel="noreferrer"><img src={apiIcon} width="70" height="70" alt="logo"></img><p>Github</p></a></li>

                    {/* Heroku */}
                    <li className="skill"><a href="https://www.heroku.com/what" target="_blank" rel="noreferrer"><img src={apiIcon} width="70" height="70" alt="logo"></img><p>Heroku</p></a></li>

                    {/* MongoDB Atlas */}
                    <li className="skill"><a href="https://www.heroku.com/what" target="_blank" rel="noreferrer"><img src={apiIcon} width="70" height="70" alt="logo"></img><p>MongoDB Atlas</p></a></li>

                </ul>

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