export default function Projects(){
    return(
        <>
        <div className="parent-project">
            <h2>Our Projects</h2>
                <div className="pic1-container">
                <img src="pr-01.png" alt="pic" className="pr01" />
                <img src="pr-02.png" alt="pic" className="pr02"/>
                </div>
                <div className="pic1-container">
                <img src="pr-03.png" alt="pic" className="pr03"/>
                <img src="pr-04.png" alt="pic" className="pr04"/>
                <img src="pr-05.png" alt="pic" className="pr05"/>
                </div>
            <button className="project-button" > ALL PROJECTS → </button>
        </div>
        </>
    )
}