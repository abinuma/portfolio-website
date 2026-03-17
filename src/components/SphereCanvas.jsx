import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SkillSphere from "./SkillSphere";

const SphereCanvas = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 5]} intensity={1} />
        <SkillSphere />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
};

export default SphereCanvas;