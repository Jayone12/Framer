import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          // 드래그가 종료되면 시작지점으로 이동시킨다.
          dragSnapToOrigin
          // 드래그 되는 요소가 영역 밖으로 나갔을때의 당기는 힘 설정
          dragElastic={0.5}
          // Drag 영역을 지정할 수 있다.
          // 부모 요소의 레퍼런스를 만들고 이걸로 영역을 지정한다.
          dragConstraints={biggerBoxRef}
          variants={boxVariants}
          whileTap="click"
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
