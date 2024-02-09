import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import styles from "./NavbarRight.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "../../../redux/cartSlice";
import { openModal } from "../../../redux/modalSlice";
import { favOpenModal } from "../../../redux/modalSlice";
import { setSearchQuery } from "../../../redux/searchSlice";
export default function NavbarRight() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  function open() {
    dispatch(openModal());
  }
  function openFav() {
    dispatch(favOpenModal());
  }
  const handleChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
    console.log(e.target.value); // arama kutusunda değişiklik olduğunda store'u güncelle
  };
  const { items, count } = useSelector((state) => state.carts);
  useEffect(() => {
    console.log("items", items);
    dispatch(getCartTotal());
  }, [items]);
  return (
    <>
      <div className={`${styles.container} `}>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="arama yapınız..."
            value={query}
            onChange={handleChange}
          />
          <IoIosSearch size={28} />
        </div>
        <div onClick={openFav} style={{ display: "flex", cursor: "pointer" }}>
          Favorilerim
          <CiHeart size={28} />
        </div>
        <div
          onClick={open}
          style={{
            display: "flex",
            cursor: "pointer",
          }}
        >
          <CiShoppingCart size={28} />
          <span style={{ display: count == 0 ? "none" : "block" }}>
            {count}
          </span>
        </div>
      </div>
    </>
  );
}
