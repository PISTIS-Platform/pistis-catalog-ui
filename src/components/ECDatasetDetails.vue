<template>
    <section>
        <div class="custom_nav_container">
        <a :href="`${enrichmentUrl}?datasetId={${datasetId}}`" target='_blank' class="link">Data Enrichment &#8599;</a>
        <button>Data Lineage</button>
        <button>Quality Assessment</button>
        <button>Delete Dataset</button>
    </div>
    </section>

    <DatasetDetails/>

</template>

<script setup>
import { DatasetDetails } from '@piveau/piveau-hub-ui-modules';
import { useRoute } from 'vue-router';
import { useRuntimeEnv } from '@piveau/piveau-hub-ui-modules';

const route = useRoute();
const ENV = useRuntimeEnv();

let datasetId = route.params.ds_id.toString();

const enrichmentUrl = ENV.api.enrichmentUrl;

</script>