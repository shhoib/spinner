import React, { useState, useEffect } from 'react';
import './spinner.scss'


const Spinner = () => {

    const symbols = ['spin1.jpg','spin2.jpg','spin3.jpg','spin4.jpg','spin5.jpg',];
    const [reels, setReels] = useState([symbols[0], symbols[0], symbols[0]]);
    const [currentImage, setCurrentImage] = useState(0);
    console.log(currentImage);


    const [isSpinning, setIsSpinning] = useState(false);
  
    const spinReels = () => {
      if (!isSpinning) {
        setIsSpinning(true);

        
        const intervalId = setInterval(() => {
          setCurrentImage((prevImage) => (prevImage + 1) % symbols.length);
        }, 100);

        setTimeout(() => {
          clearInterval(intervalId);
        }, 2000);

        // setIsSpinning(false);

        // setTimeout(() => {
          setReels([
            symbols[Math.floor(Math.random() * symbols.length)],
            symbols[Math.floor(Math.random() * symbols.length)],
            symbols[Math.floor(Math.random() * symbols.length)],
          ]);
          setIsSpinning(false);
        // }, 2000); 
      }
    };
  

  return (
     <div>
      <div className="reel-container">
        {/* {reels.map((symbol, index) => ( */}
          <div  className="">
            <img src={symbols[currentImage]} alt="" />
          </div>
       
      </div>
      <button onClick={spinReels} disabled={isSpinning}>
        Spin
      </button>
    </div>
  )
}

export default Spinner