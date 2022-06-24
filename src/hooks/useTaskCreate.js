import axios from 'axios';
import {BASE_URL, AUTHOR_ID} from '../helpers/constants';

export const useTaskCreate = () => {
  const taskCreate = (task) => {
    console.log(task)
    const body = {
      description: task.description,
      status: 0,
      id_author: 1,
      finish_at: task.finish_at,
    };
    return axios.post(`${BASE_URL}?id_author=${AUTHOR_ID}`, body);
  };

  return {taskCreate};
};
