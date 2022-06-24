import React from "react";
import { View } from 'react-native'
import { TaskItem } from "./taskItem";

export function TasksList({tasks, setReload, navigation}) {
  return (
    <View>
      {tasks &&
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            navigation={navigation}
            setReload={setReload}
          />
        ))}
    </View>
  );
}