const baseUrl = 'https://my-json-server.typicode.com/arrangedgodly/se_project_react';

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
}

const getClothingItems = () => {
  return fetch(`${baseUrl}/items`, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
    .then(checkResponse)
}

const removeClothingItem = (card) => {
  return fetch(`${baseUrl}/items/${card.id}`, {
    method: "DELETE",
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
    .then(checkResponse)
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
    .then(checkResponse)
}

export { getClothingItems, removeClothingItem, addClothingItem };

/* http://localhost:3001 | https://my-json-server.typicode.com/arrangedgodly/se_project_react */