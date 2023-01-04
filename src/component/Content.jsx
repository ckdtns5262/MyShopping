import "../App.css";
import Product from "./Product";


const Content = ({items, setItems}) => {
  return (
    <div className="mt-1">
      <div className="main-bg">
      </div>
    
      <Product items={items} setItems={setItems}/>
    </div>
  );
};

export default Content;
