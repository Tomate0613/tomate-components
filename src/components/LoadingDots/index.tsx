import './style.scss';

const LoadingDots = () => {
  return (
    <svg aria-hidden="true" className="loading-dots" aria-label="Loading">
      <circle
        className="dot dot-1"
        cx="4"
        cy="8"
        r="1.333"
        fill="var(--color-text)"
      />
      <circle
        className="dot dot-2"
        cx="8"
        cy="8"
        r="1.333"
        fill="var(--color-text)"
      />
      <circle
        className="dot dot-3"
        cx="12"
        cy="8"
        r="1.333"
        fill="var(--color-text)"
      />
    </svg>
  );
};

export default LoadingDots;
