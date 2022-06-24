import React from "react";
import { View } from 'react-native'
import { TaskItem } from "./taskItem";

export function TasksList({tasks, navigation, deleteTask}) {
  return (
    <View>
      {tasks &&
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            navigation={navigation}
            deleteTask={() => deleteTask(task.id) }
          />
        ))}
    </View>
  );
}