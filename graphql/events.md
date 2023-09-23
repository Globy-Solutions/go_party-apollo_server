```
fragment Data on Event {
  created_by
  about
  isActive
  id
  title
  name
  price
  image
  pictures
  price
  address
  latitude
  longitude
  tags
  followers {
    id
    name
    avatar
  }
  likes {
    id
    name
    avatar
  }
  goinTo {
    id
    name
    avatar
  }
  comments {
    id
    text
  }
  created_date
  updated_date
}
query getAllEvents($isActive: Boolean, $by: ID) {
  getAllEvents(isActive: $isActive, by: $by) {
    data {
      ...Data
    }
    notification {
      type
      message
    }
  }
}
query getEventById($by: ID!) {
  getEventById(id: $by) {
    data {
      ...Data
    }
    notification {
      type
      message
    }
  }
}
mutation createEvent($input: EventInput) {
  createEvent(input: $input) {
    type
    message
  }
}
```

## Demo response

```
{
  "data": {
    "getEventById": {
      "data": {
        "created_by": "1",
        "about": "Placeat aut amet maxime molestias et temporibus fugit. Tenetur ea neque aperiam debitis voluptate sed et atque. Corrupti nisi ut enim accusantium voluptatibus ut quae temporibus.",
        "isActive": true,
        "id": "fc2d4629-c97f-4ced-b9c3-1a94a78c1840",
        "title": "Enim qui molestiae",
        "name": "Dr. Abelardo Lebsack",
        "price": 1217,
        "image": 1,
        "pictures": [
          "https://loremflickr.com/320/240/night,party/all",
          "https://loremflickr.com/320/240/night,party/all",
          "https://loremflickr.com/320/240/night,party/all"
        ],
        "address": "458 Delphia Mews\nGrahamberg, WY 58221-6364",
        "latitude": -37.9523,
        "longitude": -50.2011,
        "tags": [
          "praesentium",
          "voluptatem",
          "autem"
        ],
        "followers": [
          {
            "id": "8",
            "name": "Mr. Liliana Emard",
            "avatar": "https://robohash.org/5JZ.png"
          },
          {
            "id": "1",
            "name": "Miss Catharine Senger",
            "avatar": "https://robohash.org/GBA.png"
          },
          {
            "id": "2",
            "name": "Dr. Gudrun Hessel",
            "avatar": "https://robohash.org/MLS.png"
          }
        ],
        "likes": [
          {
            "id": "84",
            "name": "Dr. Frankie Hartmann",
            "avatar": "https://robohash.org/MLS.png"
          },
          {
            "id": "1",
            "name": "Mrs. Isaiah Gaylord",
            "avatar": "https://robohash.org/GBA.png"
          },
          {
            "id": "2",
            "name": "Miss Destiny Nienow",
            "avatar": "https://robohash.org/NIA.png"
          }
        ],
        "goinTo": [
          {
            "id": "29",
            "name": "Mrs. Dante Huel",
            "avatar": "https://robohash.org/NIA.png"
          },
          {
            "id": "1",
            "name": "Ms. Tommie Blick",
            "avatar": "https://robohash.org/GBA.png"
          },
          {
            "id": "2",
            "name": "Ms. Greg Predovic",
            "avatar": "https://robohash.org/GBA.png"
          }
        ],
        "comments": [
          {
            "id": "3",
            "text": "Sint voluptatem sit dolor. Nulla excepturi sint optio aliquid error. Inventore ratione rem atque in. Quam possimus soluta quia non qui sed natus necessitatibus dolor. Ipsum eum est et deleniti."
          },
          {
            "id": "2",
            "text": "Aut harum exercitationem enim. Est et est nostrum nemo enim autem et sit. Nam quam reiciendis debitis voluptatem et iure."
          },
          {
            "id": "1",
            "text": "Aut qui ex. Autem est quaerat ipsa quis."
          }
        ],
        "created_date": "1987-11-19",
        "updated_date": "2003-03-03"
      },
      "notification": {
        "type": "success",
        "message": "Found"
      }
    }
  }
}
```