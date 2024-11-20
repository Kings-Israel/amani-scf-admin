<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import type { Notification } from '@layouts/types'
import { useApi } from '@/composables/useApi'

import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import paypal from '@images/svg/paypal.svg'

const notifications = ref<Notification[]>([])

onMounted(async () => {
  try {
    const { data } = await useApi('/get/admin/UI/notifications/unread')
    if (Array.isArray(data.value)) {
      notifications.value = data.value.map((notification: any) => ({
        id: notification.id,
        img: notification.img === 'path/to/avatar44.png' ? avatar4 :
             notification.img === 'path/to/avatar45.png' ? avatar5 :
             notification.img === 'path/to/paypal4.svg' ? paypal : '',
        title: notification.title,
        subtitle: notification.subtitle,
        time: notification.time,
        isSeen: notification.isSeen === 'true',
        color: notification.color || 'default',
      }))
    } else {
      console.error('Expected an array but got:', data.value)
    }
  } catch (error) {
    console.error('Failed to fetch notifications:', error)
  }
})

const removeNotification = (notificationId: number) => {
  notifications.value = notifications.value.filter(item => item.id !== notificationId)
}

const markRead = async (notificationIds: number[]) => {
  try {
    const response = await $api('/notifications/mark-read', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ notificationIds }),
    })

    const result = await response.json()
    if (result.success) {
      notifications.value = notifications.value.map(item => ({
        ...item,
        isSeen: notificationIds.includes(item.id) ? true : item.isSeen
      }))
    } else {
      console.error('Failed to mark notifications as read:', result.error)
    }
  } catch (error) {
    console.error('Failed to mark notifications as read:', error)
  }
}

const markUnRead = async (notificationIds: number[]) => {
  try {
    const response = await $api('/notifications/mark-unread', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ notificationIds }),
    })

    const result = await response.json()
    if (result.success) {
      notifications.value = notifications.value.map(item => ({
        ...item,
        isSeen: notificationIds.includes(item.id) ? false : item.isSeen
      }))
    } else {
      console.error('Failed to mark notifications as unread:', result.error)
    }
  } catch (error) {
    console.error('Failed to mark notifications as unread:', error)
  }
}

const handleNotificationClick = (notification: Notification) => {
  if (!notification.isSeen) 
    markRead([notification.id])
}
</script>

<template>
  <Notifications
    :notifications="notifications"
    @remove="removeNotification"
    @read="markRead"
    @unread="markUnRead"
    @click:notification="handleNotificationClick"
  />
</template>
