import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// Variants는 복잡한 애니메이션을 선언하여 조정하는 방법이다.
// 동일한 이름의 시각적 상태를 가진 Variants 객체를 여러 구성 요소에 제공하여 단일 애니메이션 소품의 스위치로 동기화가 가능
const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: { backgroundColor: "rgba(46, 204, 113)", transition: { duration: 1 } },
};

function App() {
  // x값을 저장하며, x값이 바뀌어도 리렌더링하지 않는다.
  // 값을 불러올땐 get(), 값을 지정할땐 set()를 사용한다.
  const x = useMotionValue(0);
  // motionValue의 값을 받아와 값 범위를 지정하고 범위에 따라 값을 재 설정 할 수 있다.
  const rotateZ = useTransform(x, [-400, 0, 400], [-360, 0, 350]);
  const gradient = useTransform(
    x,
    [-400, 0, 400],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
  );

  // useEffect(() => {
  // x.onChange(() => console.log(x.get()));
  //   rotateZ.onChange(() => console.log(rotateZ.get()));
  // }, [x]);

  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotateZ }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
