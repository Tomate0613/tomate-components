import './style.scss';

interface WindowControlsProps {
  isFocused: boolean;
  isMaximized: boolean;

  onMinimize: () => void;
  onToggleMaximize: () => void;
  onClose: () => void;
}

const WindowControls = ({
  isFocused,
  isMaximized,

  onMinimize,
  onToggleMaximize: onMaximize,
  onClose,
}: WindowControlsProps) => {
  return (
    <div className={`window-controls${isFocused ? '' : ' unfocused'}`}>
      <div
        className="window-button minimize"
        title="Minimize"
        onClick={onMinimize}
      />
      <div
        className={`window-button ${isMaximized ? 'restore' : 'maximize'}`}
        title={isMaximized ? 'Restore' : 'Maximize'}
        onClick={onMaximize}
      />
      <div className="window-button close" title="Close" onClick={onClose} />
    </div>
  );
};

export default WindowControls;
