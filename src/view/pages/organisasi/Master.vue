<template>
  <div>
    <b-card>
      <b-card-title class="col-12">
        Master Organisasi
        <b-button
          variant="primary"
          class="pull-right"
          @click="$router.push('/organisasi/tambah')"
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
        :items="getOrganisasi"
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
import { GET_ORGANISASI } from "@/core/services/store/organisasi.module";

export default {
  name: "masterOrganisasi",
  data() {
    return {
      state: null,
      sortBy: "name",
      sortDesc: false,
      filter: "",
      fields: [
        { key: "kode", sortable: true, label: "Kode" },
        { key: "nama", sortable: true, label: "Nama" }
      ]
    };
  },
  computed: {
    ...mapState({
      errors: state => state.organisasi.errors
    }),
    ...mapGetters(["getOrganisasi"])
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Organisasi", route: "master" },
      { title: "Master Organisasi" }
    ]);
    this.$store.dispatch(GET_ORGANISASI);
  },
  methods: {}
};
</script>
