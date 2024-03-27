import { Suspense } from 'react';
import * as THREE from 'three';
import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei';

import { Iphone, Lights, Loader } from 'components';

const ModelView = ({
  index,
  item,
  controlRef,
  groupRef,
  gsapType,
  setRotationState,
  size,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`absolute w-full h-full ${index === 2 ? 'right-[-100%]' : ''}
      `}
    >
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />
      <group
        ref={groupRef}
        name={`${index === 1} ? 'small' : 'large`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <Iphone
            scale={index === 1 ? [18, 18, 18] : [20, 20, 20]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
