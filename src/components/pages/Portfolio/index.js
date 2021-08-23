import './style.css';

import semanticImg from "../../../assets/images/horiseon-final-page.png";
import passwordGenImg from "../../../assets/images/password-generator-mock-up.png";
import codeQuizImg from "../../../assets/images/code_quiz-screenshot.png";
import workDaySchedImg from "../../../assets/images/work-day-scheduler_screenshot.png";
import weatherDashImg from "../../../assets/images/weather-dashboard.png";
import cocktailsImg from "../../../assets/images/landings_page_screenshot.png";
import readMeImg from "../../../assets/images/README_screenshot.png";
import teamProfImg from "../../../assets/images/web_app_html.png";
import noteTakerImg from "../../../assets/images/note-page.png";
import employeeTrackerImg from "../../../assets/images/employee-tracker_pic.png";
import eCommerceImg from "../../../assets/images/e-commerce.png";
import eventOrgImg from "../../../assets/images/screenshot.jpg";
import budgetImg from "../../../assets/images/budget-app.png";


export default function Portfolio() {
    return (
        <>
            <section className="projects justify-content-center">
                {/* Semantic Tags */}
                <div>
                    <div><img src={semanticImg} width="270" height="235" alt="Semantic Tags" /></div>

                    <p><a href="https://karina5151.github.io/Semantic-Tags/" target="_blank" rel="noreferrer">Semantic Tags Site</a></p>

                    <p><a href="https://github.com/Karina5151/Semantic-Tags" target="_blank" rel="noreferrer">Semantic Tags Repo</a></p>
                </div>

                {/* Password Generator */}
                <div>
                    <div><img src={passwordGenImg} width="270" height="235" alt="Password Generator" /></div>

                    <p><a href="https://karina5151.github.io/Password-Generator/" target="_blank" rel="noreferrer">Password Generator Site</a></p>

                    <p><a href="https://github.com/Karina5151/Password-Generator" target="_blank" rel="noreferrer">Password Generator Repo</a></p>
                </div>

                {/* Coding Quiz */}
                <div>
                    <img src={codeQuizImg} width="270" height="235" alt="Coding Quiz" />

                    <p><a href="https://karina5151.github.io/Code-Quiz/" target="_blank" rel="noreferrer">Coding Quiz Site</a></p>

                    <p><a href="https://github.com/Karina5151/Code-Quiz" target="_blank" rel="noreferrer">Coding Quiz Repo</a></p>
                </div>

                {/* Work Day Scheduler */}
                <div>
                    <div><img src={workDaySchedImg} width="270" height="235" alt="Work Day Scheduler" /></div>

                    <p><a href="https://karina5151.github.io/Work-Day-Scheduler/" target="_blank" rel="noreferrer">Work Day Scheduler Site</a></p>

                    <p><a href="https://github.com/Karina5151/Work-Day-Scheduler" target="_blank" rel="noreferrer">Work Day Scheduler Repo</a></p>
                </div>

                {/* Weather Dashboard */}
                <div>
                    <div><img src={weatherDashImg} width="270" height="235" alt="Weather Dashboard" /></div>

                    <p><a href="https://karina5151.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">Weather Dashboard Site</a></p>

                    <p><a href="https://github.com/Karina5151/Weather-Dashboard" target="_blank" rel="noreferrer">Weather Dashboard Repo</a></p>
                </div>

                {/* Cocktails, Cuisine, Craft Beers */}
                <div>
                    <div><img src={cocktailsImg} width="270" height="235" alt="Cocktails-Cuisine-Craft-Beers" /></div>

                    <p><a href="https://karina5151.github.io/Cocktails-Cuisine-Craft-Beers/" target="_blank" rel="noreferrer">Cocktails, Cuisine, Craft Beers Site</a></p>

                    <p><a href="https://github.com/Karina5151/Cocktails-Cuisine-Craft-Beers" target="_blank" rel="noreferrer">Cocktails, Cuisine, Craft Beers Repo</a></p>
                </div>

                {/* ReadMe Generator */}
                <div>
                    <div> <img src={readMeImg} width="270" height="235" alt="ReadMe Generator" /></div>

                    <p>Command-line App - no site</p>

                    <p><a href="https://github.com/tedheikkila/readme-generator" target="_blank" rel="noreferrer">Readme Generator Repo</a></p>
                </div>

                {/* Team Profile Generator */}
                <div>
                    <div><img src={teamProfImg} width="270" height="235" alt="Team Profile Generator" /></div>

                    <p> <a href="https://karina5151.github.io/Team-Profile-Generator/" target="_blank" rel="noreferrer">Team Profile Generator Site</a></p>
                   
                    <p><a href="https://github.com/Karina5151/README-Generator" target="_blank" rel="noreferrer">Team Profile Generator Repo</a></p>
                </div>

                {/* Note Taker */}
                <div>
                    <div><img src={noteTakerImg} width="270" height="235" alt="Note Taker" /></div>

                    <p><a href="https://note-taker5151.herokuapp.com/" target="_blank" rel="noreferrer">Note Taker Site</a></p>
                    
                    <p><a href="https://github.com/Karina5151/Note-Taker" target="_blank" rel="noreferrer">Note Taker Repo</a></p>
                </div>

                {/* Employee Management System */}
                <div>
                    <div><img src={employeeTrackerImg} width="270" height="235" alt="Employee Tracker" /></div>

                    <p>Command-line App - no site</p>
                    
                    <p><a href="https://github.com/Karina5151/Employee-Management-System" target="_blank" rel="noreferrer">Employee Tracker Repo</a></p>
                </div>

                {/* E-Commerce Back End */}
                <div>
                    <div><img src={eCommerceImg} width="270" height="235" alt="E-Commerce" /></div>

                    <p>Command-line App - no site</p>

                    <p><a href="https://github.com/Karina5151/E-Commerce-Back-End" target="_blank" rel="noreferrer">E-Commerce Back End Repo</a></p>
                </div>

                {/* Event Organizer */}
                <div>
                    <div><img src={eventOrgImg} width="270" height="235" alt="Event Organizer" /></div>

                    <p><a href="https://gentle-reaches-60799.herokuapp.com/" target="_blank" rel="noreferrer">Event Organizer Site</a></p>
                    
                    <p><a href="https://github.com/Karina5151/Event-Organizer" target="_blank" rel="noreferrer">Event Organizer Repo</a></p>
                </div>

                {/* Progressive Budget */}
                <div>
                    <div><img src={budgetImg} width="270" height="235" alt="Progressive Budget" /></div>

                    <p><a href="https://infinite-cliffs-60426.herokuapp.com/" target="_blank" rel="noreferrer">Progressive Budget Site</a></p>

                    <p><a href="https://github.com/Karina5151/Progressive-Budget" target="_blank" rel="noreferrer">Progressive Budget Repo</a></p>
                </div>
            </section>
        </>
    );
}
