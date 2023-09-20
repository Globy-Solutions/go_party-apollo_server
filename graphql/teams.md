```
fragment Data on Team {
  id name created_by created_date isActive members {
    id name
  }
}
query getAllTeams($isActive: Boolean) {
  getAllTeams(isActive: $isActive) {
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