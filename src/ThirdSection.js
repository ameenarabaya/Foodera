import Buttonblock from "./Buttonblock";
import image from './images/2.png';
import './Third.css';
function ThirdSection() {
    return (
        <div className="container">
            <div className="contains">
                <div className="first-sec">
                    <h3>We make everything by hand with the best possible ingredients.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <ul>
                        <li>Etiam sed dolor ac diam volutpat</li>
                        <li>Erat volutpat aliquet imperdiet.</li>
                        <li>purus a odio finibus bibendum</li>
                    </ul>
                    <Buttonblock />
                </div>
                <div className="second-sec">
                    <img src={image}></img>
                </div>
            </div>
        </div>
    );
}
export default ThirdSection;