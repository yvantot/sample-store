import Category from './Category';

const Categories = ({categories, items}) => {
  
  return (
    <>
    <div className='text-center font-montserrat'>
      <h2 className='text-2xl mt-10 text-cyan-500'>EcoStore Market</h2>    
      <p className='text-sm text-cyan-400'>Shop with confidence</p>
    </div>    
        {categories.map((category)=> <Category key={category} title={category} items={items.filter((item) => item.category === category)} />)}
    </>
  );
};
export default Categories;
