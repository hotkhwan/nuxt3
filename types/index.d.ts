// tyepes/index.d.ts
import type { Avatar } from '#ui/types'

export type UserStatus = 'subscribed' | 'unsubscribed' | 'bounced'

export interface User {
  id: number
  name: string
  email: string
  avatar?: Avatar
  status: UserStatus
  location: string
}


export interface Mail {
  id: number
  unread?: boolean
  from: User
  subject: string
  body: string
  date: string
}

export interface Member {
  name: string
  username: string
  role: 'member' | 'owner'
  avatar: Avatar
}

export interface Notification {
  id: number
  unread?: boolean
  sender: User
  body: string
  date: string
}

export type Period = 'daily' | 'weekly' | 'monthly'

export interface Range {
  start: Date
  end: Date
}

export interface ColorOption {
  label: string
  chip: string
  active?: boolean // Since you're adding this property in the computed property.
  click: () => void
}

export interface KeycloakInstance {
  logout: () => void;
  // กำหนดเมธอดอื่นๆ ที่คุณต้องการใช้
}