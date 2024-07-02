import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useFetch from '../utils/useFetch';
import Loading from '../components/Loading';
import Header from '../components/Header';
import add_item from '../assets/add_item.svg';
import star_icon from '../assets/star.svg';

const Product = () => {
  const { productId } = useParams();
  const { data: product, pending: isPending } = useFetch(`https://fakestoreapi.com/products/${productId}`);
  const [isExpanded, setIsExpanded] = useState(false);

  const expandDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Header></Header>
      {isPending ? (
        <Loading />
      ) : (
        <div className="font-montserrat mt-4 min-h-screen">
          <div className="bg-white w-full border-b">
            <img className="w-full h-52 object-contain mb-5" src={product.image} alt="" />
          </div>
          <div className="px-5">
            <p className=" text-1xl font-montserrat mt-3 line-clamp-3 leading-tight mb-1">{product.title}</p>
            <p className="text-xs text-slate-400">{product.category && product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
            <div className="inline-flex items-center mt-4 mb-5">
              {product.rating && Array.from({ length: Math.round(product.rating.rate) }).map((_, i) => <img className="w-[0.875rem]" src={star_icon} key={i} alt="" />)}
              {product.rating && (
                <p className="text-sm leading-none text-slate-500 ml-2">
                  Rated <b>{product.rating.rate}</b> by <b>{product.rating.count}</b> buyers
                </p>
              )}
            </div>
            <p
              className={`mt-1 text-sm bg-white border px-2 pt-2 rounded leading-relaxed ${isExpanded ? 'line-clamp-none pb-2' : 'line-clamp-2'}`}
              onClick={() => expandDescription()}
            >
              {product.description}
            </p>
            <div className="flex gap-3 mt-4 bg-cyan-500 justify-between w-[80%] mx-auto p-1 px-5 rounded">
              <p className="text-white">${product.price}</p>
              <div className="flex gap-2 rounded w-fit items-center">
                <p className="text-white line-clamp-1 w-full">Add to cart</p>
                <p className="text-cyan-100 scale-y-150">|</p>
                <img src={add_item} alt="" />
              </div>
            </div>
            <br />
          </div>
        </div>
      )}
    </>
  );
};
export default Product;
