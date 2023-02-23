import React, { useEffect, useCallback, useState } from 'react';

function App() {

  const [color, setColor] = useState('black');
  const [count, setCount] = useState(0);

  const handleColor = useCallback((event) => {
    console.log(count);
    switch (count + 1) {
      case 1:
        setCount((prevCount) => prevCount + 1);
        setColor('#6A5ACD');
        break;
      case 2:
        setCount((prevCount) => prevCount + 1);
        setColor('#191970');
        break;
      case 3:
        setCount((prevCount) => prevCount + 1);
        setColor('#0000FF');
        break;
      case 4:
        setCount(0);
        setColor('#00BFFF');
        break;
      default:
        break;
    }
  }, [count]);

  useEffect(() => {
    document.addEventListener('keydown', handleColor);

    return () => {

      document.removeEventListener('keydown', handleColor);
    };
  }, [handleColor]);

  // const [color, setColor] = useState('black');
  // const [count, setCount] = useState(0);

  // document.addEventListener('keydown', handleColor);

  // function handleColor() {
  //   console.log(count);
  //   switch (count + 1) {
  //     case 1:
  //       setCount(count + 1);
  //       setColor('#6A5ACD');
  //       break;
  //     case 2:
  //       setCount(count + 1);
  //       setColor('#191970');
  //       break;
  //     case 3:
  //       setCount(count + 1);
  //       setColor('#0000FF');
  //       break;
  //     case 4:
  //       setCount(count - count);
  //       setColor('#00BFFF');
  //       break;

  //     default:
  //       break;
  //   }
  // }

  return (
    <>

    <div style={{position:'absolute', zIndex:'-100', border: '10px solid'+color, width:'100vw', height:'100vh', transition:'0.3s ease', boxSizing:'border-box'}}></div>

    <div style={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <h1 style={{color: color, transition:'0.3s ease'}}>press any key</h1>
      {/* <button onClick={handleColor} style={{background:color, transition:'0.3s ease'}}>switch</button> */}
    </div>

    </>
  );
}

export default App;
