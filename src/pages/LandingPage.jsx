import { useContext } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../contexts/ProductContProvider";
import "../css/landingpage.css";

export default function LandingPage() {
  const { state, showCategoryProd } = useContext(productContext);
  return (
    <div className="parent">
    <div className="main-img">
    <img
        src="https://images2.imgbox.com/2f/b4/kAxjfFqv_o.jpg"
        style={{ maxWidth: "100%", height: "auto" }}
        alt="prod-img"
        className="landing-img"
      />
      <h4 className="allProd-heading">View all products</h4>
      <button className="allProd-btn">Books</button>
    </div>
      
      <ul className="sub-parent">
        {state?.categories.map((item) => (
          <li key={item.id} className="child">
            <div
              className="img-container"
              style={{ backgroundImage: `url(${item.src})` }}
            >
              <div className="transparent">
                <h1>{item.categoryName}</h1>
                <p>{item.description}</p>
                <button
                  onClick={() => showCategoryProd(item.categoryName)}
                  className="submit-btn"
                >
                  <Link to="/products" className="link">
                    View Books
                  </Link>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
