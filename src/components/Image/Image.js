import React, { useState } from "react";
import styles from "./Image.module.css"

export default function Image() {
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [scale, setScale] = useState(1);

  const addImage = () => setIsImageVisible(true);

  const scaleImage = (delta) => {
    setScale((prevScale) => Math.max(0.1, prevScale + delta * 0.1));
  };

  const deleteImage = () => setIsImageVisible(false);

  return (
    <div>
      <a href="https://mkrada.gov.ua/" id="city-image-container">
        {isImageVisible && (
          <img
            id="city-image"
            src="/images/city.jpg"
            alt="Фото міста Миколаїв. Без поняття чому не завантажилось."
            style={{
              transform: `scale(${scale})`,
              transition: "transform 0.3s ease",
            }}
          />
        )}
      </a>
      <div className={styles.flexContainer}>
        <button onClick={addImage}>Додати</button>
        <button onClick={() => scaleImage(0.1)}>Збільшити</button>
        <button onClick={() => scaleImage(-0.1)}>Зменшити</button>
        <button onClick={deleteImage}>Видалити</button>
      </div>
    </div>
  );
}
