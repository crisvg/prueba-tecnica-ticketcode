<template>
  <v-card
    elevation="2"
    outlined
    shaped
    :loading="loading"
    class="mx-auto my-12"
    height="100%"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-title>Nuevo Mensaje</v-card-title>
    <v-card-text>
      <v-form ref="formNumber" v-model="validNumber" lazy-validation>
        <v-row no-gutters>
          <v-col cols="12" sm="4" md="3">
            <v-autocomplete
              v-model="colombia"
              label="Prefijo"
              :items="codes"
              :filter="customFilter"
              solo
              dense
            >
              <template v-slot:selection="data">
                <v-list-item-icon>
                  <v-icon>mdi-flag</v-icon>
                </v-list-item-icon>
                <v-list-item-content
                  v-text="data.item.PHONE_CODE"
                ></v-list-item-content>
              </template>

              <template v-slot:item="data">
                <v-list-item-icon>
                  <v-icon>mdi-flag</v-icon>
                </v-list-item-icon>
                <v-list-item-content
                  v-text="data.item.ESPAÑOL"
                ></v-list-item-content>
              </template>
            </v-autocomplete>
          </v-col>

          <v-col cols="12" sm="7" md="8">
            <v-text-field
              v-model="celular"
              label="Numero"
              clearable
              counter
              maxlength="10"
              :rules="[rules.required, rules.min, rules.max]"
              type="number"
              class="mx-2"
            ></v-text-field>
          </v-col>

          <v-col cols="1">
            <v-btn color="primary" @click="addNumber" small class="ma-0 px-1">
              <span>Agregar</span>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>

      <v-form ref="formMessage" v-model="validMessage" lazy-validation>
        <v-row>
          <v-col>
            <v-chip
              v-for="(item, n) in numeros"
              :key="n"
              close
              @click:close="removeNumber"
              v-text="item"
            ></v-chip>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-textarea
              v-model="message"
              counter
              label="Mensaje"
              :rules="[rules.required, rules.counter]"
              clearable
            ></v-textarea>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" text :loading="loading" @click="send">
        Enviar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
/* @ is an alias to /src*/
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {},

  data: () => ({
    loading: false,
    validNumber: true,
    validMessage: true,
    colombia: {
      ESPAÑOL: "Colombia",
      ENGLISH: "Colombia",
      ISO2: "CO",
      ISO3: "COL",
      PHONE_CODE: 57
    },
    celular: "",
    message: "",
    numeros: [],
    rules: {
      required: value => !!value || "Required.",
      max: v => v.length <= 10 || "Maximo 10 digitos",
      min: v => v.length == 10 || "Minimo 10 digitos",
      counter: v => v.length <= 160 || "Maximo 160 characteres"
    }
  }),
  computed: {
    ...mapState(["codes"])
  },
  methods: {
    ...mapActions(["sendSMS"]),
    customFilter(item, queryText) {
      const textOne = item.ESPAÑOL.toLowerCase();
      const textTwo = item.PHONE_CODE.toString();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },

    send() {
      let s = (message, movil) => {
        let payload = {
          mensaje: message,
          movil: "57" + movil,
          identificadorcliente: "Codigo A123"
        };

        this.sendSMS(payload);
      };

      if (this.numeros.length > 0 && this.$refs.formMessage.validate()) {
        this.numeros.forEach(e => {
          s(this.message, e);
        });
        this.numeros = [];
        this.message = "";
        this.$refs.formMessage.resetValidation();
      } else if (
        this.$refs.formNumber.validate() &&
        this.$refs.formMessage.validate()
      ) {
        s(this.message, this.celular);
        this.message = "";
        this.celular = "";
        this.$refs.formMessage.resetValidation();
        this.$refs.formNumber.resetValidation();
      }
    },
    addNumber() {
      if (this.$refs.formNumber.validate()) {
        this.numeros.push(this.celular);
        this.celular = "";
        this.$refs.formNumber.resetValidation();
      }
    },
    removeNumber(pos) {
      this.numeros.splice(pos - 1, 1);
    }
  }
};
</script>
