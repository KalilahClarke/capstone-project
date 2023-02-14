// Components
import SvgIcon from '../../ComingSoon/SvgIcon'
import SidebarNav from "../SideBarNav/SidebarNav.js";
import Loading from '../Loading.js';

// CSS
import "./Achievements.css";

// Components
// import SidebarNav from "../Dashboard/SidebarNav.js";


const Achievements = ({setDate, date, applicationUser, setRequestSearch, requestSearch }) => {


  return (
      // <Loading SvgIcon={SvgIcon} />
    <div className='user-dashboard'>
      <div className='sidebar-nav'>
      <SidebarNav setDate={setDate} applicationUser={applicationUser}  date = {date} setRequestSearch = {setRequestSearch} requestSearch = {requestSearch} style ={{width: '60px'}}/>
      </div>
    <div className="achieve" style={{ paddingTop: "110px" }}>
      <SvgIcon />
      <p>GoldenSolutions Achievements</p>
      <p> Coming Soon!</p>
    </div>
    </div>
  );
};

export default Achievements;
