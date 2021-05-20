<template>
  <div class="">
    <div
      class="tw-flex tw-w-screen tw-pl-28 tw-justify-start tw-items-start tw-h-screen"
    >
      <div
        class="tw-flex tw-flex-col tw-w-full tw-justify-start tw-items-start"
      >
        <div
          class="tw-grid tw-grid-cols-12 tw-gap-4 tw-pl-40 tw-pt-20 tw-w-full"
        >
          <div class="tw-bg-green"></div>

          <div class="tw-col-span-8">
            <v-text-field
              outlined
              label="Search"
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </div>
          <div class="tw-col-span-2">
            <v-select outlined :items="['Education']" label="Categroy"></v-select>
          </div>
          <div
            class="tw-grid tw-col-span-10 tw-gap-y-5 tw-w-full tw-grid-cols-5 tw-col-start-2"
          >
            <div
              v-for="i in books"
              :key="i.time"
              class="book tw-w-52"
              data-aos="fade-up"
              :data-aos-delay="i.time * 50"
            >
              <nuxt-link :to="`/library/${i.time}`">
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
                <div class="tw-flex tw-justify-between tw-items-center">
                  <div class="tw-bg-green-500 tw-rounded-3xl tw-py-1 tw-px-2">
                    <h2>Education</h2>
                  </div>
                  <v-rating
                    v-model="i.rating"
                    background-color=""
                    color="yellow accent-4"
                    dense
                    readonly
                    half-increments
                    hover
                    size="18"
                  ></v-rating>
                </div>
               </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default_student",

  data() {
    return {
      books: [
        {
          time: 1,
          imgUrl: "/books/b0.png",
          name: "Coding For Kids",
          descripition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quae.",
          category: "Education",
          rating: 3.2,
        },
        {
          time: 2,
          imgUrl: "/books/b1.png",
          name: "Coding For Kids",
          descripition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quae.",
          category: "Education",
          rating: 2.2,
        },
        {
          time: 3,
          imgUrl: "/books/b2.jpg",
          name: "Coding For Kids",
          descripition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quae.",
          category: "Education",
          rating: 1.2,
        },
        {
          time: 4,
          imgUrl: "/books/b3.png",
          name: "Coding For Kids",
          descripition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quae.",
          category: "Education",
          rating: 3.8,
        },
        {
          time: 5,
          imgUrl: "/books/b4.png",
          name: "Coding For Kids",
          descripition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quae.",
          category: "Education",
          rating: 3.8,
        },
        {
          time: 6,
          imgUrl: "/books/b5.png",
          name: "Coding For Kids",
          descripition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quae.",
          category: "Education",
          rating: 3.8,
        },
        {
          time: 7,
          imgUrl: "/books/b6.png",
          name: "Coding For Kids",
          descripition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quae.",
          category: "Education",
          rating: 3.8,
        },
        {
          time: 8,
          imgUrl: "/books/b7.png",
          name: "Coding For Kids",
          descripition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quae.",
          category: "Education",
          rating: 3.8,
        },
        {
          time: 9,
          imgUrl: "/books/b8.png",
          name: "Coding For Kids",
          descripition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quae.",
          category: "Education",
          rating: 3.8,
        },
        {
          time: 10,
          imgUrl: "/books/b9.png",
          name: "Coding For Kids",
          descripition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quae.",
          category: "Education",
          rating: 3.8,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.v-application p {
  margin-bottom: 5px !important;
}
.btn {
  background-color: #017a9b;
  color: #ffff;
}
.active-btn {
  background-color: #02b3e4;
}
.programs-card {
  background-color: #f5fcfe;
}
.nav-class {
  background-color: #1f2932;
}

h1 {
  font-size: 1rem;
  font-weight: 700;
}
h2 {
  font-size: 0.85rem;
  font-weight: 700;
  color: white;
}
p {
  font-size: 0.85rem;
}
</style>
