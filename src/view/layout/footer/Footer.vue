<template>
  <!-- begin:: Footer -->
  <div class="footer bg-white py-4 d-flex flex-lg-column" id="kt_footer">
    <div
      class="d-flex align-items-center justify-content-between"
      v-bind:class="{ 'container-fluid': widthFluid, container: !widthFluid }"
    >
      <div class="text-dark">
        <span class="text-muted font-weight-bold mr-2">
          2020 &nbsp;&copy;&nbsp;
        </span>
        <a href="#" target="_blank" class="text-dark-75 text-hover-primary">
          BADAN KESBANGPOL KAB. LIMA PULUH KOTA
        </a>
      </div>
    </div>
  </div>
  <!-- end:: Footer -->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "KTFooter",
  computed: {
    ...mapGetters(["layoutConfig"]),

    /**
     * Check if footer container is fluid
     */
    widthFluid() {
      return this.layoutConfig("footer.width") === "fluid";
    }
  }
};
</script>
