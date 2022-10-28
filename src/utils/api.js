const baseUrl = 'https://my-json-server.typicode.com/arrangedgodly/se_project_react';

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

const addClothingItem = (name, link, weather, id) => {
  return fetch(`${baseUrl}/items/`, {
    method: "POST",
    body: JSON.stringify({
      "name": name,
      "weather": weather,
      "imageUrl": link,
      "id": id
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
    .then(res => {
      if (res.ok) {
        console.log(res);
        return res.json();
      }
      return Promise.reject(`Error ${res.status}`)
    })
}

export {getClothingItems, removeClothingItem, addClothingItem};