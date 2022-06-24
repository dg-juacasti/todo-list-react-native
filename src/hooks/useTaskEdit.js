import axios from "axios";
import { BASE_URL, AUTHOR_ID } from '../helpers/constants'

export const useTasksEdit = () => {

  const editTask = (task) => { 
    task['id_author'] = AUTHOR_ID;
    console.log(task);
    try{
      axios.put(`${BASE_URL}${task.id}`, task)
      .then(res => {
        console.log('Edit task response', res);
      })
    }catch(e) {
      console.error(e);
    }
  }
  return { editTask }
};