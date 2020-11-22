import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
Vue.use(Vuex);

const credentials = btoa("W2fdV638SLDTi:tcAwb357Vdz2T");
const basicAuth = "Basic " + credentials;

export default new Vuex.Store({
  state: {
    codes: [
      {
        ESPAÑOL: "Afganistán",
        ENGLISH: "Afghanistan",
        ISO2: "AF",
        ISO3: "AFG",
        PHONE_CODE: 93
      },
      {
        ESPAÑOL: "Albania",
        ENGLISH: "Albania",
        ISO2: "AL",
        ISO3: "ALB",
        PHONE_CODE: 355
      },
      {
        ESPAÑOL: "Alemania",
        ENGLISH: "Germany",
        ISO2: "DE",
        ISO3: "DEU",
        PHONE_CODE: 49
      },
      {
        ESPAÑOL: "Algeria",
        ENGLISH: "Algeria",
        ISO2: "DZ",
        ISO3: "DZA",
        PHONE_CODE: 213
      },
      {
        ESPAÑOL: "Andorra",
        ENGLISH: "Andorra",
        ISO2: "AD",
        ISO3: "AND",
        PHONE_CODE: 376
      },
      {
        ESPAÑOL: "Angola",
        ENGLISH: "Angola",
        ISO2: "AO",
        ISO3: "AGO",
        PHONE_CODE: 244
      },
      {
        ESPAÑOL: "Anguila",
        ENGLISH: "Anguilla",
        ISO2: "AI",
        ISO3: "AIA",
        PHONE_CODE: "1 264"
      },
      {
        ESPAÑOL: "Antártida",
        ENGLISH: "Antarctica",
        ISO2: "AQ",
        ISO3: "ATA",
        PHONE_CODE: 672
      },
      {
        ESPAÑOL: "Antigua y Barbuda",
        ENGLISH: "Antigua and Barbuda",
        ISO2: "AG",
        ISO3: "ATG",
        PHONE_CODE: "1 268"
      },
      {
        ESPAÑOL: "Antillas Neerlandesas",
        ENGLISH: "Netherlands Antilles",
        ISO2: "AN",
        ISO3: "ANT",
        PHONE_CODE: 599
      },
      {
        ESPAÑOL: "Arabia Saudita",
        ENGLISH: "Saudi Arabia",
        ISO2: "SA",
        ISO3: "SAU",
        PHONE_CODE: 966
      },
      {
        ESPAÑOL: "Argentina",
        ENGLISH: "Argentina",
        ISO2: "AR",
        ISO3: "ARG",
        PHONE_CODE: 54
      },
      {
        ESPAÑOL: "Armenia",
        ENGLISH: "Armenia",
        ISO2: "AM",
        ISO3: "ARM",
        PHONE_CODE: 374
      },
      {
        ESPAÑOL: "Aruba",
        ENGLISH: "Aruba",
        ISO2: "AW",
        ISO3: "ABW",
        PHONE_CODE: 297
      },
      {
        ESPAÑOL: "Australia",
        ENGLISH: "Australia",
        ISO2: "AU",
        ISO3: "AUS",
        PHONE_CODE: 61
      },
      {
        ESPAÑOL: "Austria",
        ENGLISH: "Austria",
        ISO2: "AT",
        ISO3: "AUT",
        PHONE_CODE: 43
      },
      {
        ESPAÑOL: "Azerbayán",
        ENGLISH: "Azerbaijan",
        ISO2: "AZ",
        ISO3: "AZE",
        PHONE_CODE: 994
      },
      {
        ESPAÑOL: "Bahamas",
        ENGLISH: "Bahamas",
        ISO2: "BS",
        ISO3: "BHS",
        PHONE_CODE: "1 242"
      },
      {
        ESPAÑOL: "Bahrein",
        ENGLISH: "Bahrain",
        ISO2: "BH",
        ISO3: "BHR",
        PHONE_CODE: 973
      },
      {
        ESPAÑOL: "Bangladesh",
        ENGLISH: "Bangladesh",
        ISO2: "BD",
        ISO3: "BGD",
        PHONE_CODE: 880
      },
      {
        ESPAÑOL: "Barbados",
        ENGLISH: "Barbados",
        ISO2: "BB",
        ISO3: "BRB",
        PHONE_CODE: "1 246"
      },
      {
        ESPAÑOL: "Bélgica",
        ENGLISH: "Belgium",
        ISO2: "BE",
        ISO3: "BEL",
        PHONE_CODE: 32
      },
      {
        ESPAÑOL: "Belice",
        ENGLISH: "Belize",
        ISO2: "BZ",
        ISO3: "BLZ",
        PHONE_CODE: 501
      },
      {
        ESPAÑOL: "Benín",
        ENGLISH: "Benin",
        ISO2: "BJ",
        ISO3: "BEN",
        PHONE_CODE: 229
      },
      {
        ESPAÑOL: "Bhután",
        ENGLISH: "Bhutan",
        ISO2: "BT",
        ISO3: "BTN",
        PHONE_CODE: 975
      },
      {
        ESPAÑOL: "Bielorrusia",
        ENGLISH: "Belarus",
        ISO2: "BY",
        ISO3: "BLR",
        PHONE_CODE: 375
      },
      {
        ESPAÑOL: "Birmania",
        ENGLISH: "Myanmar",
        ISO2: "MM",
        ISO3: "MMR",
        PHONE_CODE: 95
      },
      {
        ESPAÑOL: "Bolivia",
        ENGLISH: "Bolivia",
        ISO2: "BO",
        ISO3: "BOL",
        PHONE_CODE: 591
      },
      {
        ESPAÑOL: "Bosnia y Herzegovina",
        ENGLISH: "Bosnia and Herzegovina",
        ISO2: "BA",
        ISO3: "BIH",
        PHONE_CODE: 387
      },
      {
        ESPAÑOL: "Botsuana",
        ENGLISH: "Botswana",
        ISO2: "BW",
        ISO3: "BWA",
        PHONE_CODE: 267
      },
      {
        ESPAÑOL: "Brasil",
        ENGLISH: "Brazil",
        ISO2: "BR",
        ISO3: "BRA",
        PHONE_CODE: 55
      },
      {
        ESPAÑOL: "Brunéi",
        ENGLISH: "Brunei",
        ISO2: "BN",
        ISO3: "BRN",
        PHONE_CODE: 673
      },
      {
        ESPAÑOL: "Bulgaria",
        ENGLISH: "Bulgaria",
        ISO2: "BG",
        ISO3: "BGR",
        PHONE_CODE: 359
      },
      {
        ESPAÑOL: "Burkina Faso",
        ENGLISH: "Burkina Faso",
        ISO2: "BF",
        ISO3: "BFA",
        PHONE_CODE: 226
      },
      {
        ESPAÑOL: "Burundi",
        ENGLISH: "Burundi",
        ISO2: "BI",
        ISO3: "BDI",
        PHONE_CODE: 257
      },
      {
        ESPAÑOL: "Cabo Verde",
        ENGLISH: "Cape Verde",
        ISO2: "CV",
        ISO3: "CPV",
        PHONE_CODE: 238
      },
      {
        ESPAÑOL: "Camboya",
        ENGLISH: "Cambodia",
        ISO2: "KH",
        ISO3: "KHM",
        PHONE_CODE: 855
      },
      {
        ESPAÑOL: "Camerún",
        ENGLISH: "Cameroon",
        ISO2: "CM",
        ISO3: "CMR",
        PHONE_CODE: 237
      },
      {
        ESPAÑOL: "Canadá",
        ENGLISH: "Canada",
        ISO2: "CA",
        ISO3: "CAN",
        PHONE_CODE: 1
      },
      {
        ESPAÑOL: "Chad",
        ENGLISH: "Chad",
        ISO2: "TD",
        ISO3: "TCD",
        PHONE_CODE: 235
      },
      {
        ESPAÑOL: "Chile",
        ENGLISH: "Chile",
        ISO2: "CL",
        ISO3: "CHL",
        PHONE_CODE: 56
      },
      {
        ESPAÑOL: "China",
        ENGLISH: "China",
        ISO2: "CN",
        ISO3: "CHN",
        PHONE_CODE: 86
      },
      {
        ESPAÑOL: "Chipre",
        ENGLISH: "Cyprus",
        ISO2: "CY",
        ISO3: "CYP",
        PHONE_CODE: 357
      },
      {
        ESPAÑOL: "Ciudad del Vaticano",
        ENGLISH: "Vatican City State",
        ISO2: "VA",
        ISO3: "VAT",
        PHONE_CODE: 39
      },
      {
        ESPAÑOL: "Colombia",
        ENGLISH: "Colombia",
        ISO2: "CO",
        ISO3: "COL",
        PHONE_CODE: 57
      },
      {
        ESPAÑOL: "Comoras",
        ENGLISH: "Comoros",
        ISO2: "KM",
        ISO3: "COM",
        PHONE_CODE: 269
      },
      {
        ESPAÑOL: "Congo",
        ENGLISH: "Congo",
        ISO2: "CG",
        ISO3: "COG",
        PHONE_CODE: 242
      },
      {
        ESPAÑOL: "Congo",
        ENGLISH: "Congo",
        ISO2: "CD",
        ISO3: "COD",
        PHONE_CODE: 243
      },
      {
        ESPAÑOL: "Corea del Norte",
        ENGLISH: "North Korea",
        ISO2: "KP",
        ISO3: "PRK",
        PHONE_CODE: 850
      },
      {
        ESPAÑOL: "Corea del Sur",
        ENGLISH: "South Korea",
        ISO2: "KR",
        ISO3: "KOR",
        PHONE_CODE: 82
      },
      {
        ESPAÑOL: "Costa de Marfil",
        ENGLISH: "Ivory Coast",
        ISO2: "CI",
        ISO3: "CIV",
        PHONE_CODE: 225
      },
      {
        ESPAÑOL: "Costa Rica",
        ENGLISH: "Costa Rica",
        ISO2: "CR",
        ISO3: "CRI",
        PHONE_CODE: 506
      },
      {
        ESPAÑOL: "Croacia",
        ENGLISH: "Croatia",
        ISO2: "HR",
        ISO3: "HRV",
        PHONE_CODE: 385
      },
      {
        ESPAÑOL: "Cuba",
        ENGLISH: "Cuba",
        ISO2: "CU",
        ISO3: "CUB",
        PHONE_CODE: 53
      },
      {
        ESPAÑOL: "Dinamarca",
        ENGLISH: "Denmark",
        ISO2: "DK",
        ISO3: "DNK",
        PHONE_CODE: 45
      },
      {
        ESPAÑOL: "Dominica",
        ENGLISH: "Dominica",
        ISO2: "DM",
        ISO3: "DMA",
        PHONE_CODE: "1 767"
      },
      {
        ESPAÑOL: "Ecuador",
        ENGLISH: "Ecuador",
        ISO2: "EC",
        ISO3: "ECU",
        PHONE_CODE: 593
      },
      {
        ESPAÑOL: "Egipto",
        ENGLISH: "Egypt",
        ISO2: "EG",
        ISO3: "EGY",
        PHONE_CODE: 20
      },
      {
        ESPAÑOL: "El Salvador",
        ENGLISH: "El Salvador",
        ISO2: "SV",
        ISO3: "SLV",
        PHONE_CODE: 503
      },
      {
        ESPAÑOL: "Emiratos Árabes Unidos",
        ENGLISH: "United Arab Emirates",
        ISO2: "AE",
        ISO3: "ARE",
        PHONE_CODE: 971
      },
      {
        ESPAÑOL: "Eritrea",
        ENGLISH: "Eritrea",
        ISO2: "ER",
        ISO3: "ERI",
        PHONE_CODE: 291
      },
      {
        ESPAÑOL: "Escocia",
        ENGLISH: "Scotland",
        ISO2: "GB",
        ISO3: "",
        PHONE_CODE: 44
      },
      {
        ESPAÑOL: "Eslovaquia",
        ENGLISH: "Slovakia",
        ISO2: "SK",
        ISO3: "SVK",
        PHONE_CODE: 421
      },
      {
        ESPAÑOL: "Eslovenia",
        ENGLISH: "Slovenia",
        ISO2: "SI",
        ISO3: "SVN",
        PHONE_CODE: 386
      },
      {
        ESPAÑOL: "España",
        ENGLISH: "Spain",
        ISO2: "ES",
        ISO3: "ESP",
        PHONE_CODE: 34
      },
      {
        ESPAÑOL: "Estados Unidos de América",
        ENGLISH: "United States of America",
        ISO2: "US",
        ISO3: "USA",
        PHONE_CODE: 1
      },
      {
        ESPAÑOL: "Estonia",
        ENGLISH: "Estonia",
        ISO2: "EE",
        ISO3: "EST",
        PHONE_CODE: 372
      },
      {
        ESPAÑOL: "Etiopía",
        ENGLISH: "Ethiopia",
        ISO2: "ET",
        ISO3: "ETH",
        PHONE_CODE: 251
      },
      {
        ESPAÑOL: "Filipinas",
        ENGLISH: "Philippines",
        ISO2: "PH",
        ISO3: "PHL",
        PHONE_CODE: 63
      },
      {
        ESPAÑOL: "Finlandia",
        ENGLISH: "Finland",
        ISO2: "FI",
        ISO3: "FIN",
        PHONE_CODE: 358
      },
      {
        ESPAÑOL: "Fiyi",
        ENGLISH: "Fiji",
        ISO2: "FJ",
        ISO3: "FJI",
        PHONE_CODE: 679
      },
      {
        ESPAÑOL: "Francia",
        ENGLISH: "France",
        ISO2: "FR",
        ISO3: "FRA",
        PHONE_CODE: 33
      },
      {
        ESPAÑOL: "Gabón",
        ENGLISH: "Gabon",
        ISO2: "GA",
        ISO3: "GAB",
        PHONE_CODE: 241
      },
      {
        ESPAÑOL: "Gales",
        ENGLISH: "Wales",
        ISO2: "GB",
        ISO3: "",
        PHONE_CODE: 44
      },
      {
        ESPAÑOL: "Gambia",
        ENGLISH: "Gambia",
        ISO2: "GM",
        ISO3: "GMB",
        PHONE_CODE: 220
      },
      {
        ESPAÑOL: "Georgia",
        ENGLISH: "Georgia",
        ISO2: "GE",
        ISO3: "GEO",
        PHONE_CODE: 995
      },
      {
        ESPAÑOL: "Ghana",
        ENGLISH: "Ghana",
        ISO2: "GH",
        ISO3: "GHA",
        PHONE_CODE: 233
      },
      {
        ESPAÑOL: "Gibraltar",
        ENGLISH: "Gibraltar",
        ISO2: "GI",
        ISO3: "GIB",
        PHONE_CODE: 350
      },
      {
        ESPAÑOL: "Granada",
        ENGLISH: "Grenada",
        ISO2: "GD",
        ISO3: "GRD",
        PHONE_CODE: "1 473"
      },
      {
        ESPAÑOL: "Grecia",
        ENGLISH: "Greece",
        ISO2: "GR",
        ISO3: "GRC",
        PHONE_CODE: 30
      },
      {
        ESPAÑOL: "Groenlandia",
        ENGLISH: "Greenland",
        ISO2: "GL",
        ISO3: "GRL",
        PHONE_CODE: 299
      },
      {
        ESPAÑOL: "Guadalupe",
        ENGLISH: "Guadeloupe",
        ISO2: "GP",
        ISO3: "GLP",
        PHONE_CODE: ""
      },
      {
        ESPAÑOL: "Guam",
        ENGLISH: "Guam",
        ISO2: "GU",
        ISO3: "GUM",
        PHONE_CODE: "1 671"
      },
      {
        ESPAÑOL: "Guatemala",
        ENGLISH: "Guatemala",
        ISO2: "GT",
        ISO3: "GTM",
        PHONE_CODE: 502
      },
      {
        ESPAÑOL: "Guayana Francesa",
        ENGLISH: "French Guiana",
        ISO2: "GF",
        ISO3: "GUF",
        PHONE_CODE: ""
      },
      {
        ESPAÑOL: "Guernsey",
        ENGLISH: "Guernsey",
        ISO2: "GG",
        ISO3: "GGY",
        PHONE_CODE: ""
      },
      {
        ESPAÑOL: "Guinea",
        ENGLISH: "Guinea",
        ISO2: "GN",
        ISO3: "GIN",
        PHONE_CODE: 224
      },
      {
        ESPAÑOL: "Guinea Ecuatorial",
        ENGLISH: "Equatorial Guinea",
        ISO2: "GQ",
        ISO3: "GNQ",
        PHONE_CODE: 240
      },
      {
        ESPAÑOL: "Guinea-Bissau",
        ENGLISH: "Guinea-Bissau",
        ISO2: "GW",
        ISO3: "GNB",
        PHONE_CODE: 245
      },
      {
        ESPAÑOL: "Guyana",
        ENGLISH: "Guyana",
        ISO2: "GY",
        ISO3: "GUY",
        PHONE_CODE: 592
      },
      {
        ESPAÑOL: "Haití",
        ENGLISH: "Haiti",
        ISO2: "HT",
        ISO3: "HTI",
        PHONE_CODE: 509
      },
      {
        ESPAÑOL: "Honduras",
        ENGLISH: "Honduras",
        ISO2: "HN",
        ISO3: "HND",
        PHONE_CODE: 504
      },
      {
        ESPAÑOL: "Hong kong",
        ENGLISH: "Hong Kong",
        ISO2: "HK",
        ISO3: "HKG",
        PHONE_CODE: 852
      },
      {
        ESPAÑOL: "Hungría",
        ENGLISH: "Hungary",
        ISO2: "HU",
        ISO3: "HUN",
        PHONE_CODE: 36
      },
      {
        ESPAÑOL: "India",
        ENGLISH: "India",
        ISO2: "IN",
        ISO3: "IND",
        PHONE_CODE: 91
      },
      {
        ESPAÑOL: "Indonesia",
        ENGLISH: "Indonesia",
        ISO2: "ID",
        ISO3: "IDN",
        PHONE_CODE: 62
      },
      {
        ESPAÑOL: "Inglaterra",
        ENGLISH: "England",
        ISO2: "GB",
        ISO3: "",
        PHONE_CODE: 44
      },
      {
        ESPAÑOL: "Irak",
        ENGLISH: "Iraq",
        ISO2: "IQ",
        ISO3: "IRQ",
        PHONE_CODE: 964
      },
      {
        ESPAÑOL: "Irán",
        ENGLISH: "Iran",
        ISO2: "IR",
        ISO3: "IRN",
        PHONE_CODE: 98
      },
      {
        ESPAÑOL: "Irlanda",
        ENGLISH: "Ireland",
        ISO2: "IE",
        ISO3: "IRL",
        PHONE_CODE: 353
      },
      {
        ESPAÑOL: "Irlanda del Norte",
        ENGLISH: "Northern Irland",
        ISO2: "GB",
        ISO3: "",
        PHONE_CODE: 44
      },
      {
        ESPAÑOL: "Isla Bouvet",
        ENGLISH: "Bouvet Island",
        ISO2: "BV",
        ISO3: "BVT",
        PHONE_CODE: ""
      },
      {
        ESPAÑOL: "Isla de Man",
        ENGLISH: "Isle of Man",
        ISO2: "IM",
        ISO3: "IMN",
        PHONE_CODE: 44
      },
      {
        ESPAÑOL: "Isla de Navidad",
        ENGLISH: "Christmas Island",
        ISO2: "CX",
        ISO3: "CXR",
        PHONE_CODE: 61
      },
      {
        ESPAÑOL: "Isla Norfolk",
        ENGLISH: "Norfolk Island",
        ISO2: "NF",
        ISO3: "NFK",
        PHONE_CODE: ""
      },
      {
        ESPAÑOL: "Islandia",
        ENGLISH: "Iceland",
        ISO2: "IS",
        ISO3: "ISL",
        PHONE_CODE: 354
      },
      {
        ESPAÑOL: "Islas Bermudas",
        ENGLISH: "Bermuda Islands",
        ISO2: "BM",
        ISO3: "BMU",
        PHONE_CODE: "1 441"
      },
      {
        ESPAÑOL: "Islas Caimán",
        ENGLISH: "Cayman Islands",
        ISO2: "KY",
        ISO3: "CYM",
        PHONE_CODE: "1 345"
      },
      {
        ESPAÑOL: "Islas Cocos (Keeling)",
        ENGLISH: "Cocos (Keeling) Islands",
        ISO2: "CC",
        ISO3: "CCK",
        PHONE_CODE: 61
      },
      {
        ESPAÑOL: "Islas Cook",
        ENGLISH: "Cook Islands",
        ISO2: "CK",
        ISO3: "COK",
        PHONE_CODE: 682
      },
      {
        ESPAÑOL: "Islas de Åland",
        ENGLISH: "Åland Islands",
        ISO2: "AX",
        ISO3: "ALA",
        PHONE_CODE: ""
      },
      {
        ESPAÑOL: "Islas Feroe",
        ENGLISH: "Faroe Islands",
        ISO2: "FO",
        ISO3: "FRO",
        PHONE_CODE: 298
      },
      {
        ESPAÑOL: "Islas Georgias del Sur y Sandwich del Sur",
        ENGLISH: "South Georgia and the South Sandwich Islands",
        ISO2: "GS",
        ISO3: "SGS",
        PHONE_CODE: ""
      },
      {
        ESPAÑOL: "Islas Heard y McDonald",
        ENGLISH: "Heard Island and McDonald Islands",
        ISO2: "HM",
        ISO3: "HMD",
        PHONE_CODE: ""
      },
      {
        ESPAÑOL: "Islas Maldivas",
        ENGLISH: "Maldives",
        ISO2: "MV",
        ISO3: "MDV",
        PHONE_CODE: 960
      },
      {
        ESPAÑOL: "Islas Malvinas",
        ENGLISH: "Falkland Islands (Malvinas)",
        ISO2: "FK",
        ISO3: "FLK",
        PHONE_CODE: 500
      },
      {
        ESPAÑOL: "Islas Marianas del Norte",
        ENGLISH: "Northern Mariana Islands",
        ISO2: "MP",
        ISO3: "MNP",
        PHONE_CODE: "1 670"
      },
      {
        ESPAÑOL: "Islas Marshall",
        ENGLISH: "Marshall Islands",
        ISO2: "MH",
        ISO3: "MHL",
        PHONE_CODE: 692
      },
      {
        ESPAÑOL: "Islas Pitcairn",
        ENGLISH: "Pitcairn Islands",
        ISO2: "PN",
        ISO3: "PCN",
        PHONE_CODE: 870
      },
      {
        ESPAÑOL: "Islas Salomón",
        ENGLISH: "Solomon Islands",
        ISO2: "SB",
        ISO3: "SLB",
        PHONE_CODE: 677
      },
      {
        ESPAÑOL: "Islas Turcas y Caicos",
        ENGLISH: "Turks and Caicos Islands",
        ISO2: "TC",
        ISO3: "TCA",
        PHONE_CODE: "1 649"
      },
      {
        ESPAÑOL: "Islas Ultramarinas Menores de Estados Unidos",
        ENGLISH: "United States Minor Outlying Islands",
        ISO2: "UM",
        ISO3: "UMI",
        PHONE_CODE: ""
      },
      {
        ESPAÑOL: "Islas Vírgenes Británicas",
        ENGLISH: "Virgin Islands",
        ISO2: "VG",
        ISO3: "VG",
        PHONE_CODE: "1 284"
      },
      {
        ESPAÑOL: "Islas Vírgenes de los Estados Unidos",
        ENGLISH: "United States Virgin Islands",
        ISO2: "VI",
        ISO3: "VIR",
        PHONE_CODE: "1 340"
      },
      {
        ESPAÑOL: "Israel",
        ENGLISH: "Israel",
        ISO2: "IL",
        ISO3: "ISR",
        PHONE_CODE: 972
      },
      {
        ESPAÑOL: "Italia",
        ENGLISH: "Italy",
        ISO2: "IT",
        ISO3: "ITA",
        PHONE_CODE: 39
      },
      {
        ESPAÑOL: "Jamaica",
        ENGLISH: "Jamaica",
        ISO2: "JM",
        ISO3: "JAM",
        PHONE_CODE: "1 876"
      },
      {
        ESPAÑOL: "Japón",
        ENGLISH: "Japan",
        ISO2: "JP",
        ISO3: "JPN",
        PHONE_CODE: 81
      },
      {
        ESPAÑOL: "Jersey",
        ENGLISH: "Jersey",
        ISO2: "JE",
        ISO3: "JEY",
        PHONE_CODE: ""
      },
      {
        ESPAÑOL: "Jordania",
        ENGLISH: "Jordan",
        ISO2: "JO",
        ISO3: "JOR",
        PHONE_CODE: 962
      },
      {
        ESPAÑOL: "Kazajistán",
        ENGLISH: "Kazakhstan",
        ISO2: "KZ",
        ISO3: "KAZ",
        PHONE_CODE: 7
      },
      {
        ESPAÑOL: "Kenia",
        ENGLISH: "Kenya",
        ISO2: "KE",
        ISO3: "KEN",
        PHONE_CODE: 254
      },
      {
        ESPAÑOL: "Kirgizstán",
        ENGLISH: "Kyrgyzstan",
        ISO2: "KG",
        ISO3: "KGZ",
        PHONE_CODE: 996
      },
      {
        ESPAÑOL: "Kiribati",
        ENGLISH: "Kiribati",
        ISO2: "KI",
        ISO3: "KIR",
        PHONE_CODE: 686
      },
      {
        ESPAÑOL: "Kuwait",
        ENGLISH: "Kuwait",
        ISO2: "KW",
        ISO3: "KWT",
        PHONE_CODE: 965
      },
      {
        ESPAÑOL: "Laos",
        ENGLISH: "Laos",
        ISO2: "LA",
        ISO3: "LAO",
        PHONE_CODE: 856
      },
      {
        ESPAÑOL: "Lesoto",
        ENGLISH: "Lesotho",
        ISO2: "LS",
        ISO3: "LSO",
        PHONE_CODE: 266
      },
      {
        ESPAÑOL: "Letonia",
        ENGLISH: "Latvia",
        ISO2: "LV",
        ISO3: "LVA",
        PHONE_CODE: 371
      },
      {
        ESPAÑOL: "Líbano",
        ENGLISH: "Lebanon",
        ISO2: "LB",
        ISO3: "LBN",
        PHONE_CODE: 961
      },
      {
        ESPAÑOL: "Liberia",
        ENGLISH: "Liberia",
        ISO2: "LR",
        ISO3: "LBR",
        PHONE_CODE: 231
      },
      {
        ESPAÑOL: "Libia",
        ENGLISH: "Libya",
        ISO2: "LY",
        ISO3: "LBY",
        PHONE_CODE: 218
      },
      {
        ESPAÑOL: "Liechtenstein",
        ENGLISH: "Liechtenstein",
        ISO2: "LI",
        ISO3: "LIE",
        PHONE_CODE: 423
      },
      {
        ESPAÑOL: "Lituania",
        ENGLISH: "Lithuania",
        ISO2: "LT",
        ISO3: "LTU",
        PHONE_CODE: 370
      },
      {
        ESPAÑOL: "Luxemburgo",
        ENGLISH: "Luxembourg",
        ISO2: "LU",
        ISO3: "LUX",
        PHONE_CODE: 352
      },
      {
        ESPAÑOL: "Macao",
        ENGLISH: "Macao",
        ISO2: "MO",
        ISO3: "MAC",
        PHONE_CODE: 853
      },
      {
        ESPAÑOL: "Macedônia",
        ENGLISH: "Macedonia",
        ISO2: "MK",
        ISO3: "MKD",
        PHONE_CODE: 389
      },
      {
        ESPAÑOL: "Madagascar",
        ENGLISH: "Madagascar",
        ISO2: "MG",
        ISO3: "MDG",
        PHONE_CODE: 261
      },
      {
        ESPAÑOL: "Malasia",
        ENGLISH: "Malaysia",
        ISO2: "MY",
        ISO3: "MYS",
        PHONE_CODE: 60
      },
      {
        ESPAÑOL: "Malawi",
        ENGLISH: "Malawi",
        ISO2: "MW",
        ISO3: "MWI",
        PHONE_CODE: 265
      },
      {
        ESPAÑOL: "Mali",
        ENGLISH: "Mali",
        ISO2: "ML",
        ISO3: "MLI",
        PHONE_CODE: 223
      },
      {
        ESPAÑOL: "Malta",
        ENGLISH: "Malta",
        ISO2: "MT",
        ISO3: "MLT",
        PHONE_CODE: 356
      },
      {
        ESPAÑOL: "Marruecos",
        ENGLISH: "Morocco",
        ISO2: "MA",
        ISO3: "MAR",
        PHONE_CODE: 212
      },
      {
        ESPAÑOL: "Martinica",
        ENGLISH: "Martinique",
        ISO2: "MQ",
        ISO3: "MTQ",
        PHONE_CODE: ""
      },
      {
        ESPAÑOL: "Mauricio",
        ENGLISH: "Mauritius",
        ISO2: "MU",
        ISO3: "MUS",
        PHONE_CODE: 230
      },
      {
        ESPAÑOL: "Mauritania",
        ENGLISH: "Mauritania",
        ISO2: "MR",
        ISO3: "MRT",
        PHONE_CODE: 222
      },
      {
        ESPAÑOL: "Mayotte",
        ENGLISH: "Mayotte",
        ISO2: "YT",
        ISO3: "MYT",
        PHONE_CODE: 262
      },
      {
        ESPAÑOL: "México",
        ENGLISH: "Mexico",
        ISO2: "MX",
        ISO3: "MEX",
        PHONE_CODE: 52
      },
      {
        ESPAÑOL: "Micronesia",
        ENGLISH: "Estados Federados de",
        ISO2: "FM",
        ISO3: "FSM",
        PHONE_CODE: 691
      },
      {
        ESPAÑOL: "Moldavia",
        ENGLISH: "Moldova",
        ISO2: "MD",
        ISO3: "MDA",
        PHONE_CODE: 373
      },
      {
        ESPAÑOL: "Mónaco",
        ENGLISH: "Monaco",
        ISO2: "MC",
        ISO3: "MCO",
        PHONE_CODE: 377
      },
      {
        ESPAÑOL: "Mongolia",
        ENGLISH: "Mongolia",
        ISO2: "MN",
        ISO3: "MNG",
        PHONE_CODE: 976
      },
      {
        ESPAÑOL: "Montenegro",
        ENGLISH: "Montenegro",
        ISO2: "ME",
        ISO3: "MNE",
        PHONE_CODE: 382
      },
      {
        ESPAÑOL: "Montserrat",
        ENGLISH: "Montserrat",
        ISO2: "MS",
        ISO3: "MSR",
        PHONE_CODE: "1 664"
      },
      {
        ESPAÑOL: "Mozambique",
        ENGLISH: "Mozambique",
        ISO2: "MZ",
        ISO3: "MOZ",
        PHONE_CODE: 258
      },
      {
        ESPAÑOL: "Namibia",
        ENGLISH: "Namibia",
        ISO2: "NA",
        ISO3: "NAM",
        PHONE_CODE: 264
      },
      {
        ESPAÑOL: "Nauru",
        ENGLISH: "Nauru",
        ISO2: "NR",
        ISO3: "NRU",
        PHONE_CODE: 674
      },
      {
        ESPAÑOL: "Nepal",
        ENGLISH: "Nepal",
        ISO2: "NP",
        ISO3: "NPL",
        PHONE_CODE: 977
      },
      {
        ESPAÑOL: "Nicaragua",
        ENGLISH: "Nicaragua",
        ISO2: "NI",
        ISO3: "NIC",
        PHONE_CODE: 505
      },
      {
        ESPAÑOL: "Niger",
        ENGLISH: "Niger",
        ISO2: "NE",
        ISO3: "NER",
        PHONE_CODE: 227
      },
      {
        ESPAÑOL: "Nigeria",
        ENGLISH: "Nigeria",
        ISO2: "NG",
        ISO3: "NGA",
        PHONE_CODE: 234
      },
      {
        ESPAÑOL: "Niue",
        ENGLISH: "Niue",
        ISO2: "NU",
        ISO3: "NIU",
        PHONE_CODE: 683
      },
      {
        ESPAÑOL: "Noruega",
        ENGLISH: "Norway",
        ISO2: "NO",
        ISO3: "NOR",
        PHONE_CODE: 47
      },
      {
        ESPAÑOL: "Nueva Caledonia",
        ENGLISH: "New Caledonia",
        ISO2: "NC",
        ISO3: "NCL",
        PHONE_CODE: 687
      },
      {
        ESPAÑOL: "Nueva Zelanda",
        ENGLISH: "New Zealand",
        ISO2: "NZ",
        ISO3: "NZL",
        PHONE_CODE: 64
      },
      {
        ESPAÑOL: "Omán",
        ENGLISH: "Oman",
        ISO2: "OM",
        ISO3: "OMN",
        PHONE_CODE: 968
      },
      {
        ESPAÑOL: "Países Bajos",
        ENGLISH: "Netherlands",
        ISO2: "NL",
        ISO3: "NLD",
        PHONE_CODE: 31
      },
      {
        ESPAÑOL: "Pakistán",
        ENGLISH: "Pakistan",
        ISO2: "PK",
        ISO3: "PAK",
        PHONE_CODE: 92
      },
      {
        ESPAÑOL: "Palau",
        ENGLISH: "Palau",
        ISO2: "PW",
        ISO3: "PLW",
        PHONE_CODE: 680
      },
      {
        ESPAÑOL: "Palestina",
        ENGLISH: "Palestine",
        ISO2: "PS",
        ISO3: "PSE",
        PHONE_CODE: ""
      },
      {
        ESPAÑOL: "Panamá",
        ENGLISH: "Panama",
        ISO2: "PA",
        ISO3: "PAN",
        PHONE_CODE: 507
      },
      {
        ESPAÑOL: "Papúa Nueva Guinea",
        ENGLISH: "Papua New Guinea",
        ISO2: "PG",
        ISO3: "PNG",
        PHONE_CODE: 675
      },
      {
        ESPAÑOL: "Paraguay",
        ENGLISH: "Paraguay",
        ISO2: "PY",
        ISO3: "PRY",
        PHONE_CODE: 595
      },
      {
        ESPAÑOL: "Perú",
        ENGLISH: "Peru",
        ISO2: "PE",
        ISO3: "PER",
        PHONE_CODE: 51
      },
      {
        ESPAÑOL: "Polinesia Francesa",
        ENGLISH: "French Polynesia",
        ISO2: "PF",
        ISO3: "PYF",
        PHONE_CODE: 689
      },
      {
        ESPAÑOL: "Polonia",
        ENGLISH: "Poland",
        ISO2: "PL",
        ISO3: "POL",
        PHONE_CODE: 48
      },
      {
        ESPAÑOL: "Portugal",
        ENGLISH: "Portugal",
        ISO2: "PT",
        ISO3: "PRT",
        PHONE_CODE: 351
      },
      {
        ESPAÑOL: "Puerto Rico",
        ENGLISH: "Puerto Rico",
        ISO2: "PR",
        ISO3: "PRI",
        PHONE_CODE: 1
      },
      {
        ESPAÑOL: "Qatar",
        ENGLISH: "Qatar",
        ISO2: "QA",
        ISO3: "QAT",
        PHONE_CODE: 974
      },
      {
        ESPAÑOL: "Reino Unido",
        ENGLISH: "United Kingdom",
        ISO2: "GB",
        ISO3: "GBR",
        PHONE_CODE: 44
      },
      {
        ESPAÑOL: "República Centroafricana",
        ENGLISH: "Central African Republic",
        ISO2: "CF",
        ISO3: "CAF",
        PHONE_CODE: 236
      },
      {
        ESPAÑOL: "República Checa",
        ENGLISH: "Czech Republic",
        ISO2: "CZ",
        ISO3: "CZE",
        PHONE_CODE: 420
      },
      {
        ESPAÑOL: "República Dominicana",
        ENGLISH: "Dominican Republic",
        ISO2: "DO",
        ISO3: "DOM",
        PHONE_CODE: "1 809"
      },
      {
        ESPAÑOL: "Reunión",
        ENGLISH: "Réunion",
        ISO2: "RE",
        ISO3: "REU",
        PHONE_CODE: ""
      },
      {
        ESPAÑOL: "Ruanda",
        ENGLISH: "Rwanda",
        ISO2: "RW",
        ISO3: "RWA",
        PHONE_CODE: 250
      },
      {
        ESPAÑOL: "Rumanía",
        ENGLISH: "Romania",
        ISO2: "RO",
        ISO3: "ROU",
        PHONE_CODE: 40
      },
      {
        ESPAÑOL: "Rusia",
        ENGLISH: "Russia",
        ISO2: "RU",
        ISO3: "RUS",
        PHONE_CODE: 7
      },
      {
        ESPAÑOL: "Sahara Occidental",
        ENGLISH: "Western Sahara",
        ISO2: "EH",
        ISO3: "ESH",
        PHONE_CODE: ""
      },
      {
        ESPAÑOL: "Samoa",
        ENGLISH: "Samoa",
        ISO2: "WS",
        ISO3: "WSM",
        PHONE_CODE: 685
      },
      {
        ESPAÑOL: "Samoa Americana",
        ENGLISH: "American Samoa",
        ISO2: "AS",
        ISO3: "ASM",
        PHONE_CODE: "1 684"
      },
      {
        ESPAÑOL: "San Bartolomé",
        ENGLISH: "Saint Barthélemy",
        ISO2: "BL",
        ISO3: "BLM",
        PHONE_CODE: 590
      },
      {
        ESPAÑOL: "San Cristóbal y Nieves",
        ENGLISH: "Saint Kitts and Nevis",
        ISO2: "KN",
        ISO3: "KNA",
        PHONE_CODE: "1 869"
      },
      {
        ESPAÑOL: "San Marino",
        ENGLISH: "San Marino",
        ISO2: "SM",
        ISO3: "SMR",
        PHONE_CODE: 378
      },
      {
        ESPAÑOL: "San Martín (Francia)",
        ENGLISH: "Saint Martin (French part)",
        ISO2: "MF",
        ISO3: "MAF",
        PHONE_CODE: "1 599"
      },
      {
        ESPAÑOL: "San Pedro y Miquelón",
        ENGLISH: "Saint Pierre and Miquelon",
        ISO2: "PM",
        ISO3: "SPM",
        PHONE_CODE: 508
      },
      {
        ESPAÑOL: "San Vicente y las Granadinas",
        ENGLISH: "Saint Vincent and the Grenadines",
        ISO2: "VC",
        ISO3: "VCT",
        PHONE_CODE: "1 784"
      },
      {
        ESPAÑOL: "Santa Elena",
        ENGLISH: "Ascensión y Tristán de Acuña",
        ISO2: "SH",
        ISO3: "SHN",
        PHONE_CODE: 290
      },
      {
        ESPAÑOL: "Santa Lucía",
        ENGLISH: "Saint Lucia",
        ISO2: "LC",
        ISO3: "LCA",
        PHONE_CODE: "1 758"
      },
      {
        ESPAÑOL: "Santo Tomé y Príncipe",
        ENGLISH: "Sao Tome and Principe",
        ISO2: "ST",
        ISO3: "STP",
        PHONE_CODE: 239
      },
      {
        ESPAÑOL: "Senegal",
        ENGLISH: "Senegal",
        ISO2: "SN",
        ISO3: "SEN",
        PHONE_CODE: 221
      },
      {
        ESPAÑOL: "Serbia",
        ENGLISH: "Serbia",
        ISO2: "RS",
        ISO3: "SRB",
        PHONE_CODE: 381
      },
      {
        ESPAÑOL: "Seychelles",
        ENGLISH: "Seychelles",
        ISO2: "SC",
        ISO3: "SYC",
        PHONE_CODE: 248
      },
      {
        ESPAÑOL: "Sierra Leona",
        ENGLISH: "Sierra Leone",
        ISO2: "SL",
        ISO3: "SLE",
        PHONE_CODE: 232
      },
      {
        ESPAÑOL: "Singapur",
        ENGLISH: "Singapore",
        ISO2: "SG",
        ISO3: "SGP",
        PHONE_CODE: 65
      },
      {
        ESPAÑOL: "Siria",
        ENGLISH: "Syria",
        ISO2: "SY",
        ISO3: "SYR",
        PHONE_CODE: 963
      },
      {
        ESPAÑOL: "Somalia",
        ENGLISH: "Somalia",
        ISO2: "SO",
        ISO3: "SOM",
        PHONE_CODE: 252
      },
      {
        ESPAÑOL: "Sri lanka",
        ENGLISH: "Sri Lanka",
        ISO2: "LK",
        ISO3: "LKA",
        PHONE_CODE: 94
      },
      {
        ESPAÑOL: "Sudáfrica",
        ENGLISH: "South Africa",
        ISO2: "ZA",
        ISO3: "ZAF",
        PHONE_CODE: 27
      },
      {
        ESPAÑOL: "Sudán",
        ENGLISH: "Sudan",
        ISO2: "SD",
        ISO3: "SDN",
        PHONE_CODE: 249
      },
      {
        ESPAÑOL: "Suecia",
        ENGLISH: "Sweden",
        ISO2: "SE",
        ISO3: "SWE",
        PHONE_CODE: 46
      },
      {
        ESPAÑOL: "Suiza",
        ENGLISH: "Switzerland",
        ISO2: "CH",
        ISO3: "CHE",
        PHONE_CODE: 41
      },
      {
        ESPAÑOL: "Surinám",
        ENGLISH: "Suriname",
        ISO2: "SR",
        ISO3: "SUR",
        PHONE_CODE: 597
      },
      {
        ESPAÑOL: "Svalbard y Jan Mayen",
        ENGLISH: "Svalbard and Jan Mayen",
        ISO2: "SJ",
        ISO3: "SJM",
        PHONE_CODE: ""
      },
      {
        ESPAÑOL: "Swazilandia",
        ENGLISH: "Swaziland",
        ISO2: "SZ",
        ISO3: "SWZ",
        PHONE_CODE: 268
      },
      {
        ESPAÑOL: "Tadjikistán",
        ENGLISH: "Tajikistan",
        ISO2: "TJ",
        ISO3: "TJK",
        PHONE_CODE: 992
      },
      {
        ESPAÑOL: "Tailandia",
        ENGLISH: "Thailand",
        ISO2: "TH",
        ISO3: "THA",
        PHONE_CODE: 66
      },
      {
        ESPAÑOL: "Taiwán",
        ENGLISH: "Taiwan",
        ISO2: "TW",
        ISO3: "TWN",
        PHONE_CODE: 886
      },
      {
        ESPAÑOL: "Tanzania",
        ENGLISH: "Tanzania",
        ISO2: "TZ",
        ISO3: "TZA",
        PHONE_CODE: 255
      },
      {
        ESPAÑOL: "Territorio Británico del Océano Índico",
        ENGLISH: "British Indian Ocean Territory",
        ISO2: "IO",
        ISO3: "IOT",
        PHONE_CODE: ""
      },
      {
        ESPAÑOL: "Territorios Australes y Antárticas Franceses",
        ENGLISH: "French Southern Territories",
        ISO2: "TF",
        ISO3: "ATF",
        PHONE_CODE: ""
      },
      {
        ESPAÑOL: "Timor Oriental",
        ENGLISH: "East Timor",
        ISO2: "TL",
        ISO3: "TLS",
        PHONE_CODE: 670
      },
      {
        ESPAÑOL: "Togo",
        ENGLISH: "Togo",
        ISO2: "TG",
        ISO3: "TGO",
        PHONE_CODE: 228
      },
      {
        ESPAÑOL: "Tokelau",
        ENGLISH: "Tokelau",
        ISO2: "TK",
        ISO3: "TKL",
        PHONE_CODE: 690
      },
      {
        ESPAÑOL: "Tonga",
        ENGLISH: "Tonga",
        ISO2: "TO",
        ISO3: "TON",
        PHONE_CODE: 676
      },
      {
        ESPAÑOL: "Trinidad y Tobago",
        ENGLISH: "Trinidad and Tobago",
        ISO2: "TT",
        ISO3: "TTO",
        PHONE_CODE: "1 868"
      },
      {
        ESPAÑOL: "Tunez",
        ENGLISH: "Tunisia",
        ISO2: "TN",
        ISO3: "TUN",
        PHONE_CODE: 216
      },
      {
        ESPAÑOL: "Turkmenistán",
        ENGLISH: "Turkmenistan",
        ISO2: "TM",
        ISO3: "TKM",
        PHONE_CODE: 993
      },
      {
        ESPAÑOL: "Turquía",
        ENGLISH: "Turkey",
        ISO2: "TR",
        ISO3: "TUR",
        PHONE_CODE: 90
      },
      {
        ESPAÑOL: "Tuvalu",
        ENGLISH: "Tuvalu",
        ISO2: "TV",
        ISO3: "TUV",
        PHONE_CODE: 688
      },
      {
        ESPAÑOL: "Ucrania",
        ENGLISH: "Ukraine",
        ISO2: "UA",
        ISO3: "UKR",
        PHONE_CODE: 380
      },
      {
        ESPAÑOL: "Uganda",
        ENGLISH: "Uganda",
        ISO2: "UG",
        ISO3: "UGA",
        PHONE_CODE: 256
      },
      {
        ESPAÑOL: "Uruguay",
        ENGLISH: "Uruguay",
        ISO2: "UY",
        ISO3: "URY",
        PHONE_CODE: 598
      },
      {
        ESPAÑOL: "Uzbekistán",
        ENGLISH: "Uzbekistan",
        ISO2: "UZ",
        ISO3: "UZB",
        PHONE_CODE: 998
      },
      {
        ESPAÑOL: "Vanuatu",
        ENGLISH: "Vanuatu",
        ISO2: "VU",
        ISO3: "VUT",
        PHONE_CODE: 678
      },
      {
        ESPAÑOL: "Venezuela",
        ENGLISH: "Venezuela",
        ISO2: "VE",
        ISO3: "VEN",
        PHONE_CODE: 58
      },
      {
        ESPAÑOL: "Vietnam",
        ENGLISH: "Vietnam",
        ISO2: "VN",
        ISO3: "VNM",
        PHONE_CODE: 84
      },
      {
        ESPAÑOL: "Wallis y Futuna",
        ENGLISH: "Wallis and Futuna",
        ISO2: "WF",
        ISO3: "WLF",
        PHONE_CODE: 681
      },
      {
        ESPAÑOL: "Yemen",
        ENGLISH: "Yemen",
        ISO2: "YE",
        ISO3: "YEM",
        PHONE_CODE: 967
      },
      {
        ESPAÑOL: "Yibuti",
        ENGLISH: "Djibouti",
        ISO2: "DJ",
        ISO3: "DJI",
        PHONE_CODE: 253
      },
      {
        ESPAÑOL: "Zambia",
        ENGLISH: "Zambia",
        ISO2: "ZM",
        ISO3: "ZMB",
        PHONE_CODE: 260
      },
      {
        ESPAÑOL: "Zimbabue",
        ENGLISH: "Zimbabwe",
        ISO2: "ZW",
        ISO3: "ZWE",
        PHONE_CODE: 263
      }
    ],
    lista: []
  },
  mutations: {},
  actions: {
    async sendSMS(payload) {
      await axios
        .post("https://apisms.celmedia.com.co/api_sendsms", payload, {
          headers: {
            Authorization: basicAuth,
            "api-key": "KH$aUA1AASDqBf9n$oxV2A451Ou$0n4"
          }
        })
        .then(function(response) {
          console.log("Authenticated", response);
        })
        .catch(function(error) {
          console.log("Error on Authentication", error);
        });
    },
    async listSMS(inicio, final) {
      await axios
        .get(
          "https://apisms.celmedia.com.co/api_getmosms/" + inicio + "/" + final,
          {
            headers: {
              Authorization: basicAuth,
              "api-key": "KH$aUA1AASDqBf9n$oxV2A451Ou$0n4"
            }
          }
        )
        .then(response => {
          console.log("Authenticated", response);
        })
        .catch(function(error) {
          console.log("Error on Authentication", error);
        });
    }
  },
  modules: {}
});
