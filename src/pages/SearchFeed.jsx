import CategorySelection from '../components/CategorySelection';
import Header from '../components/Header';

const SearchFeed = () => {
  return (
    <>
      <Header></Header>
      <CategorySelection />
      <div>
        <input className="border rounded" placeholder="Search for product" type="text" />
      </div>
    </>
  );
};
export default SearchFeed;
