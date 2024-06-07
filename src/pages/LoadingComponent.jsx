import CircularProgress from "@mui/material/CircularProgress";

const LoadingComponent = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <CircularProgress />
    </div>
  );
};

export default LoadingComponent;
