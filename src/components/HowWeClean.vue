<template>
  <div class="container">
    <div class="head-wrapper">
      <h3 class="head-name">Как мы убираем</h3>
      <p class="head-desc">Клинер приезжает в назначенное время со всем необходимым и сразу приступает к делу. Вам остаётся только оценить результат.</p>
    </div>

    <Tabs class="image-wrapper" 
      :activated="this.activated"
    >
      <Tab  
        name="Кухня"
        class="sidebar"
        selected="true"
      > 
        <img 
          class="image image-obj"
          :class="{ 'move-right': activated, 'visible-image': !activated }" 
          src="../assets/placeholder.png" 
          alt="kitchen">
        <HintsButton 
          :HintText="'Чистим фасад вытяжки'"
          :PositionX="'-5px'"
          :PositionY="'552px'"
          :class="{ 'invisible-immedeately': !activated, 'delay-apperance': activated }"
        />
        <HintsButton 
          :HintText="'Очищаем рабочие поверхности'"
          :PositionX="'69px'"
          :PositionY="'383px'"
          :class="{ 'invisible-immedeately': !activated, 'delay-apperance': activated }"
        />
        <HintsButton 
          :HintText="'Тщательно вытираем пыль'"
          :PositionX="'-122px'"
          :PositionY="'372px'"
          :class="{ 'invisible-immedeately': !activated, 'delay-apperance': activated }"
        />
        <HintsButton 
          :HintText="'Удаляем отпечатки пальцев с блестящих поверхностей'"
          :PositionX="'-287px'"
          :PositionY="'492px'"
          :class="{ 'invisible-immedeately': !activated, 'delay-apperance': activated }"
        />
        <HintsButton 
          :HintText="'Отмываем пол в самых сложных местах'"
          :PositionX="'53px'"
          :PositionY="'168px'"
          :class="{ 'invisible-immedeately': !activated, 'delay-apperance': activated }"
        />
        <HintsButton 
          :HintText="'Очищаем раковину'"
          :PositionX="'-489px'"
          :PositionY="'405px'"
          :class="{ 'invisible-immedeately': !activated, 'delay-apperance': activated }"
        />
        <HintsButton 
          :HintText="'Ваш стол будет как в лучших домах Парижа!'"
          :PositionX="'-249px'"
          :PositionY="'338px'"
          :class="{ 'invisible-immedeately': !activated, 'delay-apperance': activated }"
        />
      </Tab>
      <Tab 
        name="Комнаты"
        class="sidebar"
      >
        <img 
          class="image image-obj"
          :class="{ 'move-right': activated, 'visible-image': !activated }" 
          src="../assets/rooms.jpg" 
          alt="rooms">
        <HintsButton 
          :HintText="'Производим химчистку мягкой мебели'"
          :PositionX="'-459px'"
          :PositionY="'325px'"
          :class="{ 'invisible-immedeately': !activated, 'delay-apperance': activated }"
        />
        <HintsButton 
          :HintText="'Делаем влажную уборку'"
          :PositionX="'-124px'"
          :PositionY="'135px'"
          :class="{ 'invisible-immedeately': !activated, 'delay-apperance': activated }"
        />
        <HintsButton 
          :HintText="'Стираем и гладим шторы'"
          :PositionX="'-232px'"
          :PositionY="'510px'"
          :class="{ 'invisible-immedeately': !activated, 'delay-apperance': activated }"
        />
        <HintsButton 
          :HintText="'Очищаем зеркальные поверхности'"
          :PositionX="'0px'"
          :PositionY="'452px'"
          :class="{ 'invisible-immedeately': !activated, 'delay-apperance': activated }"
        />
      </Tab>
      <Tab 
        name="Ванная"
        class="sidebar"
      >
        <img 
          class="image image-obj"
          :class="{ 'move-right': activated, 'visible-image': !activated }" 
          src="../assets/bathroom.png" 
          alt="bathroom">
        <HintsButton 
          :HintText="'Чистим и дезинфицируем унитаз'"
          :PositionX="'-300px'"
          :PositionY="'111px'"
          :class="{ 'invisible-immedeately': !activated, 'delay-apperance': activated }"
        />
        <HintsButton 
          :HintText="'Стираем подтёки'"
          :PositionX="'-20px'"
          :PositionY="'118px'"
          :class="{ 'invisible-immedeately': !activated, 'delay-apperance': activated }"
        />
        <HintsButton 
          :HintText="'Отмываем плевки презрения'"
          :PositionX="'24px'"
          :PositionY="'612px'"
          :class="{ 'invisible-immedeately': !activated, 'delay-apperance': activated }"
        />
        <HintsButton 
          :HintText="'Тщательно моем плитку'"
          :PositionX="'-357px'"
          :PositionY="'492px'"
          :class="{ 'invisible-immedeately': !activated, 'delay-apperance': activated }"
        />
        <HintsButton 
          :HintText="'Возвращаем ванне ослепительный блеск'"
          :PositionX="'-571px'"
          :PositionY="'252px'"
          :class="{ 'invisible-immedeately': !activated, 'delay-apperance': activated }"
        />
      </Tab>
      <Tab 
        name="Прихожая"
        class="sidebar"
      >
        <img 
          class="image image-obj"
          :class="{ 'move-right': activated, 'visible-image': !activated }" 
          src="../assets/hallway.jpg" 
          alt="hallway">
        <HintsButton 
          :HintText="'Избавляемся от грязи'"
          :PositionX="'-307px'"
          :PositionY="'106px'"
          :class="{ 'invisible-immedeately': !activated, 'delay-apperance': activated }"
        />
        <HintsButton 
          :HintText="'Свет мой, зеркальце, скажи!'"
          :PositionX="'67px'"
          :PositionY="'354px'"
          :class="{ 'invisible-immedeately': !activated, 'delay-apperance': activated }"
        />
        <HintsButton 
          :HintText="'У пыли нет шансов даже здесь!'"
          :PositionX="'-156px'"
          :PositionY="'747px'"
          :class="{ 'invisible-immedeately': !activated, 'delay-apperance': activated }"
        />
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import Tab from './Tab.vue'
import Tabs from './Tabs.vue'
import HintsButton from './HintsButton.vue' 

export default {
  name: 'HowWeClean',
  components: {
    Tab,
    Tabs,
    HintsButton
  },
  data() {
    return {
      scrollPosition: 0,
      activated: null,
      hideTab: null
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
      if(this.scrollPosition >= 1375) {
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
  text-align: -webkit-center;
}

.head-wrapper {
  display: inline-flex;
  align-items: baseline;
  margin-bottom: 52px;
}

.head-name {
  font-family: 'TTTravels-Light';
  font-size: 44px;
  line-height: 52.8px;
  font-weight: 400;
  padding-right: 67px;
  width: 535px;
  text-align: start;
}

.head-desc {
  font-family: 'TTTravels-Regular';
  font-size: 18px;
  line-height: 25.2px;
  padding-left: 67px;
  width: 414px;
  text-align: left;
}

 .sidebar {
  text-align: start;
  background-color: #5A30F0;
  padding-bottom: 231px;
  width: 0%;
  height: 0%;
} 

 .visible-sidebar {
  width: 100%;
  height: 50%;
  transition-delay: 2s;
}

.invisible-sidebar {
  visibility: hidden;
  transition-delay: 0.5s;
} 

 .sidebar-head {
  font-family: 'TTTravels-Regular';
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  padding: 35px 0 200px 53px;
}

.visible-image {
  visibility: visible;
}

.invisible-immedeately {
  opacity: 0;
}

.delay-apperance {
  opacity: 1;
  transition: opacity 2.5s;
  transition-delay: 3s;
}

.image-wrapper {
  transform: translate(0, 0); 
  transition-delay: 1s;
}

.image {
  transition: all 2s ease-in-out;
  position: absolute;
  top: 0;
  left: 175px;
  border-radius: 8px;
  width: 1065px;
  height: 800px;
}

.move-right {
  transform: translate(200px,0);
  border-radius: 0;
}

</style>