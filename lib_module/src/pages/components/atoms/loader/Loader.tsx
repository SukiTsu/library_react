import React from 'react';
import '../../../../assets/Loader.css';

export interface LoaderProps {
  type: 'spinner' | 'progress';
  progress?: number; 
}

const Loader: React.FC<LoaderProps> = ({
  type,
  progress = 0,
}) => {
  if (type === 'progress') {
    return (
      <div className="progress-bar-container" role="progressbar">
        <div
          className="progress-bar"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    );
  }

  return (
    <div className="spinner" role="img">
      <div className="spinner-circle" />
    </div>
  );
};

export default Loader;
