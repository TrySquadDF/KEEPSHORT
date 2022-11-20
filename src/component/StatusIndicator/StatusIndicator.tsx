import cn from "classnames";
import { motion } from "framer-motion";

import { css, keyframes } from "../stitches.config";
import { Box } from "../UI";

const signal = keyframes({
  "0%": {
    opacity: 1,
  },
  "50%": {
    opacity: 0.15,
  },
  "100%": {
    opacity: 1,
  },
});

const LayerOneStyle = css({
  size: "14px",
  background:
    "radial-gradient(57.14% 57.14% at 50% 50%, #2E790A 0%, rgba(46, 121, 10, 0) 100%)",
  borderRadius: "100%",
});

const LayerTwoStyle = css({
  size: "10px",
  background:
    "radial-gradient(60% 60% at 50% 50%, #2E790A 0%, rgba(46, 121, 10, 0) 100%)",
  borderRadius: "100%",
});

const LayerEndStyle = css({
  size: "6px",
  background: "#2E790A",
  borderRadius: "100%",
});

const LayerStyleDefualt = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  animation: `${signal} 1.2s linear 0s infinite normal none running`,
});

const StatusIndicator = () => {
  return (
    <Box>
      <motion.div className={cn(LayerOneStyle(), LayerStyleDefualt())}>
        <motion.div className={cn(LayerTwoStyle(), LayerStyleDefualt())}>
          <motion.div
            className={cn(LayerEndStyle(), LayerStyleDefualt())}
          ></motion.div>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default StatusIndicator;
