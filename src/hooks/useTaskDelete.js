import axios from 'axios';
import {BASE_URL} from '../helpers/constants';
import { useTasksList } from './useTasksList';

export const useTaskDelete = () => {
  const deleteTask = (id) => {
    axios.delete(`${BASE_URL}${id}`).then(res => console.log(res));
  };
  return {deleteTask};
};
