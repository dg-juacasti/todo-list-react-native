import axios from "axios";
import { BASE_URL, AUTHOR_ID } from '../helpers/constants'

export const useTaskCreate = () => {
  const createTask = async (data) => {
    axios.post(`${BASE_URL}?id_author=${AUTHOR_ID}`, { ...data, id_author: AUTHOR_ID, status: 0 });
    // try {
    //     await axios({
    //       method: "post",
    //       url: `${BASE_URL}?id_author=${AUTHOR_ID}`,
    //       data: { ...data, id_author: AUTHOR_ID, status: 0 },
    //     });
    //   } catch(error) {
    //     console.log(error)
    //   }
  }
  return { createTask }
}