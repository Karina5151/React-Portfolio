import './style.css';

// Skill Icons
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
import mongooseIcon from "../../../assets/icons/mongoose.png";
import graphQLIcon from "../../../assets/icons/graphQL.png";
import handlebarsIcon from "../../../assets/icons/handlebars.png";
import storageIcon from "../../../assets/icons/storage.png";
import bootstrapIcon from "../../../assets/icons/bootstrap.png";
import momentIcon from "../../../assets/icons/moment.png";
import responsiveDesignIcon from "../../../assets/icons/responsiveDesign.png";
import domIcon from "../../../assets/icons/dom.png";
import userAuthIcon from "../../../assets/icons/userAuth.png";
import contIntegIcon from "../../../assets/icons/contInteg.png";
import ormIcon from "../../../assets/icons/orm.png";
import oopIcon from "../../../assets/icons/oop.png";
import unitTestIcon from "../../../assets/icons/unitTest.png";
import pwaIcon from "../../../assets/icons/pwa.png";
import gitIcon from "../../../assets/icons/git.png";
import githubIcon from "../../../assets/icons/github.png";
import herokuIcon from "../../../assets/icons/heroku.png";
import mongoAtlasIcon from "../../../assets/icons/mongoAtlas.png";

// Other Link Pics
import resumeImg from "../../../assets/images/Resume-screenshot.png";
import linkedInImg from "../../../assets/images/linkedIn-screenshot.png";
import githubImg from "../../../assets/images/github-screenshot.png";


export default function Resume() {
    return (
        <div className="resume col-12-lg col-6-md col-3-sm text-center">
            <h1>Learned Technologies</h1>

            <br></br>

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

                    {/* Mongoose */}
                    <li className="skill"><a href="https://mongoosejs.com/" target="_blank" rel="noreferrer"><img src={mongooseIcon} width="70" height="70" alt="logo"></img><p>Mongoose</p></a></li>

                    {/* GraphQL */}
                    <li className="skill"><a href="https://graphql.org/" target="_blank" rel="noreferrer"><img src={graphQLIcon} width="70" height="70" alt="logo"></img><p>GraphQL</p></a></li>

                    {/* Handlebars */}
                    <li className="skill"><a href="https://handlebarsjs.com/" target="_blank" rel="noreferrer"><img src={handlebarsIcon} width="70" height="70" alt="logo"></img><p>Handlebars</p></a></li>

                    {/* Local Storage */}
                    <li className="skill"><a href="https://www.w3schools.com/jsreF/prop_win_localstorage.asp" target="_blank" rel="noreferrer"><img src={storageIcon} width="70" height="70" alt="logo"></img><p>Local Storage</p></a></li>

                    {/* Bootstrap */}
                    <li className="skill"><a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img src={bootstrapIcon} width="70" height="70" alt="logo"></img><p>Bootstrap</p></a></li>

                    {/* Moment.js */}
                    <li className="skill"><a href="https://momentjs.com/" target="_blank" rel="noreferrer"><img src={momentIcon} width="70" height="70" alt="logo"></img><p>Moment.js</p></a></li>

                    {/* Responsive Design */}
                    <li className="skill"><a href="https://www.w3schools.com/html/html_responsive.asp" target="_blank" rel="noreferrer"><img src={responsiveDesignIcon} width="70" height="70" alt="logo"></img><p>Responsive Design</p></a></li>

                    {/* DOM Traversal */}
                    <li className="skill"><a href="https://qualitestgroup.com/insights/technical-hub/how-to-traverse-the-dom/" target="_blank" rel="noreferrer"><img src={domIcon} width="70" height="70" alt="logo"></img><p>DOM Traversal</p></a></li>

                    {/* User Authentication */}
                    <li className="skill"><a href="https://swoopnow.com/user-authentication/" target="_blank" rel="noreferrer"><img src={userAuthIcon} width="70" height="70" alt="logo"></img><p>User Authentication</p></a></li>

                    {/* Continuous Integration */}
                    <li className="skill"><a href="https://aws.amazon.com/devops/continuous-integration/" target="_blank" rel="noreferrer"><img src={contIntegIcon} width="70" height="70" alt="logo"></img><p>Continuous Integration</p></a></li>

                    {/* ORM */}
                    <li className="skill"><a href="https://www.ictshore.com/software-design/what-is-orm/" target="_blank" rel="noreferrer"><img src={ormIcon} width="70" height="70" alt="logo"></img><p>ORM</p></a></li>

                    {/* OOP */}
                    <li className="skill"><a href="https://searchapparchitecture.techtarget.com/definition/object-oriented-programming-OOP" target="_blank" rel="noreferrer"><img src={oopIcon} width="70" height="70" alt="logo"></img><p>OOP</p></a></li>

                    {/* Unit Testing */}
                    <li className="skill"><a href="https://www.guru99.com/unit-testing-guide.html" target="_blank" rel="noreferrer"><img src={unitTestIcon} width="70" height="70" alt="logo"></img><p>Unit Testing</p></a></li>

                    {/* Progressive Web Applications */}
                    <li className="skill"><a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank" rel="noreferrer"><img src={pwaIcon} width="70" height="70" alt="logo"></img><p>PWAs</p></a></li>

                    {/* Git CMD/Bash*/}
                    <li className="skill"><a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src={gitIcon} width="70" height="70" alt="logo"></img><p>Git</p></a></li>

                    {/* Github */}
                    <li className="skill"><a href="https://github.com/" target="_blank" rel="noreferrer"><img src={githubIcon} width="70" height="70" alt="logo"></img><p>Github</p></a></li>

                    {/* Heroku */}
                    <li className="skill"><a href="https://www.heroku.com/" target="_blank" rel="noreferrer"><img src={herokuIcon} width="70" height="70" alt="logo"></img><p>Heroku</p></a></li>

                    {/* MongoDB Atlas */}
                    <li className="skill"><a href="https://docs.atlas.mongodb.com/" target="_blank" rel="noreferrer"><img src={mongoAtlasIcon} width="70" height="70" alt="logo"></img><p>MongoDB Atlas</p></a></li>

                </ul>
            </div>

            <br></br>

            {/* Links Section */}
            <section className="profLinks justify-content-center">

                {/* LinkedIn Link */}
                <div><a href="https://www.linkedin.com/in/karina-clausen-5049aaa9/" target="_blank" rel="noreferrer"><img src={linkedInImg} width="270" height="235" alt="LinkedIn"></img><p>LinkedIn</p></a></div>

                {/* Resume Link */}
                <div className="contact-links"><a href="https://github.com/Karina5151/React-Portfolio/blob/2ec3c915844936cc824807706aa17a3abe8cc353/Resume.pdf?raw=true" target="_blank" rel="noreferrer"><img src={resumeImg} width="270" height="235" alt="Resume"></img><p>Professional Resume</p></a></div>

                {/* Github Link */}
                <div><a href="https://github.com/Karina5151" target="_blank" rel="noreferrer"><img src={githubImg} width="270" height="235" alt="Github"></img><p>Github</p></a></div>

            </section>
        </div>
    );
}
