import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { rightImg, watchImg } from 'utils';
import { VideoCarousel } from 'components';

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 });
    gsap.to('.watch-video-link', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full sm:py-32 py-20 sm:px-10 px-5 bg-zinc"
    >
      <div className="screen-max-width">
        <div className="w-full mb-12 md:flex justify-between items-end">
          <h1
            id="title"
            className="lg:mb-0 mb-5 text-gray lg:text-6xl md:text-5xl text-3xl font-medium opacity-0 translate-y-20"
          >
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="watch-video-link flex items-center text-xl text-blue hover:underline cursor-pointer opacity-0 translate-y-20">
              Watch the film
              <img src={watchImg} alt="watch video" className="ml-2" />
            </p>

            <p className="watch-video-link flex items-center text-xl text-blue hover:underline cursor-pointer opacity-0 translate-y-20">
              Watch the event
              <img src={rightImg} alt="watch event" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
