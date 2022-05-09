import React from "react";
import styled from "@emotion/styled/macro";
import {Color} from "../types"

type Props = {
    tab: 'about' | 'stats' | 'evolution';
    onClick: (tab: 'about' | 'stats' | 'evolution') => void;
    color?: Color;
  }
  
  const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  `;
  
  const ListItem = styled.li`
    & + & {
      margin-left: 16px;
    }
  `;
  
  const TabButton = styled.button<{ active?: boolean; color: string; }>`
    margin: 0;
    border-radius: 8px;
    box-shadow: 6px 4px 14px 5px rgba(0,0,0,0.21);
    padding: 6px 12px;
    background-color: #fff;
    border: none;
    font-size: 16px;
    color: ${({ active, color }) => active ? color : '#6B7280'};
  `;
const Tabs: React.FC=()=>{
    return(
        <List>
            <ListItem>About</ListItem>
            <ListItem>Status</ListItem>
            <ListItem>Evolution</ListItem>
        </List>
    )
}
export default Tabs;