```
fragment Data on Team {
  id name created_date isActive
  created_by { id name avatar }
  members { id name avatar }
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
query getTeamById($teamId: ID!) {
  getTeamById(id: $teamId) {
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
