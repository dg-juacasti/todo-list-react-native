import React from "react";
import { View } from 'react-native';
import { TaskItem } from "./taskItem";

export function TasksList({tasks, onRefresh, descriptionToSearch, navigation}) {
  const tasksFiltered = descriptionToSearch ? tasks.filter(task => task.description.toLowerCase().includes(descriptionToSearch.toLowerCase())) : tasks;

  return (
    <View>
      {tasksFiltered &&
        tasksFiltered.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            navigation={navigation}
            onRefresh={onRefresh}
          />
        ))}
    </View>
  );
}