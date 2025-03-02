<script setup>
import { ref, computed } from 'vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import list from "@/composable/query/list";
import get_list from "@/API/queries/partner/get_partners.gql";

const items = ref([]);
const items2 = ref([]);
const offset = ref(0);
const limit = ref(60);
const type = ref("government");
const privates = ref(0);
const government = ref(0);
const NGO = ref(0);

const filter = computed(() => ({
    _and: [{ type: { _eq: type.value } }]
}));

const { onResult, loading } = list(get_list, {
    limit,
    offset,
    filter,
});

onResult((result) => {
    items.value = result.data.items;
    items2.value = result.data.items2;
    privates.value = result.data.private_count.aggregate.count;
    government.value = result.data.government_count.aggregate.count;
    NGO.value = result.data.NGO_count.aggregate.count;
});

const categories = [
    { id: 'government', label: 'Government', count: government },
    { id: 'NGO', label: 'NGO', count: NGO },
    { id: 'private', label: 'Private', count: privates }
];

const reasons = [
    {
        icon: "mdi:hand-coin-outline",
        title: "Support Start-ups",
        description: "EYEA is a non-profitable association working to support the creation of an active start-up ecosystem."
    },
    {
        icon: "uil:briefcase-alt",
        title: "Youth Employment",
        description: "The Association works to help youth entrepreneurs realize their business ideas and create jobs."
    },
    {
        icon: "icon-park-outline:people-top",
        title: "Social Impact",
        description: "We support entrepreneurs working towards social and environmental goals."
    },
    {
        icon: "wpf:future",
        title: "Market Opportunities",
        description: "We focus on building relationships within the youth market segment."
    },
    {
        icon: "iconoir:agile",
        title: "Agility",
        description: "We adapt quickly to changes and embrace new technologies."
    },
    {
        icon: "uil:lightbulb-alt",
        title: "Innovative Perspectives",
        description: "Tap into the youth’s innovative spirit and fresh perspectives."
    }
];
</script>

<template>
    <div>
        <NavBar nav-class="bg-[#B5B5B53B] backdrop-blur-md dark:bg-dark-primary/95" />

        <!-- Hero Section -->
        <div class="relative min-h-[80vh] flex items-center justify-center partnersBackground">
            <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 dark:from-black/70 dark:to-black/80"></div>
            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                <div class="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div class="relative z-10 max-w-6xl mx-auto px-6 py-20">
                <Transition appear name="fade-up">
                    <div class="text-center space-y-8">
                        <div class="relative mx-auto w-32 h-32 mb-8">
                            <img src="@/assets/images/temp/joint_venture.png" 
                                 alt="Partnership" 
                                 class="w-full h-full object-contain animate-float" />
                        </div>

                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Partner with the Ethiopian Youth Entrepreneurs Association
                        </h1>

                        <p class="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            We are actively working to acquire new partners to help achieve our goals 
                            and objectives in offering a diverse set of services to the Ethiopian youth.
                        </p>

                        <NuxtLink to="/supports#membership" class="inline-block mt-8 group">
                            <button class="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg
                                         transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                                         flex items-center space-x-3">
                                <Icon name="heroicons:hand-raised" class="text-2xl group-hover:rotate-12 transition-transform" />
                                <span>Express Interest of Partnership</span>
                            </button>
                        </NuxtLink>

                        <div class="mt-16">
                            <LayoutPartenredWith :partners="items2" />
                        </div>
                    </div>
                </Transition>
            </div>
        </div>

        <!-- Partners Section -->
        <div id="partners" class="py-20 bg-[#B5B5B53B] dark:bg-dark-primary">
            <div class="max-w-7xl mx-auto px-6">
                <Transition appear name="fade-up">
                    <div class="text-center mb-16">
                        <span class="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                            <Icon name="mdi:partnership-outline" class="mr-2" />
                            Our Partners
                        </span>
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Our Esteemed Partners
                        </h2>
                        <p class="text-gray-600 dark:text-gray-300">
                            Collaborating with private, development and government sectors
                        </p>
                    </div>
                </Transition>

                <div class="max-w-4xl mx-auto">
                    <TabGroup>
                        <TabList class="flex rounded-xl bg-gray-100 dark:bg-gray-800 p-1 mb-12">
                            <Tab v-for="category in categories" 
                                 :key="category.id"
                                 v-slot="{ selected }"
                                 @click="type = category.id"
                                 :class="[
                                     'w-full py-3 px-4 rounded-lg font-medium transition-all duration-200',
                                     selected 
                                         ? 'bg-white dark:bg-gray-700 text-primary shadow'
                                         : 'text-gray-600 dark:text-gray-400 hover:text-primary'
                                 ]">
                                {{ category.label }} ({{ category.count }})
                            </Tab>
                        </TabList>

                        <TabPanels class="mt-8">
                            <TabPanel v-for="i in 3" :key="i">
                                <div v-if="!loading" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                                    <Transition appear name="fade-up" 
                                              v-for="item in items" 
                                              :key="item.id">
                                        <NuxtLink v-if="item.mou_content" 
                                                 :to="`/partners/${item.id}`"
                                                 class="group">
                                            <div class="aspect-square bg-white dark:bg-gray-800 rounded-xl p-4
                                                        shadow-lg hover:shadow-xl transition-all duration-300
                                                        flex items-center justify-center
                                                        transform hover:-translate-y-1">
                                                <img :src="item.logo_url"
                                                     :alt="item.name"
                                                     class="max-h-full object-contain
                                                            filter group-hover:brightness-110 transition-all" />
                                            </div>
                                        </NuxtLink>
                                        <div v-else
                                             class="aspect-square bg-white dark:bg-gray-800 rounded-xl p-4
                                                    shadow-lg flex items-center justify-center">
                                            <img :src="item.logo_url"
                                                 :alt="item.name"
                                                 class="max-h-full object-contain" />
                                        </div>
                                    </Transition>
                                </div>
                                <div v-else class="flex justify-center py-12">
                                    <Icon name="eos-icons:bubble-loading"
                                          class="text-primary text-4xl animate-spin" />
                                </div>
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </div>
            </div>
        </div>

        <!-- Why Partner Section -->
        <div class="py-20 bg-third-light dark:bg-dark-secondary relative overflow-hidden">
            <div class="absolute right-0 bottom-0 opacity-10">
                <NuxtImg format="webp" 
                         loading="lazy"
                         src="https://res.cloudinary.com/blue-sky/image/upload/v1690980105/flowerShape_bkwvfq.svg"
                         class="w-96" />
            </div>

            <div class="max-w-7xl mx-auto px-6">
                <Transition appear name="fade-up">
                    <div class="text-center mb-16">
                        <span class="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                            <Icon name="mdi:partnership-outline" class="mr-2" />
                            Why Partner
                        </span>
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Why should you partner with us?
                        </h2>
                        <p class="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            EYEA works with government, non-government, and private sector partners to achieve
                            its objective of building an active start-up and youth entrepreneurship ecosystem in Ethiopia.
                        </p>
                    </div>
                </Transition>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Transition appear name="fade-up" 
                              v-for="(reason, index) in reasons" 
                              :key="index">
                        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg
                                  transform hover:-translate-y-1 transition-all duration-300">
                            <div class="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                                <Icon :name="reason.icon" class="text-2xl text-primary" />
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                {{ reason.title }}
                            </h3>
                            <p class="text-gray-600 dark:text-gray-300">
                                {{ reason.description }}
                            </p>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    </div>
    <LayoutFooter />
</template>

<style scoped>
.partnersBackground {
    background-image: url("/assets/images/temp/partners.png");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

/* Vue Transitions */
.fade-up-enter-active,
.fade-down-enter-active {
    transition: all 0.5s ease-out;
}

.fade-up-enter-from {
    opacity: 0;
    transform: translateY(20px);
}

.fade-down-enter-from {
    opacity: 0;
    transform: translateY(-20px);
}

/* Add smooth transitions */
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}
</style>