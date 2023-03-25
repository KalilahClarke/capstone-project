import React from 'react'

// Components
import { GiAchievement } from "react-icons/gi";
import { RiStarSFill } from "react-icons/ri";
import ProgressBar from "react-bootstrap/ProgressBar";
import Chart from './Chart.js'
import PieChart from './PieChart';
// import data from './data.json'
 

// CSS
import "./Achievements.css";


const Achievements = ({ applicationUser, completedData }) => {

  const ratings = [1, 2, 4, 5, 2, 5, 3, 1, 5];
  let color = "";

  const colorObject = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };

  for (let i = 0; i < ratings.length; i++) {
    colorObject[ratings[i]]++;
  }
  const decimal = (colorObject["4"] + colorObject["5"]) / ratings.length;
  const percentage = decimal * 100;

  if (percentage >= 80) {
    color = "gold";
  } else if (percentage >= 60) {
    color = "silver";
  } else if (percentage >= 40) {
    color = "bronze";
  } else {
    color = "black";
  }

  const totalRating = ratings.length;
  // should be completed requests not rating
  let volenteerLevel = "";
  if (totalRating >= 100) {
    volenteerLevel = "Expert";
  } else if (totalRating >= 60) {
    volenteerLevel = "Advance";
  } else if (totalRating) {
    volenteerLevel = "Intermediate";
  } else {
    volenteerLevel = "Novice";
  }
 
 

  return (
    <div className="achieve">
      <div className="achieve-grid">
        <div>

        <div className="achieve-box">
          <div className="achieve-header">
            <div className="achieve-name">
              <h3>
                {applicationUser.firstname + " " + applicationUser.lastname}
              </h3>
              <p>{volenteerLevel} Volunteer</p>
            </div>
            <GiAchievement size={60} className={color} />
          </div>
         </div>
         <div className="achieve-box">
          <div className="rating">
            <div className='rating-component'>
            <div> 5 </div><RiStarSFill className={color}/>
            <ProgressBar
              className="success"
              animated
              now={(colorObject["5"] / ratings.length) * 100}
            />
            </div>
          </div>
         
          <div className="rating">
            <div className='rating-component'>
            <div> 4 </div><RiStarSFill className={color}/>
            <ProgressBar
              className="success"
              animated
              variant="success"
              now={(colorObject["4"] / ratings.length) * 100}
            />
            </div>
          </div>
          
          <div className="rating">
          <div className='rating-component'>
            <div> 3 </div><RiStarSFill className={color}/>
            <ProgressBar
              className="success"
              animated
              variant="info"
              now={(colorObject["3"] / ratings.length) * 100}
            />
              </div>
          </div>
          
          <div className="rating">
          <div className='rating-component'>
            <div> 2 </div><RiStarSFill className={color}/>
            <ProgressBar
              className="success"
              animated
              variant="warning"
              now={(colorObject["2"] / ratings.length) * 100}
            />
            </div>
          </div>
        
          <div className="rating">
          <div className='rating-component'>
            <div> 1 </div><RiStarSFill className={color}/>
            <ProgressBar
              className="success"
              animated
              variant="danger"
              now={(colorObject["1"] / ratings.length) * 100}
            />
            </div>
          </div>
        
        </div>
        <div className="achieve-box"></div>
        </div>
        <div className="achieve-box">  
           <PieChart completedData={completedData}/>
        </div>
      </div>
        <div className="achieve-box calendar-nivo">
        <Chart data={completedData}/>
        </div>
    </div>
  );
};

export default Achievements;
