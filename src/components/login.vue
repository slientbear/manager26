<template>
    <div class="login-container">
        <div class="form-container">
            <h2>用户登录</h2>
            <el-form label-position="top" :model="formData" label-width="80px" ref="formData" :rules="rules">

                <el-form-item label="用户名" prop="username">
                    <el-input v-model="formData.username"></el-input>
                </el-form-item>

                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="formData.password"></el-input>
                </el-form-item>

                <el-button @click="submitForm('formData')" class="login-btn" type="success">成功按钮</el-button>

            </el-form>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                formData: {
                    username: "",
                    password: "",
                },
                rules: {
                    username: [{
                            required: true,
                            message: "请输入用户名",
                            trigger: "change"
                        },
                        {
                            min: 3,
                            max: 10,
                            message: "长度在3-10个字符",
                            trigger: "change"
                        }
                    ],
                    password: [{
                            required: true,
                            message: "请输入密码",
                            trigger: "change"
                        },
                        {
                            min: 6,
                            message: "长度在6个字符以上",
                            trigger: "change"
                        }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        this.$axios.post("login", this.formData).then(res => {
                            // console.log(res);
                            // console.log(res.data.meta.status);
                            
                            if (res.data.meta.status === 400) {
                                this.$message.error(res.data.meta.msg);
                            } else if (res.data.meta.status === 200) {
                                this.$message.error(res.data.meta.msg);
                                window.sessionStorage.setItem("token", res.data.data.token);
                                this.$router.push("/");
                            }
                        });
                    } else {
                        this.$message.error('请输入正确的用户名和密码');
                        return false;
                    }
                });
            }
        },
    }
</script>
<style lang="scss" scoped>
    .login-container {
        background-color: #324152;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .form-container {
            background-color: white;
            width: 580px;
            padding: 40px;
            box-sizing: border-box;
            border-radius: 10px;
        }

        .login-btn {
            width: 100%;
        }
    }
</style>