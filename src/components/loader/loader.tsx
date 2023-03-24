import { Backdrop, CircularProgress } from '@mui/material';

interface LoadingProps {
  loading: boolean;
}

const Loader: React.FC<LoadingProps> = ({ loading }) => {
  return (
    <Backdrop open={loading} style={{ zIndex: 100 }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
