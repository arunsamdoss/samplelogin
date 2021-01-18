<template>
    <div id="login">
        <h1>Login</h1><br>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <br><br>
        <input type="password" name="password" v-model="input.password" placeholder="Password" /><br><br>
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    console.log(this.$parent.mockAccount)
        
                
                    // if mockAccount is an Array
                    
                    this.$parent.mockAccount.forEach(item => {
                        
                        if(this.input.username == item.username && this.input.password == item.password ) {
                            this.$emit("authenticated", true)
                            this.$router.replace({ name: "secure" })
                            this.$cookies.get(this.input.username)
                            
                            
                            } else {
                            console.log('User not available')
                        }
                    })

                    // if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                    //     this.$emit("authenticated", true)
                    //     this.$router.replace({ name: "secure" })
                    // } else {
                    //     console.log("password is incorrect")
                    // }
                } 
                else {
                    console.log("must be present")
                }
            }
    //           onSubmit() {
    // let data = { 
    //   email: this.email,
    //   password: this.password

    // }
    //   users(data)
    //       .then(res=>{
    //         this.$cookie.set('token',res.data.token);
    //       })
    //       .catch(function(res) {
    //         if(res instanceof Error) {
    //           console.log(res.message);
    //         } else {
    //           console.log(res.data);
    //         }
    //       });
         
    // }
        }
    }
</script>

<style scoped>
    #login {

        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>