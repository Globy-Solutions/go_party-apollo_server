```
fragment Data on Place {
  id name description address updated_date
  created_date image isActive latitude longitude
  categoryId {
    id name
  }
  created_by {
    id name
  }
}
query getAllPlaces($isActive: Boolean, $by: ID) {
  getAllPlaces(isActive: $isActive, by: $by) {
    data {
      ...Data
    }
    notification {
      type message
    }
  }
}
query getPlaceById($id: ID!) {
  getPlaceById(id: $id) {
    data {
      ...Data
    }
    notification {
      type message
    }
  }
}
mutation createPlace($input: PlaceInput) {
  createPlace(input: $input) {
    data {
      ...Data
    }
    notification {
      type message
    }
  }
}
```

## INPUT
```
{
  "isActive": false,
  "id": "e892a22a-584c-44c7-ab08-065ed9ea3b06",
  "by": "e892a22a-584c-44c7-ab08-065ed9ea3b06",
  "input": {
    "name": "Est autem",
    "description": "Laudantium pariatur et alias nesciunt sit officiis enim.",
    "image": "https://loremflickr.com/320/240/night,party/all",
    "address": "26 Luella Ford Suite 216\nLeopoldborough, NY 41251-8083",
    "latitude": -5.1147,
    "longitude": -7.0851,
    "isActive": false,
    "categoryId": 1,
    "created_by": "822fbedc-2cf9-4391-89e7-a7b3563f323b",
    "created_date": "1995-12-28",
    "updated_date": "2006-08-22"
  }
}
```