import "./ProductList.css";
import Product from "../Product/Product";

import ss1 from "../img/ss1.png"
import ss2 from "../img/ss2.png"
import ss3 from "../img/ss3.png"
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
        <p className="pl-desc">
          Below are the Live Projects That i have worked on which are based on the Web Technologies.
        </p>
      </div>
      <div className="pl-list">

        
          <Product img={ss1} className="pl-img" link={"https://newlalitashastrihighschool.com"} />
          <Product img={ss2} link={"https://saksiam.pythonanywhere.com/accounts/login/?next=/"}/>
          <Product img={ss3} link={"https://saks-am.github.io/pattern-game/"}/>


        
      </div>
    </div>
  );
};

export default ProductList;