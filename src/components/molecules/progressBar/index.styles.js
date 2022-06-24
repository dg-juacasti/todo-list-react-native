import styled from 'styled-components/native';
import { COLORS } from '../../../shared/colors';


export const StyledContainer = styled.View`
  border: 1px solid ${COLORS.grayLight};
  margin-top: auto;
  border-radius: 8px;
  position: relative;
  height: 40px;
`;

export const ProgressBarContainer = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  height: 40px;
  background-color:orange;
  width: ${props => `${  props.total === 0 ? '0' : Math.round(props.completed * 100 / props.total)}%`};
`;

export const StyledInnerContainer = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  padding-vertical: 8px;
  padding-horizontal: 16px;
`; 