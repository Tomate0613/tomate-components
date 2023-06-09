import './style.scss';

interface ProgressBarProps {
  progress: number;
  progressText: string;
  progressTextSec: string;
}

const ProgressBar = ({
  progress,
  progressText,
  progressTextSec,
}: ProgressBarProps) => {
  return (
    <div
      id="progress-bar"
      className={`${progress > -1 ? 'progress' : ''}${
        progressText === '' ? '' : ' has-text'
      }`}
      role="progressbar"
    >
      <div
        id="client-progress"
        style={{
          width: `${(progress === -1 ? 0 : progress * 100).toFixed(2)}vw`,
        }}
      />
      <div id="progress-text">
        {progressText} <span className="t-secondary">{progressTextSec}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
