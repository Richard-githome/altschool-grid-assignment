import { range } from "./utils";
import './grid.css';



function Grid({ numRows, numCols }) {
  return (
    
      range(numRows).map((col) => (
        <div className="grid">
          {range(numCols).map((row) => (
            <div className="cell"></div>
          ))}
          </div>
      ))
  )
}

export default Grid;
