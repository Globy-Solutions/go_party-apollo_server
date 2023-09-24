export default `
enum AllowedRoles {
  User
  RRPP
  Leader
  Organizator
  Owner
}
type Rol implements ABM {
  id: ID!
  name: AllowedRoles
  isActive: Boolean
  description: String
  created_date: Date!
  updated_date: Date
}
extend type Query {
  getAllRoles(isActive: Boolean): [Rol]
  getRolById(id: ID!): Rol
}
`
/*
RRPP = Relaciones Públicas, puede invitar a otros usuarios a unirse a un evento y puede ver los datos de los usuarios que se han unido a un evento que el tenga asignado y puede confirmar reservas de usuarios que se han unido a un evento que el tenga asignado.
Leader = Puede asignar eventos a usuarios dentro de su team.
Organizator = Puede crear eventos y asignarlos a un team. Tambien puede crear listas de recursos que requiera cada evento (por ejemplo, armar mesas, habitaciones, etc).
Owner = Puede crear usuarios y asignarles un rol.
*/