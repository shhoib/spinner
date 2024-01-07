import { useState ,useRef } from "react";
import "./spinner.scss";



const Spinner = () => {
  const images = ["apple.png", "banana.png",'cherry.png','lemon.png'];

  const [isSpinning1, setIsSpinning1] = useState(false);
  const [isSpinning2, setIsSpinning2] = useState(false);
  const [isSpinning3, setIsSpinning3] = useState(false);
  const [reels1, setReels1] = useState('lemon.png');
  const [reels2, setReels2] = useState('cherry.png');
  const [reels3, setReels3] = useState('banana.png');
  const [spinningCompleted, setSpinningCompleted] = useState(false);
  const [amount, setAmount] = useState(1);
  const [isModalOpened, setisModalOpened] = useState(false);
  const modalInputRef = useRef(null);

  
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

  const handleIncrement = () => {
    setAmount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setAmount(prevCount => Math.max(prevCount - 1, 1));
  };

  const handleSave = () => {
    const inputValue = modalInputRef.current.value;
    if(inputValue== ''){
      setisModalOpened(false);
    }else{
      const newAmount = parseInt(inputValue, 10);
      setAmount(newAmount); 
      setisModalOpened(false);
    }
    };

  return (
    <div className= 'spinner'>

     {spinningCompleted && reels1 === reels2 && reels2 === reels3 &&
      <img className="winnerImg" src="winner3.png" alt="" />
     }

     {isModalOpened &&
      <div className="modal">
        <input type="number" ref={modalInputRef}  placeholder="Enter Amount" />
        <div className="buttonContainer">
        <button onClick={() => setisModalOpened(false)}>Close</button>
        <button onClick={handleSave}>Save</button>
        </div>
      </div>
     }

     <div className="amount-container">
       <button onClick={()=>handleDecrement()}>-</button>
       <h4 onClick={() => setisModalOpened(true)}>{amount}</h4>
       <button onClick={()=>handleIncrement()}>+</button>
     </div>
      
      <div className="image-container">
      {!isSpinning1 && 
          <img src={reels1} className={`reels1 ${spinningCompleted && reels1 === reels2 && reels2 === reels3 ? 'reelswin':''}`}/> 
          }
         {!isSpinning2 && 
          <img src={reels2} className={`reels2 ${spinningCompleted && reels1 === reels2 && reels2 === reels3 ? 'reelswin':''}`}/> 
          }
         {!isSpinning3 && 
          <img src={reels3}className={`reels3 ${spinningCompleted && reels1 === reels2 && reels2 === reels3 ? 'reelswin':''}`}/> 
          }

        <div className={isSpinning1 ? "spinningImage1" : "notspinning1"}>     
        <img
          src="collage14.jpg"
          alt="" />      
        </div>
        <div className={isSpinning2 ? "spinningImage2" : "notspinning2"}>
        <img
          src="collage14.jpg"
          alt="" />
        </div>
        <div className={isSpinning3 ? "spinningImage3" : "notspinning3"}>
        <img
          src="collage14.jpg"
          alt="" />
        </div>
      </div>

      <svg className="svg-icon" overflow="hidden" style={{height:'1em',verticalAlign:'middle',width:'1.00390625em'}} version="1.1" viewBox="0 0 1028 1024" xmlns="http://www.w3.org/2000/svg">
    <path d="m983.68 314.59c-25.85-60.781-62.777-115.47-109.79-162.48s-101.7-83.936-162.48-109.79c-62.977-26.748-129.75-40.321-198.41-40.321s-135.44 13.573-198.41 40.321c-60.781 25.85-115.47 62.777-162.48 109.79s-83.936 101.7-109.79 162.48c-26.748 62.977-40.321 129.75-40.321 198.41s13.573 135.44 40.321 198.41c25.85 60.781 62.777 115.47 109.79 162.48s101.7 83.936 162.48 109.79c62.977 26.748 129.75 40.321 198.41 40.321s135.44-13.573 198.41-40.321c60.781-25.85 115.47-62.777 162.48-109.79s83.936-101.7 109.79-162.48c26.748-62.977 40.321-129.75 40.321-198.41 0-68.666-13.573-135.44-40.321-198.41zm-309.99 580.17c-51 21.658-105.09 32.636-160.69 32.636s-109.69-10.979-160.69-32.636c-49.404-21.059-93.817-51.1-131.94-89.126-38.126-38.126-68.067-82.439-89.126-131.94-21.658-51-32.636-105.09-32.636-160.69s10.979-109.69 32.636-160.69c21.059-49.404 51.1-93.817 89.126-131.94 38.126-38.126 82.439-68.067 131.94-89.126 51-21.658 105.09-32.636 160.69-32.636s109.69 10.979 160.69 32.636c49.404 21.059 93.817 51.1 131.94 89.126 38.126 38.126 68.067 82.439 89.126 131.94 21.658 51 32.636 105.09 32.636 160.69s-10.979 109.69-32.636 160.69c-21.059 49.404-51.1 93.817-89.126 131.94-38.126 38.026-82.539 68.067-131.94 89.126z" fill="#fff"/>
    <path d="m476.87 808.82h74.554c8.2838 0 14.971-6.6869 14.971-14.971v-68.366c0-8.2838-6.6869-14.971-14.971-14.971h-74.554c-8.2838 0-14.971 6.6869-14.971 14.971v68.366c0 8.2838 6.6869 14.971 14.971 14.971zm210.69-435.55c-3.2936-51.3-19.262-90.922-47.308-117.87s-68.267-41.12-119.57-42.218h-0.99805c-58.586 2.1957-104.1 19.462-135.24 51.1-31.039 31.638-47.906 77.848-50.102 137.33-0.29942 8.4834 6.4873 15.47 14.971 15.47h65.273c8.0842 0 14.771-6.4873 14.971-14.572 1.8963-72.558 30.441-107.49 90.024-109.69h1.2975c48.904 2.0959 73.656 26.947 77.549 77.948 0 0.49902 0.099805 1.0979 0 1.5969-0.59883 26.548-19.961 59.085-57.687 96.811-51.1 48.904-75.952 93.118-75.952 135.04v55.991c0 8.2838 6.6869 14.971 14.971 14.971h68.366c8.2838 0 14.971-6.6869 14.971-14.971v-65.273c0-11.378 7.8846-32.736 45.212-70.163 52.497-50.302 79.145-101 79.145-150.61l0.099805-0.89825z" fill="#fff"/>
    </svg>

    {/* <img className="spintowin" src="spintowin1.png" alt="" /> */}

      <div className="wallet">
        <h4>20</h4>
        <img src="coin.png" alt="" />
      </div>
    
      <button onClick={spinSlot} disabled={isSpinning3}>
        {!isSpinning3? 'SPIN NOW' : 'SPINNING...'}
      </button>
    </div>
  );
};

export default Spinner;