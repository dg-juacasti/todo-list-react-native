import React, { useState, useEffect } from "react";
import {
  StyledMain, StyledSearchContent, StyledContent, ListInfo,
} from './index.styles';
import { Typography } from '../../atoms/typography';
import { CustomButton } from '../../atoms/button';
import { TasksList } from '../../molecules/tasksList';
import { COLORS } from "../../../shared/colors";
import fonts from "../../../shared/fonts";
import { useTasksList } from '../../../hooks/useTasksList';
import { Input } from "../../atoms/input";
import { useTasksDelete } from "../../../hooks/useTaskDelete";
import { useTasksEdit } from "../../../hooks/useTaskEdit";
import { TASK_COMPLETED, TASK_PENDING } from "../../../helpers/constants";
import { ProgressBar } from "../../molecules/progressBar";

export function Main({ navigation }) {
  const { tasks, getTasks } = useTasksList();
  const [saveTasks, setSaveTasks] = useState([]);
  const { deleteTask } = useTasksDelete();
  const { editTask } = useTasksEdit();
  const [listFooter, setListFooter] = useState('')

  useEffect(() => {
    getTasks();
    getListFooter();
  }, []);

  useEffect(() => {
    setSaveTasks(tasks);
    getListFooter();
  }, [tasks]);

  const changeTaskStatus = (task) => {
    const changedTask = [];
    for (let index = 0; index < saveTasks.length; index++) {
      const taskInList = saveTasks[index];
      if (taskInList.id === task.id) {
        taskInList.status = task.status === TASK_COMPLETED ? TASK_PENDING : TASK_COMPLETED;
        const newTask = {
          ...taskInList,
          status: task.status === TASK_COMPLETED ? TASK_PENDING : TASK_COMPLETED,
        };
        editTask(newTask);
      }
      changedTask.push(taskInList)
    }
    setSaveTasks(changedTask);
    getListFooter();
  }

  const getListFooter = () => {
    const tasksCompleted = tasks.filter(task => task.status === TASK_COMPLETED);
    setListFooter(`${tasksCompleted.length} de ${tasks.length} completada(s)`)
  }

  const getTasksCompletedLength = () => {
    const taskCompleted = tasks.filter(task => task.status === TASK_COMPLETED);
    return taskCompleted.length;
  }


  const deleteTaskListItem = (id) => {
    deleteTask(id);
    const filteredTasks = saveTasks.filter((task) => task.id !== id);
    setSaveTasks(filteredTasks);
  }

  const searchText = (value) => {
    const filteredTasks = tasks.filter(taskInList => taskInList.description.includes(value));
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
      <StyledSearchContent testID="searchView">
        <Input
          testID="searchInput"
          placeholder="Buscar tarea"
          onChangeText={(value) => searchText(value)}
          borderColor={COLORS.textColor1}
          borderWidth={1}
          borderRadius={5}
          height={40}
          style={{ flexGrow: 1, marginRight: 8 }}
        />
        <CustomButton
          onPress={() => navigation.navigate('Form')}
          disabled={false}
          backgroundColor={COLORS.textColor}
          height={40}
          width={40}
          iconName="plus-circle"
          iconColor={COLORS.white}
          testID="addTaskButton"
        />
      </StyledSearchContent>
      <TasksList
        testID="tasksList"
        tasks={saveTasks}
        navigation={navigation}
        changeTaskStatus={changeTaskStatus}
        deleteTask={deleteTaskListItem} />

      <ProgressBar description={listFooter} completed={getTasksCompletedLength()} total={tasks?.length} />

    </StyledMain>
  );
}