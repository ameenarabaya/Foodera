import Buttonblock from "./Buttonblock";
import './Background.css';
function Background() {
    return (
        <div className="section d-flex">
            <div className="overlay"></div>
            <h3>Baked fresh daily by bakers with passion.</h3>
            <Buttonblock/>
        </div>
    );
}
export default Background;