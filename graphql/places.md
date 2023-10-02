```
fragment Data on Place {
  id name description address updated_date created_date
  image isActive latitude longitude pictures followeds { id name }
  followers { id name } comments { id text }
  categoryId { id name } created_by { id name }
}
query getAllPlaces($isActive: Boolean, $by: ID) {
  getAllPlaces(isActive: $isActive, by: $by) {
    data {
      id
      name
      created_by {
        id
        name
      }
      categoryId {
        id
        name
      }
    }
    notification {
      type
      message
    }
  }
}
query getPlaceById($id: ID!) {
  getPlaceById(id: $id) {
    data {
      ...Data
    }
    notification {
      type
      message
    }
  }
}
mutation createPlace($input: PlaceInput) {
  createPlace(input: $input) {
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

## Variables
```
{
  "id": "70be8ff9-c782-4209-8129-633b9fb7c21a",
  "by": "70be8ff9-c782-4209-8129-633b9fb7c21a",
  "input": {
    "name": "Consequatur voluptatibus qui",
    "description": "Ut excepturi optio earum in occaecati non. Optio molestiae molestiae dolores dolor quia vel sed vel et. Et corrupti magnam est autem.",
    "address": "06 Vandervort Glens Apt. 230\nWintheiserside, MT 06603",
    "updated_date": "2015-10-13",
    "created_date": "1995-06-06",
    "isActive": false,
    "latitude": -7.884,
    "longitude": 67.4328,
    "categoryId": 1,
    "created_by": "9479b8c2-21d7-43f1-bef7-949181092dcb"
  }
}
```