import Categories from '../components/Categories';
import CategorySelection from '../components/CategorySelection';
import DisplayBoard from '../components/DisplayBoard';
import Loading from '../components/Loading';
import Header from '../components/Header';
import useFetch from '../utils/useFetch';

const LandingPage = () => {
  const { data: categories } = useFetch('https://fakestoreapi.com/products/categories');
  const { data: items, pending: isPending } = useFetch('https://fakestoreapi.com/products');

  return (
    <>
      <div className="bg-slate-50 min-h-screen sm:mx-10 md:mx-20 lg:mx-52">
        <Header />
        <DisplayBoard />
        <CategorySelection categories={categories} />
        {isPending ? <Loading /> : <Categories categories={categories} items={items} />}
      </div>
    </>
  );
};

export default LandingPage;
