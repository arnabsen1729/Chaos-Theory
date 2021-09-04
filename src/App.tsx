import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.css";

const startPoint = [0, 0, 0];

function App() {
  const [points, setPoints] = useState<number[][]>([]);
  const [randPoints, setRandPoints] = useState<THREE.Vector3[]>([]);
  const [sliderVal, setSliderVal] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (points.length > 1) {
      let sp = new THREE.Vector3(startPoint[0], startPoint[1], startPoint[2]);
      const newRandPoints = new Array(10000).fill(0).map((_, __) => {
        const i = Math.floor(Math.random() * points.length);
        sp = sp
          .addScaledVector(
            new THREE.Vector3(points[i][0], points[i][1], points[i][2]),
            1
          )
          .multiplyScalar(1 / 2)
          .clone();
        return sp;
      });
      console.log(newRandPoints);
      setRandPoints(newRandPoints);
    }
  }, [points]);

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
        {randPoints.slice(0, sliderVal).map((point) => {
          return (
            <mesh position={point}>
              <sphereGeometry args={[0.01]} />
              <meshBasicMaterial color="green" />
            </mesh>
          );
        })}
      </Canvas>

      <div id="control">
        <div id="input">
          <input
            name="coordinate"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={(_) => {
              const [x, y, z] = input
                .trim()
                .split(",")
                .map((e) => Number(e))
                .slice(0, 3);
              setPoints([...points, [x, y, z]]);
            }}
          >
            Add Point
          </button>
        </div>
        <div className="slidecontainer">
          <input
            type="range"
            min="0"
            max="10000"
            value={sliderVal}
            className="slider"
            id="valueRange"
            onChange={(e) => setSliderVal(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
