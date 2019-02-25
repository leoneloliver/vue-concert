<template lang="html">
    <div class="card">
        {{concert.name}}
        <div style="font-size:1.25rem">
            {{concert.place.name}} - {{time}}
        </div>
        <BaseButton :content="'See location'" @clicked="openMap"/>
    </div>
</template>

<script>
import BaseButton from '@/components/BaseButton'

export default {
    name: 'ConcertView',
    components: {
        BaseButton
    },
    props: {
        concert: {
            type: Object,
            required: true,
            default: {
                place: {}
            }
        }
    },
    computed: {
        time() {
            const start = new Date(this.concert.start_time);
            let start_hour = start.getHours();
            let start_min = start.getMinutes();
            const start_pm = start_hour > 12 ? 'pm' : 'am';
            start_hour = start_hour % 12;
            return `${start.toDateString()} doors at ${start_hour} ${start_pm}`
        }
    },
    methods: {
        openMap() {
            const url = `https://www.google.com/maps/?q=${this.concert.place.name}`;
            window.open(url, '_blank');
        }
    },
}
</script>
