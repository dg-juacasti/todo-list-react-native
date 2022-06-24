import React from "react";
import { View } from 'react-native'
import { TaskItem } from "./taskItem";

export function TasksList({tasks, navigation, changeTaskStatus, deleteTask}) {
  return (
    <View>
      {tasks &&
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            navigation={navigation}
            changeStatus={changeTaskStatus}
            deleteTask={() => deleteTask(task.id) }
          />
        ))}
    </View>
  );
}