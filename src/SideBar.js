import React from "react";
import styled from "styled-components";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  FiberManualRecord,
  Create,
  InsertComment,
  Add,
} from "@material-ui/icons";
import SidebarOption from "./SidebarOption";
import { db } from "./firebase";

function SideBar() {
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  console.log('channels', channels)

  return (
    <SideBarContainer>
      <SidebarHeader>
        <SideBarInfor>
          <h2>GSP</h2>
          <h3>
            <FiberManualRecord />
            Gowri
          </h3>
        </SideBarInfor>
        <Create />
      </SidebarHeader>

      <SidebarOption Icon={InsertComment} title="threads" />

      <SidebarOption Icon={Add} addChannelOption title="Add Channel" />

      {channels?.docs.map((doc) => (
        <SidebarOption
          key={doc.id}
          id={doc.id}
          
          title={doc.data().name}
        />
      ))}
    </SideBarContainer>
  );
}

export default SideBar;

const SideBarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49214b;
  max-width: 260px;
  margin-top: 60px;
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SideBarInfor = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 911;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-bottom: 2px;
    color: green;
  }
`;
