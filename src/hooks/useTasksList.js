import { useState } from 'react'
import axios from "axios";
import { BASE_URL, AUTHOR_ID } from '../helpers/constants'

export const useTasksList = () => {
  const [tasks, setTasks] = useState([])
  const getTasks = () => {
    axios.get(`${BASE_URL}?id_author=${AUTHOR_ID}`)
      .then(res => {
        const { data } = res.data
        setTasks(data.map(task => ({
          id: task.id,
          status: task.status,
          description: task.description,
          finish_at: new Date(task.finish_at).toISOString().slice(0, 10),
      })));
    })
  }
  return { tasks, getTasks}
}

export const saveNewTask = async (task, callback) => {
  const newTask = {...task, id_author: AUTHOR_ID};

  await axios.post(`${BASE_URL}?id_author=${AUTHOR_ID}`, newTask)
    .then(res => {
      const { data } = res.data
      console.log('response', data);
      if (callback) {
        callback();
      }
  });
}
