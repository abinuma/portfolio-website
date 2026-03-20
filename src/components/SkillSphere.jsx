import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const skills = [
  "logos/react.svg",
  "logos/java.svg",
  "logos/cplusplus.svg",
  "logos/csharp.svg",
  "logos/mysql.svg",
  "logos/nodejs.svg",
  "logos/git.svg",
  "logos/tailwind.svg",
  "logos/mongodb.svg",
  "logos/javascript.svg",
  "logos/python.svg",
  "logos/html.svg",
  "logos/bootstrap.svg",
];

const SkillSphere = () => {
  const groupRef = useRef();
  const { camera } = useThree();
  const textures = useLoader(THREE.TextureLoader, skills);
  const meshRefs = useRef([]);
  const hoverRefs = useRef(skills.map(() => false));
  const radius = 3;

  // Generate random skill percentages for each icon (30-100%)
  const skillPercents = useMemo(
    () => skills.map(() => Math.random() * 0.7 + 0.3),
    [],
  );
  const percentRefs = useRef(skillPercents.map(() => 0)); // current fill level

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x += 0.0005;
    }

    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;

      mesh.lookAt(camera.position);

      // Smooth bounce
      const targetScale = hoverRefs.current[i] ? 1.2 : 0.8;
      mesh.scale.x += (targetScale - mesh.scale.x) * 0.1;
      mesh.scale.y += (targetScale - mesh.scale.y) * 0.1;
      mesh.scale.z += (targetScale - mesh.scale.z) * 0.1;

      // Smooth skill percent fill
      const targetPercent = hoverRefs.current[i] ? skillPercents[i] : 0;
      percentRefs.current[i] += (targetPercent - percentRefs.current[i]) * 0.1;

      // Update percent bar - a thin plane below the icon
      if (mesh.children[0]) {
        mesh.children[0].scale.x = percentRefs.current[i];
      }
    });
  });

  return (
    <group ref={groupRef}>
      {textures.map((texture, i) => {
        const phi = Math.acos(-1 + (2 * i) / textures.length);
        const theta = Math.sqrt(textures.length * Math.PI) * phi;

        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        return (
          <mesh
            key={i}
            position={[x, y, z]}
            scale={[0.8, 0.8, 0.8]}
            ref={(el) => (meshRefs.current[i] = el)}
            onPointerOver={() => (hoverRefs.current[i] = true)}
            onPointerOut={() => (hoverRefs.current[i] = false)}
          >
            {/* Icon */}
            <planeGeometry args={[1, 1]} />
            <meshBasicMaterial map={texture} transparent />

            {/* Percent bar below icon */}
            <mesh position={[0, -0.7, 0]}>
              <planeGeometry args={[1, 0.08]} />
              <meshBasicMaterial
                color="#a855f7" // purple fill
                transparent
              />
            </mesh>
          </mesh>
        );
      })}
    </group>
  );
};

export default SkillSphere;
