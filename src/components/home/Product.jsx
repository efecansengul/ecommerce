import { useNavigate } from "react-router-dom";
import styles from "./Product.module.css";
export default function Product({ product }) {
  const navigate = useNavigate();
  return (
    <div
      className={styles.container}
      onClick={() => {
        navigate(`products/${product?.id}`);
      }}
    >
      <div className={styles.price}>
        <span>{product.title}</span>
        <span className="price">{product.price} TL</span>
      </div>
      <div>
        <img
          className={styles.image}
          src={product?.image}
          alt={product.title}
        />
      </div>
    </div>
  );
}
