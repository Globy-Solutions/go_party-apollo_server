```
fragment Data on SignIn {
  data {
      id
      avatar
      name
      email
      phone
      rol { 
        id name
      }
      created_date
      updated_date
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
query signIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    ...Data
  }
}
mutation signOut($email: String!, $idToken: String!) {
  signOut(id: $email, idToken: $idToken) {
    notification {
      type
      message
    }
  }
}
```