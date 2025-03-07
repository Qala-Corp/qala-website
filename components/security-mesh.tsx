// "use client"
//
// import { useRef, useMemo, useState, useEffect } from "react"
// import { Canvas, useFrame, useThree } from "@react-three/fiber"
// import { Points, PointMaterial } from "@react-three/drei"
// import * as THREE from "three"
// import { useTheme } from "next-themes"
//
// function DataPacket({ start, end, color }) {
//   const ref = useRef()
//   const [progress, setProgress] = useState(0)
//
//   useFrame((state, delta) => {
//     setProgress((prev) => (prev + delta * 0.5) % 1)
//     ref.current.position.lerpVectors(start, end, progress)
//   })
//
//   return (
//     <mesh ref={ref}>
//       <sphereGeometry args={[0.03, 16, 16]} />
//       <meshBasicMaterial color={color} />
//     </mesh>
//   )
// }
//
// function SecurityNodes({ count = 500, color, packetColor }) {
//   const points = useRef()
//   const [nodes, setNodes] = useState([])
//   const [packets, setPackets] = useState([])
//   const { mouse, viewport } = useThree()
//
//   const positions = useMemo(() => {
//     const positions = new Float32Array(count * 3)
//     const newNodes = []
//     for (let i = 0; i < count; i++) {
//       const x = (Math.random() - 0.5) * 10
//       const y = (Math.random() - 0.5) * 10
//       const z = (Math.random() - 0.5) * 10
//       positions[i * 3] = x
//       positions[i * 3 + 1] = y
//       positions[i * 3 + 2] = z
//       newNodes.push(new THREE.Vector3(x, y, z))
//     }
//     setNodes(newNodes)
//     return positions
//   }, [count])
//
//   useFrame((state, delta) => {
//     points.current.rotation.x = THREE.MathUtils.lerp(points.current.rotation.x, (mouse.y * viewport.height) / 50, 0.1)
//     points.current.rotation.y = THREE.MathUtils.lerp(points.current.rotation.y, (mouse.x * viewport.width) / 50, 0.1)
//
//     if (Math.random() < 0.05) {
//       const start = nodes[Math.floor(Math.random() * nodes.length)]
//       const end = nodes[Math.floor(Math.random() * nodes.length)]
//       setPackets((prev) => [...prev, { id: Date.now(), start, end }])
//     }
//
//     setPackets((prev) => prev.slice(-50)) // Limit the number of packets
//   })
//
//   return (
//     <group>
//       <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
//         <PointMaterial transparent color={color} size={0.05} sizeAttenuation={true} depthWrite={false} />
//       </Points>
//       {packets.map((packet) => (
//         <DataPacket key={packet.id} start={packet.start} end={packet.end} color={packetColor} />
//       ))}
//     </group>
//   )
// }
//
// export function SecurityMesh() {
//   const { theme } = useTheme()
//   const [mounted, setMounted] = useState(false)
//
//   useEffect(() => {
//     setMounted(true)
//   }, [])
//
//   if (!mounted) {
//     return null
//   }
//
//   const color = theme === "dark" ? "#ffffff" : "#000000"
//   const packetColor = theme === "dark" ? "#00ff00" : "#008000"
//
//   return (
//     <>
//       <div className="fixed inset-0 -z-10">
//         <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
//           <ambientLight intensity={0.5} />
//           <SecurityNodes color={color} packetColor={packetColor} />
//         </Canvas>
//       </div>
//       <div className="fixed inset-0 -z-10 bg-background/50 backdrop-blur-sm" />
//     </>
//   )
// }
//
