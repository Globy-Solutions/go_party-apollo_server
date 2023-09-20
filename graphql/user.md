```
fragment Data on User {
  id
  name
  avatar
  phone
  email
  rol {
    id
    name
  }
}
query getUserById($userId: ID!) {
  getUserById(id: $userId) {
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