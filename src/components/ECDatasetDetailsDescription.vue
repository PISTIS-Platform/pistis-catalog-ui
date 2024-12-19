<template>
  <DatasetDetailsDescription></DatasetDetailsDescription>
  <div v-if="pistisMode === 'cloud'">
    <section class="container custom_nav_container">
      <div class="btn_holder">
        <a :href="'#'" @click.prevent="buyRequest(factoryPrefix)" class="link">Buy</a>
        <a :href="`/usage-analytics/${datasetId}/questionnaire`" class="link">Provide Feedback</a>
      </div>
    </section>
  </div>
  <div v-else-if="pistisMode === 'factory'">
    <section class="container custom_nav_container">
      <div class="btn_holder">
        <a :href="`/srv/lt-ui/${accessID}`" class="link">Data Lineage</a>
        <a :href="`/srv/catalog/datasets/${datasetId}/quality`" class="link">Quality Assessment</a>
        <a :href="`/data/publish-data/${datasetId}`" class="link">Publish Data</a>
        <a :href="`/usage-analytics/${datasetId}/questionnaire`" class="link">Provide Feedback</a>
      </div>
    </section>
  </div>
</template>

<script setup>
  import {DatasetDetailsDescription} from '@piveau/piveau-hub-ui-modules';
  import {useRoute} from 'vue-router';
  import {useRuntimeEnv} from '@piveau/piveau-hub-ui-modules';
  import {onMounted, ref, getCurrentInstance} from 'vue';
  import axios from 'axios';
  import {useStore} from 'vuex'

  const { appContext } = getCurrentInstance();

  const store = useStore()
  const $keycloak = appContext.config.globalProperties.$keycloak;

  const distributionID = ref(null)
  const accessID = ref(null)
  const metadata = ref(null)

  const route = useRoute();
  const ENV = useRuntimeEnv();

  let datasetId = route.params.ds_id.toString();

  const searchUrl = ENV.api.baseUrl;
  const userFactoryUrl = 'https://pistis-market.eu/srv/factories-registry/api/factories/user-factory';
  const pistisMode = ENV.api.pistisMode;
  const token = $keycloak.token;

  const factoryPrefix = ref('')


  const setDistributionID = async (data) => {
    distributionID.value = data['result']['distributions'][0].id;
  }

  const setAccessID = async (data) => {
    try {
      let accessIDFound = false;
      for (const distribution of data['result']['distributions']) {
        if (distribution['access_url'] && distribution['access_url'][0]) {
          const parts = distribution['access_url'][0].split('asset_uuid=');
          accessID.value = parts[parts.length - 1];
          accessIDFound = true;
          break;
        }
      }

      if (!accessIDFound) {
        console.log("No access_url found in distributions.");
      }
    } catch (error) {
      console.error("Error fetching access ID:", error);
    }
  }

  const fetchMetadata = async () => {
    try {
      const response = await fetch(`${searchUrl}datasets/${datasetId}`);
      const data = await response.json();
      metadata.value = data;
      
      setAccessID(data);
      setDistributionID(data);
    } catch (error) {
      console.error("Error fetching the metadata. ERROR: ", error);
    }
  }

  const buyRequest = async (factoryPrefix) => {
    try {
      // TODO: link as ENV variable, and add the access token once keycloak is intigrated
      const response = await axios.post(`https://${factoryPrefix}.pistis-market.eu/srv/smart-contract-execution-engine/api/scee/storePurchase`, {
          // The request body object
          assetId: datasetId,
          assetFactory: metadata.value.result?.monetization[0]?.publisher?.organization_id,
          sellerId: metadata.value.result?.monetization[0]?.seller_id,
          price: metadata.value.result?.monetization[0]?.price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      
      // TODO: first use default language and only then the fallback
      await store.dispatch('snackbar/showSnackbar', {
        message: 'Successfully purchased ${Object.values(metadata.value.result?.title)[0]}',
        variant: 'success',
      })
    } catch (error) {
      const errorMessage = error?.response?.data?.response[0] || 'An error occurred while processing your request.';
      await store.dispatch('snackbar/showError', errorMessage)
    }
  };

  const getUserFactory = async () => {
    try {
      const response = await fetch(`${userFactoryUrl}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json()    
      factoryPrefix.value = data.factoryPrefix
    } catch (error) {
      console.error("Error getting data:", error);
    }
  };

  onMounted(() => {
    fetchMetadata();
    getUserFactory();
  })
</script>

<style scoped>
.custom_nav_container {
  padding: 0 30px 30px 0;
  margin: 0;

  .btn_holder {
    display: flex;
    gap: 1.5rem;

    .link {

      background-color: #705df7;
      color: #fff;

      padding: .45rem;
      border-radius: .35rem;
      min-width: 72px;
      text-align: center;

      &:hover {
        text-decoration: none;
      }
    }
  }
}

@media screen and (max-width: 796px) {
  .custom_nav_container {
    .btn_holder {
      flex-direction: column;

      .link {
        align-self: flex-start;
      }
    }
  }
}
</style>
