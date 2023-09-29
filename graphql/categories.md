```
fragment Data on Category {
  id name picture description isActive
}
query getAllCategories($isActive: Boolean) {
  getAllCategories(isActive: $isActive) {
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