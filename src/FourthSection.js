import img1 from './images/03.jpg';
import img2 from './images/02.jpg';
import img3 from './images/01.jpg';
import './fourth.css';
function FourthSection() {
    return (
        <div className="container">
            <h1>Explore Our Foods</h1>
            <p className='firstP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
            <div className="all">
                <div className="contain">
                    <img src={img1} style={{ width: "350px", height: "250px" }}></img>

                    <p className='name'>Raspberry Stuffed French Toast</p>
                    <p className='time'>Time: 10 - 15 Minutes | Serves: 1</p>
                    <div className='hello'>
                        <span className='num'>$12.50</span>
                           <span className='deleted'> $13.20</span>
                    </div>
                    <button>Order Now</button>
                </div>
                <div className="contain">
                    <img src={img2} style={{ width: "350px", height: "250px" }}></img>
                    <p className='name'>Vegetarian Burger</p>
                    <p className='time'>Time: 30 - 45 Minutes | Serves: 1</p>
                    <div className='hello'><span className='num'>$9.20</span>
                            <span className='deleted'>$10.50</span></div>
                    <button>Order Now</button>
                </div>
                <div className="contain">
                    <img src={img3} style={{ width: "350px", height: "250px" }}></img>
                    <p className='name'>Rainbow Vegetable Sandwich</p>
                    <p className='time'>Time: 15 - 20 Minutes | Serves: 1</p>
                    <div className='hello'><span className='num'>$10.50 </span>
                            <span className='deleted'>$11.70</span></div>
                    <button>Order Now</button>
                </div>
            </div>
        </div>
    );

}
export default FourthSection;