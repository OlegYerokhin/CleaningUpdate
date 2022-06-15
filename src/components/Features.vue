<template>
  <div class="container">
    <div class="card-wrapper"
      :class="{ 'card-moving': activated }"
      :style="[getTransition]"
    >
      <h3 class="card-name">
        {{ CardName }}
      </h3>
      <img 
        :src="src" 
        class="card-image"
      />

    </div>
    <div class="another-side-wrapper">
      <div class="another-side">
        <p class="background-text">
          {{ BackgroundText }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features',
  props: ['CardName', 'src', 'BackgroundText', 'transition-delay'],
  data: () => ({
    activated: null,
    scrollPosition: null
  }),
  computed: {
    getTransition: function() {
      return {
        'transition-delay': this.transitionDelay
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {

    onScroll(e) {
      this.scrollPosition = e.target.documentElement.scrollTop
      if(this.scrollPosition >= 88) {
        this.activated = true
      } else {
        this.activated = false
      }
    },
  },
}
</script>

<style scoped>

.container {
  margin: 50px 0 70px;
}
.card-wrapper {
  width: 300px;
  height: 328px;
  display: inline-block;
  background-color: #F3F6FB;
  text-align: center;
  border-radius: 8px;
  margin: 80px 20px 20px;
  position: relative;
  transition: ease-in-out 1s;
}

.card-moving {
  margin: 20px;
  transform: translate(0px 60px);
  transition: ease-in-out 1s;
}

.card-name {
  font-family: 'TTTravels-DemiBold';
  font-size: 24px;
  line-height: 31.2px;
  font-weight: normal;
  margin: 20px 14px 0;
  width: 270px;
}

.image-wrapper {
  display: flex;
}

.card-image {
  position: absolute;
  bottom: 0;
  left: 60px;
}

.another-side-wrapper {
  position: relative;
}
.another-side {
  width: 300px;
  height: 328px;
  display: inline-block;
  background-color: #5A30F0;
  text-align: center;
  border-radius: 8px;
  margin: 20px;
  position: relative;
  opacity: 0;
  position: absolute;
  bottom: 0px;
}

.another-side:hover {
  opacity: 1;
  transition: ease 0.3s;
  transition-delay: 0.1s;
}

.background-text {
  font-family: 'TTTravels-Light';
  color: #fff;
  padding: 30px 30px 48px;
  text-align: left;
  font-size: 16px;
  line-height: 22.4px;
}

</style>