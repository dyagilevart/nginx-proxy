import styled from '@emotion/styled';
import { SendReqBtn } from './sendReqBtn';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      
      <span>front nginx => nodeJS</span> 
      <br/>
      <SendReqBtn url="/api/myIp"/>

      <br/>

      <span>front nginx => nginx1 => nodeJS</span>
      <br/>
      <SendReqBtn url="/api1/myIp"/>

      <br />

      <span>front nginx => nginx2 => nodeJS</span>
      <br />
      <SendReqBtn url="/api2/myIp"/>
    </StyledApp>
  );
}

export default App;
