import React from "react";
import CheckBox from '@react-native-community/checkbox';
import { Typography } from "../../../atoms/typography";
import { CustomButton } from "../../../atoms/button";
import {
  StyledItemContent,
  StyledItemInformation,
  StyledItemTask,
  StyledButtonsContent,
} from './taskItem.styles';
import { COLORS } from "../../../../shared/colors";
import fonts from "../../../../shared/fonts";
import { deleteTask } from '../../../../hooks/useTasksList';


export function TaskItem({task, navigation, onRefresh}) {
  const deleteItem = () => {
    deleteTask(task.id, onRefresh())
  }

  return (
    <StyledItemContent>
      <CheckBox
        value={task.status === 0 ? false : true}
        disabled={false}
        onValueChange={() => {}}
      />
      <StyledItemInformation>
        <StyledItemTask>
          <Typography
            caption={task.description}
            color={COLORS.textColor}
            textAlign="left"
            fontFamily={fonts.RobotoRegular}
          />
          <Typography
            caption={task.finish_at}
            color={COLORS.textColor2}
            textAlign="left"
            fontFamily={fonts.RobotoRegular}
          />
        </StyledItemTask>
        <StyledButtonsContent>
          <CustomButton
            onPress={() => navigation.navigate('Form', { task })}
            disabled={false}
            height={40}
            width={40}
            iconName="pencil"
            iconColor={COLORS.textColor1}
          />
          <CustomButton
            onPress={() => deleteItem()}
            disabled={false}
            height={40}
            width={40}
            iconName="trash"
            iconColor={COLORS.textColor1}
          />
        </StyledButtonsContent>
      </StyledItemInformation>
    </StyledItemContent>
  );
}