import type RolProps from "../../types/rol";

const roles = require('../../__mocks__/roles.json')

export default {
  Query: {
    getAllRoles: async (_: unknown, { isActive }: { isActive?: boolean }) => {
      if (isActive === false) {
        return roles
      }
      return roles.filter((rol: RolProps) => rol.isActive === true)
    },
    getRolById: async (_: unknown, { id }: { id: string }) => roles.find((rol: RolProps) => rol.id == id)
  }
}
