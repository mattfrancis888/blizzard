import React, { useState, useEffect, useCallback } from "react";
import { useEmblaCarousel } from "embla-carousel/react";

const EmblaCarousel = () => {
    const [viewportRef, embla] = useEmblaCarousel({ axis: "y" });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    //const onSelect = useCallback(() => {
    //   if (!embla) return;
    //   setPrevBtnEnabled(embla.canScrollPrev());
    //   setNextBtnEnabled(embla.canScrollNext());
    // }, [embla]);

    // useEffect(() => {
    //   if (!embla) return;
    //   embla.on("select", onSelect);
    //   onSelect();
    // }, [embla, onSelect]);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={viewportRef}>
                <div className="embla__container">
                    <div className="embla__slide" key={0}>
                        <div className="embla__slide__inner">
                            <img
                                className="embla__slide__img"
                                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
                                alt=""
                            ></img>
                        </div>
                        Slide 2
                    </div>
                    <div className="embla__slide" key={1}>
                        <div className="embla__slide__inner">
                            <img
                                className="embla__slide__img"
                                src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
                                alt=""
                            ></img>
                        </div>
                        Slide 1
                    </div>
                    <div className="embla__slide" key={2}>
                        <div className="embla__slide__inner">
                            <img
                                className="embla__slide__img"
                                src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
                                alt=""
                            ></img>
                        </div>
                        Slide 3
                    </div>
                </div>
            </div>
            {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
        </div>
    );
};

export default EmblaCarousel;
