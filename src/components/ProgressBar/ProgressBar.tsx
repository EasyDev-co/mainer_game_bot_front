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
      <div className="progress-bar__block">
        <ProgressBar
          completed={(currentValue / totalValue) * 100}
          customLabel=" "
          bgColor="#00FF00"
          height="20px"
        />
        <div className="progress-bar__custom-label">{`${currentValue}/${totalValue}`}</div>
      </div>
    </div>
  );
};
