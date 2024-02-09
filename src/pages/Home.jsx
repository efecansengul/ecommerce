import Categories from "../components/home/Categories";
import Products from "../components/home/Products";
import SliderComp from "../components/home/SliderComp";
import Sorting from "../components/home/Sorting";
import { LuArrowUpToLine } from "react-icons/lu";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const query = useSelector((state) => state.search.query); // arama sorgusunu store'dan al
  const { products } = useSelector((state) => state.products);
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }
  useEffect(() => {
    handleScroll();
  }, [visible]);
  function handleClicks() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const filteredProducts = products.filter(
    (product) => product.title.toLowerCase().includes(query.toLowerCase()) // arama sorgusuna göre ürünleri filtrele
  );

  return (
    <div>
      <SliderComp />
      <Sorting setSort={setSort} />
      <div style={{ display: "flex", gap: "3rem" }}>
        <Categories setCategory={setCategory} />
        {query ? (
          <div>
            <ul>
              {filteredProducts.length == 0 && <p>Arama bulunamadı</p>}
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  style={{
                    display: "flex",
                    padding: "1rem",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate(`products/${product?.id}`);
                  }}
                >
                  <div>
                    <LazyLoadImage
                      src={product.image}
                      height={300}
                      width={300}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "1.5rem",
                    }}
                  >
                    {product.title} - {product.price} TL
                  </div>
                </div>
              ))}
            </ul>
          </div>
        ) : (
          <Products category={category} sort={sort} />
        )}
      </div>

      <button
        onClick={handleClicks}
        style={{
          position: "-webkit-sticky",
          padding: "0.5rem",
          position: "sticky",
          bottom: "6px",
          left: "99%",
          backgroundColor: "powderblue",
          border: "none",
          cursor: "pointer",
        }}
      >
        <LuArrowUpToLine />
      </button>
    </div>
  );
}
