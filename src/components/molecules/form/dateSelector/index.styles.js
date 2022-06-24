import styled, {css} from 'styled-components/native';
import { COLORS } from '../../../../shared/colors';
import fonts from '../../../../shared/fonts';

export const Touchable = styled.TouchableOpacity`
  border-width: 1px;
  height: 38px;
  border-radius: 5px;
  border-color: ${COLORS.textColor1};
  justify-content: center;
`;

export const DateLabel = styled.Text`
  font-family: ${fonts.RobotoBold};
  font-size: 14px;
  margin-left: 5px;
`;
