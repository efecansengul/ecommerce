import styles from "./FavModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { favOpenModal } from "../../../redux/modalSlice";
import { removeFav } from "../../../redux/favoriteSlice";
export default function FavModal() {
  const { favArray } = useSelector((state) => state.fav);
  console.log("favArray", favArray);
  const dispatch = useDispatch();
  function removeFavorite(id, title) {
    dispatch(removeFav(id, title));
  }
  function close() {
    dispatch(favOpenModal());
  }
  return (
    <div className={styles.modalbackground}>
      <div className={styles.container}>
        <h4>Favori Ürünleriniz</h4>
        {favArray.length == 0 && <p>Favori ürününüz bulunmuyor</p>}
        <div>
          {favArray.map((item) => (
            <li key={item.id}>
              {item.title}
              <span
                onClick={() => {
                  removeFavorite(item.id, item.title);
                }}
                className={styles.remove}
              >
                -
              </span>
            </li>
          ))}
        </div>

        <button onClick={close} className={styles.close}>
          Kapat
        </button>
      </div>
    </div>
  );
}
