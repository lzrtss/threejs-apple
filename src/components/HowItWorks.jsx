import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { animateWithGsap, chipImg, frameImg, frameVideo } from 'utils';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom',
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut',
    });

    animateWithGsap({
      target: '.g_fadeIn',
      animationProps: {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.inOut',
      },
    });
  }, []);

  return (
    <section className="sm:py-32 py-20 sm:px-10 px-5">
      <div className="screen-max-width">
        <div
          id="chip"
          className="w-full flex justify-center items-center my-20"
        >
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-center text-4xl md:text-7xl font-semibold">
            A17 Pro chip.
            <br /> A monster win for gaming.
          </h2>

          <p className="py-10 text-center text-gray font-semibold text-xl md:text-2xl">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        {/* Game video */}
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex justify-center items-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="relative bg-transparent z-10"
              />
            </div>
            <div className="absolute w-[95%] h-[90%] rounded-[56px] overflow-hidden">
              <video
                autoPlay
                muted
                playsInline
                preload="none"
                ref={videoRef}
                className="pointer-events-none"
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>

          <p className="mt-3 text-center text-gray font-semibold">
            Honkai: Star Rail
          </p>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-start gap-24">
          <div className="flex flex-1 flex-col justify-center gap-5">
            <p className="text-gray text-xl font-normal md:font-semibold opacity-0 translate-y-[100px] g_fadeIn">
              A17 Pro is an entirely new class of iPhone chip that delivers our{' '}
              <span className="text-white">
                best graphics performance by far
              </span>
              .
            </p>

            <p className="text-gray text-xl font-normal md:font-semibold opacity-0 translate-y-[100px] g_fadeIn">
              Mobile{' '}
              <span className="text-white">
                games will look and feel so immersive
              </span>
              , with incredibly detailed environments and more realistic
              characters. And with industry-leading speed and efficiency, A17
              Pro takes fast and runs with it.
            </p>
          </div>

          <div className="flex-1 flex flex-col justify-center opacity-0 translate-y-[100px] g_fadeIn">
            <p className="text-gray text-xl font-normal md:font-semibold">
              New
            </p>

            <p className="my-2 text-white text-3xl md:text-5xl font-normal md:font-semibold">
              Pro-class GPU
            </p>

            <p className="text-gray text-xl font-normal md:font-semibold">
              with 6 cores
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
