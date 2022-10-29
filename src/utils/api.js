const baseUrl = 'https://my-json-server.typicode.com/arrangedgodly/se_project_react';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
}

const getClothingItems = () => {
  return fetch(`${baseUrl}/items`)
    .then(res => checkResponse(res))
}

const removeClothingItem = (card) => {
  return fetch(`${baseUrl}/items/${card.id}`, {
    method: "DELETE",
  })
    .then(res => checkResponse(res))
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
    .then(res => checkResponse(res))
}

export { getClothingItems, removeClothingItem, addClothingItem };

/* http://localhost:3001 | https://my-json-server.typicode.com/arrangedgodly/se_project_react */