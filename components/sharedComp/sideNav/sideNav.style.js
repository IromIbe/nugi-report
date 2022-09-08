import styled from "styled-components";
import devices from "../../../utils/mobile";

export const SideNavCont = styled.div`
  width: 17%;
  border-right: 2px solid rgba(215, 223, 241, 0.45);
  border-radius: 6px;
  ${"" /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */}
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  ${"" /* overflow-x: hidden; */}

  .nav-link {
    a {
      font-family: "Montserrat", sans-serif;
      font-style: normal;
      font-weight: 600;
      ${"" /* font-size: 14px; */}
      line-height: 20px;
      &:hover {
        color: #2196f3;
      }
    }
  }
  @media ${devices.tabpro} {
    width: 8%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Color = styled.a`
  color: ${({ active }) => (active ? "#2196F3" : "#000000")};

  @media ${devices.tabpro} {
    display: none;
  }
`;
