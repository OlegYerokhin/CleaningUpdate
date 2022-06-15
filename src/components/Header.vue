<template>
  <div class="container header">
    <div class="desc-block">
      <div class="main-image">
        <img src="../assets/main-image.png" alt="main-image">
      </div>

      <div class="head-block">
        <div>
          <h1 class="head">Уборка квартир в Киеве</h1>
          <h3 class="description">Мы уберем у вас дома или в офисе. Наведем чистоту после ремонта и проведем генеральную уборку. </h3>
        </div>
      </div>
      <div class="button-wrap-wrapper">
        <div class="button-wrap">
          <button 
            class="button order-btn"
            :class="{ 'show-off': activated }"
            @mouseover="buttonMove()"
          >
            <span class="button-text">
              Заказать <br>уборку
            </span>
            <span class="order-btn-shadow"></span>
          </button>
        </div>
      </div>
    </div>
    <div class="navigation">
      <div class="nav">
        <div class="nav-wrapper nav-left">
          <a href="" class="nav-item">
            <img class="image-item" src="../assets/Logo.png" alt="Logo">
          </a>
          <div class="tabs-container">
            <div class="tabs">
              <input type="radio" id="radio-1" name="tabs" checked />
              <label class="tab" for="radio-1">Дом</label>
              <input type="radio" id="radio-2" name="tabs" />
              <label class="tab" for="radio-2">Офис</label>
              <span class="glider"></span>
            </div>
          </div>
        </div>
        
        <div class="nav-wrapper nav-center">
          <a href="/" class="nav-item">После ремонта</a>
          <a href="/" class="nav-item">Генеральная уборка</a>
          <a href="/" class="nav-item">Регулярная уборка</a>
          <a href="/" class="nav-item">Мойка окон</a>
        </div>
        <div class="nav-wrapper nav-right">
          <a tel="+380674016977" class="nav-item">+380 67 401 69 77</a>
          <p class="working-hours">| 24/7</p>
          <div class="menu-btn-immitation">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
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
      if(this.scrollPosition >= 600) {
        this.activated = true
      } else {
        this.activated = false
      }
    },

    buttonMove() {
      const button = document.querySelector(".button")
      let { width, height, x: buttonX, y: buttonY } = button.getBoundingClientRect()

      buttonX = buttonX + width / 2
      buttonY = buttonY + height / 2

      let distance = width
      let mouseHasEntered = true
      let mouseIsInButtonTerritory

      function mouseMove(e) {
        const x = e.x
        const y = e.y

        const leftBorderLine = buttonX - distance / 2
        const rightBorderLine = buttonX + distance / 2
        const topBorderLine = buttonY - distance / 2
        const bottomBorderline = buttonY + distance / 2
        const xWalk = (x - buttonX) / 2
        const yWalk = (y - buttonY) / 2

        mouseIsInButtonTerritory =
          x > leftBorderLine &&
          x < rightBorderLine &&
          y > topBorderLine &&
          y < bottomBorderline 

        if (mouseIsInButtonTerritory) {
          if (mouseHasEntered) {
            distance = distance + distance
            mouseHasEntered = false
          }
          catchCursor(xWalk, yWalk)
        } else {
          resetPositon()
        }
      }

      function catchCursor(xWalk, yWalk) {
        button.style.transform = `translate(${xWalk}px, ${yWalk}px)`
      }

      function resetPositon() {
        button.style.transform = `translate(${0}px, ${0}px)`
        if(!mouseHasEntered)distance/=2
        mouseHasEntered = true
      }

      window.addEventListener("mousemove", mouseMove)
    }
  },
}
</script>

<style scoped>
.container {
  position: relative;
  margin-bottom: 23px;
  text-align: -webkit-center;
}

.navigation {
  position: absolute;
  top: 0;
}

.nav {
  display: flex;
  align-items: center;
  margin: 20px 30px;
}

.nav-wrapper {
  margin: 0 20px;
}

.nav-item {
  font-family: 'TTTravels-DemiBold';
  text-decoration: none;
  cursor: pointer;
  margin: 0 13px;
}

/* Tabs */
.tabs-container {
  position: relative;
  display: inline-block;
  align-items: center;
  justify-content: center;
  font-family: 'TTTravels-Regular';
  margin-right: 80px;
}

.tabs {
  display: flex;
  position: relative;
  background-color: #fff;
  padding: 3px;
  border-radius: 99px;
}
.tabs * {
  z-index: 2;
}
input[type="radio"] {
  display: none;
}
.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 31px;
  width: 66px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 99px;
  cursor: pointer;
  transition: color 0.15s ease-in;
  color: #636C81;
}
.notification {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-left: 0.75rem;
  border-radius: 50%;
  background-color: #5A30F0;
  transition: 0.15s ease-in;
}
input[type="radio"]:checked + label {
  color: #fff;
}
input[type="radio"]:checked + label > .notification {
  background-color: #fff;
  color: #fff;
}
input[id="radio-1"]:checked ~ .glider {
  transform: translateX(0);
}
input[id="radio-2"]:checked ~ .glider {
  transform: translateX(100%);
}
input[id="radio-3"]:checked ~ .glider {
  transform: translateX(200%);
}
.glider {
  position: absolute;
  display: flex;
  height: 31px;
  width: 66px;
  background-color: #5A30F0;
  z-index: 1;
  border-radius: 99px;
  transition: 0.25s ease-out;
}

/* End of tabs */
.image-item {
  vertical-align: middle;
}

.nav-item:hover {
  text-decoration: underline;
}

.working-hours {
  display: inline;
  font-family: 'TTTravels-DemiBold';
  text-decoration: none;
}

.desc-block {
  display: flex;
  z-index: -1;
}

.head-block {

  text-align: start;
  margin: 201px 164px;
}
.head {
  display: table-caption;
  font-family: 'TTTravels-Regular';
  font-weight: 400;
  font-size: 76px;
  line-height: 83.6px;
  text-align: start;
  margin-bottom: 30px;
}

.description {
  font-family: 'TTTravels-Regular';
  font-weight: 400;
  font-size: 18px;
  margin: 0;
}

.order-btn {
  background-color: #5A30F0;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 195px;
  height: 195px;
  cursor: pointer;
  position: fixed;
  bottom: 63px;
  left: 740px;
  z-index: 8;
  text-transform: uppercase;
  font-family: 'TTTravels-Regular';
  line-height: 130%;
  letter-spacing: 0.03em;
  transition: ease-in-out 0.2s;
  font-size: 18px;
}

.order-btn:hover {
  width: 230px;
  height: 230px;
  font-size: 20px;
  bottom: 60px;
  left: 725px;
}


.order-btn-shadow {
  background-color: transparent;
  color: #fff;
  border-radius: 50%;
  width: 195px;
  height: 195px;
  cursor: pointer;
  position: fixed;
  top: -1px;
  left: -1px;
  z-index: 7;
  transition: ease-in-out 0.2s;
}

.order-btn-shadow:hover {
  transition: ease-in-out 0.2s;
  border: 1px solid #5A30F0;
  width: 295px;
  height: 295px;
  top: -35px;
  left: -36px;
}

/* Button */

.show-off {
  display: none;
  transition-delay: 3s;
}

:root {
  --gutter-lg: 1rem;
  --color-white: #fff;
  --color-black: #000;
}

.button {
  margin: auto;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

.button-wrap-wrapper {
  width: 192px;
  height: 192px;
  border: 1px dashed #fff;
  margin: auto;
  display: flex;
}

.button-text {
  transform: rotate(-15deg);
  display: block;
  color: var(--color-black);
  background: var(--color-white);
  width: var(--gutter-lg);
  height: var(--gutter-lg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-btn-immitation {
  margin-left: 30px;
}
.menu-btn-immitation div {
  width: 22px;
  height: 2px;
  background-color: black;
  margin: 3px 0;
  border-radius: 1px;
}

.nav-right {
  display: contents;
}
</style>
