<script>
import Chart from "chart.js";
import { generateChart, mixins } from "vue-chartjs";
import "chartjs-plugin-labels";

Chart.defaults.global.defaultFontFamily = "regular-font";
Chart.defaults.global.title.fontFamily = "heading-bold";
Chart.defaults.global.title.fontSize = "16";
Chart.defaults.global.tooltips.enabled = (window.innerWidth < 600);
Chart.defaults.global.legend.display = (window.innerWidth < 600);

const Doughnut = generateChart("doughnut-chart", "doughnut");

const { reactiveProp } = mixins;

export default {
    extends: Doughnut,
    mixins: [reactiveProp],
    props: ["charData", "options"],
    mounted() {
        this.renderChart(this.chartData, this.options);
    },
};
</script>

<style scoped lang="scss">
#doughnut-chart {

}
</style>
