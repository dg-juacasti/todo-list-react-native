import React from 'react'
import {StyledText} from './index.styles';

export function Typography({ 
    caption,
    alignItems,
    color,
    textAlign,
    fontFamily,
    fontSize,
    fontWeight
}) {
    return (
      <StyledText
        alignItems={alignItems}
        color={color}
        textAlign={textAlign}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}>
        {caption}
      </StyledText>
    );
}