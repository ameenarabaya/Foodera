import './video.css';
import { AiFillCaretRight } from "react-icons/ai";
function Video() {
    return (
        <>
            <div className="video">
                <h1>When a man's stomach is full it makes no<br></br>
                    difference whether he is rich or poor.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                    finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              <span>
                <a href='https://www.youtube.com/watch?v=bZx8rPd-PKQ'><i><AiFillCaretRight/></i>watch our story </a></span>
            </div>
        </>
    );

}
export default Video;