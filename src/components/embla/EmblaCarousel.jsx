
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react';
import PropTypes from 'prop-types';

const EmblaCarousel = ({ slides, options }) => {

  


  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla border-4 border-black w-3/5">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container ">
          {slides.map((field, index) => (
            <div className="embla__slide" key={index}>
             
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

EmblaCarousel.propTypes = {
  slides: PropTypes.array,
  options: PropTypes.number
}

export default EmblaCarousel
