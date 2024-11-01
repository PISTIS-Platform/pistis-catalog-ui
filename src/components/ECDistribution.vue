<template>
    <Distribution :class="`${pistisMode==='cloud' ? 'distributions__item-hidden' : ''}`" v-bind="$attrs">
        <template #additional-actions>
            <div class="add-btns">
                <a class="btn" :href="`${enrichmentUrl}?datasetId=${datasetId}&distributionId=${$attrs.distribution.id}`" target='_blank'>Data Enrichment</a>
                <a class="btn" :href="`${anonymizerFrontendUrl}?datasetId=${datasetId}&distribution=${$attrs.distribution.id}&language=en`" target='_blank'>Anonymize</a>
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
const anonymizerFrontendUrl = ENV.api.anonymizerFrontendUrl
let datasetId = route.params.ds_id.toString();

</script>

<style>
.distributions__item-hidden{
    .add-btns, .distribution-actions{
        display: none !important;
    }
}

.add-btns {
    display: flex;
    gap: .7rem;
    flex-direction: column !important;
    justify-content: flex-start;
    padding-top: .4rem;
    width: 100%;
    align-items: center;
}

.distribution-actions {
    display: flex;
    padding-left: 0;
    flex-direction: column !important;
    justify-content: flex-start !important;
    padding-right: 0 !important;
    border: 0 !important;
    gap: .7rem;
    margin-top:0 !important;
    align-items: center;
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
    align-self: center;
}

.actions-container{
    margin-left: 1rem;
    padding-top: 0 !important;
    width: 25%;

    .distribution-action, .btn{
        width: 150px;
        display: flex;
    }
}



.distribution-action {
    margin-right: 0 !important;
    margin-left: 0 !important;
}


@media screen and (max-width:1200px) {
    .actions-container{
        width: 30%;
    }
    .add-btns,
    .distribution-actions {
        display: flex;
        gap: .5rem;
        width: 100%;
    }

    .add-btns {
        display: flex;
        flex-direction: row;   
    }
}

@media screen and (max-width:876px) {
    .actions-container{
        width: 100%;
        margin-left: 0 !important;
        margin: .5rem;
    }
    .add-btns, .distribution-actions{
        width: 100% !important;
        .btn, .distribution-action{
            width: 100%;
            text-align: center !important;
            display: flex;
            align-items: center;
            justify-content: center !important
        }
       
    }
}
</style>