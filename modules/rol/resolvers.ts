const roles = require('../../__mocks__/roles.json')

export default {
  Query: {
    getAllRoles: async (_: unknown, { isActive }: { isActive?: boolean }) => {
      let data: [] = []
      if (isActive) {
        data = await roles.filter((rol: any) => rol.isActive)
      } else { data = await roles }
      return { data }
    },
    getRolById: async (_: unknown, { id }: { id: string }, contextValue: any) => {
      console.log({ id, contextValue });
      let rol: any = await roles.find((rol: { id: string | number }) => rol.id == id)
      let data: any[] = []
      if (rol) {
        data.push(rol)
      }
      return { data }
    }
  }
}
