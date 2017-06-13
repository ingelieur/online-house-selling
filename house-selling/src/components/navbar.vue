<template>
  <div class="container">
    <nav class="nav">
      <div class="nav-left">
        <a class="nav-item">
          <img src="../assets/logo.png" alt="Urban Hacktiv">
        </a>
      </div>

      <div class="nav-center">

      </div>

      <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
      <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <!-- This "nav-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <div class="nav-right nav-menu">
        <a class="nav-item">
          Home
        </a>
        <a class="nav-item">
          Compare
        </a>
        <a class="nav-item">
          Help
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
    }
  }
}
</script>
