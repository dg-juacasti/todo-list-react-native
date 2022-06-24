import axios from "axios";
import { BASE_URL, AUTHOR_ID } from '../helpers/constants'

export const useTasksCreate = () => {
  const task = {  
    status: 0,
    id_author: AUTHOR_ID
  };

  const createTask = (description, finish_at) => {
    task['description'] = description;
    task['finish_at'] = finish_at;

    try{
      axios.post(`${BASE_URL}?id_author=${AUTHOR_ID}`, task)
      .then(res => {
        console.log('Create task response', res);
      })
    }catch(e) {
      console.error(e);
    }
  }
  return { task, createTask }
};