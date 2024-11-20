const TOUCH_POINTS = {
  PhysicalMeeting: 'Physical Meeting',
  OnlineMeeting: 'Online Meeting',
  FollowUps: 'Follow Ups',
  Activity: 'Activity',
  ETC: 'ETC',
} as const

type TouchPointType = typeof TOUCH_POINTS[keyof typeof TOUCH_POINTS]

export interface InteractionType {
  id: number
  date: any
  checked: string
  touchPoint: TouchPointType
  remarks: string
  veryNextStep: string
}

export const touchPoints = ref(Object.values(TOUCH_POINTS))
