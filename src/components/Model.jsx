import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';

import { ModelView } from 'components';
import { animateWithGsapTimeline, yellowImg } from 'utils';
import { models, sizes } from 'constants';

const Model = () => {
  const [size, setSize] = useState('small');
  const [model, setModel] = useState({
    title: 'iPhone 15 Pro in Natural Titanium',
    color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
    image: yellowImg,
  });

  // Camera control for the model view
  const smallCameraControl = useRef();
  const largeCameraControl = useRef();

  // Model
  const smallModel = useRef(new THREE.Group());
  const largeModel = useRef(new THREE.Group());

  // Rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const timeline = gsap.timeline();

  useEffect(() => {
    if (size === 'large') {
      animateWithGsapTimeline({
        timeline,
        rotationRef: smallModel,
        rotationState: smallRotation,
        firstTarget: '#view1',
        secondTarget: '#view2',
        animationProps: {
          transform: 'translateX(-100%)',
          duration: 2,
        },
      });
    }

    if (size === 'small') {
      animateWithGsapTimeline({
        timeline,
        rotationRef: largeModel,
        rotationState: largeRotation,
        firstTarget: '#view2',
        secondTarget: '#view1',
        animationProps: {
          transform: 'translateX(0)',
          duration: 2,
        },
      });
    }
  }, [size]);

  useGSAP(() => {
    gsap.to('#heading', { y: 0, opacity: 1 });
  }, []);

  return (
    <section className="sm:py-32 py-20 sm:px-10 px-5">
      <div className="screen-max-width">
        <h1
          id="heading"
          className="text-gray lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20"
        >
          Take a closer look.
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="relative w-full h-[75vh] md:h-[90vh] overflow-hidden">
            <ModelView
              index={1}
              item={model}
              controlRef={smallCameraControl}
              groupRef={smallModel}
              gsapType="view1"
              setRotationState={setSmallRotation}
              size={size}
            />

            <ModelView
              index={2}
              item={model}
              controlRef={largeCameraControl}
              groupRef={largeModel}
              gsapType="view2"
              setRotationState={setLargeRotation}
              size={size}
            />

            <Canvas
              className="w-full h-full"
              style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: 'hidden',
              }}
              eventSource={document.getElementById('root')}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="mx-auto w-full">
            <p className="mb-5 text-sm font-light text-center">{model.title}</p>

            {/* Model controls */}
            <div className="flex justify-center items-center">
              <ul className="flex items-center justify-center px-4 py-4 rounded-full bg-gray-300 backdrop-blur">
                {models.map((model) => (
                  <li
                    key={model.id}
                    className="w-6 h-6 mx-2 rounded-full cursor-pointer"
                    style={{ backgroundColor: model.color[0] }}
                    onClick={() => setModel(model)}
                  />
                ))}
              </ul>

              <button className="p-1 ml-3 flex items-center justify-center gap-1 rounded-full bg-gray-300 backdrop-blur">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="w-10 h-10 flex justify-center items-center text-sm bg-white text-black rounded-full transition-all"
                    style={{
                      backgroundColor: size === value ? 'white' : 'transparent',
                      color: size === value ? 'black' : 'white',
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
