<template>
  <v-card
    elevation="2"
    outlined
    shaped
    :loading="loading"
    class="mx-auto my-12"
    height="100%"
  >
    <v-card-title>Listar Mensajs</v-card-title>
    <v-card-text>
      <v-row>
        <v-text-field
          v-model="fechaInicio"
          label="Fecha de inicio"
          filled
          type="date"
        ></v-text-field>

        <v-text-field
          v-model="fechaFinal"
          label="Fecha final"
          filled
          type="date"
        ></v-text-field>
        <v-btn color="primary" @click="listar">Buscar</v-btn>
      </v-row>
      <v-row>
        <v-data-table
          :headers="headers"
          :items="data"
          item-key="name"
          class="elevation-1"
          :search="search"
          :custom-filter="filterOnlyCapsText"
        >
          <template v-slot:top>
            <v-text-field
              v-model="search"
              label="Buscar"
              class="mx-4"
            ></v-text-field>
          </template>
        </v-data-table>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      fechaInicio: "",
      fechaFinal: "",
      search: "",
      loading: false,
      data: []
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "Movil",
          align: "start",
          sortable: true,
          value: "movil"
        },
        { text: "Mensaje", value: "calories", sortable: false },
        { text: "Operador", value: "operador" },
        { text: "Fecha de respuesta", value: "fecha_response" },
        { text: "Numero corto", value: "numerocorto" },
        { text: "Glosa", value: "glosa" },
        { text: "Identificador de cliente", value: "identificadorcliente" }
      ];
    }
  },
  methods: {
    ...mapActions(["listSMS"]),
    filterOnlyCapsText(value, search) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value
          .toString()
          .toLocaleUpperCase()
          .indexOf(search) !== -1
      );
    },
    listar() {
      console.log(this.$refs.fechaInicio);
      if (this.fechaInicio !== "" && this.fechaFinal !== "")
        this.listSMS(this.fechaInicio, this.fechaFinal);
    }
  },
  created() {}
};
</script>
