<template>
  <div>
    <div class="tw-grid tw-grid-cols-12 tw-w-full tw-p-6">
              <div
        class="tw-grid tw-col-span-10 tw-gap-y-5 tw-w-full tw-grid-cols-5 tw-col-start-2"
      >
      <h1>Your Books</h1>
              </div>
      <div
        class="tw-grid tw-col-span-10 tw-gap-y-5 tw-w-full tw-grid-cols-5 tw-col-start-2"
      >
        <div
          v-for="i in Broowdbooks"
          :key="i.time"
          class="book tw-w-52"
          data-aos="fade-up"
          :data-aos-delay="i.time * 50"
        >
          <nuxt-link to="/library/view">
            <div>
              <img
                :src="i.imgUrl"
                class="tw-w-52 tw-my-2 tw-h-72"
                alt=""
                srcset=""
              />
              <h1 class="tw-font-medium">{{ i.name }}</h1>
              <p class="tw-m-0 tw-text-sm tw-p-0">
                {{ i.descripition }}
              </p>
              <div class="tw-flex tw-bg-yellow-500 tw-py-2 tw-px-3  tw-rounded-3xl tw-justify-between tw-items-center">
                   <img src="/timer.svg" class="tw-w-8 tw-h-8" alt="" srcset=""> 
                   <h1 class="tw-text-white ">Expires in 4 weeks</h1>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  layout: "default_student",

  computed: {
    ...mapGetters(["Broowdbooks"]),
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>