import { useState } from "react";
import style from "./DetailComp.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { addFav } from "../../redux/favoriteSlice";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

export default function DetailComp({ productDetail }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  let date = new Date().toLocaleDateString("tr-TR");
  function decrease() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }
  function addFavorite() {
    dispatch(
      addFav({
        title: productDetail?.title,
        id: productDetail?.id,
      })
    );
  }
  function addBasket() {
    if (quantity === 0) {
      return;
    } else {
      dispatch(
        addToCart({
          title: productDetail?.title,
          id: productDetail?.id,
          price: productDetail?.price,
          quantity: quantity,
        })
      );
    }
  }
  return (
    <div className={style.container}>
      <div className={style.image}>
        <img
          style={{ objectFit: "contain" }}
          src={productDetail?.image}
          alt={productDetail?.title}
          width={400}
          height={400}
        />
        <div>
          <p
            className={style.back}
            style={{}}
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </p>
        </div>
      </div>

      <div className={style.description}>
        <h2>{productDetail?.title}</h2>
        <hr
          style={{
            background: "gray",

            height: "2px",
            width: "100%",
          }}
        />
        <h4>{productDetail?.price} TL</h4>
        <p>Fiyatlara KDV dahildir.</p>
        <hr
          style={{
            background: "gray",

            height: "1px",
            width: "100%",
          }}
        />
        <p style={{ fontWeight: "bold" }}>Bu ürün hakkında</p>
        <p className={style.detail}>{productDetail?.description}</p>
      </div>
      <div className={style.cart}>
        <div>
          <div className={style.cartdetail}>{productDetail?.price} TL</div>
          <div className={style.cartdescription}>
            Ücretsiz teslimat pazartesi günü
          </div>
          <div className={style.localdate}>
            <span>Sipariş Tarihi: </span>
            {date}
          </div>
        </div>

        <div className={style.cartcalculate}>
          <div onClick={decrease} className={style.decrease}>
            -
          </div>
          <input type="text" value={quantity} disabled />
          <div
            onClick={() => {
              setQuantity(quantity + 1);
            }}
            className={style.increase}
          >
            +
          </div>
        </div>
        <div
          onClick={addFavorite}
          style={{
            display: "flex",
            fontSize: "1rem",
            margin: "auto",
            marginTop: "6rem",
            marginBottom: "-0.5 rem",
            justifyContent: "center",
            alignContent: "center",
            cursor: "pointer",
            backgroundColor: "pink",
            border: "1px solid gray",
            borderRadius: "0.5rem",
            padding: "0.2rem",
          }}
        >
          <div>Favorilere ekle</div>
          <div>
            <CiHeart />
          </div>
        </div>
        <div onClick={addBasket} className={style.ekle}>
          Sepete Ekle
        </div>
      </div>
    </div>
  );
}
