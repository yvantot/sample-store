import Item from '../components/Item';

const Category = ({ items, title }) => {
  return (
    <>    
      <div className="mx-5 shadow-md py-1 mt-5 scroll-auto rounded">
        <h1 className="w-full font-montserrat rounded text-white bg-cyan-500 p-1 border leading-none text-sm text-center">{title.charAt(0).toUpperCase() + title.slice(1)}</h1>
        <div className="flex gap-1 overflow-scroll mt-3 rounded">{items && items.map((item) => <Item key={item.id} title={item.title} price={item.price} image={item.image} id={item.id} rating={item.rating}></Item>)}</div>
      </div>
    </>
  );
};


export default Category;
