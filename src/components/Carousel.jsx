import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

const Carousel = () => {
  return (
    <>
      <TECarousel showControls showIndicators ride="carousel" className="px-16 mb-20 sm:px-24 lg:px-32 xl:px-72 py-0 z-[-10]">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img src="assets/7.jpeg" className="block w-full" alt="photo" />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img src="assets/8.jpeg" className="block w-full" alt="photo" />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img src="assets/34.jpeg" className="block w-full" alt="photo" />
          </TECarouselItem>
          <TECarouselItem
            itemID={4}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img src="assets/22.jpeg" className="block w-full" alt="photo" />
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
};

export default Carousel;
