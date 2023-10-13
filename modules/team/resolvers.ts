import casual from 'casual';
import { notification } from '..';
import { event } from '../event/resolvers';
import { user } from '../user/resolvers';

import type TeamProps from '../../types/team';
import type UserProps from '../../types/user';

const team = (created_by?: UserProps['id']) => ({
  id: casual.uuid,
  name: casual.title,
  members: Array.from({ length: 3 }, () => user({ id: casual.uuid }).id),
  isActive: casual.boolean,
  events: Array.from({ length: 3 }, () => {
    const { id, title, isActive } = event({})
    return { id, title, isActive }
  }),
  created_by: created_by ? created_by : user({ id: casual.uuid }).id,
  created_date: casual.date(),
  updated_date: casual.date()
})

export default {
  Query: {
    getAllTeams: async (_: unknown, { isActive, by }: { isActive?: boolean; by?: string }) => {
      const teams = Array.from({ length: 3 }, () => team(by));
      return { data: teams, notification: notification.success }
    },
    getTeamById: async (_: unknown, {id}:{id: TeamProps['id']}) => {
      if (!id) { return null }
      const data = team(id)
      return { data, notification: notification.success }
    }
  },
  Team: {
    members: async ({ members }: { members: UserProps['id'][] }, _args: any, { auth }: { auth?: boolean }) => {
      if (!auth) { return members }
      return members.map((id: UserProps['id']) => user({ id }))
    },
    created_by: async ({ created_by }: { created_by: UserProps['id'] }) => user({ id: created_by })
  },
  Mutation: {
    createTeam: async (_: unknown,
      { input }: { input: Partial<TeamProps> },
      { auth }: { auth: boolean }
    ) => {
      if (!auth) {
        input.id = casual.uuid
        input.created_date = casual.date()
        // @ts-ignore
        input.members = Array.from({ length: 3 }, () => user({}).id)
        input.updated_date = casual.date()
        return { data: input, notification: notification.success }
      }
      return { notification: notification.warning }
    }
  }
}
