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

const removeClothingItem = (card) => {
  return fetch(`${baseUrl}/items/${card.id}`, {
    method: "DELETE",
  })
    .then(res => {
      if (res.ok) {
        console.log(res);
        return res.json();
      }
      return Promise.reject(`Error ${res.status}`)
    })
}

export {getClothingItems, removeClothingItem};