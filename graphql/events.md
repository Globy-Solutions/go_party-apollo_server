```
fragment Data on Event {
  created_by
  categoryId
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
query getEventById($eventId: ID!) {
  getEventById(id: $eventId) {
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
    data {
      id name
    }
    notification {
      type message
    }
  }
}
```
## Input

```
{
  "created_date": "1985-11-23",
  "title": "Id libero",
  "name": "Mrs. Janiya Cummerata",
  "price": 1362,
  "pictures": "https://loremflickr.com/320/240/night,https://loremflickr.com/320/240/night,https://loremflickr.com/320/240/night",
  "address": "5906 Collins Knoll\nSouth Janport, MD 96454",
  "latitude": -3.5373,
  "longitude": -178.2719,
  "tags": "voluptatem,modi,omnis",
  "about": "Dicta est ut dolorem illum in quia. Saepe enim ut consequuntur ab consequatur autem consequatur. Optio perspiciatis sequi natus repellendus consequatur et rerum necessitatibus quod.",
  "videos": "https://loremflickr.com/320/240/night,https://loremflickr.com/320/240/night,https://loremflickr.com/320/240/night",
  "isActive": true,
  "categoryId": 1,
  "created_by": 35
}
```
