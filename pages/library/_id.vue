<template>
  <div class="tw-min-h-screen">
    <div class="tw-w-full tw-h-20 nav-class">
      <nuxt-link to="/library/home">
        <div class="tw-flex tw-items-center tw-py-3 tw-px-4">
          <img src="/logo.svg" class="tw-h-14" alt="" srcset="" />
        </div>
      </nuxt-link>

      <div class="tw-grid tw-grid-cols-12 tw-w-full">
        <div
          class="tw-col-start-3 tw-col-span-8 tw-py-6 tw-px-5 tw-rounded-lg tw-bg-white tw-my-4"
        >
          <v-breadcrumbs :items="itemsPages">
            <template v-slot:item="{ item }">
              <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
                {{ item.text.toUpperCase() }}
              </v-breadcrumbs-item>
            </template>
          </v-breadcrumbs>
        </div>
        <div
          class="tw-col-start-3 tw-w-full tw-col-span-8 tw-py-6 tw-rounded-lg tw-flex"
        >
          <div class="tw-w-1/4">
            <img :src="book.imgUrl" class="tw-h-72 tw-w-52" alt="" srcset="" />
          </div>
          <div
            class="tw-px-3 tw-flex tw-w-3/4 -pt-5 tw-flex-col tw-justify-between"
          >
            <div class="tw-mb-12">
              <div class="tw-flex tw-mb-4 tw-justify-between tw-items-center">
                <h1>{{ book.name }}</h1>
                <v-rating
                  background-color=""
                  color="yellow accent-4"
                  dense
                  v-model="book.rating"
                  readonly
                  half-increments
                  hover
                  size="24"
                ></v-rating>
              </div>
              <p>
                {{ book.descripition }}
              </p>
            </div>
            <div class="tw-flex">
              <h2 class="tw-mr-2">Adrienne Tacke</h2>
              <h2>Published 2018</h2>
            </div>
            <div
              class="tw-flex tw-justify-start tw-w-full tw-my-12 tw-items-start"
            >
              <div>
                <v-select :items="items" label="Borrow for" outlined class="">
                </v-select>
              </div>
              <button
                class="btn tw-py-4 tw-px-8 tw-rounded-md tw-shadow-lg tw-mx-2"
              >
                <div
                  @click="addBook"
                  class="tw-flex tw-cursor-pointer tw-pr-2 tw-justify-center tw-items-center"
                >
                  <h3 class="tw-pr-3">Start  Reading</h3>
                  <img class="tw-h-4" src="/books.svg" alt="" srcset="" />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div
          class="tw-col-start-3 tw-grid tw-grid-cols-5 tw-col-span-8 tw-py-6 tw-rounded-lg"
        >
          <h3 class="tw-col-span-5">Peple also viewd</h3>

          <div
            v-for="i in books"
            :key="i.time"
            class="book tw-w-52"
            data-aos="fade-up"
            :data-aos-delay="i.time * 50"
          >
            <nuxt-link :to="`/library/${i.time}`">
              <img
                :src="i.imgUrl"
                class="tw-w-52 tw-my-2 tw-h-72"
                alt=""
                srcset=""
              />
              <h3 class="tw-font-medium">{{ i.name }}</h3>
              <p class="tw-m-0 tw-text-sm tw-p-0">
                {{ i.descripition }}
              </p>
              <div class="tw-flex tw-justify-between tw-items-center">
                <div class="tw-bg-green-500 tw-rounded-3xl tw-py-1 tw-px-2">
                  <h2 class="tw-text-white">Education</h2>
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
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "defult_view",
  methods: {
    addBook() {
      let temp = this.book;
      this.$store.commit("setBook", temp);
      this.$router.push('/library/home')
    },
  },
  created() {
    console.log(this.$route.params.id);
    let tempBook = this.books.find(
      (book) => book.time == this.$route.params.id
    );
    this.book = {
      ...tempBook,
    };
    let booksss = this.books
      .filter(function (ele) {
        return ele.time != tempBook.time;
      })
      .slice(0, 5);

    this.books = { ...booksss };
    console.table(tempBook);
  },
  setup() {
    return {};
  },

  data() {
    return {
      book: {},
      items: ["One Week", "Two Weeks", "Three Weeks", "Four Weeks"],
      itemsPages: [
        {
          text: "The Library",
          disabled: false,
          href: "/library/",
        },
        {
          text: "Book Details",
          disabled: true,
          href: "breadcrumbs_link_1",
        },
      ],
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
h1 {
  font-size: 2.5rem;
  font-weight: 600;
}
h2 {
  font-size: 0.95rem;
  font-weight: 600;
}
h3 {
  font-size: 1rem;
  font-weight: 600;
}
.nav-class {
  background-color: #1f2932;
}
.btn {
  background-color: #017a9b;
  color: #ffff;
}
</style>