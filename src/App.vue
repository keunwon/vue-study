<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <Title :title="title"></Title>
      <v-spacer></v-spacer>
      <v-btn icon @click="save">
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </v-app-bar>

    <NavBar></NavBar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer :footer="footer"></Footer>
  </v-app>
</template>

<script>
import Title from '@/components/common/Title.vue';
import NavBar from '@/components/nav/NavBar.vue';
import Footer from '@/components/common/Footer.vue';

export default {
  components: {
    Title,
    NavBar,
    Footer,
  },
  data() {
    return {
      title: '나의 타이틀입니다.',
      footer: '푸터입니다.',
      drawer: false,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' },
      ],
      right: null,
    };
  },
  methods: {
    save() {
      this.$firebase
        .database()
        .ref()
        .child('abcd')
        .set({
          title: 'abcd',
          text: 'ttttt',
        });
    },
  },
};
</script>

<style></style>
