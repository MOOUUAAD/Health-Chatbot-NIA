import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

const Carousel = () => {
  return (
    <>
      <TECarousel
        showControls
        showIndicators
        ride="carousel"
        className="px-16 mb-20 sm:px-24 lg:px-32 xl:px-72 py-0 "
      >
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative max-h-[500px] float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="assets/1.jpeg"
              className="block w-full"
              alt="photo"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative max-h-[500px] float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img src="assets/2.jpeg" className="block w-full" alt="photo" />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative max-h-[500px] float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="assets/3.jpeg"
              className="block w-full "
              alt="photo"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={4}
            className="relative max-h-[500px]  float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img src="assets/4.jpeg" className="block w-full " alt="photo" />
          </TECarouselItem>
          <TECarouselItem
            itemID={5}
            className="relative max-h-[500px]  float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img src="assets/5.jpeg" className="block w-full " alt="photo" />
          </TECarouselItem>
          <TECarouselItem
            itemID={6}
            className="relative max-h-[500px]  float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img src="assets/6.jpeg" className="block w-full " alt="photo" />
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
};

export default Carousel;
