import { FIRST_PAGE_FIELDS } from "@/constants/Constants";
import { useState, useRef } from "react";
import Slider from "react-slick";
import GoogleForm from "../GoogleForm";


function SlickGoTo() {
    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    let sliderRef = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: () => setUpdateCount(updateCount + 1),
        beforeChange: (current, next) => setSlideIndex(next)
    };
    return (
        <div className="slider-container w-[45rem] border-4 border-black flex">

         
            <Slider
                ref={slider => {
                    sliderRef = slider;
                }}
                {...settings}>
                <div>
                    <GoogleForm formDetails={FIRST_PAGE_FIELDS} />

                </div>
                <div>
                    <GoogleForm formDetails={FIRST_PAGE_FIELDS} />

                </div>
                {/* <div>
                    <GoogleForm formDetails={FIRST_PAGE_FIELDS} />

                </div>
                <div><GoogleForm formDetails={FIRST_PAGE_FIELDS} />
                    
                </div> */}
            </Slider>
            <input
                onChange={e => sliderRef.slickGoTo(e.target.value)}
                value={slideIndex}
                type="range"
                min={0}
                max={6}
            />
        </div>
    );
}

export default SlickGoTo;