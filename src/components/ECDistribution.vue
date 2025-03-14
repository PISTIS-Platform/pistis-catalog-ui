<template>
    <Distribution :class="`${pistisMode==='cloud' ? 'distributions__item-hidden' : ''}`" v-bind="$attrs">
        <template #additional-actions>
            <div class="add-btns">
                <!-- My Data -->
                 <!-- TODO: Button inactive if no accessUrl -->
                <button class="btn" @click="downloadFile">Download</button>
                <a class="btn" :href="`/srv/enrichment-ui?datasetId=${datasetId}&distributionId=${$attrs.distribution.id}&file_type=${$attrs.distribution.format.id}`">Data Enrichment</a>
                <a class="btn" :href="`/anonymizer?datasetId=${datasetId}&distribution=${$attrs.distribution.id}&language=en`">Anonymize</a>
            </div>
        </template>
    </Distribution>
</template>
<script setup>
    import { Distribution, DistributionActions, useRuntimeEnv } from '@piveau/piveau-hub-ui-modules';
    import { useRoute } from 'vue-router';
    import { useAttrs, getCurrentInstance } from 'vue';
    import axios from 'axios';

    const { appContext } = getCurrentInstance();

    const $keycloak = appContext.config.globalProperties.$keycloak;

    const $attrs = useAttrs();
    const ENV = useRuntimeEnv()
    const route = useRoute()
    const pistisMode = ENV.api.pistisMode

    // Determine filename based on title if possible:
    let downloadFileName = "download";
    const titleObject = $attrs.distribution.title;
    if (titleObject) {
      const keys = Object.keys(titleObject);
      if (keys) {
        if (keys.includes("en")) {
          downloadFileName = titleObject.en;
        } else {
          downloadFileName = titleObject[keys[0]];
        }
      }
    }

    let datasetId = route.params.ds_id.toString();

    async function downloadFile() {
        const accessUrl = $attrs.distribution.accessUrl[0];
        const token = $keycloak.token;

        try {
          console.log("accessUrl", accessUrl, $attrs.distribution.format.id)

          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            responseType: 'blob',
          };
          if ($attrs.distribution.format.id === "SQL") {
            config.params = { JSON_output: "False" };
          }

          const response = await axios.get(accessUrl, config);

          const contentTypeHeader = response.headers['content-type'];
          const contentType = contentTypeHeader.split(';')[0].trim();

            // Map Content-Type to file extensions
            const mimeToExtensionMap = {
            'text/csv': 'csv',
            'application/json': 'json',
            'application/pdf': 'pdf',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
            'text/plain': 'txt',
            };

            // Determine the file extension from Content-Type
            const fileExtension = mimeToExtensionMap[contentType] || 'bin'; // Default to 'bin' for unknown types

            // Do not do this anymore: now use the title to compose the download filename
            //
            // // Determine the filename (use Content-Disposition if provided)
            // const contentDisposition = response.headers['content-disposition'];
            // const fileName = contentDisposition
            // ? contentDisposition.split('filename=')[1].replace(/"/g, '')
            // : `downloaded_file.${fileExtension}`; // Use default filename with detected extension
            const fileName = `${downloadFileName}.${fileExtension}`;

            // Create a Blob URL with the detected Content-Type
            const url = window.URL.createObjectURL(new Blob([response.data], { type: contentType }));

            // Create a temporary link and trigger download
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName; // Use the dynamically determined filename
            document.body.appendChild(a);
            a.click();

            // Clean up
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Error downloading file:', error);
            alert('Failed to download the file.');
        }
    }
</script>

<style lang="scss">
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
