```
fragment Data on History {
  created_date
  updated_date
  places {
    id name pictures image
  }
  events {
    id name pictures image
  }
  comments { id text }
  followeds { id name avatar }
  followers { id name avatar }
  created_date
}

query history($userId: ID!) {
  history(userId: $userId) {
    data {
      ...Data
    }
    notification { type message }
  }
}
```