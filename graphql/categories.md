```
fragment Data on Category {
  id isActive name picture description
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