<template>
    <div class="loader_more_box">
        <p class="loader_more" v-show="allLoaded">数据已全部加载</p>
        <p class="loader_more reload" v-show="preventRepeatReuqest">
            <span class="spinner">
                <mt-spinner :size="20" type="fading-circle"></mt-spinner>
            </span>
            正在加载更多数据...
        </p>
    </div>
</template>
<script>
    export default {
        props: ['allLoaded','preventRepeatReuqest'],
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../style/_variables.scss";
    @import "../../style/_loadmore.scss";
</style>
