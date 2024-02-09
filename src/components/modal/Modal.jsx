import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Modal.module.css";
import { openModal } from "../../redux/modalSlice";
import { dischargeCart, removeToCart } from "../../redux/cartSlice";
export default function Modal() {
  const { items, total, count } = useSelector((state) => state.carts);
  //const { open } = useSelector((state) => state.modal);
  const [confirm, setConfirm] = useState(false);
  const dispatch = useDispatch();

  function decrement(id, price) {
    dispatch(removeToCart({ id, price }));
  }
  function emty() {
    dispatch(dischargeCart());
    close();
  }
  function close() {
    dispatch(openModal());
  }

  useEffect(() => {
    console.log(items);
  }, [items, count]);
  return (
    <div className={styles.modalbackground}>
      <div className={styles.container}>
        <h4>Sizin Sectikleriniz</h4>
        <div>
          <ul>
            {items?.map((item) => (
              <li key={item.id}>
                <div className={styles.list}>
                  {item.title}
                  <div style={{ fontWeight: "bold" }}>
                    {`${item.price} TL x ${item.quantity} Adet`}
                    <span style={{ marginLeft: "1rem" }}>
                      <button
                        onClick={() => decrement(item.id, item.price)}
                        style={{
                          padding: "0.2rem",
                          width: "1.5rem",
                          marginTop: "1rem",
                          cursor: "pointer",
                        }}
                      >
                        -
                      </button>
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {!items.length === 0 && <div>Toplam tutar: {total}</div>}
          <div>
            <button onClick={close} className={styles.close}>
              Kapat
            </button>
            {items.length === 0 ? (
              <div>Sepeteniz şuan boş</div>
            ) : (
              <button
                onClick={() => {
                  setConfirm(true);
                  setTimeout(() => {
                    close();
                  }, 3000);
                }}
                className={styles.order}
              >
                {confirm ? "Sipariş Veriliyor..." : "Sipariş Ver"}
              </button>
            )}
            {!items.length == 0 && (
              <button onClick={emty} className={styles.emty}>
                Sepeti boşalt
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
