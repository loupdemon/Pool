
<template>
  <div>
    <h1>User</h1>
    <p v-if="currentuser != null">you are {{ currentuser[0].id }}</p>
    <div>
      <h2>Create a user</h2>
      <input v-model="username_create" placeholder="username" />
      <input v-model="email_create" placeholder="email" />
      <button v-on:click="createUser()">submit</button>
    </div>
    <hr />
    <div>
      <h2>choose a user</h2>
      <input v-model="username" placeholder="username" />
      <input v-model="email" placeholder="email" />
      <button v-on:click="getUser()">submit</button>
    </div>
    <div>
      <hr />
      <h2>modify a user</h2>
      <input
        v-if="currentuser != null"
        v-model="username_update"
        :placeholder="[[currentuser[0].username]]"
      />
      <input
        v-if="currentuser != null"
        v-model="email_update"
        :placeholder="[[currentuser[0].email]]"
      />
      <button v-on:click="updateUser()">submit</button>
    </div>
    <div>
      <hr />
      <h2>delete auser</h2>
      <button v-on:click="deleteUser()">click to delete</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

let axios = require("axios");
export default {
  name: "User",
  props: {
    UserName: String,
  },
  data() {
    return {
      username: "",
      email: "",
      username_create: "",
      email_create: "",
      username_update: "",
      email_update: "",
      currentuser: null,
      userID: null,
      users: null,
    };
  },
  methods: {
    createUser: function () {
      var url = "http://localhost:4000/api/users";
      axios
        .post(url, {
          user: {
            username: this.username_create, // 参数 firstName
            email: this.email_create, // 参数 lastName
          },
        })
        .then((response) => console.log(ok))
        .catch(function (error) {
          // error
          console.log(error);
        });
    },
    updateUser: function () {
      var url = "http://localhost:4000/api/users/" + this.userID;
      axios
        .put(url, {
          user: {
            username: this.username_update, //
            email: this.email_update //
          },
        })
        .then((response) => console.log(response));
    },
    deleteUser: function () {
      this.userID = this.currentuser[0].id
      var url = "http://localhost:4000/api/users/" + this.userID;
      axios.delete(url).then((response) => console.log(response));
      location.reload();

    },
    getUser: function () {
      var url =
        "http://localhost:4000/api/users?email=" +
        this.email +
        "&username=" +
        this.username;
      axios.get(url).then(
        response=> {
          this.currentuser = response.data.data;
          this.userID = response.data.data[0].id;
          this.$emit('passUserId',this.userID)
          }
          //   this.currentuser = response,
      ); 
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content h1 {
  text-align: left;
  font-size: 2em;
  margin-bottom: 0.5em;
  color: #7a7a7a;
  font-size: 1em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
</style>
