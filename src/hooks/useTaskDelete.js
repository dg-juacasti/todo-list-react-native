import axios from "axios";
import { BASE_URL } from '../helpers/constants'

export const useTasksDelete = () => { 
  const deleteTask = (id) => {
    try{
      axios.delete(`${BASE_URL}${id}`)
      .then(res => {
        console.log('Delete task response', res);
      })
    }catch(e) {
      console.error(e);
    }
  }
  return {  deleteTask }
};