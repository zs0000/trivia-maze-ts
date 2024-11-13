import s from './TvComponent.module.css';
import MazeComponent from '../MazeComponent/MazeComponent';
import { useMazeContext } from '../../context/MazeContext';

export default function TvComponent() {

    const {myMaze} = useMazeContext();
  return (
    <div className={s.tvContainer}>
        <div className={s.outerContainer}>
          <div className={s.innerContainer}>
          <div className={s.mazeContainer}>
            {myMaze && <MazeComponent maze={myMaze.getMaze()} />}
        </div>
          </div>
        </div>
    </div>
  )
}
