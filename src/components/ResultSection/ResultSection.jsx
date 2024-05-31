import Button from "/src/components/Button/Button.jsx";
import classes from "/src/components/ResultSection/ResultSection.module.css";
import { allRoundQuetions } from "/data.js";

export default function ResultSection({
  teams,
  score,
  roundN,
  setRoundN,
  qtyOfRounds,
  setBoardCondition,
  buttonVisibility,
  setActualRound,
}) {
  return (
    <>
      <div className={classes.result}>
        <div className={classes.center}>
          <div>
            <p>
              РЕЗУЛЬТАТЫ{" "}
              {roundN == 0 ? "ПЕРВОГО" : roundN == 1 ? "ВТОРОГО" : roundN + 1}{" "}
              РАУНДА
            </p>
          </div>
          <div className={classes.result}>
            <div className={classes.teams}>
              <p className={classes.text}>{teams.team1}</p>
              <p>{score.score1}</p>
            </div>
            <div className={classes.teams}>
              <p className={classes.text}>{teams.team2}</p>
              <p>{score.score2}</p>
            </div>
            <div className={classes.teams}>
              <p className={classes.text}>{teams.team3}</p>
              <p>{score.score3}</p>
            </div>
          </div>
          {buttonVisibility && (
            <>
              <Button
                onClick={() => {
                  roundN < qtyOfRounds - 1
                    ? (setActualRound([...allRoundQuetions[roundN]]),
                      setRoundN(roundN + 1),
                      setBoardCondition("tableAd"))
                    : (setBoardCondition("finalAd"), setRoundN("final"));
                }}
              >
                ok
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
}