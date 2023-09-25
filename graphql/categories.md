```
fragment Data on Category {
  id name picture description isActive
}
query getAllCategories($isActive: Boolean, $userId: ID) {
  getAllCategories(isActive: $isActive, by: $userId) {
    data {
      ...Data
    }
    notification {
      type message
    }
  }
}
query getCategoryById($id: String!) {
  getCategoryById(id: $id) {
    data {
      ...Data
    }
    notification {
      type message
    }
  }
}
```