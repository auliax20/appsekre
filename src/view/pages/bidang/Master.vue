<template>
  <div>
    <b-card>
      <b-card-title class="col-12">
        Master Bidang
        <b-button
          variant="primary"
          class="pull-right"
          @click="$router.push('/bidang/tambah')"
        >
          <i class="fa fa-plus"></i> Tambah
        </b-button>
      </b-card-title>
      <b-input-group class="mb-4">
        <b-form-input v-model="filter" placeholder="Search" type="text" />
      </b-input-group>
      <b-table
        striped
        hover
        :items="getBidang"
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :filter="filter"
        sort-icon-right
      ></b-table>
    </b-card>
  </div>
</template>
<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { mapGetters, mapState } from "vuex";
import { GET_BIDANG } from "@/core/services/store/bidang.module";

export default {
  name: "masterBidang",
  data() {
    return {
      state: null,
      sortBy: "nama",
      sortDesc: false,
      filter: "",
      fields: [
        { key: "nama", sortable: true, label: "Nama" },
        { key: "kode", sortable: true, label: "Kode Bidang" },
        { key: "organisasi.nama", sortable: true, label: "Organisasi" }
      ]
    };
  },
  computed: {
    ...mapState({
      errors: state => state.bidang.errors
    }),
    ...mapGetters(["getBidang"])
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Bidang", route: "master" },
      { title: "Master Bidang" }
    ]);
    this.$store.dispatch(GET_BIDANG);
  },
  methods: {}
};
</script>
