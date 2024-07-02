import loading_icon from '../assets/loading_icon.svg';

const Loading = () => {
  return (
    <>
      <div className="flex items-center flex-col fixed top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <img className="w-10 animate-spin" src={loading_icon} alt="" />
      </div>
    </>
  );
};
export default Loading;
