<template>
    <div id="secure">
        <h1>Welcome Home</h1>
        <p>
            user loged in 
        </p>
         <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">{{ NAME }}</th>
      <th scope="col">{{ EMAIL }}</th>
      <th scope="col">{{ AGE }}</th>
    </tr>
  </thead>
        
    </div>
</template>

<script>
    // import {getJsonApi} from '../api/data.js'
    export default {
        name: 'Secure',
        data() {
            return {
                users: [
                    {
                        NAME: "arunsamdoss",
                        EMAIL: "sam@gmail.com",
                        AGE: 23
                    },
                    {
                        NAME: "arun",
                        EMAIL: "sam@gmail.com",
                        AGE: 24
                    },
                    {
                        NAME: "doss",
                        EMAIL: "Dsam@gmail.com",
                        AGE: 24
                    },
                    {
                        NAME: "sam",
                        EMAIL: "ARUN@gmail.com",
                        AGE: 23
                    }
                ]
            }
        },
        mounted(){
            console.log(this.users)
        //     getJsonApi().then(response => {
        //         console.log(response)
        //     })
        //     // axios.get('https://jsonkeeper.com/b/0Q99'.then(response => (
        //     //     this.users = response.name))
            
         }
     }
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>