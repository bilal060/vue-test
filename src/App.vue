<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <!-- Begin page -->
    <div class="" id="wrapper" data-app>
        <!-- Top Bar Start -->
        <TopBar/>
        <!-- Top Bar End -->
        <!-- ========== Left Sidebar Start ========== -->
        <SideBar/>
        <!-- Left Sidebar End -->
        <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== -->
        <div class="content-page ">
            <!-- Start content -->
            <div class="content">
              <router-view/>
            </div>
        </div>
        <!-- ============================================================== -->
        <!-- End Right content here -->
        <!-- ============================================================== -->
    </div>
    <!-- END wrapper -->
</template>
<script>
// @ is an alias to /src
import TopBar from '@/components/topbar/index.vue'
import SideBar from '@/components/sidebar/index.vue'

export default {
  components: {
    TopBar,
    SideBar
  }
}
</script>
<style>

</style>
