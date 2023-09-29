```
fragment Data on Place {
  id name description address updated_date created_by
  created_date image isActive latitude longitude
  category {
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
```