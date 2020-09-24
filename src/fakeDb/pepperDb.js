const peppersDb = [
  {
    name: "Golden Cayenne", //VARCHAR(255) NOT NULL
    scoville: 40000, //heat //INT NOT NULL
    pic:
      "https://edge.bonnieplants.com/www/tiny/uploads/20200810205412/golden-cayenne-pepper.jpg", //VARCHAR 2000 NOT NULL
    flavor: "spicy, sweet, apple-y", //VARCHAR (2000)
    color: "yellow", //VARCHAR (255)
    species: "capsicum annuum", //VARCHAR 255
    growthTimeMonths: 1, //TINYINT
    size: 4, //1-10 (1 smallest) //TINYINT
    id: 1, //INT AUTO_INCREMENT NOT NULL UNIQUE PRIMARY KEY
    user: "Casey" //VARCHAR 255 FOREIGN KEY
  },
  {
    name: "Bishops Crown",
    scoville: 10000, //heat
    pic:
      "https://www.chilipeppermadness.com/wp-content/uploads/2019/08/Bishops-Crown-Peppers.jpg",
    flavor: "spicy, fruity",
    color: "red",
    species: "Capsicum baccatum",
    growthTimeMonths: 1,
    size: 4, //1-10 (1 smallest)
    id: 2,
    user: "Casey"
  },
  {
    name: "Tabasco",
    scoville: 50000, //heat
    pic:
      "https://i.pinimg.com/originals/51/24/21/51242165ed07bd39ecb0d45319d72d35.jpg",
    flavor: "spicy, smoky, citrusy",
    color: "yellow, red",
    species: "Capsicum frutescens",
    growthTimeMonths: 1,
    size: 2, //1-10 (1 smallest)
    id: 3,
    user: "Casey"
  },
  {
    name: "Serrano",
    scoville: 17000, //heat
    pic:
      "https://www.thespruceeats.com/thmb/s90Vt-yDdfJeVKrHnsGCop7LhNg=/1333x1000/smart/filters:no_upscale()/GettyImages-930279012-e1d17f3f2e14473db877437ce57b8f5f.jpg",
    flavor: "spicy fresh",
    color: "green or red",
    species: "capsicum annuum",
    growthTimeMonths: 3,
    size: 5,
    id: 4,
    user: "Mike"
  },
  {
    name: "Poblano",
    scoville: 1500,
    pic:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Poblano_Pepper.jpg/330px-Poblano_Pepper.jpg",
    flavor: "smoky",
    color: "green",
    species: "capsicum annuum",
    growthTimeMonths: 6,
    size: 8,
    id: 5,
    user: "Bo"
  },
  {
    name: "Thai Hot Ornamental Pepper",
    scoville: 75000,
    pic:
      "https://edge.bonnieplants.com/www/tiny/uploads/20200810205134/thai-hot-pepper.jpg",
    flavor: "Hot",
    color: "red",
    species: "capsicum annuum",
    growthTimeMonths: 3,
    size: 2,
    id: 6,
    user: "Ben"
  },
  {
    name: "BRAIN STRAIN CHILI PEPPER",
    scoville: 1300000,
    pic:
      "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2018/07/Brain-Strain-Chili-Pepper1.jpg",
    flavor: "Hot",
    color: "orange",
    species: "CAPSICUM CHINENSE",
    growthTimeMonths: 4,
    size: 2,
    id: 7,
    user: "West"
  },
  {
    name: "HABANERO",
    scoville: 250000,
    pic: "https://aaronparecki.com/img/1240x0/2018/12/25/8/habaneros.jpg",
    flavor: "Hot",
    color: "orange",
    species: "Capsicum chinense",
    growthTimeMonths: 8,
    size: 4,
    id: 8,
    user: "Dobson"
  }
];

export default peppersDb;
