import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";
import styles from "./Categories.module.css";
export default function Categories({ setCategory }) {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  console.log("categories", categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div
        className={styles.innercontainer}
        style={{
          fontWeight: "500",
          paddingBottom: "1rem",
          fontSize: "1.2rem",
        }}
      >
        Kategori
      </div>
      {categories?.map((category, index) => (
        <div
          onClick={() => {
            setCategory(category);
          }}
          key={index}
          style={{
            fontSize: "1rem",
            marginTop: "0.2rem",
            cursor: "pointer",
            fontSize: "1.1rem",
          }}
        >
          {category}
        </div>
      ))}
    </div>
  );
}
