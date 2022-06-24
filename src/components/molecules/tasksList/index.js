import React from "react";
import { View } from 'react-native'
import { TaskItem } from "./taskItem";

export function TasksList({tasks, deleteTask, navigation}) {
  return (
    <View>
      {tasks &&
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            navigation={navigation}
          />
        ))}
    </View>
  );
}