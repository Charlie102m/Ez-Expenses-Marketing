<template>
  <div>
    <HeroImage />
    <DemoSection />
    <MobileFriendly />
    <ResponseSection />
    <FooterImage />
  </div>
</template>

<script>
import HeroImage from "@/components/HeroImage.vue";
import DemoSection from "@/components/DemoSection.vue";
import MobileFriendly from "@/components/MobileFriendly.vue";
import ResponseSection from "@/components/ResponseSection.vue";
import FooterImage from "@/components/FooterImage.vue";
export default {
  components: {
    HeroImage,
    DemoSection,
    MobileFriendly,
    ResponseSection,
    FooterImage
  },
  created() {}
};
</script>

<style>
</style>