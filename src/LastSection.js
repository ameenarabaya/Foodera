import { AiOutlineTwitter,AiFillLinkedin,AiFillFacebook} from "react-icons/ai";
import './last.css';
function LastSection(){
    return(
        <>
        <footer>
        <ul className="d-flex gap-4">
            <li><a href="">Register</a></li>
             <li><a href="">Forum</a></li>
            <li><a href="">Affilaite</a></li>
            <li><a href="">FAQ</a></li>
        </ul>
        <div className="icons">
        <span><i><AiOutlineTwitter/></i></span>
        <span><i><AiFillLinkedin/></i></span>
        <span><i><AiFillFacebook/></i></span>
        </div>
        <p>	 &copy; 2021.Foodera. All rights reserved.</p>
        </footer>
        </>
    );
}
export default LastSection;