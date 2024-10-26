import Footer from "../components/footer";
import Header from "../components/header";

export default function Gallery(){
    return(
        <>
        <Header/>
        <div className="gallery-headline">
        <h1 className="MainSubject">Photo</h1>
        <h1 className="MainSubjectbelow"><span>Gallery</span></h1>
        </div>
            <div className="gallery-pictures">
                <img src="gallery-pic01.png" alt="picture" className="gallery-pic" />
                <img src="gallery-pic02.png" alt="picture" className="gallery-pic" />
                <img src="gallery-pic03.png" alt="picture" className="gallery-pic" />
                <img src="gallery-pic04.png" alt="picture" className="gallery-pic" />
                <img src="gallery-pic05.png" alt="picture" className="gallery-pic" />
            </div>
            <div className="gallery-pictures">
                <img src="gallery-pic06.png" alt="picture" className="gallery-pic" />
                <img src="gallery-pic07.png" alt="picture" className="gallery-pic" />
                <img src="gallery-pic08.png" alt="picture" className="gallery-pic" />
                <img src="gallery-pic09.png" alt="picture" className="gallery-pic" />
                <img src="gallery-pic10.png" alt="picture" className="gallery-pic" />
            </div>
        <Footer/>
        </>
    )
}