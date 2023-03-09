// Components
import SvgIcon from '../../../ComingSoon/SvgIcon'
// CSS
import "./Achievements.css";
import ProgressBar from 'react-bootstrap/ProgressBar';

const Achievements = () => {


  return (
 
    <div className="achieve">
       <ProgressBar striped variant="success" now={40} />
    </div>

);
{/* <SvgIcon />
<p>GoldenSolutions Achievements</p>
<p> Coming Soon!</p> */}
};

export default Achievements;
