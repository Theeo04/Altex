import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Underslider from "./Underslider";

export default () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div>
      <div className="slider__container">
        <div ref={sliderRef} className="keen-slider">
          <img
            className="keen-slider__slide slide"
            src="https://fundatiaaltex.ro/wp-content/uploads/2020/10/Slider-poza-6-Mediu-1.png"
          />
          <img
            className="keen-slider__slide slide"
            src="https://www.avocatoo.ro/media/2020/11/altex-ps5.jpg"
          />
          <img
            className="keen-slider__slide slide"
            src="https://fundatiaaltex.ro/wp-content/uploads/2022/03/Vizual-doneaza-refugiati.png"
          />
          <img
            className="keen-slider__slide slide"
            src="https://lcdn.altex.ro/media/ibanner/T/r/Transport_gratuit_4_august_Altex_tableta.png"
          />
          <img
            className="keen-slider__slide slide"
            src="https://lcdn.altex.ro/media/ibanner/C/o/Cosmetice_24-30_august_Altex_Tableta.png"
          />
          <img
            className="keen-slider__slide slide"
            src="https://lcdn.altex.ro/media/ibanner/G/r/Gradina_24-30_august_Altex_Desktop.png"
          />
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
