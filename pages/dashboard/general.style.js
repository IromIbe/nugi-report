import styled from "styled-components";
import devices from "../../utils/mobile";
export const GeneralContLayout = styled.div`
  ${"" /* height: 100%; */}
  background: #fff;
  width: 83%;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  overflow-y: scroll;
  @media ${devices.tabpro} {
    width: 92%;
  }
`;
