<template>

    <Distribution :class="`${pistisMode==='cloud' ? 'distributions__item-hidden' : ''}`" v-bind="$attrs">

        <template #additional-actions>
            
            <div class="add-btns">
                <a class="btn" :href="`${enrichmentUrl}?datasetId=${datasetId}&distributionId=${$attrs.distribution.id}`" target='_blank'>Data Enrichment</a>
                <button class="btn">Anonymize</button>
               
            </div>
        </template>

    </Distribution>
</template>
<script setup>
import { Distribution, DistributionActions, useRuntimeEnv } from '@piveau/piveau-hub-ui-modules';
import { useRoute } from 'vue-router';


const ENV = useRuntimeEnv()
const route = useRoute()

const pistisMode = ENV.api.pistisMode

const enrichmentUrl = ENV.api.enrichmentUrl


let datasetId = route.params.ds_id.toString();

</script>

<style>
@media screen and (max-width:768px) {

}
@media screen and (max-width:1200px) {

    .add-btns,
    .distribution-actions {
        display: flex;
        gap: .5rem;
        width: 50%;
    }

    .add-btns {
        display: flex;
        flex-direction: row;
        
    }
}

.distributions__item-hidden{
    .add-btns, .distribution-actions{
        display: none !important;
    }
}

.add-btns {
    display: flex;
    gap: .7rem;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: .4rem;
    margin: 0 .5rem;

}

.distribution-actions {
    display: flex;
    padding-right: 0 !important;
    border: 0 !important;
    gap: .7rem
}

.distribution-action {
    margin-right: 0 !important;
}


.add-btns .btn {
    background-color: #705df7 !important;
    color: #fff !important;
    outline: none;
    border: none;
    border-radius: 0.375rem !important;
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding: 0.325rem 0.625rem !important;
    margin-top: 0;
    margin-left: 0;
    min-height: 33px;
}
</style>