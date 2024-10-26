export default function About(){
    return(
        <>
        <div className="about-container">
            <div>
                <img src="picture01.png" alt="picture" className="picture01" />
                <img src="picture02.png" alt="picture" className="picture02"/>
            </div>
            <div>
                <img src="picture03.png" alt="picture" className="picture03"/>
            </div>
            <div className="text-container">
                <h2 className="headings">About</h2>
                <p className="About-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <button className="readmore"> Read More → </button>
            </div>
        </div>
        </>
    )
}