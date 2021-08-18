export default function Portfolio() {
    return (
        <>
            <section className="apps justify-content-center">
                {/* Semantic Tags */}
                <div className="semantics">
                    <a href="https://karina5151.github.io/Semantic-Tags/" target="_blank" rel="noreferrer">
                        <img src="./assets/horiseon-final-page.png" width="320" height="270" alt="Semantic Tags" />
                    </a>
                    <p><a href="https://github.com/Karina5151/Semantic-Tags" target="_blank" rel="noreferrer">Semantic Tags - HTML/CSS</a></p>
                </div>

                {/* Password Generator */}
                <div className="password-gen">
                    <a href="https://karina5151.github.io/Password-Generator/" target="_blank" rel="noreferrer">
                        <img src="./assets/password-generator-mock-up.png" width="320" height="270" alt="Password Generator" />
                    </a>
                    <p><a href="https://github.com/Karina5151/Password-Generator" target="_blank" rel="noreferrer">Password Generator - JS</a></p>
                </div>

                {/* Coding Quiz */}
                <div className="coding-quiz">
                    <a href="https://karina5151.github.io/Code-Quiz/" target="_blank" rel="noreferrer">
                        <img src="./assets/code_quiz-screenshot.png" width="320" height="270" alt="Coding Quiz" />
                    </a>
                    <p><a href="https://github.com/Karina5151/Code-Quiz" target="_blank" rel="noreferrer">Coding Quiz - HTML/CSS/JS</a></p>
                </div>
              
                
            </section>
        </>
    );
}

