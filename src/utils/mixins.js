import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow(dateTime) {
      return dateTime ? moment(dateTime).fromNow() : '-'
    },
    postTime(dateTime) {
      return dateTime ? moment(dateTime).format('lll') : '-'
    }
  },
}