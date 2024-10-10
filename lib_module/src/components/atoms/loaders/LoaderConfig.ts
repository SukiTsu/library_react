export interface LoaderProps {
  type: 'spinner' | 'progress';
  size?: string;
  progress?: number;
  customStyles?: {
    color?: string;
    backgroundColor?: string;
  };
}


const loaderConfig: LoaderProps = {
  type: 'progress',
  size: '50',
  progress: 65,
  customStyles: {
    color: '#00cc66',
  },
};

export { loaderConfig };
