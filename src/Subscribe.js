import Buttonblock from './Buttonblock';
import './subscribe.css'
function Subscribe(){
    return(
        <>
        <div className="container d-flex flex-column justify-content-center align-items-center subs">
        <h3 className='mb-4 '>Hurry up! Subscribe our newsletter<br></br>and get 25% Off</h3>
        <p className='mb-4'>Limited time offer for this month. No credit card required.</p>
        <div className="sub">
        <input placeholder='Email Address here' className="" type={"email"}></input>
        <Buttonblock Subscribe />
        </div>
        </div>
        </>
    );
}
export default Subscribe;