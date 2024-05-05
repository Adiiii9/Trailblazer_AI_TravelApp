const heritage = [
    { 
        city: "Uttar Pradesh", 
        name: "Taj Mahal", 
        imageURL: "https://as1.ftcdn.net/v2/jpg/03/04/85/26/1000_F_304852693_nSOn9KvUgafgvZ6wM0CNaULYUa7xXBkA.jpg", 
        cost: "250 / visit", 
        rating: 4.8,
        costIndianNationals: 250,
        costForeignNationals: 500,
        cafeURL1:"https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
        cafeURL2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkhnxBxnTGgm-4zQiTb0okpbf5_dn7mBd3UN6rHn8-7YU7EC5E3y987kUfu3pUeg8vk6g&usqp=CAU",
        cafeURL3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8hyETx6zUlnfKD1frL-mmTye0z7qGpty9NT1bcAPtdXTAx4vmNwzY8ERG02nt04uMqA&usqp=CAU",
        cafeURL4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMDEvwS9oLYAALU8THIzA-y9D7rd0986J53w&usqp=CAU",
        famousRestaurantsNearby: ["Shamiana\nRestaurant",
          "Shamiana",
          "Harbour Bar",
          "Wasabi"],
        description: "Taj Mahal, located in Uttar Pradesh, is an iconic symbol of love and a UNESCO World Heritage Site. Built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, it stands as an architectural marvel of Mughal artistry. Its pristine white marble facade gleams under the sunlight, reflecting the beauty of its surrounding gardens and reflecting pools. Visitors marvel at its intricate carvings, calligraphy, and symmetrical design, making it a must-visit destination for history enthusiasts and romantics alike.",
        thingsToDo: ["Visit Agra Fort","Explore Mehtab Bagh","Discover Itmad-ud-Daulah's Tomb","Shop for Souvenirs"]
      },
    { 
      city: "Delhi", 
      name: "Red Fort", 
      imageURL: "https://t4.ftcdn.net/jpg/04/14/63/57/240_F_414635737_rnVILCP37cRs1mg8khlL6zAzxmARlNvS.jpg", 
      cost: "Free", 
      rating: 4.5,
      costIndianNationals: 0,
      costForeignNationals: 0,
      cafeURL1:"https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
      cafeURL2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkhnxBxnTGgm-4zQiTb0okpbf5_dn7mBd3UN6rHn8-7YU7EC5E3y987kUfu3pUeg8vk6g&usqp=CAU",
      cafeURL3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8hyETx6zUlnfKD1frL-mmTye0z7qGpty9NT1bcAPtdXTAx4vmNwzY8ERG02nt04uMqA&usqp=CAU",
      cafeURL4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMDEvwS9oLYAALU8THIzA-y9D7rd0986J53w&usqp=CAU",
      famousRestaurantsNearby: ["Cafe\nDelhi\nHeights", "Satiram's BTW", "Chand Hotel Restaurant", "Punjabi Janta Dhaba"],
      description: "Red Fort, situated in Delhi, is a majestic fortress that served as the main residence of the Mughal emperors. Constructed of red sandstone, it showcases exquisite Mughal architecture and reflects the grandeur of the Mughal era. Visitors can explore its sprawling complex, including the Diwan-i-Aam (Hall of Public Audience), Diwan-i-Khas (Hall of Private Audience), and the stunning Pearl Mosque. The fort also hosts cultural events, light shows, and exhibitions, offering visitors a glimpse into India's rich history and heritage.",
      thingsToDo: ["Explore Chandni Chowk",
      "Visit Jama Masjid",
      "Discover Old Delhi on a Cycle Rickshaw Ride",
      "Explore Shri Digambar Jain Lal Mandir",
      "Experience Daryaganj's Street Food"],


    },
    { 
        city: "Maharashtra", 
        name: "Elephanta Caves", 
        imageURL: "https://as1.ftcdn.net/v2/jpg/02/09/71/82/1000_F_209718209_81Cziq7wkNcWLiMgUVgmUsTzQS5Y5k73.jpg", 
        cost: "10 / visit", 
        rating: 4.4,
        costIndianNationals: 10,
        costForeignNationals: 250, // Corrected cost for foreign nationals
        cafeURL1:"https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
        cafeURL2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkhnxBxnTGgm-4zQiTb0okpbf5_dn7mBd3UN6rHn8-7YU7EC5E3y987kUfu3pUeg8vk6g&usqp=CAU",
        cafeURL3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8hyETx6zUlnfKD1frL-mmTye0z7qGpty9NT1bcAPtdXTAx4vmNwzY8ERG02nt04uMqA&usqp=CAU",
        cafeURL4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMDEvwS9oLYAALU8THIzA-y9D7rd0986J53w&usqp=CAU",
        famousRestaurantsNearby: ["Cafe Delhi Heights", "Satiram's BTW", "Chand Hotel Restaurant", "Punjabi Janta Dhaba"],
        description: "The Elephanta Caves, situated in Maharashtra, are a UNESCO World Heritage Site renowned for their rock-cut cave temples dedicated to Lord Shiva. These ancient caves, dating back to the 5th to 8th centuries, are located on Elephanta Island in the Arabian Sea. Visitors can explore the intricately carved sculptures, columns, and panels depicting various Hindu mythological themes. The main cave, known as the Great Cave or Cave 1, houses the famous Trimurti sculpture, depicting the three faces of Lord Shiva. The Elephanta Caves are not only a testament to India's rich cultural heritage but also a site of spiritual significance and artistic brilliance.",
        thingsToDo: ["Explore Elephanta Island",
        "Marvel at Rock-Cut Sculptures",
        "Enjoy Ferry Ride to Elephanta Island",
        "Visit Cannon Hill for Panoramic Views",
        "Discover Nearby Attractions on the Island"],

    },
    { 
        city: "Karnataka", 
        name: "Hampi", 
        imageURL: "https://t3.ftcdn.net/jpg/04/44/21/86/240_F_444218690_M7r4gUwslkUs5Ns749ru3qZ1gqG0ySrJ.jpg", 
        cost: "40 / visit", 
        rating: 4.7,
        costIndianNationals: 40,
        costForeignNationals: 40,
        cafeURL1:"https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
        cafeURL2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkhnxBxnTGgm-4zQiTb0okpbf5_dn7mBd3UN6rHn8-7YU7EC5E3y987kUfu3pUeg8vk6g&usqp=CAU",
        cafeURL3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8hyETx6zUlnfKD1frL-mmTye0z7qGpty9NT1bcAPtdXTAx4vmNwzY8ERG02nt04uMqA&usqp=CAU",
        cafeURL4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMDEvwS9oLYAALU8THIzA-y9D7rd0986J53w&usqp=CAU",
        famousRestaurantsNearby: ["Cafe Delhi Heights", "Satiram's BTW", "Chand Hotel Restaurant", "Punjabi Janta Dhaba"],
        description: "Hampi, located in Karnataka, is a UNESCO World Heritage Site known for its magnificent ruins of the Vijayanagara Empire. Spread over a vast area, Hampi boasts of numerous ancient temples, royal complexes, and architectural wonders. Visitors can explore iconic landmarks such as the Virupaksha Temple, Vittala Temple with its famed stone chariot, and the majestic Hampi Bazaar. The landscape is dotted with captivating boulder formations, lush banana plantations, and the Tungabhadra River, adding to the site's natural charm. Hampi's rich history, stunning architecture, and scenic beauty make it a captivating destination for history buffs, photographers, and travelers seeking cultural immersion.",
        thingsToDo: ["Explore Vijayanagara Ruins & Temples",
        "Visit Iconic Landmarks",
        "Enjoy Scenic Views & Boulder Formations",
        "Attend Cultural Events & Performances",
        "Discover Hampi Bazaar & Local Markets"]
    },
    { 
        city: "Tamil Nadu", 
        name: "Chola Temples", 
        imageURL: "https://media.gettyimages.com/id/1300514403/photo/famous-shiva-temple-in-gangaikonda-cholapuram-tamil-nadu-india.jpg?s=612x612&w=0&k=20&c=FIy-ZuTCbolKAxYz0DzgMD3NY_Ld1FzU_0BZW9sB3qo=", 
        cost: "50 / visit", 
        rating: 4.8,
        costIndianNationals: 50,
        costForeignNationals: 50,
        cafeURL1:"https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
        cafeURL2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkhnxBxnTGgm-4zQiTb0okpbf5_dn7mBd3UN6rHn8-7YU7EC5E3y987kUfu3pUeg8vk6g&usqp=CAU",
        cafeURL3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8hyETx6zUlnfKD1frL-mmTye0z7qGpty9NT1bcAPtdXTAx4vmNwzY8ERG02nt04uMqA&usqp=CAU",
        cafeURL4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMDEvwS9oLYAALU8THIzA-y9D7rd0986J53w&usqp=CAU",
        famousRestaurantsNearby: ["Cafe Delhi Heights", "Satiram's BTW", "Chand Hotel Restaurant", "Punjabi Janta Dhaba"],
        description: "The Chola Temples in Tamil Nadu are a group of magnificent Hindu temples built by the Chola dynasty, a powerful South Indian kingdom that flourished between the 9th and 13th centuries. These temples, known for their towering gopurams (entrance towers), intricate carvings, and richly adorned halls, are exemplary of Dravidian architecture and craftsmanship. Among the most renowned Chola Temples are the Brihadeeswarar Temple in Thanjavur, the Airavatesvara Temple in Darasuram, and the Brihadeeswarar Temple in Gangaikonda Cholapuram. These temples not only serve as important pilgrimage sites but also stand as enduring symbols of the Chola dynasty's grandeur and artistic prowess.",
        thingsToDo: ["Visit Brihadeeswarar Temple in Thanjavur",
        "Explore Airavatesvara Temple in Darasuram",
        "Marvel at Brihadeeswarar Temple in Gangaikonda Cholapuram",
        "Discover Nearby Museum Exhibitions",
        "Participate in Religious Ceremonies"]

    },
    { 
        city: "Madhya Pradesh", 
        name: "Sanchi Stupa", 
        imageURL: "https://as2.ftcdn.net/v2/jpg/04/57/97/49/1000_F_457974921_gxHEw72vBsowfYXDLHpYTRUM0dj0Sw5t.jpg", 
        cost: "30 / visit", 
        rating: 4.5,
        costIndianNationals: 30,
        costForeignNationals: 30,
        cafeURL1:"https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
        cafeURL2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkhnxBxnTGgm-4zQiTb0okpbf5_dn7mBd3UN6rHn8-7YU7EC5E3y987kUfu3pUeg8vk6g&usqp=CAU",
        cafeURL3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8hyETx6zUlnfKD1frL-mmTye0z7qGpty9NT1bcAPtdXTAx4vmNwzY8ERG02nt04uMqA&usqp=CAU",
        cafeURL4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMDEvwS9oLYAALU8THIzA-y9D7rd0986J53w&usqp=CAU",
        famousRestaurantsNearby: ["Cafe Delhi Heights", "Satiram's BTW", "Chand Hotel Restaurant", "Punjabi Janta Dhaba"],
        description: "The Sanchi Stupa, located in Madhya Pradesh, is one of the oldest stone structures in India and a UNESCO World Heritage Site. Built by Emperor Ashoka in the 3rd century BCE, it is a significant Buddhist monument and pilgrimage site. The stupa, with its hemispherical dome and intricate gateways (toranas) adorned with sculptural reliefs, reflects the rich artistic and architectural heritage of ancient India. Surrounding the main stupa are numerous smaller stupas, monasteries, and votive stupas, forming a sacred Buddhist complex. The Sanchi Stupa serves as a symbol of peace, enlightenment, and the spread of Buddhism in India, attracting visitors from around the world.",
        thingsToDo: ["Explore Buddhist Monuments",
        "Visit Archaeological Museum",
        "Discover Nearby Stupas and Monasteries",
        "Attend Religious Ceremonies and Festivals",
        "Experience Serenity and Meditation"]
      },
    { 
        city: "Rajasthan", 
        name: "Jantar Mantar", 
        imageURL: "jantar_mantar_image_url.jpg", 
        cost: "50 / visit", 
        rating: 4.3 
      },

    { 
      city: "Delhi", 
      name: "Humayun's Tomb", 
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Cy-TnEivsZgsxuYOSUcgCM24Oly_MPZ0Tg&usqp=CAU", 
      cost: "35 / visit", 
      rating: 4.7 
    },
    { 
      city: "Delhi", 
      name: "Qutub Minar", 
      imageURL: "qutub_minar_image_url.jpg", 
      cost: "30 / visit", 
      rating: 4.6 
    },
    
    { 
      city: "Uttar Pradesh", 
      name: "Agra Fort", 
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamICTT8cq8P8RpocXpu4M8k0bSOjGi8eTSw&usqp=CAU", 
      cost: "INR 50 (Indian nationals), INR 650 (Foreign nationals)", 
      rating: 4.5 
    },
    { 
      city: "Uttar Pradesh", 
      name: "Fatehpur Sikri", 
      imageURL: "https://static.toiimg.com/photo/65839143.cms",
      cost: "Free", 
      rating: 4.4 
    },
    { 
      city: "Rajasthan", 
      name: "Jaipur City", 
      imageURL: "jaipur_city_image_url.jpg", 
      cost: "Free", 
      rating: 4.6 
    },
    
    { 
        city: "Maharashtra", 
        name: "Ajanta Caves", 
        imageURL: "ajanta_caves_image_url.jpg", 
        cost: "INR 30 (Indian nationals), INR 500 (Foreign nationals)", 
        rating: 4.7 
      },
      { 
        city: "Maharashtra", 
        name: "Ellora Caves", 
        imageURL: "ellora_caves_image_url.jpg", 
        cost: "INR 30 (Indian nationals), INR 500 (Foreign nationals)", 
        rating: 4.6 
      },
      
      { 
        city: "Madhya Pradesh", 
        name: "Khajuraho Monuments", 
        imageURL: "khajuraho_monuments_image_url.jpg", 
        cost: "INR 30 (Indian nationals), INR 500 (Foreign nationals)", 
        rating: 4.8 
      },
     
      
      { 
        city: "Karnataka", 
        name: "Western Ghats", 
        imageURL: "western_ghats_image_url.jpg", 
        cost: "Free", 
        rating: 4.6 
      },
      { 
        city: "Tamil Nadu", 
        name: "Monuments at Mahabalipuram", 
        imageURL: "mahabalipuram_monuments_image_url.jpg", 
        cost: "INR 30 (Indian nationals), INR 500 (Foreign nationals)", 
        rating: 4.7 
      },
      
      { 
        city: "Odisha", 
        name: "Konark Sun Temple", 
        imageURL: "konark_sun_temple_image_url.jpg", 
        cost: "INR 30 (Indian nationals), INR 600 (Foreign nationals)", 
        rating: 4.6 
      },
      { 
        city: "Odisha", 
        name: "Chilika Lake", 
        imageURL: "chilika_lake_image_url.jpg", 
        cost: "Free", 
        rating: 4.7 
      },
      { 
        city: "Assam", 
        name: "Kaziranga National Park", 
        imageURL: "kaziranga_national_park_image_url.jpg", 
        cost: "INR 100 (Indian nationals), INR 650 (Foreign nationals)", 
        rating: 4.9 
      },
      { 
        city: "West Bengal", 
        name: "Sundarbans National Park", 
        imageURL: "sundarbans_national_park_image_url.jpg", 
        cost: "INR 60 (Indian nationals), INR 200 (Foreign nationals)", 
        rating: 4.5 
      },
      { 
        city: "Gujarat", 
        name: "Champaner-Pavagadh Archaeological Park", 
        imageURL: "champaner_pavagadh_image_url.jpg", 
        cost: "INR 20 (Indian nationals), INR 500 (Foreign nationals)", 
        rating: 4.6 
      },
      { 
        city: "Gujarat", 
        name: "Rani ki vav (The Queen's Stepwell), Patan", 
        imageURL: "rani_ki_vav_image_url.jpg", 
        cost: "INR 20 (Indian nationals), INR 200 (Foreign nationals)", 
        rating: 4.7 
      },
      { 
        city: "Bihar", 
        name: "Mahabodhi Temple Complex, Bodh Gaya", 
        imageURL: "mahabodhi_temple_image_url.jpg", 
        cost: "INR 100 (Indian nationals), INR 500 (Foreign nationals)", 
        rating: 4.8 
      },
      { 
        city: "Haryana", 
        name: "Qutb Minar and its Monuments, Haryana", 
        imageURL: "qutb_minar_haryana_image_url.jpg", 
        cost: "INR 30 (Indian nationals), INR 500 (Foreign nationals)", 
        rating: 4.5 
      },
      { 
        city: "Jammu and Kashmir", 
        name: "Mountain Railways of India", 
        imageURL: "mountain_railways_image_url.jpg", 
        cost: "Varies", 
        rating: 4.7 
      },
      { 
        city: "Punjab", 
        name: "The Architectural Work of Le Corbusier, Chandigarh", 
        imageURL: "chandigarh_architecture_image_url.jpg", 
        cost: "Free", 
        rating: 4.6 
      },
      { 
        city: "Uttarakhand", 
        name: "Valley of Flowers National Park", 
        imageURL: "valley_of_flowers_image_url.jpg", 
        cost: "INR 150 (Indian nationals), INR 600 (Foreign nationals)", 
        rating: 4.8 
      },
      { 
        city: "Andhra Pradesh", 
        name: "Hoysala Empire", 
        imageURL: "hoysala_empire_image_url.jpg", 
        cost: "INR 30 (Indian nationals), INR 500 (Foreign nationals)", 
        rating: 4.5 
      },
      { 
        city: "Telangana", 
        name: "Kakatiya Rudreshwara", 
        imageURL: "ramappa_temple_image_url.jpg", 
        cost: "INR 25 (Indian nationals), INR 500 (Foreign nationals)", 
        rating: 4.7 
      },
      { 
        city: "Kerala", 
        name: "Western Ghats", 
        imageURL: "western_ghats_kerala_image_url.jpg", 
        cost: "Free", 
        rating: 4.6 
      },
      { 
        city: "Kerala", 
        name: "Historic City of Trivandrum", 
        imageURL: "trivandrum_city_image_url.jpg", 
        cost: "Free", 
        rating: 4.4 
      },
      { 
        city: "Haryana", 
        name: "Qutb Minar ", 
        imageURL: "qutb_minar_haryana_image_url.jpg", 
        cost: "INR 30 (Indian nationals), INR 500 (Foreign nationals)", 
        rating: 4.5 
      },
      { 
        city: "Jammu and Kashmir", 
        name: "Mountain Railways of India", 
        imageURL: "mountain_railways_image_url.jpg", 
        cost: "Varies", 
        rating: 4.7 
      },
      { 
        city: "Punjab", 
        name: "The Architectural Work of Le Corbusier, Chandigarh", 
        imageURL: "chandigarh_architecture_image_url.jpg", 
        cost: "Free", 
        rating: 4.6 
      },
      { 
        city: "Uttarakhand", 
        name: "Valley of Flowers National Park", 
        imageURL: "valley_of_flowers_image_url.jpg", 
        cost: "INR 150 (Indian nationals), INR 600 (Foreign nationals)", 
        rating: 4.8 
      },
      { 
        city: "Andhra Pradesh", 
        name: "Archaeological Ensemble of the Hoysala Empire", 
        imageURL: "hoysala_empire_image_url.jpg", 
        cost: "INR 30 (Indian nationals), INR 500 (Foreign nationals)", 
        rating: 4.5 
      },
      { 
        city: "Telangana", 
        name: "Kakatiya Rudreshwara (Ramappa) Temple", 
        imageURL: "ramappa_temple_image_url.jpg", 
        cost: "INR 25 (Indian nationals), INR 500 (Foreign nationals)", 
        rating: 4.7 
      },
      { 
        city: "Kerala", 
        name: "Western Ghats", 
        imageURL: "western_ghats_kerala_image_url.jpg", 
        cost: "Free", 
        rating: 4.6 
      },
      { 
        city: "Kerala", 
        name: "Historic City of Trivandrum", 
        imageURL: "trivandrum_city_image_url.jpg", 
        cost: "Free", 
        rating: 4.4 
      },
      { 
        city: "Goa", 
        name: "Churches and Convents of Goa", 
        imageURL: "goa_churches_image_url.jpg", 
        cost: "INR 50 (Indian nationals), INR 250 (Foreign nationals)", 
        rating: 4.8 
      },
      { 
        city: "Chhattisgarh", 
        name: "Khangchendzonga National Park", 
        imageURL: "khangchendzonga_national_park_image_url.jpg", 
        cost: "INR 50 (Indian nationals), INR 600 (Foreign nationals)", 
        rating: 4.5 
      },
      { 
        city: "Puducherry", 
        name: "Churches and Convents of Goa", 
        imageURL: "puducherry_churches_image_url.jpg", 
        cost: "Free", 
        rating: 4.6 
      },
      { 
        city: "Meghalaya", 
        name: "Kanchenjunga National Park", 
        imageURL: "kanchenjunga_national_park_image_url.jpg", 
        cost: "INR 50 (Indian nationals), INR 400 (Foreign nationals)", 
        rating: 4.7 
      },
      { 
        city: "Manipur", 
        name: "Nanda Devi and Valley of Flowers National Parks", 
        imageURL: "nanda_devi_valley_of_flowers_image_url.jpg", 
        cost: "INR 100 (Indian nationals), INR 600 (Foreign nationals)", 
        rating: 4.9 
      },
      { 
        city: "Sikkim", 
        name: "Kanchenjunga National Park", 
        imageURL: "sikkim_kanchenjunga_national_park_image_url.jpg", 
        cost: "INR 50 (Indian nationals), INR 400 (Foreign nationals)", 
        rating: 4.8 
      },
      { 
        city: "Tamil Nadu and Kerala", 
        name: "Nilgiri Mountain Railway", 
        imageURL: "nilgiri_mountain_railway_image_url.jpg", 
        cost: "INR 50 (Indian nationals), INR 250 (Foreign nationals)", 
        rating: 4.6 
      },
      { 
        city: "Himachal Pradesh", 
        name: "Great Himalayan National Park Conservation Area", 
        imageURL: "great_himalayan_national_park_image_url.jpg", 
        cost: "INR 100 (Indian nationals), INR 600 (Foreign nationals)", 
        rating: 4.7 
      },
  ];

  export default heritage;



  