import '../Portfolio/style.css'

export default function Portfolio() {
    return (
        <>
            <section className="apps justify-content-center">
                {/* Semantic Tags */}
                <div>
                    <div><img src="./assets/images/horiseon-final-page.png" width="320" height="270" alt="Semantic Tags"/></div>

                    <p><a href="https://karina5151.github.io/Semantic-Tags/" target="_blank" rel="noreferrer">Semantic Tags Site</a></p>

                    <p><a href="https://github.com/Karina5151/Semantic-Tags" target="_blank" rel="noreferrer">Semantic Tags Git Repo</a></p>
                </div>

                {/* Password Generator */}
                <div className="password-generator">
                    <a href="https://karina5151.github.io/Password-Generator/" target="_blank" rel="noreferrer">
                        <img src="./assets/images/password-generator-mock-up.png" width="320" height="270" alt="Password Generator" />
                    </a>
                    <p><a href="https://github.com/Karina5151/Password-Generator" target="_blank" rel="noreferrer">Password Generator</a></p>
                </div>

                {/* Coding Quiz */}
                <div className="coding-quiz">
                    <a href="https://karina5151.github.io/Code-Quiz/" target="_blank" rel="noreferrer">
                        <img src="./assets/images/code_quiz-screenshot.png" width="320" height="270" alt="Coding Quiz" />
                    </a>
                    <p><a href="https://github.com/Karina5151/Code-Quiz" target="_blank" rel="noreferrer">Coding Quiz</a></p>
                </div>

                {/* Work Day Scheduler */}
                <div className="work-day-scheduler">
                    <a href="https://karina5151.github.io/Work-Day-Scheduler/" target="_blank" rel="noreferrer">
                        <img src="./assets/images/work-day-scheduler_screenshot.png" width="320" height="270" alt="Work Day Scheduler" />
                    </a>
                    <p><a href="https://github.com/Karina5151/Work-Day-Scheduler" target="_blank" rel="noreferrer">Work Day Scheduler</a></p>
                </div>

                {/* Weather Dashboard */}
                <div className="weather-dashboard">
                    <a href="https://karina5151.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">
                        <img src="./assets/images/weather-dashboard.png" width="320" height="270" alt="Weather Dashboard" />
                    </a>
                    <p><a href="https://github.com/Karina5151/Weather-Dashboard" target="_blank" rel="noreferrer">Weather Dashboard</a></p>
                </div>

                {/* Cocktails, Cuisine, Craft Beers */}
                <div className="cocktails-cuisine-craft-beers">
                    <a href="https://karina5151.github.io/Cocktails-Cuisine-Craft-Beers/" target="_blank" rel="noreferrer">
                        <img src="./assets/images/landings_page_screenshot.png" width="320" height="270" alt="Cocktails-Cuisine-Craft-Beers" />
                    </a>
                    <p><a href="https://github.com/Karina5151/Cocktails-Cuisine-Craft-Beers" target="_blank" rel="noreferrer">Cocktails, Cuisine, Craft Beers</a></p>
                </div>

                {/* ReadMe Generator */}
                <div className="readme-generator">
                    <a href="https://karina5151.github.io/README-Generator/" target="_blank" rel="noreferrer">
                        <img src="./assets/images/README_screenshot.png" width="320" height="270" alt="ReadMe Generator" />
                    </a>
                    <p><a href="https://github.com/tedheikkila/readme-generator" target="_blank" rel="noreferrer">Readme Generator</a></p>
                </div>

                {/* Team Profile Generator */}
                <div className="team-profile-generator">
                    <a href="https://github.com/Karina5151/README-Generator" target="_blank" rel="noreferrer">
                        <img src="./assets/images/team-gen.png" width="320" height="270" alt="Team Profile Generator" />
                    </a>
                    <p><a href="https://github.com/Karina5151/README-Generator" target="_blank" rel="noreferrer">Team Profile Generator</a></p>
                </div>

                {/* Note Taker */}
                <div className="note-taker">
                    <a href="https://note-taker5151.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img src="./assets/images/note-page.png" width="320" height="270" alt="Note Taker" />
                    </a>
                    <p><a href="https://github.com/Karina5151/Note-Taker" target="_blank" rel="noreferrer">Note Taker</a></p>
                </div>

                {/* Employee Management System */}
                <div className="employee-management-system">
                    <a href="https://github.com/Karina5151/Employee-Management-System" target="_blank" rel="noreferrer">
                        <img src="./assets/images/employee-tracker_pic.png" width="320" height="270" alt="Employee Tracker" />
                    </a>
                    <p><a href="https://github.com/Karina5151/Employee-Management-System" target="_blank" rel="noreferrer">Employee Tracker</a></p>
                </div>

                {/* E-Commerce Back End */}
                <div className="e-commerce-back-end">
                    <a href="https://github.com/Karina5151/E-Commerce-Back-End" target="_blank" rel="noreferrer">
                        <img className="e-commerce" src="./assets/images/e-commerce.png" width="320" height="270" alt="E-Commerce" />
                    </a>
                    <p><a href="https://github.com/Karina5151/E-Commerce-Back-End" target="_blank" rel="noreferrer">E-Commerce Back End</a></p>
                </div>

                {/* Event Organizer */}
                <div className="event-organizer">
                    <a href="https://gentle-reaches-60799.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img src="./assets/images/screenshot.jpg" width="320" height="270" alt="Event Organizer" />
                    </a>
                    <p><a href="https://github.com/Karina5151/Event-Organizer" target="_blank" rel="noreferrer">Event Organizer</a></p>
                </div>

                {/* Progressive Budget */}
                <div className="progressive-budget">
                    <a href="https://infinite-cliffs-60426.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img src="./assets/images/budget-app.png" width="320" height="270" alt="Progressive Budget" />
                    </a>
                    <p><a href="https://github.com/Karina5151/Progressive-Budget" target="_blank" rel="noreferrer">Progressive Budget</a></p>
                </div>
            </section>
        </>
    );
}
