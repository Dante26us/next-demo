import { useSelector } from "react-redux";

const Loader = () => {
  const loader = useSelector((state) => state.loaderReducer);

  if (!loader.isLoading) {
    return null;
  }

  return (
    <>
      <div className="backdrop"></div>
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    </>
  );
};

export default Loader;
