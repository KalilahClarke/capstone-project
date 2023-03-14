// Components
import SvgIcon from "../../../ComingSoon/SvgIcon";
import { GiAchievement } from "react-icons/gi";
import { RiStarSFill } from "react-icons/ri";
import ProgressBar from "react-bootstrap/ProgressBar";
import Chart from './Chart'

import { useState } from 'react'

// CSS
import "./Achievements.css";


const Achievements = ({ applicationUser }) => {
  let accumulator = 0
  let months =  ['January','Feburary', 'March', 'April', 'May', 'June','July','August','September','October','November','December']
  const [chartData, setChartData] = useState({
    labels: months.map((data) => data),

    datasets: [
      {
        label: "Users Gained ",
        data: months.map((data) => accumulator++),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#f0331a",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });






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
    console.log("bronze");
    color = "bronze";
  } else {
    console.log("black");
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
  //     --bs-success-rgb
  console.log(color);

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
            {/* <Chart chartData={chartData}/> */}
        </div>
        <div className="achieve-box">
        
        </div>
        <div className="achieve-box"></div>
      </div>
    </div>
  );
};

export default Achievements;
