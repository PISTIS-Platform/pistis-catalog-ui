<template>
  <DatasetDetailsDescription></DatasetDetailsDescription>
  <div v-if="pistisMode === 'cloud'">
    <section class="container custom_nav_container">
      <div class="btn_holder">
        <a :href="'#'" @click.prevent="buyRequest" class="link">Buy</a>
        <a :href="`/usage-analytics/${datasetId}/questionnaire`" target='_blank' class="link">Provide
          Feedback</a>
        <!-- <a :href="`${dataLineageUrl}`" target='_blank' class="link">Delete</a> -->
      </div>
    </section>
  </div>
  <div v-else-if="pistisMode === 'factory'">
    <section class="container custom_nav_container">
      <div class="btn_holder">
        <!-- <a :href="`${enrichmentUrl}?datasetId=${datasetId}`" target='_blank' class="link">Data Enrichment</a> -->
        <a :href="`${dataLineageUrl}/${distributionID}`" target='_blank' class="link">Data
          Lineage</a>
        <a :href="`${qualityAssessmentUrl}/${datasetId}/quality`" target='_blank' class="link">Quality
          Assessment</a>
        <a :href="`/data/publish-data/${datasetId}`" target='_blank' class="link">Register in
          Marketplace</a>
        <a :href="`/usage-analytics/${datasetId}/questionnaire`" target='_blank' class="link">Provide
          Feedback</a>
        <!-- <a :href="`/`" target='_blank' class="link">Delete Dataset</a> -->
      </div>
    </section>
  </div>


</template>

<script setup>
import {DatasetDetailsDescription, DatasetDetails} from '@piveau/piveau-hub-ui-modules';
import {useRoute} from 'vue-router';
import {useRuntimeEnv} from '@piveau/piveau-hub-ui-modules';
import {onMounted, ref} from 'vue';
import axios from 'axios';
import {useStore} from 'vuex'


const store = useStore()

const distributionID = ref(null)
const metadata = ref({})

const route = useRoute();
const ENV = useRuntimeEnv();

let datasetId = route.params.ds_id.toString();

const enrichmentUrl = ENV.api.enrichmentUrl;
const dataLineageUrl = ENV.api.dataLineageUrl;
const qualityAssessmentUrl = ENV.api.qualityAssessmentUrl;
const searchUrl = ENV.api.baseUrl
const hubUrl = ENV.api.hubUrl
const pistisMode = ENV.api.pistisMode;
const token = ENV.authentication.userToken;

const fetchDistributionID = async () => {
  const data = await fetch(`${hubUrl}datasets/${datasetId}/distributions`)
  const response = await data.json()
  // console.log('response', response)

  const parts = response[0].split('/');
  distributionID.value = parts[parts.length - 1];
}

// TODO: remove additional call, get metadata from the call that already exists
const fetchDistributionMetadata = async () => {
  try {
    const response = await axios.get(`${searchUrl}datasets/${datasetId}`);
    console.log('response', response)
    metadata.value = response.data
  } catch (error) {
    console.error("Error fetching distribution ID:", error);
  }
};

const buyRequest = async () => {
  console.log(datasetId)
  console.log("userGroupId" + metadata.value.result?.monetization[0]?.publisher?.organization_id)
  console.log("sellerId" + metadata.value.result?.monetization[0]?.seller_id)
  console.log("price" + metadata.value.result?.monetization[0]?.price)
  try {
    // TODO: link as ENV variable, and add the access token once keycloak is intigrated
    const response = await axios.post('https://sph.pistis-market.eu/srv/smart-contract-execution-engine/api/scee/storePurchase', {
        // The request body object
        assetId: datasetId,
        userGroupId: metadata.value.result?.monetization[0]?.publisher?.organization_id,
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
    await store.dispatch('snackbar/showSnackbar', {
      message: 'yeah, bought something',
      variant: 'success',
    })

  } catch (error) {
    await store.dispatch('snackbar/showError',  error)

    console.error("Error submitting data:", error);
  }
};

onMounted(() => {
  fetchDistributionID()
  fetchDistributionMetadata()
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
