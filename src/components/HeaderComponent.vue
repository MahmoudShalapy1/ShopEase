<template>
  <header class="sticky-top shadow-sm bg-white" ref="headerEl">
    <section class="bg-light">
      <div class="container py-2">
        <div class="row align-items-center">
          <!-- الشعار وزر القائمة -->
          <div
            class="col-12 col-md-3 d-flex justify-content-between justify-content-md-start align-items-center py-2 py-md-0"
          >
            <a href="/" class="logo fw-bold fs-4 text-decoration-none"
              >ShopEase</a
            >
            <button
              class="btn border-0 d-md-none text-secondary btn-outline-secondary"
              @click="toggleMenu"
              aria-label="Toggle menu"
              aria-expanded="showMenu.toString()"
              aria-controls="navbarMenu"
              type="button"
            >
              <i class="bi bi-list text-dark fs-4" aria-hidden="true"></i>
            </button>
          </div>

          <!-- حقل البحث -->
          <div class="col-12 col-md-6 py-2 py-md-0">
            <input
              type="search"
              class="form-control"
              placeholder="Search"
              aria-label="Search"
              autocomplete="off"
            />
          </div>

          <!-- أيقونات -->
          <div
            class="col-12 col-md-3 d-flex justify-content-start justify-content-md-center gap-4 py-2 py-md-0"
          >
            <i
              class="bi bi-heart icon"
              role="button"
              tabindex="0"
              aria-label="Favorites"
            ></i>
            <i
              class="bi bi-cart icon"
              role="button"
              tabindex="0"
              aria-label="Cart"
            ></i>
            <i
              class="bi bi-person icon"
              role="button"
              tabindex="0"
              aria-label="User Account"
            ></i>
          </div>
        </div>
      </div>

      <!-- القائمة مع انتقال انسيابي -->
      <nav
        v-show="showMenu || isDesktop"
        class="w-100 py-2 bg-nav d-md-block"
        id="navbarMenu"
        aria-label="Primary navigation"
      >
        <ul
          class="container d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 mb-0 list-unstyled"
        >
          <li v-for="link in links" :key="link.id">
            <router-link
              :to="link.path"
              class="nav-link px-2 py-1 fw-semibold"
              :class="{ active: activeLink === link.path }"
              @click="setActive(link.path)"
              tabindex="0"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </section>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      isDesktop: window.innerWidth >= 768,
      activeLink: "/", // الرابط النشط الافتراضي
      links: [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Products", path: "/products" },
        { id: 3, name: "Categories", path: "/categories" },
        { id: 4, name: "Offers", path: "/offers" },
        { id: 5, name: "About", path: "/about" },
        { id: 6, name: "Contact", path: "/contact" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    setActive(path) {
      this.activeLink = path;
      this.showMenu = false; // إغلاق القائمة في الموبايل عند اختيار رابط
    },
    handleResize() {
      this.isDesktop = window.innerWidth >= 768;
      if (this.isDesktop) this.showMenu = false;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
.bg-nav {
  background-color: #5a0f32;
}

.logo {
  color: #e83e8c;
  user-select: none;
}

.icon {
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
  user-select: none;
}

.icon:hover,
.icon:focus {
  color: #e83e8c;
}

.nav-link {
  color: whitesmoke;
  transition: color 0.3s ease;
  user-select: none;
  display: inline-block;
  padding: 0.25rem 0.5rem;
}

.nav-link:hover,
.nav-link:focus {
  color: #e83e8c;
  text-decoration: none;
}

/* ستايل للرابط النشط */
.nav-link.active {
  color: #e83e8c;
  font-weight: 700;
}

/* استجابة عرض القائمة */
@media (min-width: 768px) {
  nav {
    display: block !important;
  }
}
</style>
