<template>
  <section class="chart">
    <!-- <ExchangeWidjet></ExchangeWidjet> -->
    <div class="convert-bar">
        <div class="convert-bar__header">Convert it</div>
        <ul class="convert-bar__list">
            <li>
                <input type="radio" id="EUR" name="currency" value="EUR"/>
                <label for="EUR">EUR</label>
            </li>
            <li>
                <input type="radio" id="USD" name="currency" value="USD"/>
                <label for="USD">USD</label>
            </li>
            <li>
                <input type="radio" id="RUB" name="currency" value="RUB"/>
                <label for="RUB">RUB</label>
            </li>
        </ul>
    </div>
    <ul class="histogram">
      <li></li>
      <li
        v-for="item in cherryData"
        :key="item.index"
        :style="'min-height:' + 1 * (item.cost * 0.5) + 'px'"
      >
        <p>{{ item.city + `,` + item.cost + `р` }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
  import { cherry_analytics } from "@/data.js";
  //import ExchangeWidjet from "@/components/ExchangeWidjet.vue";

  export default {
    data() {
      return {
        cherryData: cherry_analytics,
        exchangeRate: {},
      };
    },
    components: {
      ///ExchangeWidjet,
    },
    methods: {
      getExchangeRate() {
        fetch("https://www.cbr-xml-daily.ru/daily_json.js")
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok");
          })
          .then((json) => {
            this.exchangeRate = {
              base: "RUB",
              rates: {
                'EUR': json.Valute.EUR.Value,
                'USD': json.Valute.USD.Value,
              },
            };
          })
          .then(() => {
            this.setPriceInRub(this.cherryData);
            this.cherryData.sort((a, b) => (a.cost > b.cost ? 1 : -1));
          })
          .catch(() => {});
      },
      setPriceInRub(arr) {
        arr.forEach((element) => {
          if (element.currencies !== "RUB") {
            element.cost = Math.round(
              element.cost * this.exchangeRate.rates[element.currencies]
            );
            element.currencies = "RUB";
          }
        });
      },
      convert(from,to,amount){
        if (to == this.exchangeRate.base) {            
            return Math.round(this.exchangeRate.rates[from] * amount)
        } else if (from == this.exchangeRate.base) {
            return Math.round(amount / this.exchangeRate.rates[to])
        } else {
            return Math.round((this.exchangeRate.rates[from] * amount) / this.exchangeRate.rates[to])
        }
      }
    },
    beforeMount() {
      this.getExchangeRate();
    },
    mounted() {
        
    },
    
  };
</script>

<style lang="sass">
.chart
    padding: 30px 0
    width: fit-content
    display: grid
    grid-template-columns: 180px  auto
    column-gap: 20px
    align-items: flex-start
    .histogram
        @include list-clean
        display: flex
        align-items: flex-end
        min-height: 300px
        padding: 140px 40px 40px
        justify-content: center
        // background-color: white
        // border-radius: 20px
        // -webkit-box-shadow: -1px 0px 16px -2px rgba(34, 60, 80, 0.2)
        // -moz-box-shadow: -1px 0px 16px -2px rgba(34, 60, 80, 0.2)
        // box-shadow: -1px 0px 16px -2px rgba(34, 60, 80, 0.2)

        li
            background: #fdbb03
            width: 16px
            margin: 0 2px
            position: relative
            cursor: pointer
            &:hover
                background-color: $main
            p
                transform: rotate(-90deg)
                bottom: 0
                z-index: 1
                font-size: 13px
                line-height: 14px
                margin:  -100% 0 0 0
                font-weight: 500
.convert-bar
    background-color: white
    border-radius: 20px
    -webkit-box-shadow: -1px 0px 16px -2px rgba(34, 60, 80, 0.2)
    -moz-box-shadow: -1px 0px 16px -2px rgba(34, 60, 80, 0.2)
    box-shadow: -1px 0px 16px -2px rgba(34, 60, 80, 0.2)
    .convert-bar__header
        background-color: $main
        padding: 20px
        border-radius: 20px 20px 0 0
        color: white
        text-align: center
        font-weight: 500
    ul
        @include list-clean
        padding: 20px
        
</style>
