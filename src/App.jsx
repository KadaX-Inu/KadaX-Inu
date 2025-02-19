import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Sphere, Text } from "@react-three/drei";
import { FaWallet } from "react-icons/fa";

function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-white bg-black">
      <Canvas>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Sphere args={[2.5, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color="blue" wireframe />
        </Sphere>
        <Text position={[0, 2, 0]} fontSize={0.5} color="gold" anchorX="center" anchorY="middle">
          KadaXCoin
        </Text>
      </Canvas>
      <h1 className="text-5xl font-bold mt-5 text-neon">KadaXCoin - The Future of Crypto</h1>
      <p className="text-lg mt-3 max-w-xl text-center">
        Empowering transactions worldwide with cutting-edge blockchain technology.
      </p>
      <a href="https://uniswap.org" target="_blank" className="mt-5 bg-blue-500 px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition">
        Buy KadaXCoin
      </a>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-900 text-white flex justify-center space-x-6 text-lg">
        <Link to="/" className="hover:text-gray-400">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;  // ✅ This ensures App.jsx provides a default export
