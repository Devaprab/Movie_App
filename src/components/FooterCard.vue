<template>
	<footer>
            <div class="footer-top-wrap">
                <div class="container">
                    <div class="footer-menu-wrap">
                        <div class="row align-items-center">
                            <div class="col-lg-3">
                                <div class="footer-logo">
                                    <router-link to="/Home"><img src="../assets/logo.png" ></router-link>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <div class="footer-menu">
                                    <nav>
                                        <ul class="navigation">
                                            <li><router-link to="/Home">Home</router-link></li>
                                            <li><router-link to="/TopRated" @click="this.$store.commit('setVisibilityFalse')">Top-Rated</router-link></li>
                                            <li><router-link to="/popularMovies" @click="this.$store.commit('setVisibilityFalse')">Popular Movies</router-link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-quick-link-wrap">
                        <div class="row align-items-center">
                            <div class="col-md-7">
                                <div class="quick-link-list">
                                    <ul>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Help Center</a></li>
                                        <li><a href="#">Terms of Use</a></li>
                                        <li><a href="#">Privacy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="footer-social">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
</template>

<style scoped>

.footer-top-wrap {
    background-position: center;
    background-size: cover;
    padding: 80px 0 55px;
}
.footer-menu nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.footer-menu nav .navigation {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.footer-menu nav .navigation li {
    margin-right: 27px;
}
.footer-menu nav .navigation li:last-child {
    margin-right: 0;
}
.footer-menu nav .navigation li a {
    display: block;
    text-transform: uppercase;
    color: #c3c3c3;
    font-weight: 700;
    padding: 10px 10px;
    line-height: 1;
}


.footer-menu-wrap {
    position: relative;
    padding-bottom: 35px;
}
.footer-menu-wrap::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 1px;
    background-color: rgb(18, 21, 30);
    box-shadow: 0px 3px 0px 0px rgba(143, 143, 143, 0.14);
}
.quick-link-list ul,
.footer-social ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.quick-link-list ul li {
    margin-right: 50px;
    margin: 5px 50px 5px 0px;
}
.quick-link-list ul li:last-child {
    margin-right: 0px;
}
.quick-link-list ul li a {
    color: #bcbcbc;
    display: block;
    font-weight: 500;
    font-size: 13px;
    text-transform: uppercase;
}

.footer-quick-link-wrap {
    padding-top: 40px;
}

</style>