import casual from 'casual';
import { notification } from '..';
import { AllowedRoles } from '../../types/rol';

import type RolProps from "../../types/rol";

export const roles = () => {
  const allowedRoles = Object.values(AllowedRoles).reduce((acc: any, name, id: RolProps['id']) => {
    if (typeof name === 'string') {
      acc.push({
        id: Number(id),
        name,
        isActive: casual.boolean,
        description: casual.description,
        created_date: casual.date(),
        updated_date: casual.date()
      })
    }
    return acc
  }, [])
  return allowedRoles
}
export default {
  Query: {
    getAllRoles: async (_: unknown,
      { isActive }: { isActive?: RolProps['isActive'] }
    ) => {
      let data: RolProps[] = roles()
      if (Boolean(isActive)) {
        data = data.filter((rol: RolProps) => rol.isActive)
      }
      return { data, notification: notification.success }
    },
    getRolById: async (_: unknown, { id }: { id: RolProps['id'] }) => {
      const res: RolProps = roles().find((rol: RolProps) => Number(rol.id) === Number(id))
      return { data: res, notification: res ? notification.success : notification.error }
    }
  }
}
