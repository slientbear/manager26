<template>
    <div class="main-container">
        <myBreadcrumb level2="第二战术" level3="第五十战术"></myBreadcrumb>
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="4">
                        <div class="grid-content bg-purple">
                            <img src="../assets/logo.png" alt="">
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div class="grid-content bg-purple-light">
                            电商后台管理系统
                        </div>
                    </el-col>
                    <el-col :span="2">
                        <div class="grid-content bg-purple">
                            <el-button type="success">退出</el-button>
                        </div>
                    </el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-aside width="201px">
                    <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
                        active-text-color="#ffd04b" router>
                        <el-submenu v-for="(item, index) in menuList" :key="item.id" :index="item.order+''">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>{{item.authName}}</span>
                            </template>
                            <el-menu-item v-for="(it, i) in item.children" :key="it.id" :index="'/'+'it.path'">
                                <i class="el-icon-menu"></i> {{it.authName}}
                            </el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>
            </el-container>
            <el-main>Main</el-main>
        </el-container>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                menuList: []
            };
        },
        // beforeCreate() {
        //     let token = window.sessionStorage.getItem("token");
        //     if (token) {
        //         // 登陆成功
        //     } else {
        //         this.$message.error("请先登录");
        //         this.$router.push("login");
        //     }
        // },
        methods: {
            logout() {
                this.$confirm("你真的要突出吗", "提示", {
                        confirmButtonText: "直接退出",
                        concelButtonText: "等会退出",
                        type: "warning"
                    })
                    .then(() => {
                        window.sessionStorage.removeItem("token");
                        this.$router.push("login");
                        this.$message({
                            type: "success",
                            message: "退出成功"
                        });
                    })
                    .catch(() => {
                        this.$message({
                            type: "info",
                            message: "取消退出"
                        });
                    });

            }
        },
        created() {
            this.$axios
                .get("menus", {
                    headers: {
                        //Authorization: window.sessionStorage.getItem("token")
                    }
                }).then(res => {
                    this.menuList = res.data.data;
                    console.log(res);

                });
        },
    };
</script>
<style lang="scss">
    .main-container {
        height: 100%;

        .el-container {
            height: 100%;
        }

        .el-header,
        .el-footer {
            background-color: #b3c0d1;
            color: #333;
            text-align: center;
            line-height: 60px;

            .el-col-18 {
                font-size: 30px;
                font-weight: 900;
                color: white;
            }

            .el-col-4 {
                text-align: left;
            }
        }

        .el-aside {
            background-color: #d3dce6;
            color: #333;
            text-align: center;
            line-height: 200px;
        }

        .el-submenu__title {
            text-align: left;
        }
    }
</style>