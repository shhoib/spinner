import { useState } from "react";
import "./spinner.scss";
import { motion } from "framer-motion";
import { IoWalletOutline } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";





import React from "react";

const Spinner = () => {
  const images = ["spin1.jpg", "spin2.jpg", "spin3.jpg", "spin5.jpg"];
  const [isSpinning, setIsSpinning] = useState(false);
  const [reels, setReels] = useState([images[1], images[2], images[3]]);

  const spinSlot = () => {
    if (!isSpinning) {
      setIsSpinning(true);

      setTimeout(() => {
        setIsSpinning(false);
        setReels([
          images[Math.floor(Math.random() * images.length)],
          images[Math.floor(Math.random() * images.length)],
          images[Math.floor(Math.random() * images.length)],
        ]);
      }, 3000);
    }
  };

  return (
    <div className={`spinner ${reels[0] === reels[1] && reels[1] === reels[2] ? 'winner' : ''}`}>
      {/* <div className="heading"></div> */}
      <img className="text" src="spintowin.jpg" alt="" />
       <div className="wallet">
        <IoWalletOutline className="walleticon"/>
        <h4> $100</h4>
        </div>
      <div className="profile">
        <CgProfile className="profileicon"/>
         <h4>Ashik</h4>
         </div>
      
      <div className="image-container">
        <img
          className={isSpinning ? "spinningImage" : "image1"}
          src={isSpinning ? "collage12.jpg" : reels[0]}
          alt=""
        />
        <img
          className={isSpinning ? "spinningImage" : "image2"}
          src={isSpinning ? "collage12.jpg" : reels[1]}
          alt=""
        />
        <img
          className={isSpinning ? "spinningImage" : "image3"}
          src={isSpinning ? "collage12.jpg" : reels[2]}
          alt=""
        />
      </div>
      <button onClick={spinSlot} disabled={isSpinning}>
        {!isSpinning? 'SPIN NOW' : <AiOutlineLoading3Quarters/> }
      </button>
    </div>
  );
};

export default Spinner;
