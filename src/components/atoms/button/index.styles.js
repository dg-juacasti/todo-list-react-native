import styled from 'styled-components/native';

export const StyledButton = styled.TouchableOpacity`
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : 'row')};
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  align-items: ${props => props.alignItems ? props.alignItems : 'center'};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : 3)};
  height: ${props => (props.height ? props.height : 0)};
`;