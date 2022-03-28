<template>
    <div>
        <button @click="add(10)">增加</button>
        <button @click="jian(6)">减少</button>
        <p>{{this.$store.state.count}}</p>
    </div>
</template>
<script>
export default {
    name:"HomeUser",
    methods: {
        add(a){  //用户行为
                // 不能直接修改count
                // this.$store.commit("increment")
                this.$store.dispatch("asyncincrement",a)
        },
        jian(b){
            this.$store.commit("decrement",b)
        }
    },
}
</script>
<style scoped>
    
</style>