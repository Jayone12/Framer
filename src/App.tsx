import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  return (
    <Wrapper>
      <Box
        // 해당 Element의 초기 값 지정
        initial={{ scale: 0 }}
        // 원하는 animation 효과 지정
        animate={{ scale: 1, rotateZ: 360 }}
        // animation 실행 떄 움직이는 효과 지정
        transition={{ type: "spring", mass: 5 }}
      />
    </Wrapper>
  );
}

export default App;
