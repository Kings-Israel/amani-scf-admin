import type { Event, NewEvent } from './types'

export const useCalendarStore = defineStore('calendar', {
  // arrow function recommended for full type inference
  state: () => ({
    availableCalendars: [
      {
        color: 'error',
        label: 'Physical Meetings',
      },
      {
        color: 'primary',
        label: 'Online Meetings',
      },
      {
        color: 'primary',
        label: 'Corporate Events',
      },
      {
        color: 'warning',
        label: 'Follow ups',
      },
      {
        color: 'success',
        label: 'Activity',
      },
      {
        color: 'info',
        label: 'ETC',
      },
    ],
    selectedCalendars: ['Physical Meetings', 'Online Meetings', 'Corporate Events', 'Follow ups', 'Activity', 'ETC'],
  }),
  actions: {
    async fetchEvents() {
      // const res1 = await $api('/apps/calendar', {
      //   method: 'GET',
      //   query: {
      //     calendars: this.selectedCalendars,
      //   },
      // })

      const res2 = await $api('/all/UI/data/followups', {
        method: 'GET',
        query: {
          calendars: this.selectedCalendars,
        },
      })

      return res2.data ?? []
    },
    async addEvent(event: NewEvent) {
      await $api('/post/UI/event', {
        method: 'POST',
        body: event,
      })
    },
    async updateEvent(event: Event) {
      return await $api(`/apps/calendar/${event.id}`, {
        method: 'PUT',
        body: event,
      })
    },
    async removeEvent(eventId: string) {
      return await $api(`/apps/calendar/${eventId}`, {
        method: 'DELETE',
      })
    },

  },
})
