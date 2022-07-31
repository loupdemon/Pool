<template>
  <html>
    <body>
      <div id="app">
        <section class="main-content columns is-fullheight">
          <aside
            class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile"
          >
            <p class="menu-label is-hidden-touch">Navigation</p>
            <ul class="menu-list">
              <li>
                <a v-on:click="toggleUser()" class="">
                  <span class="icon"><i class="far fa-user"></i></span> User
                </a>
              </li>
              <li>
                <a v-on:click="toggleChartManager()" class="is-active">
                  <span class="icon"><i class="fas fa-chart-line"></i></span>
                  ChartManager
                </a>
                <ul>
                  <li>
                    <a v-on:click="toggleWorkingTime()">
                      <span class="icon is-small"
                        ><i class="fas fa-calendar-alt"></i
                      ></span>
                      WorkingTime
                    </a>
                  </li>
                  <li>
                    <a v-on:click="toggleWorkingTimes()">
                      <span class="icon is-small"
                        ><i class="fas fa-business-time"></i
                      ></span>
                      WorkingTimes
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a v-on:click="toggleClockManager()">
                  <span class="icon"><i class="far fa-clock"></i></span>
                  ClockManager
                </a>
              </li>
            </ul>
          </aside>

          <div class="container column is-10">
            <div class="section">
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <div v-if="this.component == 'WorkingTime'">
                      <WorkingTime :userid = this.UserId />
                    </div>
                    <div v-else-if="this.component =='User'">
                      <User @passUserId = "getuserid" />
                    </div>
                    <div v-else-if="this.component == 'WorkingTimes'">
                      <WorkingTimes :userid = this.UserId />
                    </div>
                    <div v-else-if="this.component == 'ClockManager'">
                      <ClockManager :userid = this.UserId />
                    </div>
                    <div v-else-if="this.component == 'ChartManager'">
                      <ChartManager :userid = this.UserId />
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </section>
      </div>
    </body>
  </html>
</template>

<script>
/* eslint-disable */
import User from "./components/User.vue";
import WorkingTime from "./components/WorkingTime.vue";
import WorkingTimes from "./components/WorkingTimes.vue";
import ClockManager from "./components/ClockManager.vue";
import ChartManager from "./components/ChartManager.vue";

export default {
  name: "app",
  components: {
    User,
    WorkingTime,
    WorkingTimes,
    ClockManager,
    ChartManager,
  },
  data() {
    return {
      component: "User",
      UserId: ""
    };
  },
  methods: {
    toggleUser() {
      this.component = "User";
    },
    toggleWorkingTime() {
      this.component = "WorkingTime";
      console.log(this.component)
    },
    toggleWorkingTimes() {
      this.component = "WorkingTimes";
    },
    toggleClockManager() {
      this.component = "ClockManager";
    },
    toggleChartManager() {
      this.component = "ChartManager";
    },
    getuserid(value){
      this.UserId = value
    }
  },
};
</script>

<style>
.menu-list a {
  text-align: left;
  font-size: 0.7em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 2px;
  color: #4a4a4a;
  display: block;
  padding: 0.5em 0.75em;
}

.menu-list li ul {
  border-left: 1px solid #dbdbdb;
  margin: 0.6em;
  padding-left: 0.6em;
}

html,
body,
#app {
  height: 100%;
}
#app {
  min-height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
.main-content {
  flex: 1;
}
.footer {
  margin-top: -12px;
}
@media screen and (max-width: 768px) {
  #menu-toggle:checked + .nav-menu {
    display: block;
  }
}
</style>
