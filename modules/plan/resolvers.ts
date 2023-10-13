import casual from 'casual'
import { notification, randomWords } from '..'
import { user } from '../user/resolvers'

import type { Props } from '../../types'
import type PlanProps from '../../types/plan'

const distribution = () => Array.from({ length: 2 }, () => ({
  name: randomWords(['room', 'table']),
  total: casual.integer(1, 10),
  image: `https://loremflickr.com/320/240/${randomWords(['museum', 'park', 'fountain', 'disco', 'party', 'birthday'])}/all`,
  availables: casual.integer(1, 6),
  isActive: casual.boolean,
  updated_date: casual.date()
}))
export const plan = ({ id, by, isActive }: Props<string, string>) => ({
  id: id ?? casual.uuid,
  description: casual.description,
  isActive: isActive ?? casual.boolean,
  placeDistribution: distribution(),
  created_by: by ?? casual.uuid,
  created_date: casual.date(),
  updated_date: casual.date()
})

export default {
  Query: {
    getPlanById: async (_: any, { id, isActive }: Props<string, boolean>) => ({ data: plan({ id, isActive }), notification: notification.success }),
    getPlansByPlace: async (_: unknown, { isActive, by }: Props<boolean, string>) => {
      const data = Array.from({ length: 3 }, () => plan({ isActive, by }))
      return { data, notification: notification.success }
    }
  },
  Plan: {
    created_by: async ({ created_by }: { created_by: PlanProps['created_by'] }) => user({ id: created_by })
  },
  Mutation: {
    createPlace: async (_: unknown,
      { input }: { input: Partial<PlanProps> },
      { auth }: { auth: boolean }
    ) => {
      if (auth) {
        input.id = casual.uuid
        input.created_date = casual.date()
        input.updated_date = casual.date()
        if (input.isActive === undefined) { input.isActive = true }
        return { data: input, notification: notification.success }
      }
      return { notification: notification.warning }
    }
  }
}
