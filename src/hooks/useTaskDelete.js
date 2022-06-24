import axios from "axios";
import { BASE_URL } from '../helpers/constants'

export const useTaskDelete = () => {
  const deleteTask = async (id) => {
    axios.delete(`${BASE_URL}${id}`);
  }
  return { deleteTask }
}