<template>
    <div class="mb-0">
      <nav id="piveau-header" class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <slot name="logo">
          <a class="navbar-brand" href="/"><img src="../assets/img/PISTIS_logo_white.png" height="40"></a>
        </slot>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="d-flex justify-content-between w-100">
            <ul class="navbar-nav ml-2">
              <li v-for="(navItem, i) in navItems" :key="`navItem@${i}`" class="nav-item px-3">
                <slot name="nav-item" v-bind:nav-item="navItem">
                  <component v-if="navItem.to && navItem.show === true" :is="isNuxt ? 'nuxt-link' : 'router-link'"
                    :to="navItem.to" class="nav-link" active-class="router-link-active">
                    {{ navItem.title }}
                  </component>
                  <a v-else-if="navItem.show === true" :href="navItem.href" class="nav-link">
                    {{ navItem.title }}
                  </a>
                </slot>
              </li>
            </ul>
            <div class="ml-5 flex-row ml-md-auto d-md-flex" role="navigation">
              <slot name="right">
                <!--Auth button-->
                <!-- <ul v-if="enableAuthentication" class="navbar-nav">
                  <li
                    class="nav-item"
                  >
                    <button class="btn btn-link text-light" @click="$emit(authenticated ? 'logout' : 'login')">
                      <font-awesome-icon icon="user" /> {{ authenticated ? $t('message.header.subnav.logout') : $t('message.header.subnav.login') }}
                    </button>
                  </li>
                </ul> -->
                <!-- Language box -->
                <div v-if="useLanguageSelector">
                  <div class="input-group">
                    <language-selector :languageObject="languageObject"
                      :override-locale="overrideLocale"></language-selector>
                  </div>
                </div>
              </slot>
            </div>
          </div>
        </div>
      </nav>
      <!-- <ul class="sub-nav navbar navbar-expand-lg bg-transparent">
        <li class="active">RSS Feed</li>
        <li>ATOM Feed</li>
      </ul> -->
    </div>
  </template>
  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import Logo from './Logo.vue';
  import LanguageSelector from './LanguageSelector.vue';
  
  export default {
    name: 'Piveau-Header',
    data() {
      return {
        isNuxt: false,
      };
    },
    components: {
      Logo,
      LanguageSelector,
      FontAwesomeIcon,
    },
    props: {
      project: {
        type: String,
        default: 'hub',
      },
      locale: {
        type: String,
        default: 'en',
      },
      useLanguageSelector: {
        type: Boolean,
        default: true,
      },
      navItemsHook: {
        type: Function,
        default: (navItems) => navItems,
      },
      showDatasets: {
        type: Boolean,
        default: true,
      },
      showCatalogues: {
        type: Boolean,
        default: true,
      },
      showSparql: {
        type: Boolean,
        default: false,
      },
      showMetadataQuality: {
        type: Boolean,
        default: true,
      },
      hrefDatasets: {
        type: String,
        default: undefined,
      },
      hrefCatalogues: {
        type: String,
        default: undefined,
      },
      hrefSparql: {
        type: String,
        default: undefined,
      },
      hrefMetadataQuality: {
        type: String,
        default: undefined,
      },
      languageObject: {
        type: Array,
        default() {
          return []
        }
      },
      headerBackground: {
        default: 'linear-gradient(0deg, rgba(0,154,165,1) 0%, rgba(26,52,113,1) 100%)',
      },
      overrideLocale: {
        type: String,
        default: '',
      },
      enableAuthentication: {
        type: Boolean,
        default: false,
      },
      authenticated: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      navItems() {
        const navItems = [
          /** ToDo add route to landing? Add/change weblate translation */
          {
            title: this.$t('message.header.navigation.data.datasets'),
            href: this.hrefDatasets || `/data/datasets?locale=${this.$route.query.locale}`,
            show: this.showDatasets,
          },
          {
            title: this.$t('message.header.navigation.data.catalogs'),
            href: this.hrefCatalogues || `/data/catalogues?locale=${this.$route.query.locale}`,
            show: this.showCatalogues,
          },
          {
            title: this.$t('message.header.navigation.data.sparqlsearch'),
            href: this.hrefSparql || '/sparql',
            show: this.showSparql,
          },
          /* {
            title: this.$t('message.header.navigation.data.metadataquality'),
            href: this.hrefMetadataQuality || `/mqa?locale=${this.$route.query.locale}`,
            show: this.showMetadataQuality,
          }, */
        ];
  
        this.adjustNavItemsToProject(navItems, this.project);
  
        return this.navItemsHook(navItems);
      },
    },
    created() {
      // Check if we are in Nuxt by checking nuxt-only properties in vm
      // https://nuxtjs.org/docs/concepts/context-helpers/#nuxt-the-nuxt-helper
      this.isNuxt = !!this.$nuxt;
    },
    methods: {
      adjustNavItemsToProject(navItems, project) {
        const navigationItems = navItems;
        switch (project) {
          case 'hub':
            if (!this.hrefDatasets) {
              navigationItems[0].to = { name: 'Datasets', query: { locale: this.$route.query.locale } };
            }
            if (!this.hrefCatalogues) {
              navigationItems[1].to = { name: 'Catalogues', query: { locale: this.$route.query.locale } };
            }
            if (!this.hrefSparql) {
              navigationItems[2].to = { name: 'SparqlEdit', query: { locale: this.$route.query.locale } };
            }
            break;
          case 'metrics':
            if (!this.hrefMetadataQuality) {
              navigationItems[3].to = { name: 'Dashboard', query: { locale: this.$route.query.locale } };
            }
            break;
          default:
            break;
        }
      },
    },
  };
  
  </script>
  
  <style lang="scss" scoped>
  // @import '../styles/_variables.scss';
  @import '../styles/custom_theme.scss';
  
  .navbar {
    background: #5632d0 !important;
  }
  
  #piveau-header {
    position: relative;
  }
  
  .piveau-logo {
    max-height: 55px;
    width: auto;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  
  .nav-link {
    color: #fff !important;
    font-weight: 500;
  
    &:hover {
      background-color: #613debbf !important;
      border-radius: 0.375rem;
    }
  }
  
  .router-link-active {
    color: #fff !important;
    font-size: 1rem;
    background-color: #462ba8;
    border-radius: 0.375rem;
    padding: .5rem .75rem !important;
  
    &:hover {
      color: rgba(250, 250, 250, 0.9) !important;
    }
  }
  
  .sub-nav {
    background-color: transparent !important;
    height: 3rem;
    display: flex;
    align-items: end;
    gap: 2rem;
    list-style-type: none;
    color: #18181b;
    font-size: .875rem;
    line-height: 1.25rem;
    padding-bottom: 0 !important;
    -webkit-box-shadow: 0px 11px 40px -14px #D4D4D8;
    box-shadow: 0px 11px 40px -14px #D4D4D8;
    border-bottom: .1px solid #d4d4d8;
  
    li {
      padding-bottom: .8rem;
      border-bottom: 2px solid transparent;
    }
  
    li:hover {
      border-bottom: 2px solid #613deb;
      cursor: pointer;
    }
  
    .active {
      border-bottom: 2px solid #613deb;
    }
  }
  
  </style>
  





  

<template>
    <div id="piveau-footer" class="p-5 d-flex justify-content-center">
      <div class="w-33">
        <h4>Information</h4>
  
        <ul>
          <li class="mb-2">
            <router-link to="/imprint">Impressum</router-link>
          </li>
          <li class="mb-2">
            <router-link to="/privacypolicy">Datenschutz</router-link>
          </li>
        </ul>
      </div>
      <div class="w-33">
        <h4></h4>
      </div>
      <div class="w-33">
        <h4></h4>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'PiveauFooter',
    inheritAttrs: false,
    props: {
  
    },
    data() {
      return {
        isNuxt: false
      }
    }
  };
  </script>
  
  <style lang="scss">
  // @import '../styles/footer.scss';
  @import '../styles/custom_theme.scss';
  
  
  #piveau-footer {
    margin-top: 60px;
    padding: 60px 0 160px 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #FFF;
    text-align: left;
    background-color: #3b2b84;
  
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  
    a {
      color: white;
    }
  
  }
  
  .w-33 {
    min-width: 33%;
  }
  
  /***********************************
      LAYOUT & TYPOGRAPHY
  ***********************************/
  
  #piveau-footer .container {
    max-width: 1340px !important;
  }
  
  #piveau-footer *:not(.far):not(.fas):not(.fab) {
    font-family: Helvetica, Arial, sans-serif;
  }
  
  /***********************************
      TOP FOOTER
  ***********************************/
  #piveau-footer #footer_first {
    background: $secondary-blue;
    padding-top: 35px;
    padding-bottom: 20px;
  }
  
  #piveau-footer #footer_first .region-footer-first-left,
  #piveau-footer #footer_first .region-footer-first-middle,
  #piveau-footer #footer_first .region-footer-first-right {
    padding-bottom: 25px;
  }
  
  #piveau-footer #footer_first {
    font-size: 1em;
    font-weight: normal;
    color: $primary;
  }
  
  #piveau-footer .btn.btn-footer {
    background-color: $primary;
    border-color: $primary;
    // border-radius: 4px;
  }
  
  #piveau-footer .btn.btn-footer:hover {
    background-color: #196fd2;
    border-color: #196fd2;
  }
  
  /***********************************
  BOTTOM SITE BRANDING
  ***********************************/
  #piveau-footer #footer_first #block-sitebranding {
    margin-bottom: 25px;
  }
  
  // #piveau-footer #footer_first #block-sitebranding > a {
  //   float: left;
  // }
  // #piveau-footer #footer_first #block-sitebranding img {
  //   height: 60px;
  //   margin-right: 10px;
  // }
  #piveau-footer #footer_first #block-sitebranding .site-branding__text a {
    line-height: 60px;
    font-size: 20px;
    color: #0F62AE;
    text-transform: uppercase;
    font-weight: 300;
  }
  
  #piveau-footer #footer_first #block-edp3-branding .site-branding__text a strong {
    font-weight: bold;
  }
  
  /***********************************
  FUNDED BY NOTICE
  ***********************************/
  #piveau-footer #footer_first #block-fundedby img.fundedby {
    height: 40px;
    width: 60px;
    float: none;
    margin-right: 10px;
  }
  
  #piveau-footer #footer_first #block-fundedby p {
    margin: 0;
    line-height: 40px;
    font-size: 14px;
    color: $primary;
  }
  
  
  /***********************************
      HELP US IMPROVE
  ***********************************/
  #piveau-footer #footer_first #block-helpusimprove {
    margin-top: 25px;
    margin-bottom: 15px;
  }
  
  #piveau-footer #footer_first #block-helpusimprove p {
    line-height: 20px;
  }
  
  #piveau-footer #footer_first #block-helpusimprove p a {
    color: $primary;
    font-size: 14px;
  }
  
  /***********************************
  FOLLOW US
  ***********************************/
  #piveau-footer #footer_first #block-followuson ul {
    margin: 25px 0 0 0;
    padding: 0;
  }
  
  #piveau-footer #footer_first #block-followuson ul li {
    list-style-type: none;
    overflow: hidden;
  }
  
  #piveau-footer #footer_first #block-followuson ul li a {
    color: $primary;
    line-height: 20px;
    display: inline-block;
    margin-bottom: 11px;
    position: relative;
  }
  
  #piveau-footer #footer_first #block-followuson ul li a:hover {
    color: #196fd2;
    text-decoration: none;
  }
  
  #piveau-footer #footer_first #block-followuson ul li a:before {
    font-family: "Font Awesome 5 Brands";
    font-weight: 900;
    margin-right: 10px;
    font-size: 30px;
    position: relative;
    top: 5px;
  }
  
  /***********************************
  RESPONSIVE
  ***********************************/
  @media screen and (min-width: 768px) and (max-width:1090px) {
    #piveau-footer #footer_first #block-sitebranding .site-branding__text a {
      line-height: 1;
      width: 150px;
      padding-top: 13px;
      padding-left: 5px;
      display: inline-block;
    }
  
    #piveau-footer #footer_first #block-fundedby p:nth-child(2) {
      line-height: 1;
      width: 180px;
      padding-top: 5px;
    }
  }
  
  @media screen and (max-width: 715px) {
    #piveau-footer #footer_first #block-sitebranding .site-branding__text a {
      line-height: 1;
      width: 150px;
      padding-top: 13px;
      padding-left: 5px;
      display: inline-block;
    }
  }
  </style>
  