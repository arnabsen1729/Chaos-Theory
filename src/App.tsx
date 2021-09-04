import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.css";

function App() {
  const [points, setPoints] = useState<number[][]>([]);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [z, setZ] = useState<number>(0);

  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        {points.map(([x, y, z]) => {
          return (
            <mesh position={[x, y, z]}>
              <sphereGeometry args={[0.1]} />
              <meshBasicMaterial color="black" />
            </mesh>
          );
        })}
      </Canvas>

      <div id="control">
        <input
          name="x-coordinate"
          value={x}
          onChange={(e) => setX(Number(e.target.value))}
        />
        <input
          name="y-coordinate"
          value={y}
          onChange={(e) => setY(Number(e.target.value))}
        />
        <input
          name="z-coordinate"
          value={z}
          onChange={(e) => setZ(Number(e.target.value))}
        />
        <button
          onClick={(_) => {
            setPoints([...points, [x, y, z]]);
          }}
        >
          Add Point
        </button>
      </div>
    </div>
  );
}

export default App;
