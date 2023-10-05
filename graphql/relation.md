```
fragment Data on Relation {
  events {
    event {
      id name followers { id name }
    }
    rol { id name }
  }
  places {
    place { id name }
    rol { id name }
  }
}
query getRelationByUser($userId: ID! ) {
  getRelationByUser(id: $userId) {
    data {
      ...Data
    }
    notification {
      type message
    }
  }
}
```