/* eslint-disable react/jsx-key */
import data from "../data";
import Card from "./card";
const Products = () => {
  return (
    <div className=" w-full gap-1 grid grid-cols-2 mb-8 md:grid-cols-3 lg:grid-cols-5 lg:pr-10 lg:pl-24 ">
      {data.map((item, index) => (
        <Card
          key={index}
          Name={item.name}
          Image={item.img}
          Price={item.price}
          Rating={item.rating}
          Sold={item.sold}
        />
      ))}
    </div>
  );
};

export default Products;
