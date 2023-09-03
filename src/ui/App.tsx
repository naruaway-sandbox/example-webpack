import { motion } from "framer-motion";

const AnimationExample = () => (
  <motion.div
    style={{ width: 160, height: 160, backgroundColor: "rgb(0,169,181)" }}
    animate={{
      scale: [0, 0, 1, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  />
);

export const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
      }}
    >
      <AnimationExample />
    </div>
  );
};
