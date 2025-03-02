<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  iconName: {
    type: String,
    required: true,
  },
  titleClass: {
    type: String,
    default: '',
  },
  subtitleClass: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="flex items-center justify-center gap-x-10 mb-8 relative">
      <div class="flex-grow h-[1px] bg-gray-300 dark:bg-gray-600"></div>
      <transition name="fade">
        <div
          class="w-16 h-16 flex justify-center items-center rounded-full border-2 border-blue-600 dark:border-blue-400 bg-white dark:bg-gray-800 shadow-lg transition-transform transform hover:scale-110"
        >
          <Icon :name="iconName" width="40" height="40" class="text-blue-600 dark:text-blue-400" />
        </div>
      </transition>
      <div class="flex-grow h-[1px] bg-gray-300 dark:bg-gray-600"></div>
    </div>
    <transition name="fade">
      <div class="text-center md:p-14 py-8 space-y-6">
        <p class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white" :class="titleClass">
          {{ title }}
        </p>
        <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed" :class="subtitleClass">
          {{ subtitle }}
        </p>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.flex-grow {
  flex-grow: 1;
}

.border-2 {
  border-width: 2px;
}

.shadow-lg {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.transition-transform {
  transition: transform 0.3s ease;
}

.hover\:scale-110:hover {
  transform: scale(1.1);
}

/* New styles for enhanced UI */
.text-gray-900 {
  transition: color 0.3s ease;
}

.text-gray-900:hover {
  color: #3b82f6; /* Tailwind's blue-500 */
}

.text-lg {
  transition: color 0.3s ease;
}

.text-lg:hover {
  color: #4b5563; /* Tailwind's gray-600 */
}
</style>