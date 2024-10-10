<template>
    <DatasetDetailsDescription></DatasetDetailsDescription>
    <section class="container custom_nav_container">
        <div class="btn_holder">
            <a :href="`${enrichmentUrl}?datasetId=${datasetId}`" target='_blank' class="link">Buy
                </a>
            <a :href="`${dataLineageUrl}`" target='_blank' class="link">Delete</a>
        </div>
    </section>  
    <section class="container custom_nav_container">
        <div class="btn_holder">
            <a :href="`${enrichmentUrl}?datasetId=${datasetId}`" target='_blank' class="link">Data Enrichment
                </a>
            <a :href="`${dataLineageUrl}`" target='_blank' class="link">Data Lineage</a>
            <a :href="`${qualityAssessmentUrl}`" target='_blank' class="link">Quality Assessment</a>
            <a :href="`/`" target='_blank' class="link">Asset Data Bundler</a>
            <a :href="`/`" target='_blank' class="link">Delete Dataset</a>
        </div>
    </section>  
</template>

<script setup>
import { DatasetDetailsDescription, DatasetDetails } from '@piveau/piveau-hub-ui-modules';
import { useRoute } from 'vue-router';
import { useRuntimeEnv } from '@piveau/piveau-hub-ui-modules';

const route = useRoute();
const ENV = useRuntimeEnv();

let datasetId = route.params.ds_id.toString();

const enrichmentUrl = ENV.api.enrichmentUrl;
const dataLineageUrl = ENV.api.dataLineageUrl;
const qualityAssessmentUrl = ENV.api.qualityAssessmentUrl;

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

@media screen and (max-width:796px){
    .custom_nav_container{
        .btn_holder{
            flex-direction: column;
            .link{
                align-self: flex-start;
            }
        }
    }
}
</style>