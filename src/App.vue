<template>
  <div id="app">
    <Header />
    <div class="features">
      <Features 
        CardName="Тщательно отобранный персонал" 
        :src="require(`./assets/personal.png`)" 
        :BackgroundText="'Не нужно тратить время, силы и ресурсы на разме- щение вакансий, проведе- ние собеседований, про- верку кандидатов на должность уборщицы. За счет больших объемов мы можем сделать это эффективнее.'"
        :transitionDelay="'0s'"
      />
      <Features 
        CardName="Качественная эко-химия" 
        :src="require(`./assets/chemicals.png`)" 
        :BackgroundText="'Наш девиз – чистота, безопасность, экологичность. Наша химия хорошо очищает жилое пространство, а также заботится о здоровье человека и окружающей среде.'"
        :transitionDelay="'0.5s'"
      />
      <Features 
        CardName="Контролируем качество" 
        :src="require(`./assets/quality.png`)" 
        :BackgroundText="'Наши супервайзеры проверят качество выполненных работ, а в случае выявления недостатков в уборке они примут меры по их устранению.'"
        :transitionDelay="'1s'"
      />
      <Features 
        CardName="Работаем круглосуточно" 
        :src="require(`./assets/phone.png`)" 
        :BackgroundText="'Мы знаем, какими разными могут быть обстоятельства, поэтому готовы предложить Вам качественные услуги по уборке помещений 24 часа в сутки, 7 дней в неделю!'"
        :transitionDelay="'1.5s'"
      />
    </div>
    <HowWeClean />
 
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Features from './components/Features.vue'
import HowWeClean from './components/HowWeClean.vue'

export default {
  name: 'App',
  components: {
    Header,
    Features,
    HowWeClean,
  },
}
</script>

<style>
#app {
  width: 1440px;
  color: #404040;
  margin: 0 auto;
}

body {
  margin: 0;
}

.features {
  display: flex;
}
</style>
