<template>
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid" style="background-color: initial;   border-radius: 5px;">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        style="align-items: center; justify-content: center"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" style="margin: 10px">
            <router-link
              :to="{
                name: 'home',
              }"
              >Trangchu</router-link
            >
          </li>
          <li class="nav-item dropdown" style="margin: 10px">
            <router-link
              :to="{
                name: 'them',
              }"
              >AddProduct</router-link
            >
            <!-- <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul> -->
          </li>
          <li class="nav-item" style="margin: 10px">
            <router-link
              :to="{
                name: 'DSND',
              }"
              >DSND</router-link
            >
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>

        <button type="button" class="btn btn-outline-primary">
          <router-link
          :to="{
            name: 'register',
          }"
          >Dang xuat</router-link
        >
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
