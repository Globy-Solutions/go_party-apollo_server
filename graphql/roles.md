```
fragment Data on Rol {
  id
  name
  isActive
  description
  created_date
  updated_date
}
query getAllRoles($isActive: Boolean) {
  getAllRoles(isActive: $isActive) {
    data {
      ...Data
    }
    notification {
      type
      message
    }
  }
}
query getRolById($getRolById: ID!) {
  getRolById(id: $getRolById) {
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