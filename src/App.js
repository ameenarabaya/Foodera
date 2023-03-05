import Background from "./Background";
import Firstsection from "./Firstsection";
import FourthSection from "./FourthSection";
import Navbar from "./Navbar";
import Number from "./Number";
import People from "./People";
import Question from "./Question";
import SecondSection from "./SecondSection";
import Subscribe from "./Subscribe";
import ThirdSection from "./ThirdSection";
import Video from "./Video";
import LastSection from "./LastSection";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Firstsection />
      <Number />
      <SecondSection />
      <ThirdSection />
      <Video />
      <FourthSection />
      <People />
      <Question/>
      <Background/>
      <Subscribe/>
      <LastSection/>
    </div>
  );
}

export default App;
