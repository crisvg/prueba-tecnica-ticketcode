<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Celmedia
          </v-list-item-title>
          <v-list-item-subtitle>
            SMS application
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list nav>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home-variant</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title> Home </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/getmosms">
          <v-list-item-icon>
            <v-icon>mdi-file-table-box</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title> Listar SMS </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="blue" clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: true
  })
};
</script>
