<template lang="html">
    <div class="card">
        <h4>Create new event</h4>
        Who's playing?
        <input
            type="text"
            v-model="name"
            placeholder="Band name" 
        />
        <br />
        Where's it at?
        <br />
        <select v-model="place">
            <option v-for="v in venues" :value="v">
                {{v}}
            </option>
        </select>
        <br />
        When are you gonna be there?
        <div>
            <input v-model="start_date" type="date">
           
            <input v-model="start_time" type="time">
        </div>

        <base-button content="Submit" @clicked="submit" :enabled="valid"/>
    </div>
</template>

<script>
import BaseButton from '@/components/BaseButton'

export default {
    name: 'ConcertCreate',
    props: {
        venues: {
            type: Array,
            required: true
        }
    },
    components: {
        BaseButton
    },
    data() {
        return {
            name: '',
            place: '',
            start_date: new Date().toISOString().split('T')[0],
            start_time: '19:30',
        }
    },
    computed: {
        valid() {
            return !!(
                this.name.length &&
                this.place.length &&
                this.start_time.length &&
                this.start_date.length
            )
        }
    },
    watch: {
        venues() {
            this.place = this.venues[0];
        },
    },
    methods: {
        submit() {
            if (this.valid != true) return;

            const payload = {
                name: this.name,
                place: {
                    name: this.place,
                },
                start_time: `${this.start_date}T${this.start_time}`
            }

            this.$root.$emit('new_concert', payload);

            this.name = '';
        }
    },
}
</script>
