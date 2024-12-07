import styled from '@emotion/styled';
import { SendReqBtn } from './sendReqBtn';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <SendReqBtn url="/api1/myIp"/>
      <br />
      <SendReqBtn url="/api2/myIp"/>
    </StyledApp>
  );
}

export default App;
