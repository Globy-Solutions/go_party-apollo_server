```
query signIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    data {
      id
      avatar
      name
      email
      phone
      rol {
        id name
      }
    }
    notification {
      type
      message
    }
    session {
      accessToken
      idToken
      expiresIn
      refreshToken
      tokenType
    }
  }
}
```