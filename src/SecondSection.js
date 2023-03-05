import { Button } from 'bootstrap';
import image from './images/1.png';
import './Secondsection.css';
import Buttonblock from './Buttonblock';
function SecondSection() {
    return (
        <div className="container">
            <div className='contain'>
                <div className="image">
                    <img src={image}></img>
                    </div>
                    <div className='textp'>
                        <h3>We pride ourselves on making real food from the best ingredients.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        {/* <button type='submit'>Learn More</button> */}
                       <Buttonblock />
                </div>
            </div>
        </div>
    );
}
export default SecondSection;