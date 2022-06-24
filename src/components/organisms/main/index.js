import React, { useState, useEffect } from "react";
import {StyledMain, StyledSearchContent, StyledContent} from './index.styles';
import {Typography} from '../../atoms/typography';
import {CustomButton} from '../../atoms/button';
import {TasksList} from '../../molecules/tasksList';
import { COLORS } from "../../../shared/colors";
import fonts from "../../../shared/fonts";
import {useTasksList} from '../../../hooks/useTasksList';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from "react-native";

export function Main({ navigation }) {

  const {tasks, getTasks} = useTasksList();
  const [saveTasks, setSaveTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    setSaveTasks(tasks);
  }, [tasks]);
  
  return (
    <StyledMain>
      <StyledContent>
        <Typography
          caption="Todo List"
          color={COLORS.textColor}
          textAlign="center"
          fontFamily={fonts.RobotoBold}
          fontSize={24}
        />
      </StyledContent>
      <StyledSearchContent>
        <CustomButton
          onPress={() => navigation.navigate('Form')}
          disabled={false}
          backgroundColor={COLORS.textColor}
          height={40}
          width={40}
          iconName="plus-circle"
          iconColor={COLORS.white}
        />
      </StyledSearchContent>
      {(saveTasks.length === 0) ? (
        <View>
          <View style={{alignItems: 'center'}}>
            <Icon name={'info-circle'} size={30} color={COLORS.textColor} />
          </View>
          <Typography
            caption="No tienes tareas registradas"
            color={COLORS.textColor}
            textAlign="center"
            fontFamily={fonts.RobotoMedium}
            fontSize={24}
          />
        </View>
      ) : (
        <TasksList
        tasks={saveTasks}
        navigation={navigation} />
      )}
    </StyledMain>
  );
}