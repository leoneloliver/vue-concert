<template lang="html">

<div class="container">

<img class="banner" src="../assets/2019_CA_NBA_Celtics_vs_Raptors_1280x180.jpg" alt="" />

    <h3>List of Events!</h3>
    <div class="row">
    
        <div class="column column-50">
             <input v-model="search"
                type="text"
                placeholder="Search.." id="search">
        </div>
        <div class="column column-50">
             <div class="button"
                @click="toggleSort()">
                {{sort_btn_text}} ↓
            </div>
        </div>
    </div>  
   
    <div class="row">
       
        <div class="column column-60 ">
            <div v-for="concert in filtered_concerts">
                <ConcertView
                    :concert="concert"
                    :key="concert.id"/>
            </div>
        </div>
         <div class="column column-40">
            <ConcertCreate :venues="venues"/>
        </div>

    </div>
   
    
</div>
</template>

<script>
import ConcertView from '@/components/ConcertView'
import ConcertCreate from '@/components/ConcertCreate'

export default {
    name: 'ConcertList',
    components: {
        ConcertView,
        ConcertCreate
    },
    computed: {
        venues() {
            const set = {};
            for (var i = 0; i < this.concerts.length; i++) {
                set[this.concerts[i].place.name] = true;
            }
            return Object.keys(set).sort();
        },
        filtered_concerts() {
            return this.concerts
                .filter(f => {
                    return f.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
                })
                .sort((a, b) => {
                    if (a.name > b.name) return this.sort_modifier;
                    if (a.name < b.name) return this.sort_modifier * -1;
                    return 0;
                });
        },
        sort_btn_text() {
            return this.sort_modifier>0?'A-Z':'Z-A'
        }
    },
    data() {
        return {
            search: '',
            concerts: [],
            sort_modifier: 1,
        }
    },
    created() {
        this.getConcerts();

        this.$root.$on('new_concert', (c) => {
            this.concerts.unshift(c);
        })
    },
    methods: {
        toggleSort() {
            this.sort_modifier = this.sort_modifier * -1;
        },
        getConcerts() {
            fetch('https://gist.githubusercontent.com/nchudleigh/92637a91938b16e105105de3ee91a569/raw/bbb5b1d549847e74afca77c2cfa3b514585678ad/events.json')
                .then(r => {
                    return r.json();
                })
                .then(r => {
                    this.concerts = r;
                })
        }
    }
}

</script>
