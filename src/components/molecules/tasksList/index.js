import React from "react";
import { View } from 'react-native'
import { TaskItem } from "./taskItem";

export function TasksList({tasks, navigation}) {
  return (
    <View>
      {tasks &&
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            navigation={navigation}
          />
        ))}
    </View>
  );
}