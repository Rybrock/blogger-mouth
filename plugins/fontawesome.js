import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEbay, faAmazon } from '@fortawesome/free-brands-svg-icons'
import { faBars, faHouse, faQuestion, faCircleInfo, faAddressCard, faRightToBracket, faRightFromBracket, faCirclePlus, faCircleCheck, faUpload, faTrashAlt, faXmark, faArrowLeft, faLayerGroup, faPlus, faPlay, faStar, faLock } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'




library.add(faBars, faHouse, faQuestion, faCircleInfo, faAddressCard, faRightToBracket, faRightFromBracket, faCirclePlus, faCircleCheck, faUpload, faTrashAlt, faXmark, faArrowLeft, faLayerGroup, faEbay, faAmazon, faPlus, faPlay, faStar, faEnvelope, faLock)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})