import { atomFamily, selectorFamily } from 'recoil';
import { TODOS } from './todos';
import axios from 'axios';


// hardcode variable
// export const todosAtomFamily2 = atomFamily({
//   key: 'todosAtomFamily2',
//   default: (id) => {
//     return TODOS.find((x) => x.id === id) || { id: id, title: "Not Found", description: "No Description" };
//   },
// });


// getting from backend api
export const todosAtomFamily = atomFamily({
  key:"todoAtomFamily",
  default: selectorFamily({
    key:"todoSelectorFamily",
    get: (id) => async ({get}) =>{
      const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
      return res.data.todo;
    }
  })
})