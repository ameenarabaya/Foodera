import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import './People.css';
function People() {
    return (
        <>
            <div className="backGround">
                <h6>Testimonials</h6>
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button style={{ backgroundColor: "white", width: "15px", height: "15px", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1"></button>
                        <button style={{ backgroundColor: "white", width: "15px", height: "15px", borderRadius: "50%", }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className='card'>
                                <img src={img1}></img>
                                <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
                                <p className='nam'>Simab Dave - Web Designer</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='card'>
                                <img src={img2}></img>
                                <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
                                <p className='nam'>Johnthan Doe - UX Designer</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='card'>
                                <img src={img1}></img>
                                <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
                                <p className='nam'>Simab Dave - Web Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default People;