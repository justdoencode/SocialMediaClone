




const initialState = {
  userData:
  {
    username: "Joseline_Addams",
    age: 20,
    hobbies: "Gitar çalmak, dizi izlemek..",
    nationality: "Türkiye",
    horoscope: "Aslan",
    height: "167cm",
    weight: "54kg",
    job: "Mimar",
    location: "Türkiye",
    dob: "2001-07-12",
    followers: 2415,
    following: 341,
    posts: 21,
    photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
  },

  country: [
    { key: '1', value: 'Türkiye' },
    { key: '2', value: 'Azerbaycan' },
    { key: '3', value: 'Kanada' },
    { key: '4', value: 'Fransa' },
  ],
  horoscope: [
    { key: '1', value: 'Koç' },
    { key: '2', value: 'Boğa' },
    { key: '3', value: 'İkizler' },
    { key: '4', value: 'Yengeç' },
    { key: '5', value: 'Aslan' },
    { key: '6', value: 'Başak' },
    { key: '7', value: 'Terazi' },
    { key: '8', value: 'Akrep' },
    { key: '9', value: 'Yay' },
    { key: '10', value: 'Oğlak' },
    { key: '11', value: 'Kova' },
    { key: '12', value: 'Balık' },
  ],
  post: [
    'https://thispersondoesnotexist.com/',
    'https://thispersondoesnotexist.com/',
    'https://thispersondoesnotexist.com/',
    'https://thispersondoesnotexist.com/',
    'https://thispersondoesnotexist.com/',
    'https://thispersondoesnotexist.com/',
    'https://thispersondoesnotexist.com/',
    'https://thispersondoesnotexist.com/',
    'https://thispersondoesnotexist.com/',
    'https://thispersondoesnotexist.com/',
    'https://thispersondoesnotexist.com/',
    'https://thispersondoesnotexist.com/',
  ],
  story: [
    { id: '1', image: 'https://via.placeholder.com/100' },
    { id: '2', image: 'https://via.placeholder.com/100' },
    { id: '3', image: 'https://via.placeholder.com/100' },
    { id: '4', image: 'https://via.placeholder.com/100' },
    { id: '5', image: 'https://via.placeholder.com/100' },
    { id: '6', image: 'https://via.placeholder.com/100' },
  ]

};






const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return { ...state, userData: action.payload.userData }

    default:
      return state;
  }
}

export default userDataReducer;