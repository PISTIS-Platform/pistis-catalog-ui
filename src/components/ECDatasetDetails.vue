<template>
    <section class="container custom_nav_container">
        <div class="btn_holder">
        <a :href="`${enrichmentUrl}?datasetId=${datasetId}`" target='_blank' class="link">Data Enrichment &#8599;</a>
        <a :href="`/`" target='_blank' class="link">Data Lineage &#8599;</a>
        <a :href="`/`" target='_blank' class="link">Quality Assessment &#8599;</a>
        <a :href="`/`" target='_blank' class="link">Delete Dataset &#8599;</a>
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

<style scoped>
    .custom_nav_container{
        padding: 30px;
        .btn_holder{
            display: flex;
            gap: 1.5rem;
            .link{
                /* text-decoration: underline; */
                color: #18181b;
                border-bottom: 2px solid #5632d0 !important;
                &:hover{
                    text-decoration: none;
                }
            }
        }
    }
</style>