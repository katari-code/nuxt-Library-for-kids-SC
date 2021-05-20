<template>
  <div>
    <v-app style="">
      <div class="tw-flex tw-justify-between">
        <div></div>
        <div></div>
      </div>
      <div class="tw-flex tw-h-full">
        <div class="tw-flex tw-w-60">
          <v-navigation-drawer permanent color="#1f2932" fixed>
            <v-card
              class="mx-auto"
              color="transparent"
              elevation="0"
              width="500"
              tile
            >
              <div class="tw-p-6">
                <img src="/ .svg" alt="" srcset="" />
              </div>

              <v-list color="transparent">
                <v-list-item-group v-model="selectedItem">
                  <v-list-item
                    :to="item.to"
                    router
                    exact
                    v-for="(item, i) in items"
                    :key="i"
                  >
                    <v-list-item-icon>
                      <img
                        class="tw-h-8 tw-mx-3"
                        :src="item.url"
                        alt=""
                        srcset=""
                      />
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title
                        style="color: white"
                        v-text="item.text"
                      >
                        <h6 class="tw-text-white">Programs</h6>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>

                <v-spacer></v-spacer>
              </v-list>
            </v-card>
          </v-navigation-drawer>
        </div>
        <v-main>
          <Nuxt />
        </v-main>
      </div>
    </v-app>
  </div>
</template>

<style>
.bg-studnes {
  background-color: #786d88;
}
.v-list-item-group .v-list-item--active {
  background-color: #02b3e4;
}

.nav-student {
  background-color: #1f2932;
}
h1,
h3,
h4 {
  font-family: "Poppins", sans-serif;
}
p {
  font-family: "Raleway", sans-serif;
}

h2 {
  font-family: "Raleway", sans-serif;
}
</style>

<script>
export default {
  data: () => ({
    selectedItem: 1,
    items: [
      { text: "Home", url: "/web-programming.svg", to: "/library/home" },
      { text: "Library", url: "/book.svg", to: "/library/" },
      { text: "Settings", url: "/settings.svg", to: "/library/settings" },
      { text: "Logout", url: "/logout.svg", to: "/" },
    ],
  }),
};
</script>
