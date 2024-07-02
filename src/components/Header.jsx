import search_icon from '../assets/search_icon.svg';
import cart_icon from '../assets/shopping_cart.svg';
import account_icon from '../assets/account_icon.svg';
import store_icon from '../assets/store_icon.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="flex justify-between text-slate-900 h-[2rem] items-center p-5">
        <div className="flex gap-3">
          <img className="w-5" src={store_icon} alt="" />
          <Link to="/">
            <h1 className="font-montserrat text-sm tracking-widest">EcoStore</h1>
          </Link>
        </div>
        <div className="flex gap-2">
          <Link to="search">
            <img className="w-5" src={search_icon} alt="" />
          </Link>
          <Link to="cart">
            <img className="w-5" src={cart_icon} alt="" />
          </Link>
          <Link to="account">
            <img className="w-5" src={account_icon} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
