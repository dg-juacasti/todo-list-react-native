import styled from 'styled-components/native';
import { COLORS } from '../../../../shared/colors';


export const StyledItemContent = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${COLORS.evenColor};
  margin-bottom: 2px;
  padding-right: 5px;
`;
export const StyledItemInformation = styled.View`
  flex: 1;
  flex-direction: row;
`;
export const StyledItemTask = styled.View`
  flex: 1;
  flex-direction: column;
`;
export const StyledButtonsContent = styled.View`
  flex-direction: row;
`;