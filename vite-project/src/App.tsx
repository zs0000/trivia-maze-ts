import { useEffect, useState } from 'react';
import s from './Home.module.css'

import MazeGenerator from './models/MazeGenerator'
import MazeComponent from './components/MazeComponent/MazeComponent';
import Maze from './models/Maze';


function App() {
  const [mySize, setMySize] = useState<number>(4);
  const [myTempMaze, setMyTempMaze] = useState<number[][]>();
  const [loading, setLoading] = useState<boolean>(true);
  const handleClickButton = async() => {
    try { 
      const myMazeGenerator:MazeGenerator = new MazeGenerator();
      const myMazeAsNumbers:number[][] = myMazeGenerator.mazeGeneration(mySize);
      const myMaze:Maze = new Maze(myMazeAsNumbers);
      setMyTempMaze(myMazeAsNumbers);

      console.log(myMaze.getStartingRoom());
      myMaze.printMaze();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(mySize && mySize > 7){
      alert("Size must be less than or equal to 7");
      setMySize(7);
    }
  }, [mySize]);

  return (
    <div className={s.container}>
      <div className={s.topContainer}>
      <div className={s.sizeContainer}>
        <span className={s.sizeLabel}>Size</span>
        <input className={s.sizeInput} type="number" value={mySize} onChange={(e) => setMySize(parseInt(e.target.value))} />
      </div>
 
      <button disabled={!mySize || mySize < 4} className={!mySize || mySize < 4 ? s.disabledButton : s.button} onClick={handleClickButton}>Generate Maze</button>

      </div>
      
      <div className={s.mazeContainer}>
        <span>
          {loading ? "no Maze..." : "Maze Generated"}
        </span>
        {!loading && myTempMaze ? 
        <MazeComponent maze={myTempMaze} />
        :
      <></>
    }
      </div>  
    </div>
  )
}

export default App
