<template>
    <section class="header">
        幸福的家
    </section>
</template>

<script>
    import { mapState } from 'vuex';
    
    export default {
        
        computed: {
            ...mapState(['res']),

            login () {
                return this.res.login;
            }
        },
        created () {
            if (this.login) {
                console.log(2)
            }
        }
    }
</script>

<style lang="less" scoped>
    .header {
        // background-color: pink;
        height: 30px;
        line-height: 30px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
</style>
