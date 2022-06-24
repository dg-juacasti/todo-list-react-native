import React, { useState, useEffect } from "react";
import { StyledMain, StyledSearchContent, StyledContent } from './index.styles';
import { Typography } from '../../atoms/typography';
import { CustomButton } from '../../atoms/button';
import { TasksList } from '../../molecules/tasksList';
import { COLORS } from "../../../shared/colors";
import fonts from "../../../shared/fonts";
import { useTasksList } from '../../../hooks/useTasksList';
import { Input } from "../../atoms/input";
import { useTasksDelete } from "../../../hooks/useTaskDelete";

export function Main({ navigation }) {
  const { tasks, getTasks } = useTasksList();
  const [saveTasks, setSaveTasks] = useState([]);
  const {  deleteTask } = useTasksDelete();

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    setSaveTasks(tasks);
  }, [tasks]);


  const deleteTaskListItem = (id) => {
    deleteTask(id);
    const filteredTasks = saveTasks.filter((task) => task.id !== id);
    setSaveTasks(filteredTasks);
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
          // value={description}
          placeholder="Buscar tarea"
          // onChangeText={(value) => setDescription(value)}
          borderColor={COLORS.textColor1}
          borderWidth={1}
          borderRadius={5}
          height={40}
          style={{flexGrow: 1, marginRight: 8}}
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
        navigation={navigation} 
        deleteTask={deleteTaskListItem}/>
    </StyledMain>
  );
}