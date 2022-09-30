const axios = require('axios').default;
const URL = 'https://pixabay.com/api/';
const KEY = '29240769-fc8bedd50b6f3ec4c5aa48705';
const LIMIT = '12';

export async function searchPosts(query, page = 1) {

    const response = await axios.get(
      `${URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${LIMIT}`
    );
    return response;
//   return fetch(
//     `${URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${LIMIT}`
//   );
}
