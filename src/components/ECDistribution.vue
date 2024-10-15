<template>

    <Distribution v-bind="$attrs">

        <template #additional-actions>
            <div class="add-btns">
                <button class="btn">Anonymize</button>
                <!-- <button class="btn">Delete</button> -->
            </div>
        </template>

    </Distribution>
</template>
<script setup>
import { Distribution, DistributionActions } from '@piveau/piveau-hub-ui-modules';
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