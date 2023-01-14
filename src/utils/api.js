const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://api.graydonwasil.students.nomoredomainssbs.ru/'
  : 'http://localhost:3001'; 

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
  return fetch(`${baseUrl}/items/${card._id}`, {
    method: "DELETE",
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
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
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
    }
  })
    .then(checkResponse)
}

const likeItem = (itemId) => {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
    }
  })
    .then(checkResponse)
}

const dislikeItem = (itemId) => {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
    }
  })
    .then(checkResponse)
}

export { getClothingItems, removeClothingItem, addClothingItem, likeItem, dislikeItem };

/* http://localhost:3001 | https://my-json-server.typicode.com/arrangedgodly/se_project_react */