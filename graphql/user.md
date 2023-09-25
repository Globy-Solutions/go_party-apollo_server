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
query getAllUsers {
  getAllUsers {
    data {
      ...Data
    }
    notification {
      type
      message
    }
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
mutation createUser($input: UserInput) {
  createUser(input: $input) {
    data {
      id
      name
      avatar
      phone
      email
    }
    notification {
      type
      message
    }
  }
}
```