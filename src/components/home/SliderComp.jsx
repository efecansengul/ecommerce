import React from "react";
import Slider from "react-slick";
import styles from "./SliderCopm.module.css";
import { useSelector } from "react-redux";
export default function SliderComp() {
  const { open } = useSelector((state) => state.modal);
  console.log("slidercomponent", open);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.outer}>
      <Slider {...settings} style={{ display: open ? "none" : "block" }}>
        <div>
          <div className={styles.container}>
            <div>
              <div className={styles.head}>MacBook Air M1</div>
              <div className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                fuga quas enim provident assumenda ea praesentium natus fugit
                voluptate nam.
              </div>
            </div>
            <img src="/image/mac.jpg" alt="macbook" height={400} width={900} />
          </div>
        </div>
        <div>
          <div className={styles.container}>
            <div>
              <div className={styles.head}>Apple iPhone 13 Pro</div>
              <div className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                fuga quas enim provident assumenda ea praesentium natus fugit
                voluptate nam.
              </div>
            </div>
            <img src="/image/iphone.jpg" alt="" width={600} height={400} />
          </div>
        </div>
        <div>
          <div className={styles.container}>
            <div>
              <div className={styles.head}>Vision PRO</div>
              <div className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                fuga quas enim provident assumenda ea praesentium natus fugit
                voluptate nam.
              </div>
            </div>
            <img
              src="/image/visionpro.jpg"
              alt=""
              width={800}
              height={400}
              style={{ backgroundColor: "white", color: "white" }}
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}
