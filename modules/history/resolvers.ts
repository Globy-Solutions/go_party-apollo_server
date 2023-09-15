const bd_histories = require('../../__mocks__/user_histories.json');
const bd_events = require('../../__mocks__/events.json')
const bd_comments = require('../../__mocks__/comments.json')
const bd_users = require('../../__mocks__/users.json')

export default {
  Query: {
    history: async (_: any, { id }: { id: string }) => {
      const { events, comments, followeds, followers } = await bd_histories.find((history: any) => history.userId = id)
      return { events, comments, followeds, followers }
    }
  },
  History: {
    events: ({ events }: any) => events.map(({ id }: any) => bd_events.find((event: any) => event.id == id)),
    comments: ({ comments }: any) => comments.map(({ id }: any) => bd_comments.find((comment: any) => comment.userId == id)),
    followeds: ({ followeds }: any) => followeds.map((id: any) => bd_users.find((user: any) => user.id == id)),
    followers: ({ followers }: any) => followers.map((id: any) => bd_users.find((user: any) => user.id == id))
  }
}
