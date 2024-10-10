import React from 'react';
import '../../../assets/Loader.css';
import { LoaderProps } from './LoaderConfig';

const Loader: React.FC<LoaderProps> = ({
  type,
  size,
  progress,
  customStyles,
}) => {
  if (type === 'progress') {
    return (
      <div className="progress-bar-container" style={{ width: `${size}` }} role="progressbar">
        <div
          className="progress-bar"
          style={{
            width: `${progress}%`,
            backgroundColor: customStyles?.color,
          }}
        />
      </div>
    );
  }

  return (
    <div className="spinner" style={{ width: size, height: size }} role="img">
      <div
        className="spinner-circle"
        style={{
          borderColor: customStyles?.color || '#0080ff',
        }}
      />
    </div>
  );
};

export default Loader;
