import "./ProgressBar.css";
import ProgressBar from "@ramonak/react-progress-bar";

export const ProgressBarComponent = ({
  currentValue,
  totalValue,
}: {
  currentValue: number;
  totalValue: number;
}) => {
  return (
    <div className="progress-bar__container">
      <div className="progress-bar__bg">
        <div className="progress-bar__block">
          <ProgressBar
            completed={(currentValue / totalValue) * 100}
            customLabel=" "
            bgColor="linear-gradient(rgb(173, 216, 230), rgb(9 40 167))"
            height="21px"
            borderRadius="2px"
            baseBgColor="rgb(216 213 213)"
          />
          <div className="progress-bar__custom-label">{`${currentValue}/${totalValue}`}</div>
        </div>
      </div>
    </div>
  );
};
