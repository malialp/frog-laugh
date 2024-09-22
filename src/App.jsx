import { useState } from "react";

const frames = [
  "assets/frog_1.png",
  "assets/frog_2.png",
  "assets/frog_3.png",
  "assets/frog_4.png",
  "assets/frog_5.png",
];

const App = () => {
  const [frog, setFrog] = useState(0);

  let laughSound = new Audio("/assets/laugh.wav");

  const laugh = () => {
    if (frog == 0) {
      setTimeout(() => {
        setFrog(1);
        setTimeout(() => {
          setFrog(2);
          setTimeout(() => {
            setFrog(3);
            setTimeout(() => {
              setFrog(4);
            }, 300);
          }, 300);
        }, 300);
      }, 600);
      laughSound.play();
    } else if (frog == 4) {
      setFrog(0);
    }
  };

  return (
    <div className="bg-green-500 h-full">
      <div className="container mx-auto h-full flex items-center justify-center">
        <img onClick={laugh} src={frames[frog]} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default App;
