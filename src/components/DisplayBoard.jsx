import shoe_img from '../assets/shoe.png';

const DisplayBoard = () => {
  return (
    <div className="w-full h-48 bg-gradient-to-r from-emerald-900 to-cyan-300 text-white relative overflow-hidden">      
      <div className="font-montserrat text-5xl font-bold h-full items-center flex px-3">
        <div className='flex items-center flex-wrap md:flex-nowrap gap-3'>
          <p className="drop-shadow-md bg-gradient-to-r from-white to-cyan-500 text-transparent bg-clip-text line-clamp-1">The Best Store</p>
          <p className="drop-shadow-md bg-gradient-to-r from-white to-cyan-500 text-transparent bg-clip-text line-clamp-1">Ever.</p>
        </div>
      </div>
      <div className="flex justify-end absolute top-0 right-0">
        <img className="w-48 rounded-l-full rounded-bl-none" src={shoe_img} alt="" />
      </div>
    </div>
  );
};
export default DisplayBoard;
