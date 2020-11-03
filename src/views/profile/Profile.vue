<template>
  <div id="profile">
    <profile-nav-bar> </profile-nav-bar>
    <profile-login></profile-login>
    <profile-data :profilenums="profilenums"></profile-data>
    <profile-app></profile-app>
    <profile-more></profile-more>
  </div>
</template>

<script>
//子组件
import ProfileNavBar from "./childComps/ProfileNavBar";
import ProfileLogin from "./childComps/ProfileLogin";
import ProfileData from "./childComps/ProfileData";
import ProfileApp from "./childComps/ProfileApp";
import ProfileMore from "./childComps/ProfileMore";

export default {
  name: "Profile",
  methods: {},
  data() {
    return { profilenums: [0.00, 0, 0] };
  },
  components: {
    ProfileNavBar,
    ProfileLogin,
    ProfileData,
    ProfileApp,
    ProfileMore,
  },
};
</script>

<style scoped>
</style>