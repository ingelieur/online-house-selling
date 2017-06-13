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
    <p>{{houses}}</p>
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
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
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
    <div v-else class="columns is-multiline">
      <div class="column is-one-quarter">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Title
            </p>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="title">Location</p>
              <p>Description</p>
              <p>Area: </p>
              <p>Features:</p>
              <p class="subtitle">Price</p>
              <br>
              <small>11:09 PM - 1 Jan 2016</small>
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
      return this.$store.getters.houses
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
