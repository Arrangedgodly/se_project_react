const baseUrl = 'http://localhost:3001';

const getClothingItems = () => {
  return fetch(`${baseUrl}/items`)
    .then(res => {
      if (res.ok) {
        console.log(res);
        return res.json();
      }
      return Promise.reject(`Error ${res.status}`)
    })
}

export {getClothingItems};