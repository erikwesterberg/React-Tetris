import React, { useState } from "react";

import { createStage } from "../gameHelpers";

// styled components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris"; 
//Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

//Custom Hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";


const Tetris = () => {
  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const [player] = useStage()
  const [stage, setStage] = useStage(player)

  console.log("re-render")

  const movePlayer = dir => {

  }

  const startGame = () => {

  }

  const drop = () => {

  }

  const dropPlayer = () => {

  }

  const move = ({ keyCode }) => {
    if (!gameOver) {
      // 37 = leftarrow keyboard, moving to the left
      if(keyCode === 37) {
        movePlayer(-1)
        // right arrow keybord, moving to right
      } else if (keyCode === 39) {
        movePlayer(1);
        // 40 down arrow, moves down
      } else if (keyCode === 40) {
        dropPlayer()
      }
    }
  }
  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <StyledTetris>
      <Stage stage={stage}/>
      <aside>
        {gameOver ? (
          <Display gameOver={gameOver} text="Game Over" />
        ) : (
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        )}
        <StartButton />
      </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};
export default Tetris;
