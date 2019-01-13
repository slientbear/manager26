<template>
    <div>main
        <el-button @click="logout" type="success">退出</el-button>
 </div>
</template>
<script>
export default {
    beforeCreate() {
        let token = window.sessionStorage.getItem("token");
        if(token){
            // 登陆成功
        }else{
            this.$message.error("请先登录");
            this.$router.push("login");
        }
    },
    methods: {
        logout(){
            window.sessionStorage.removeItem("token");
            this.$router.push("login");
        }
    }
};
</script>
<style lang="sass" scoped>

</style>

