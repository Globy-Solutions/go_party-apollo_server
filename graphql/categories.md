```
fragment Data on Category {
  id
  name
}
query getAllCategories($isActive: Boolean) {
  getAllCategories(isActive: $isActive) {
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