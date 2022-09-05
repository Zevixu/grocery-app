<template>
  <div class="login">
    <section class="form_container">
      <div class="manage_tip">
        <span class="title">Grocery App</span>
      </div>
      <el-form :model="loginUser" :rules="rules" ref="loginForm" class="loginForm" label-width="70px">
        <el-form-item label="email" prop="email">
          <el-input v-model="loginUser.email" placeholder="input your email here"></el-input>
        </el-form-item>
        <el-form-item label="password" prop="password">
          <el-input v-model="loginUser.password" placeholder="input your password here" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">Sign in</el-button>
        </el-form-item>
        <div class="tiparea">
          <p>Don't have an account?<router-link to='/register'>Register</router-link>
          </p>
        </div>
      </el-form>
    </section>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        loginUser: {
          email: "",
          password: ""
        },
        //using the rules to check whether user input is valid
        rules: {
          email: [
            {
              type: "email",
              required: true,
              message: "wrong email format!",
              trigger: "change"
            }
          ],
          password: [
            { required: true, message: "password can't be empty", trigger: "blur" },
            { min: 6, max: 30, message: "length must be between 6 to 30 characters", trigger: "blur" }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.$axios.post("/api/users/login", this.loginUser).then(res => {
              // login success
              const { token, user_email } = res.data;
              localStorage.setItem("eleToken", token);
              localStorage.setItem("user_email", user_email);

              // redirecting page
              this.$router.push("/index");
            });
          } else {
            this.$message("error submit!");
            return false;
          }
        });
      },
      isEmpty(value) {
        return (
          value === undefined ||
          value === null ||
          (typeof value === "object" && Object.keys(value).length === 0) ||
          (typeof value === "string" && value.trim().length === 0)
        );
      }
    }
  };
</script>

<style scoped>
  .login {
    position: relative;
    width: 100%;
    height: 100%;
    background: url(../assets/bg.jpg) no-repeat center center;
    background-size: 100% 100%;
  }

  .form_container {
    width: 370px;
    height: 210px;
    position: absolute;
    top: 20%;
    left: 34%;
    padding: 25px;
    border-radius: 5px;
    text-align: center;
  }

  .form_container .manage_tip .title {
    font-family: "Microsoft YaHei";
    font-weight: bold;
    font-size: 26px;
    color: #fff;
  }

  .loginForm {
    margin-top: 20px;
    background-color: #fff;
    padding: 20px 40px 20px 20px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px #cccc;
  }

  .submit_btn {
    width: 100%;
  }

  .tiparea {
    text-align: right;
    font-size: 12px;
    color: #333;
  }

  .tiparea p a {
    color: #409eff;
  }
</style>