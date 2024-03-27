import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { animateWithGsap, explore1Img, explore2Img, exploreVideo } from 'utils';

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap({
      target: '#features_title',
      animationProps: { y: 0, opacity: 1 },
    });

    animateWithGsap({
      target: '.g_grow',
      animationProps: { scale: 1, opacity: 1, ease: 'power1' },
      scrollProps: { scrub: 5.5 },
    });

    animateWithGsap({
      target: '.g_text',
      animationProps: { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 },
    });
  }, []);

  return (
    <section className="relative h-full sm:py-32 py-20 sm:px-10 px-5 bg-zinc overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-20 w-full">
          <h1
            id="features_title"
            className="lg:mb-0 mb-5 text-gray lg:text-6xl md:text-5xl text-3xl font-medium opacity-0 translate-y-20"
          >
            Explore the full story.
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Forged in titanium.
            </h2>
          </div>

          <div className="flex flex-col gap-5 justify-center items-center sm:px-10">
            <div className="relative w-full h-[50vh] flex items-center">
              <video
                id="exploreVideo"
                autoPlay
                muted
                playsInline
                preload="none"
                ref={videoRef}
                className="w-full h-full object-cover object-center"
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="relative w-full flex flex-col">
              <div className="w-full flex flex-col md:flex-row items-center gap-5">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    className="w-full h-full object-cover object-center scale-150 opacity-0 g_grow"
                  />
                </div>

                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore2Img}
                    alt="titanium 2"
                    className="w-full h-full object-cover object-center scale-150 opacity-0 g_grow"
                  />
                </div>
              </div>

              <div className="w-full flex justify-center items-center gap-5 flex-col md:flex-row mt-10 md:mt-16">
                <div className="flex flex-1 justify-center items-center">
                  <p className="text-gray max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px] g_text">
                    iPhone 15 Pro is{' '}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium
                      design
                    </span>
                    , using the same allow that spacecrafts use for missions to
                    Mars.
                  </p>
                </div>

                <div className="flex-1 flex justify-center items-center">
                  <p className="text-gray max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px] g_text">
                    Titanium has one of the best strength-to-weight ratios of
                    any metal, making these our{' '}
                    <span className="text-white">
                      lightest Pro models ever.{' '}
                    </span>
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
