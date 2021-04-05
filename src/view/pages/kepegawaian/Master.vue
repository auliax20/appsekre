<template>
  <div>
    <b-card>
      <b-card-title class="col-12">
        Master Kepegawaian
        <b-button
          variant="primary"
          class="pull-right"
          @click="$router.push('/kepegawaian/tambah')"
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
        :items="getPegawai"
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
import { GET_PEGAWAI } from "@/core/services/store/pegawai.module";

export default {
  name: "masterKepegawaian",
  data() {
    return {
      state: null,
      sortBy: "name",
      sortDesc: false,
      filter: "",
      fields: [
        { key: "name", sortable: true, label: "Nama" },
        { key: "email", sortable: true, label: "Email" },
        { key: "pangkat", sortable: true },
        { key: "golongan", sortable: true },
        { key: "bidang.nama", sortable: true, label: "Bidang" },
        { key: "active", sortable: true, label: "Status" }
      ]
    };
  },
  computed: {
    ...mapState({
      errors: state => state.pegawai.errors
    }),
    ...mapGetters(["getPegawai"])
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Kepegawaian", route: "master" },
      { title: "Master Kepegawaian" }
    ]);
    this.$store.dispatch(GET_PEGAWAI);
  },
  methods: {}
};
</script>
