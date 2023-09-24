```
fragment Data on Rol {
  id name isActive description
  created_date updated_date
}
query getAllRoles($isActive: Boolean) {
  getAllRoles(isActive: $isActive) {
    ...Data
  }
}
query getRolById($getRolById: ID!) {
  getRolById(id: $getRolById) {
    ...Data
  }
}
```

## Demo response

```
{
  "data": {
    "getRolById": {
      "id": "4",
      "name": "Owner",
      "isActive": false,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis se",
      "created_date": "1991-04-09",
      "updated_date": "1983-08-02"
    }
  }
}
```