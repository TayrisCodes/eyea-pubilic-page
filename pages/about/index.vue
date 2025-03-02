<!-- pages/index.vue -->
<script setup>
import { Carousel, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import list from "@/composable/query/list";
import get_list from "@/API/queries/team/get_all_team.gql";
import { ref, computed } from "vue";
import OrganizationalStructure from '@/components/OrganizationalStructure.vue';

// Reactive references for team data
const advisor_items = ref([]);
const board_items = ref([]);
const member_items = ref([]);
const offset = ref(0);
const limit = ref(1);
const boards = ref([]);
const advisors = ref([]);
const members = ref([]);

// Data filtering
const filter = computed(() => ({}));

// Data fetching
const { onResult } = list(get_list, { limit, offset, filter });

// Process results
onResult((result) => {
  advisor_items.value = result.data.advisors || [];
  board_items.value = result.data.boards || [];
  member_items.value = result.data.members || [];

  boards.value = board_items.value.reduce((acc, item, i) => {
    if (i % 4 === 0) acc.push([]);
    acc[Math.floor(i / 4)].push(item);
    return acc;
  }, []);

  advisors.value = advisor_items.value.reduce((acc, item, i) => {
    if (i % 4 === 0) acc.push([]);
    acc[Math.floor(i / 4)].push(item);
    return acc;
  }, []);

  members.value = member_items.value.reduce((acc, item, i) => {
    if (i % 8 === 0) acc.push([]);
    acc[Math.floor(i / 8)].push(item);
    return acc;
  }, []);
});
</script>

<template>
  <div class="about-page">
    <!-- NavBar -->
    <NavBar nav-class="dark:bg-gray-800 bg-white"></NavBar>
  
    <!-- Hero Section -->
    <section class="hero-section relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-white/0 dark:from-blue-900/10 dark:to-gray-900/0 -z-10"></div>
      <div class="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 dark:bg-blue-900/10 rounded-full blur-3xl -z-10"></div>
      <div class="absolute bottom-20 -left-20 w-80 h-80 bg-yellow-500/10 dark:bg-yellow-900/10 rounded-full blur-3xl -z-10"></div>

      <div class="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-5 relative z-10">
            <h1 class="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              <span class="text-blue-500">Empowering</span> Young Ethiopian Entrepreneurs
            </h1>
            <div class="w-24 h-1 bg-blue-500 mb-6"></div>
            <p class="text-lg text-gray-700 dark:text-gray-800 mb-8">
              Founded to overcome barriers and ignite innovation for Ethiopia's youth.
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/join">
                <button class="btn-primary">
                  Join Us
                  <Icon name="heroicons:arrow-right" class="ml-2" />
                </button>
              </NuxtLink>
              <button class="btn-outline">
                Learn More
                <Icon name="heroicons:information-circle" class="ml-2" />
              </button>
            </div>
          </div>
          <div class="lg:col-span-7 relative">
            <div class="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 md:p-10">
              <div class="absolute -top-10 -left-10 text-[120px] md:text-[180px] font-black text-blue-500/10 dark:text-blue-900/10 leading-none z-0">
                EYEA
              </div>
              <div class="relative z-10">
                <h2 class="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">Our Beginnings</h2>
                <div class="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                  <p class="mb-4">
                    Ethiopia's youth face a daunting challenge with urban unemployment soaring to 27%. Despite recent economic growth, many young people find themselves trapped in low-paying, subsistence jobs, feeling that traditional career paths are slipping away.
                  </p>
                  <p class="mb-4">
                    In response, the Ethiopian Youth Entrepreneurs Association (EYEA) emerges as a beacon of hope. Founded by young innovators, EYEA empowers aspiring entrepreneurs through tailored training, access to finance, and essential networking opportunities, equipping them to thrive in a competitive landscape.
                  </p>
                  <p>
                    These young change-makers are not just looking for jobs; they are creating them. By fostering an entrepreneurial ecosystem, EYEA helps youth turn their challenges into opportunities, driving economic transformation and illuminating a brighter future for Ethiopia.
                  </p>
                </div>
              </div>
              <img
                class="absolute -right-6 -bottom-6 w-28 h-28 md:w-40 md:h-40 opacity-300"
                src="@/assets/images/shapes/riverShape.svg"
                alt="Decorative shape"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Purpose and Needs Section -->
    <section class="purpose-needs-section bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 py-16 md:py-24">
      <div class="container mx-auto px-4">
        <LayoutSectionHeader
          iconName="fluent-emoji-high-contrast:open-mailbox-with-lowered-flag"
          title="Purpose & Needs"
          subtitle="Our mission and support requirements"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12">
          <div class="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 md:p-8 shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 rounded-full bg-blue-500/20 dark:bg-blue-900/20 flex items-center justify-center mr-4">
                <Icon name="ri:ruler-line" class="text-blue-500 text-2xl" />
              </div>
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Our Purpose</h3>
            </div>
            <div class="space-y-4 text-gray-700 dark:text-gray-300">
              <p>EYEA creates a thriving environment for youth entrepreneurship.</p>
              <p>We bridge gaps with public and financial support systems.</p>
              <p>We address capital, skills, and policy challenges.</p>
            </div>
            <div class="mt-8">
              <NuxtLink to="/join">
                <button class="btn-outline-primary w-full md:w-auto">
                  Join Now
                  <Icon name="heroicons:user-plus" class="ml-2" />
                </button>
              </NuxtLink>
            </div>
          </div>
          <div class="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 md:p-8 shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 rounded-full bg-yellow-500/20 dark:bg-yellow-900/20 flex items-center justify-center mr-4">
                <Icon name="mdi:dna" class="text-yellow-500 text-2xl" />
              </div>
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Our Needs</h3>
            </div>
            <div class="space-y-4 text-gray-700 dark:text-gray-300">
              <p>We seek funding to sustain our dedicated team after 3 years.</p>
              <p>Infrastructure support is vital for stakeholder projects.</p>
              <p>Your advocacy amplifies our digital policy efforts.</p>
            </div>
            <div class="mt-8">
              <button class="btn-primary w-full md:w-auto">
                Donate Now
                <Icon name="heroicons:heart" class="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Organizational Framework Section -->
      <OrganizationalStructure />

    <!-- Team Section -->
    <!--
      <section class="team-section py-16 md:py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div class="absolute top-40 -left-20 w-80 h-80 bg-blue-500/10 dark:bg-blue-900/10 rounded-full blur-3xl -z-10"></div>
      <div class="absolute bottom-20 -right-40 w-96 h-96 bg-teal-500/10 dark:bg-teal-900/10 rounded-full blur-3xl -z-10"></div>

      <div class="container mx-auto px-4">
        <LayoutSectionHeader
          iconName="bx:layer"
          title="Our Team"
          subtitle="Meet the team driving EYEA's mission"
        />
        <div class="mt-12">
          <carousel v-if="member_items.length > 0" class="team-carousel md:block hidden" :items-to-show="1" snap-align="center" :items-to-scroll="1">
            <slide v-for="sub in members" :key="sub">
              <div class="grid grid-cols-2 md:grid-cols-4 gap-10">
                <AboutPersonInfo v-for="(item, i) in sub" :key="i" :item="item" class="person-card" />
              </div>
            </slide>
            <template #addons>
              <pagination />
            </template>
          </carousel>
          <div class="max-w-[380px] mx-auto md:hidden">
            <carousel v-if="member_items.length > 0" class="team-carousel">
              <slide v-for="item in member_items" :key="item.id">
                <AboutPersonInfo :item="item" class="person-card" />
              </slide>
              <template #addons>
                <pagination />
              </template>
            </carousel>
            <div v-else class="flex justify-center text-gray-500 dark:text-gray-400">
              <p>No team members to display</p>
              </div>
          </div>
        </div>
      </div>
    </section>
    -->
     

    <!-- Footer -->
    <LayoutFooter />
  </div>
</template>

<style scoped>
/* Global Styles */
.about-page {
  @apply font-poppins text-gray-800 dark:text-gray-800;
}


/* Organizational Framework Section */
.org-framework-section {
  @apply relative z-0;
}

/* Team Cards */
.person-card {
  @apply bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden;
}

/* Carousel Styling */
.team-carousel .carousel__pagination {
  @apply mt-6;
}

.carousel__pagination-button::after {
  @apply bg-gray-300 dark:bg-gray-600 h-2 w-2 rounded-full transition-all duration-300;
}

.carousel__pagination-button--active::after {
  @apply bg-blue-500 w-8 rounded-full;
}

/* Ensure no overlap */
@media (max-width: 640px) {
  .org-framework-section {
    @apply pb-12; /* Add padding to prevent overlap on mobile */
  }
}
</style>