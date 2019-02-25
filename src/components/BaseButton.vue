<template lang="html">
    <div class="button" @click="click" :class="button_class">
        {{content}}
    </div>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        content: {
            type: String,
            required: true
        },
        enabled: {
            type: Boolean,
            default: true,
        }
    },
    data() {
        return {
            loading: false
        }
    },
    computed: {
        button_class() {
            return {
                'disabled-background': !this.enabled,
                'loading-background': this.loading
            }
        }
    },
    methods: {
        click() {
            if (!this.enabled) return;

            this.loading = true;
            setTimeout(() => {
                this.$emit('clicked');
                this.loading = false;
            }, 1000)
        }
    },
}
</script>

<style lang="css" scoped>
</style>
