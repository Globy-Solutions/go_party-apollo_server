```
fragment Data on Team {
  id name created_by created_date isActive
  members {
    id name
  }
}
query getAllTeams($isActive: Boolean, $by: ID) {
  getAllTeams(isActive: $isActive, by: $by) {
    data {
      ...Data
    }
    notification {
      type
      message
    }
  }
}
query getTeamById($getTeamId: ID!) {
  getTeamById(id: $getTeamId) {
    data {
      ...Data
    }
    notification {
      type message
    }
  }
}
mutation createTeam($input: TeamInput) {
  createTeam(input: $input) {
    data {
      ...Data
    }
    notification {
      type message
    }
  }
}
```
