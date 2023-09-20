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
query getEventById($getEventById: ID!) {
  getEventById(id: $getEventById) {
    data {
      ...Data
    }
    notification {
      type
      message
    }
  }
}
```