<template>
    <div class="exchange">
        <div v-for="item in currencies" :key="item.index">
            
            <span>{{ item }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExchangeWidjet',
    data() {
        return {
            currencies: []
        }
    },
    methods: {
        getExchangeRate(){            
            fetch('https://www.cbr-xml-daily.ru/daily_json.js')
                .then((response) => {
                    if (response.ok) {
                        return response.json();                    
                    }
                    throw new Error("Network response was not ok");
                })
                .then((json) => {
                    console.log(json)
                    this.currencies = [
                        {'EUR' : json.Valute.EUR.Value},
                        {'USD' : json.Valute.USD.Value,}
                    ]               
                })
                .catch(() => {
                    
                });
        },
    },
    beforeMount() {
        this.getExchangeRate()
    }
}
</script>

<style lang="sass">
.exchange
    padding: 20px
    border-radius: 20px
    -webkit-box-shadow: -1px 0px 16px -2px rgba(34, 60, 80, 0.2)
    -moz-box-shadow: -1px 0px 16px -2px rgba(34, 60, 80, 0.2)
    box-shadow: -1px 0px 16px -2px rgba(34, 60, 80, 0.2)
    background-color: white
</style>