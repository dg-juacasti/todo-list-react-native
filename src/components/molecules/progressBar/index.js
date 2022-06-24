import React from "react";
import { Typography } from "../../atoms/typography"
import { COLORS } from "../../../shared/colors";
import { StyledContainer, StyledInnerContainer, ProgressBarContainer } from './index.styles';

export function ProgressBar({ description = '', completed = 0, total = 0 }) {
    return (
        <StyledContainer>
            <ProgressBarContainer completed={completed} total={total} />
            <StyledInnerContainer>
                <Typography
                    caption={description}
                    color={COLORS.textColor}
                    textAlign="center"
                    fontFamily={fonts.RobotoBold}
                    fontSize={16}
                />
            </StyledInnerContainer>
        </StyledContainer>
    );
}