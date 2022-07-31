<template>
  <div id="app">
    <h1>ChartManager</h1>
    <bar-chart
      id="bar"
      :data="barData"
      :bar-colors="arrayColors"
      :xkeys="xkeys"
      :ykeys="ykeys"
      grid="true"
      resize="true"
      grid-text-weight="bold"
    >
    </bar-chart>
  </div>
</template>
<script>
/* eslint-disable */
import { BarChart } from "vue-morris";
export default {
  name: "ChartManager",
  props: ["userid"],
  data() {
    return {
      barData: [
        // eslint-disable-next-line standard/object-curly-even-spacing
        { year: "2012", car: 40, motorcycle: 300, airplane: 60 },
        // eslint-disable-next-line standard/object-curly-even-spacing
        { year: "2013", car: 150, motorcycle: 280, airplane: 70 },
        // eslint-disable-next-line standard/object-curly-even-spacing
        { year: "2014", car: 100, motorcycle: 150, airplane: 30 },
        // eslint-disable-next-line standard/object-curly-even-spacing
        { year: "2015", car: 100, motorcycle: 390, airplane: 90 },
      ],
      xkeys: ["2012", "2013", "2014", "2015"],

      arrayColors: ["#5859f9", "#73c000", "#cc45ff"],
      ykeys: ["car", "motorcycle", "airplane"],
    };
  },
  components: {
    BarChart,
  },
};
</script>
<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.content h1 {
  text-align: left;
  font-size: 2em;
  margin-bottom: 0.5em;
  color: #7a7a7a;
  font-size: 1em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
</style>
