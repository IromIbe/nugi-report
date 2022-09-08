import React from "react";
import styled from "styled-components";
import { GeneralContLayout } from "./general.style";

const ProfileCont = styled.div``;
function Profile() {
  return (
    <GeneralContLayout>
      <ProfileCont className='title'>
        <h1>Heyoo!</h1>
      </ProfileCont>
    </GeneralContLayout>
  );
}

export default Profile;
