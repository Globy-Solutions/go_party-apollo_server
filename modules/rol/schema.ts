export default `
enum AllowedRoles {
  User
  RRPP
  Leader
  Organizator
  Owner
}
type Rol implements ABM {
  id: Int!
  name: AllowedRoles
  description: String
  isActive: Boolean!
  created_date: Date!
  updated_date: Date
}
type RolesResponse implements Response {
  data: [Rol]
  notification: Notification
}
type RolResponse implements Response {
  data: Rol
  notification: Notification
}
extend type Query {
  getAllRoles(isActive: Boolean): RolesResponse
  getRolById(id: ID!): RolResponse
}
`
/*
RRPP = Relaciones Públicas, puede invitar a otros usuarios a unirse a un evento y puede ver los datos de los usuarios que se han unido a un evento que el tenga asignado y puede confirmar reservas de usuarios que se han unido a un evento que el tenga asignado.
Leader = Puede asignar eventos a usuarios dentro de su team.
Organizator = Puede crear eventos y asignarlos a un team. Tambien puede crear listas de recursos que requiera cada evento (por ejemplo, armar mesas, habitaciones, etc).
Owner = Puede crear usuarios y asignarles un rol.
*/