<template>
    <div>
        <h1>Search</h1>
        <div style="font-size:50px;color:red;">{{$route.query.keyword2}}</div>
        <div>
            <span style="font-size:25px;color:orange;">{{$route.params.keyword}}</span>
            <span style="font-size:25px;color:orange;">{{$route.params.keyword}}</span>
            <span style="font-size:25px;color:orange;">{{$route.params.keyword}}</span>
            <span style="font-size:25px;color:orange;">{{$route.params.keyword}}</span>
            <span style="font-size:25px;color:orange;">{{$route.params.keyword}}</span>
            <span style="font-size:25px;color:orange;">{{$route.params.keyword}}</span>
            <span style="font-size:25px;color:orange;">{{$route.params.keyword}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
        
    };
</script>

<style lang="less" scoped>

</style>