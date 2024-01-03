import { useState } from "react";
import "./spinner.scss";
import { motion } from "framer-motion";
import { IoWalletOutline } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";


const Spinner = () => {
  const images = ["spin1.jpg", "spin2.jpg","spin3.jpg","spin5.jpg",];

  const [isSpinning1, setIsSpinning1] = useState(false);
  const [isSpinning2, setIsSpinning2] = useState(false);
  const [isSpinning3, setIsSpinning3] = useState(false);
  const [reels1, setReels1] = useState('spin5.jpg');
  const [reels2, setReels2] = useState('spin4.jpg');
  const [reels3, setReels3] = useState('spin6.jpg');
  const [spinningCompleted, setSpinningCompleted] = useState(false);

  
  const spinSlot = async () => {
    setSpinningCompleted(false);
    if (!isSpinning1 && !isSpinning2 && !isSpinning3) {
      setIsSpinning1(true);
      setIsSpinning2(true);
      setIsSpinning3(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setReels1(images[Math.floor(Math.random() * images.length)]);
      setIsSpinning1(false);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setReels2(images[Math.floor(Math.random() * images.length)]);
      setIsSpinning2(false);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setReels3(images[Math.floor(Math.random() * images.length)]);
      setIsSpinning3(false);

      setSpinningCompleted(true);
    }
  };
  console.log( );

  return (
    <div className={`spinner ${spinningCompleted && reels1 === reels2 && reels2 === reels3 ? 'winner' : ''}`}>
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
        <img className={isSpinning1 ? "spinningImage" : "image1"}
          src={isSpinning1 ? "collage12.jpg" : reels1}
          alt="" />
        <img className={isSpinning2 ? "spinningImage" : "image2"}
          src={isSpinning2 ? "collage12.jpg" : reels2}
          alt="" />
        <img className={isSpinning3 ? "spinningImage" : "image3"}
          src={isSpinning3 ? "collage12.jpg" : reels3}
          alt="" />
      </div>
      <button onClick={spinSlot} disabled={isSpinning3}>
        {!isSpinning3? 'SPIN NOW' : <AiOutlineLoading3Quarters/> }
      </button>
    </div>
  );
};

export default Spinner;







// import { useState } from "react";
// import "./spinner.scss";
// import { motion } from "framer-motion";
// import { IoWalletOutline } from "react-icons/io5";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { CgProfile } from "react-icons/cg";





// import React from "react";

// const Spinner = () => {
//   const images = ["spin1.jpg", "spin2.jpg", "spin3.jpg", "spin5.jpg"];
//   const [isSpinning, setIsSpinning] = useState(false);
//   const [reels, setReels] = useState([images[1], images[2], images[3]]);

//   const spinSlot = () => {
//     if (!isSpinning) {
//       setIsSpinning(true);

//       setTimeout(() => {
//         setIsSpinning(false);
//         setReels([
//           images[Math.floor(Math.random() * images.length)],
//           images[Math.floor(Math.random() * images.length)],
//           images[Math.floor(Math.random() * images.length)],
//         ]);
//       }, 3000);
//     }
//   };

//   return (
//     <div className={`spinner ${reels[0] === reels[1] && reels[1] === reels[2] ? 'winner' : ''}`}>
//       {/* <div className="heading"></div> */}
//       <img className="text" src="spintowin.jpg" alt="" />
//        <div className="wallet">
//         <IoWalletOutline className="walleticon"/>
//         <h4> $100</h4>
//         </div>
//       <div className="profile">
//         <CgProfile className="profileicon"/>
//          <h4>Ashik</h4>
//          </div>
      
//       <div className="image-container">
//         <img
//           className={isSpinning ? "spinningImage" : "image1"}
//           src={isSpinning ? "collage12.jpg" : reels[0]}
//           alt=""
//         />
//         <img
//           className={isSpinning ? "spinningImage" : "image2"}
//           src={isSpinning ? "collage12.jpg" : reels[1]}
//           alt=""
//         />
//         <img
//           className={isSpinning ? "spinningImage" : "image3"}
//           src={isSpinning ? "collage12.jpg" : reels[2]}
//           alt=""
//         />
//       </div>
//       <button onClick={spinSlot} disabled={isSpinning}>
//         {!isSpinning? 'SPIN NOW' : <AiOutlineLoading3Quarters/> }
//       </button>
//     </div>
//   );
// };

// export default Spinner;

