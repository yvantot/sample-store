const CategorySelection = ({ categories }) => {
  return (
    <>
    
      <div className="flex text-center font-montserrat px-5 mt-8">
        <div className="flex py-1 w-full gap-1 font-light flex-wrap justify-center">
          {categories.map((category) => (
            <div key={category} className="grow basis-36 p-2 min-w-16 rounded bg-cyan-500 text-white text-md">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CategorySelection;
