import React from 'react';
import {DateLabel, Touchable} from './index.styles';

export function DateSelector({date, onPress}) {
    return (
      <Touchable onPress={onPress}>
        <DateLabel>{date}</DateLabel>
      </Touchable>
    );
};

