<script setup lang="ts">
import { useProfileStore } from '@/stores/profile' // Adjust the path as necessary

const profileStore = useProfileStore()

// const displayName = profileStore.name

const selectLang = () => {
  const newLocale = profileStore.currentLocale === 'th' ? 'en' : 'th'
  profileStore.setLocale(newLocale)
}
</script>

<template>
  <UContainer>
    <UButton variant="ghost" @click="selectLang">
      <img
        v-if="profileStore.currentLocale === 'th'"
        src="~/assets/images/thai.webp"
        width="24"
        height="24"
      >
      <img
        v-else
        lazy-src="~/assets/images/greatBritain.webp"
        src="~/assets/images/greatBritain.webp"
        width="24"
        height="24"
      >
    </UButton>
    <!-- {{ displayName }} -->
  </UContainer>
</template>
