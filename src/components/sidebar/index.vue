<template>
    <div class="left side-menu">
        <div class="slimscroll-menu" id="remove-scroll">
            <!--- Sidemenu -->
            <div id="sidebar-menu">
                <!-- Left Menu Start -->
                <ul class="metismenu" id="side-menu">
                    <li>
                        <router-link to="/tablepage" class="waves-effect">
                            <span> Table Page </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/chartpage" class="waves-effect">
                            <span> Chart Page </span>
                        </router-link>
                    </li>

                </ul>
            </div>
            <!-- Sidebar -->
            <div class="clearfix"></div>
        </div>
        <!-- Sidebar -left -->
    </div>
</template>

<script>
export default {
    name: 'SideBar',
    props: {
        // msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.whosreported-img {
    height: 17px;
    width: 18px;
}
</style>
