<template>
  <section class="relative from-white to-[#349c54]/20 dark:from-gray-900 dark:to-[#245ca4]/20 overflow-hidden isolate">
    <!-- Background Elements -->
    <GeometricBackground />

    <div class="container mx-auto px-6 relative z-10">
      <!-- Header -->
      <HeaderSection />

      <!-- Mission & Vision -->
      <MissionVisionSection />

      <!-- Strategic Pillars & Values Side by Side -->
      <div class="flex flex-col lg:flex-row gap-8 relative">
        <!-- Strategic Pillars -->
        <div class="flex-1">
          <StrategicPillarsSection />
        </div>

        <!-- Decorative Bridge -->
        <div class="hidden lg:block absolute inset-0 w-1 bg-gradient-to-b from-[#349c54] via-[#2d7e8a] to-[#245ca4] mx-auto left-1 transform -translate-x-2 animate-grow"></div>
        <div class="hidden lg:block absolute inset-0 w-1 bg-gradient-to-b from-[#349c54] via-[#2d7e8a] to-[#245ca4] mx-auto left-1 transform -translate-x-2 blur-sm animate-grow-delay"></div>

        <!-- Values -->
        <div class="flex-1">
          <ValuesSection />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import GeometricBackground from '@/components/GeometricBackground.vue';
import HeaderSection from '@/components/HeaderSection.vue';
import MissionVisionSection from '@/components/MissionVisionSection.vue';
import StrategicPillarsSection from '@/components/StrategicPillarsSection.vue';
import ValuesSection from '@/components/ValuesSection.vue';
</script>

<style>
.perspective-1000 {
  perspective: 1000px;
}

.flip-card {
  transform-style: preserve-3d;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

.flip-front,
.flip-back {
  backface-visibility: hidden;
}

.flip-back {
  transform: rotateY(180deg);
}

@media (prefers-reduced-motion: reduce) {
  .flip-card {
    transition: none !important;
    transform: none !important;
  }
}

/* Night Mode Adaptations */
@media (prefers-color-scheme: dark) {
  section {
    background: #1a1a1a; /* Dark background */
  }

  .bg-gradient-to-b {
    background: linear-gradient(to bottom, rgba(52, 156, 84, 0.15), rgba(36, 92, 164, 0.20));
  }

  /* Adjust text colors for dark mode */
  .text-gray-600 {
    color: rgba(255, 255, 255, 0.7);
  }

  .text-gray-900 {
    color: white;
  }

  /* Border colors */
  .border-l-4 {
    border-color: #fcb41c;
  }
}
</style>