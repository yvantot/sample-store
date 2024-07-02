import { Link } from 'react-router-dom';
import star_icon from '../assets/star.svg';

const Item = (props) => {
  return (
    <section>
      <Link to={`product/${props.id}`}>
        <div className="shrink-0 w-28 min-h-48 rounded font-montserrat bg-white">
          <img className="h-24 object-cover w-full" src={props.image} alt="" />
          <div className="p-2">
            <p className="break-all text-ellipsis line-clamp-2 text-xs">{props.title}</p>
            <div className='flex gap-3 justify-between mt-3'>
              <div className='flex'>
                {props.rating.rate && Array.from({ length: Math.round(props.rating.rate) }).map((_, i) => (
                  <img className='w-3' src={star_icon} key={i} alt="" />
                ))}
              </div>
              <p className='text-[0.75rem] text-yellow-400 mr-3'>{props.rating.rate && props.rating.rate}</p>
            </div>
            <div className='mt-1'>
              <span className="text-slate-400 text-xs">$</span>
              <span className="text-slate-500 text-xs">{props.price}</span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Item;
