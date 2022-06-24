import axios from "axios";
import { BASE_URL, AUTHOR_ID } from '../helpers/constants'

export const useTasksEdit = () => {

  const editTask = (task) => {
    task['description'] = description;
    task['finish_at'] = finish_at;

    try{
      axios.put(`${BASE_URL}${id}`, task)
      .then(res => {
        console.log('Edit task response', res);
      })
    }catch(e) {
      console.error(e);
    }
  }
  return { editTask }
};