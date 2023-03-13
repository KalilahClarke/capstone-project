// Components
import SvgIcon from '../../../ComingSoon/SvgIcon'
import {GiAchievement} from 'react-icons/gi'

// CSS
import "./Achievements.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { colorChannel } from '@mui/system';

const Achievements = ({applicationUser }) => {

  const ratings = [ 1,2,4,5,2,5,3,1,5]
  let color = ''

  const colorObject = {
    '5': 0,
    '4': 0,
    '3': 0,
    '2': 0,
    '1': 0,
  }

  for(let i = 0; i < ratings.length; i++){
        colorObject[ratings[i]]++
  }
  const decimal =((colorObject['4']+ colorObject['5']) / ratings.length)
  const percentage = decimal * 100

  if(percentage >= 80){
    color = 'gold'
  }else if(percentage >= 60){
     color ='silver'
  }else if(percentage >= 40){
    console.log('bronze')
    color ='bronze'
  }else{
    console.log('black')
    color ='black'
  }

  const totalRating = ratings.length
  // should be completed requests not rating
  let volenteerLevel = ''
  if(totalRating >= 100){
    volenteerLevel = 'Expert'
  }else if(totalRating >= 60){
    volenteerLevel = 'Advance'
  }else if(totalRating){
    volenteerLevel = 'Intermediate'
  }else{
    volenteerLevel = 'Novice'
  }
 
console.log(color)

  return (
 
    <div className="achieve">
      <div className='achieve-grid'>
      <div className='achieve-box'>
        <div className='achieve-header'>
          <div className='achieve-name'>
              <h3>{applicationUser.firstname + ' ' + applicationUser.lastname}</h3> 
              <p>{volenteerLevel} Volunteer</p>
          </div>
        <GiAchievement size={60} className={color} />
        </div>
       <ProgressBar className='success' striped variant="success" now={40} />
      </div>
      <div className='achieve-box'></div>
      <div className='achieve-box'></div>
      <div className='achieve-box'></div>

      </div>




    </div>

);

};

export default Achievements;
