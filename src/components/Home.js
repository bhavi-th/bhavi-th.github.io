import "./Home.css"

function Home({ theme }) {
    return (
        <section id="home" className="Home">
            <span id="name" className="fade-elements">Bhavith S</span>
            <p className="fade-elements">
                Welcome to my minimalist digi-space, where I craft clear and practical solutions to real-world problems. I believe technology should be purposeful—streamlining systems and making life easier, one line of code at a time.
            </p>
            <div id="btn-container" className="fade-elements">
                <a href="#projects">
                    View my work
                </a>
            </div>
        </section>
    )
}

export default Home;