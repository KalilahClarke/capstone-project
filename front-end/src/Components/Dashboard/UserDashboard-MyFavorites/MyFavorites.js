//Dependencies
import React from "react";

//Components

//CSS
import "./MyFavorites.css";

const MyFavorites = ({setLocation}) => {
  return (
    <>
      <h3 className="head">Favorites</h3>
      <div className="favorites" onClick={()=>setLocation('myFavorites')}>
        <p className="no-requests"> Coming soon...</p>
      </div>
    </>
  );
};

export default MyFavorites;
