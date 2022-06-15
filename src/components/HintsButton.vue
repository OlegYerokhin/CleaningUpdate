<template>
  <div>
    <div 
      class="tooltip" 
      :style="[getStyle]"
    >
      <div class="hint-btn"></div>
      <span class="tooltiptext">
        {{ HintText }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HintsButton',
  props: ['HintText', 'PositionX', 'PositionY'],
  computed: {
    getStyle: function() {
      return {
        'bottom': this.PositionY,
        'right': this.PositionX
      }
    }
  }
}
</script>

<style>
.hint-btn {
  background-color: #5A30F0;
  width: 30px;
  height: 30px;
  font-size: 16px;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 0px 0px 10px rgba(95,48,240,0.25);
  cursor: pointer;
  position: absolute;
  transform: rotate(720deg);
  transition: ease-in-out 0.5s;
}

.hint-btn::after {
  position: absolute;
  content: '+';
  left: 9px;
  top: 0;
  font-size: 24px;
  color: #fff;
  font-weight: 700;
  font-family: 'TTTravels-Regular';
}

.hint-btn:hover {
  box-shadow: none;
  transform: rotate(-675deg);
  transition: ease-in-out 0.5s;
}

.hint-btn::after:hover {
  transform: rotate(-675deg);
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #fff;
  color: #6e6e6e;
  font-family: "TTTravels-Regular";
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  bottom: 15px;
  left: 50%;
  margin-left: -46px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #fff transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>