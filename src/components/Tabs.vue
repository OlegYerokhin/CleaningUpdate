<template>
  <div class="container">
    <div>
      <header 
        class="tabs" 
        :class="[getActive]"
      >
        <p class="sidebar-head">Как мы убираем</p>
        <ul>
          <li v-for="(tab, index) in tabs" :key="index">
            <div 
              class="nav-item"
              :class="{ 'is-active': tab.isActive }"
              @click="selectTab(tab)"
            >
              {{ tab.name }}
            </div>
          </li>
        </ul>
      </header>
      <section class="tabs-details">
        <slot></slot>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: ['activated'],
  data: () => ({
    tabs: [],
    activatedTabs: null
  }),
  computed: {
    getActive: function() {
      return {
        'active-tabs': this.activated 
      }
    }
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name === selectedTab.name
      })
    }
  },
  created() {
    this.tabs = this.$children
  },
}
</script>

<style scoped>
.tabs {
  text-align: start;
  background-color: #5A30F0;
  padding-bottom: 230px;
  width: 690px;
  transition: ease-in-out 2s;
}

.active-tabs {
  width: 100%;
  transform: translate((-200px, 0));
  transition: ease-in-out 3s;
}

.sidebar-head {
  font-family: 'TTTravels-Regular';
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  padding: 35px 0 200px 53px;
}

ul {
  padding: 0;
  list-style: none;
}

li {
  margin-right: 40px;
}

.nav-item {
  display: block;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 44px;
  line-height: 52.8px;
  font-family: 'TTTravels-Light';
  font-weight: 400;
  color: #c3c2c2;
  margin-bottom: 22px;
  margin-left: 60px;
}

.nav-item:hover {
  color: #fff;
  font-style: italic;
}

.nav-item:hover::before {
  font-style: normal;
  color: #fff;
}

.is-active {
  font-style: italic;
}

.is-active::before {
  content: "\2192  ";
  font-style: normal;
  color: #c3c2c2;
}

</style>
