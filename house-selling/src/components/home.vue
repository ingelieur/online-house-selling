<template>
  <div class="container">
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <a @click="viewGrid" class="button is-outlined is-danger is-medium">
            <span class="icon is-medium">
              <i class="fa fa-th"></i>
            </span>
          </a>
        </div>
        <div class="level-item">
          <a @click="viewList" class="button is-outlined is-danger is-medium">
            <span class="icon is-medium">
              <i class="fa fa-list"></i>
            </span>
          </a>
        </div>
      </div>
      <div class="level-right">
        <div class="field has-addons">
          <p class="control">
            <span class="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </span>
          </p>
          <p class="control">
            <input class="input is-danger" type="text" placeholder="Find a property">
          </p>
          <p class="control">
            <a class="button is-outlined is-danger">
              Search
            </a>
          </p>
        </div>
      </div>
    </nav>
    <br>
    <br>
    <table v-if="list" class=" table is-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Location</th>
          <th>Area</th>
          <th>Features</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="house in houses">
          <td>{{house.title}}</td>
          <td>{{house.description}}</td>
          <td>{{house.locName}}</td>
          <td>{{house.area}}</td>
          <td>{{house.features.join(`,\n`)}}</td>
          <td>{{house.price}}</td>
          <td>
            <a class="button is-outlined is-primary">
              <span>Details</span>
            </a>
            <a class="button is-outlined is-primary">
              <span>Contact</span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else class="columns is-multiline is-tablet">
      <div v-for="house in houses" class="column is-one-quarter">
        <div class="card bm--card-equal-height">
          <header class="card-header">
            <p class="card-header-title">
              {{house.title}}
            </p>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="house.image" alt="Image">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <table class="table is-striped has-text-centered">
                <tbody>
                  <tr>{{house.description}}</tr>
                  <br>
                  <tr>area: {{house.area}} m2</tr>
                  <tr>features: {{house.features.join(`,\n`)}}</tr>
                  <br>
                  <tr>Rp {{house.price}}</tr>
                  <br>
                  <tr><small>{{house.createdAt}}</small></tr>
              </tbody>
              </table>

            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Details</a>
            <a class="card-footer-item">Contact</a>
          </footer>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'home',
  data: function () {
    return {
      list: true
    }
  },
  computed: {
    houses () {
      return this.$store.getters.getHouses
    }
  },
  methods: {
    viewList: function () {
      this.list = true
    },
    viewGrid: function () {
      this.list = false
    }
  }
}
</script>

<style>
  .bm--card-equal-height {
    display: flex;
    flex-direction: column;
    height: 100%
  }
  .bm--card-equal-height .card-footer {
    margin-top: auto;
  }
</style>
