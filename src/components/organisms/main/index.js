import React, { useState, useEffect } from "react";
import {StyledMain, StyledSearchContent, StyledContent} from './index.styles';
import {Typography} from '../../atoms/typography';
import {CustomButton} from '../../atoms/button';
import {TasksList} from '../../molecules/tasksList';
import { COLORS } from "../../../shared/colors";
import fonts from "../../../shared/fonts";
import { Input } from "../../atoms/input";
import {useTasksList} from '../../../hooks/useTasksList';
import { useTaskDelete } from "../../../hooks/useTaskDelete";


export function Main({ navigation }) {
  const {tasks, getTasks} = useTasksList();
  const { deleteTask } = useTaskDelete();
  const [saveTasks, setSaveTasks] = useState([])

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    setSaveTasks(tasks);
  }, [tasks]);

  const searchTask = (value) => {
    if (value !== '') {
      return saveTasks.filter(task => {
        const filterData = task.description.includes(value)
        if (filterData) setSaveTasks([task]);
      })
    }
    getTasks()
  }
  
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
        <Input
          placeholder="Buscar tarea"
          onChangeText={value => searchTask(value)}
          borderColor={COLORS.textColor1}
          borderWidth={1}
          borderRadius={5}
          height={40}
          width={270}
        />
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
      <TasksList 
        tasks={saveTasks}
        deleteTask={deleteTask}
        navigation={navigation} />
      <StyledContent>
        <CustomButton
          title="Mostrar no completado"
          onPress={() => {}}
          disabled={false}
          backgroundColor={COLORS.textColor}
          height={40}
          iconName="navicon"
          iconMargin={5}
          iconColor={COLORS.white}
        />
      </StyledContent>
    </StyledMain>
  );
}