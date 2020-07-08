import React from 'react';
import styled from 'styled-components';
import { spacingUnits, colours } from '../../theme';

const _Topbar = styled.header`
  background-color: ${colours.indigo};
  color: ${colours.offWhite};
  height: fit-content;

  h1 {
    padding: ${spacingUnits.small} ${spacingUnits.medium};
    margin: 0;
  }
`;

export function Topbar() {
  return (
    <_Topbar>
      <h1>Will my bike ride be cancelled?</h1>
    </_Topbar>
  );
}
