<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <PresentationComponent></PresentationComponent>
        <BenefitsComponent></BenefitsComponent>
        <GlobalizationComponent></GlobalizationComponent>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import PresentationComponent from './PresentationComponent.vue'
import BenefitsComponent from './BenefitsComponent.vue'
import GlobalizationComponent from './GlobalizationComponent.vue'
import FooterComponent from './FooterComponent.vue'

export default {
    name: 'Main',
    components: {
        HeaderComponent,
        PresentationComponent,
        BenefitsComponent,
        GlobalizationComponent,
        FooterComponent
    },
}
</script>