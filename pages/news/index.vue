<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import query from "@/API/queries/publication/all.gql";
import handler from "@/composable/query/list";

const offset = ref(0);
const limit = ref(100);
const items = ref([]);
const type = ref("news");
const searchTerm = ref("");
const filter = computed(() => {
  return {
    _and: [
      {
        type: {
          _eq: type.value,
        },
      },
      {
        title: {
          _ilike: `%${searchTerm.value}%`,
        },
      },
    ],
  };
});

const { onResult, loading, onError } = handler(
  query,
  { limit, offset, filter },
  ""
);

onResult((result) => {
  items.value = result.data.items;
});
</script>

<template>
  <div class="dark:bg-dark-secondary">
    <NavBar nav-class="dark:bg-dark-secondary"></NavBar>
    <div class="md:min-h-screen">
      <div class="flex flex-col items-center pt-10 dark:bg-dark-secondary">
        <div class="md:w-[40%] px-2 flex flex-col items-center space-y-8">
          <InputsTextfield
            name="email"
            v-model="searchTerm"
            class="focus:border-primary h-10 pl-[40px]"
            placeholder="Search"
            placeholder-style="text-primary-text-light dark:text-dark-text-secondary  "
          >
            <template #leading>
              <div
                class="absolute top-2 left-2 text-primary-text-light dark:text-dark-text-secondary font-poppins"
              >
                <Icon name="uil:search-alt" width="25" height="25"></Icon>
              </div>
            </template>
          </InputsTextfield>
        </div>
        <!----------------------Publication Tab List and Tab Panels ------------------------>
        <TabGroup as="div" class="mdw-:[80%] w-full flex flex-col px-4 pt-20">
          <TabList class="flex justify-center w-full">
            <div class="flex md:w-[40%] w-full justify-evenly">
              <Tab as="template" v-slot="{ selected }" class="md:w-1/3"
                ><button
                  @click="type = 'news'"
                  class="flex items-center justify-center cursor-pointer"
                >
                  <div
                    class="flex font-semibold"
                    :class="
                      selected
                        ? 'bg-[#BBF7D0] px-4 py-2 text-third rounded-lg'
                        : 'text-primary-text-light  dark:text-dark-text-secondary'
                    "
                  >
                    News
                  </div>
                </button>
              </Tab>
              <Tab as="template" v-slot="{ selected }" class="md:w-1/3"
                ><button
                  @click="type = 'article'"
                  class="flex items-center justify-center cursor-pointer"
                >
                  <div
                    class="flex font-semibold"
                    :class="
                      selected
                        ? 'bg-[#BBF7D0] px-4 py-2 text-third rounded-lg'
                        : 'text-primary-text-light dark:text-dark-text-secondary'
                    "
                  >
                    Articles
                  </div>
                </button>
              </Tab>
              <Tab as="template" v-slot="{ selected }" class="md:w-1/3"
                ><button
                  @click="type = 'research'"
                  class="flex items-center justify-center cursor-pointer"
                >
                  <div
                    class="flex font-semibold"
                    :class="
                      selected
                        ? 'bg-[#BBF7D0] px-4 py-2 text-third rounded-lg'
                        : 'text-primary-text-light  dark:text-dark-text-secondary'
                    "
                  >
                    Research
                  </div>
                </button>
              </Tab>
            </div>
          </TabList>
          <TabPanels>
            <!---------------------- three tabs tab panel ------------------------>
            <TabPanel v-for="i in 3" :key="i" class="w-full">
              <div class="flex justify-center" v-if="!loading">
                <div
                  class="grid lg:grid-cols-3 md:w-[80%] w-full gap-y-10 py-10"
                  v-if="items.length > 0"
                >
                  <!----------------------Publication card ------------------------>

                  <CardPublication
                    v-for="(publication, i) in items"
                    :key="i"
                    :publication="publication"
                  ></CardPublication>
                </div>
                <div
                  v-else
                  class="h-[30vh] dark:text-white flex flex-col mt-5 items-center justify-center"
                >
                  <Icon
                    name="mdi:database-search"
                    class="text-[8rem] text-gray-500"
                  />
                  <h1 class="mt-10 text-gray-500">No Publication Found</h1>
                </div>
              </div>
              <Basic-PageLoading v-else />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  </div>
  <LayoutFooter></LayoutFooter>
</template>
