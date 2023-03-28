<template>
    <div class="topbar">
        <!-- LOGO -->
        <div class="topbar-left">
            <a href="#" class="logo"> Test app </a>
        </div>
        <nav class="navbar-custom">
            <ul class="list-inline menu-left mb-0">
                <li class="float-left">
                    <button class="button-menu-mobile open-left waves-effect">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0 1.5C0 0.947715 0.447715 0.5 1 0.5H14.8961C15.4484 0.5 15.8961 0.947715 15.8961 1.5C15.8961 2.05228 15.4484 2.5 14.8961 2.5H1C0.447715 2.5 0 2.05228 0 1.5ZM0 6C0 5.44772 0.447715 5 1 5H14.8961C15.4484 5 15.8961 5.44772 15.8961 6C15.8961 6.55228 15.4484 7 14.8961 7H1C0.447715 7 0 6.55228 0 6ZM1 9.5C0.447715 9.5 0 9.94771 0 10.5C0 11.0523 0.447715 11.5 1 11.5H14.8961C15.4484 11.5 15.8961 11.0523 15.8961 10.5C15.8961 9.94771 15.4484 9.5 14.8961 9.5H1Z"
                                fill="#444444" />
                        </svg>
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "TopBar",
    props: {
        // msg: String
    },
    methods: {
        navbarEnlarged() {
            var ii = document.getElementById("body").classList;
            ii.toggle("enlarged");
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-inline {
    height: 100% !important;
    cursor: pointer;
}
</style>
