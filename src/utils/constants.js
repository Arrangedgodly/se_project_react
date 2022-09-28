const apiKey = "06ac1279ecb14d84aa401432222609";
const location = {
  latitude: "39.739235",
  longitude: "-104.990250"
};
const parsedLocation = `${location.latitude},${location.longitude}`;

const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://img.hatshopping.com/Liberty-Baseball-Cap.32874_pf2.jpg",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1627492161-filson-prospector-hoodie-blue-1627491769.jpg",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://www.rei.com/media/product/192845",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://assets.hermes.com/is/image/hermesproduct/expert-sneaker--221896ZH92-worn-1-0-0-1000-1000_b.jpg",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://www.pennlive.com/resizer/e7o66Pu6YAzxTOA7AARGt_L4hic=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/XBUH6UFAPVDTLCPAG6HBZUFQE4.jpg",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://m.media-amazon.com/images/I/71XqHAMkmiL._AC_UX342_.jpg",
  }
];

export {
  apiKey,
  parsedLocation,
  defaultClothingItems
}