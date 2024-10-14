<template>
  <div class="container-fluid datasets content">
    <h1 class="row col-12 page-title text-primary">Distributed Query</h1>
    <div class="input-group">
      <div class="input-group-main">
        <input
          class="form-control"
          type="text"
          v-model="query"
          placeholder="Enter your search term"
          @keyup.enter="search"
        />
      </div>
      <div class="ml-3">
        <button class="form-control btn btn-primary" @click="search"><i class="material-icons align-bottom">search</i></button>
      </div>
    </div>

    <div v-if="loading" class="spinner-container">
      <div class="spinner"></div>
    </div>
    <div v-else class="dq-search-results">
      <div class="datasets-found alert alert-primary mt-3">
        <div>{{ datasets.length }} datasets found</div>
      </div>
      <div v-for="(dataset, index) in datasets" :key="index">
        <h3><a href="datasets/{{ dataset.id }}" target="_blank">{{ JSON.stringify(dataset.title) }}</a></h3>
        <p>Creator: {{ JSON.stringify(dataset.creator) }}</p>
        <p>Description: {{ JSON.stringify(dataset.description) }}</p>
        <hr/>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: 'DistributedQuery',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      query: '',
      uuids: [],
      datasets: [],
      loading: false,
    };
  },
  methods: {
    async search() {
      this.loading = true;
      this.datasets = [];
      try {
        const response = await fetch('https://pistis-market.eu/srv/distributed-query/search', {
          method: 'POST',
          body: JSON.stringify({dataQuery: this.query}),
          headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        this.uuids = data.datasets;

        const datasetPromises = this.uuids.map(uuid =>
          fetch('https://develop.pistis-market.eu/srv/search/dataset/' + uuid)
            .then(res => res.json())
        );

        this.datasets = await Promise.all(datasetPromises);
      }
      catch (error) {
        console.error('Error fetching resources:', error);
      }
      finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
.page-title {
  margin-bottom: 15px;
}

.dq-search-results {
  min-height: 100px;
}

.input-group {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}

.input-group-main {
  flex-grow: 1;
}

input.form-control {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  margin: 0;
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .375rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
input.form-control::placeholder {
  color: #868e96;
  opacity: 1;
}

button.form-control {
  width: calc(2.25rem + 2px);
  height: calc(2.25rem + 2px);
  border-radius: 100%;
}

button.form-control i {
  margin: 0 -8px;
}
</style>
