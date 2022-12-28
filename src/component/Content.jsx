import "../App.css";
import Product from "./Product";
import ba from '../img/banner.jpeg'
const Content = ({items}) => {
  return (
    <div className="mt-1">
      <div className="main-bg">
      </div>
      <Product items={items} />
    </div>
  );
};

export default Content;
