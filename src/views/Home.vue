
<template>
  <div class="home-container">
    <div class="wrap" ref="editor">
      <div>大屏模板</div>
    </div>
  </div>
</template>

<script>
import { screenSize } from '@/assets/js/utils';
import dayjs from 'dayjs';
export default {
  name: 'Home',
  data () {
    return {
    };
  },
  computed: {
    time () {
      const date = new Date();

      return (
        dayjs(date).format('YYYY-MM-DD HH:mm') +
        this.dayFormat(dayjs(date).day())
      );
    },
  },
  created () {
  },
  mounted () {
    screenSize(this.$refs.editor);
  },
  methods: {
    dayFormat (day) {
      let newDay = '星期一';
      switch (day) {
        case 0:
          newDay = '星期日';
          break;
        case 1:
          newDay = '星期一';
          break;
        case 2:
          newDay = '星期二';
          break;
        case 3:
          newDay = '星期三';
          break;
        case 4:
          newDay = '星期四';
          break;
        case 5:
          newDay = '星期五';
          break;
        case 6:
          newDay = '星期六';
          break;
      }
      return newDay;
    },
    /**
     * 处理数组
     * @return {*}
     */
    arrChange (num, arr) {
      const newArr = [];
      while (arr.length > 0) {
        newArr.push(arr.splice(0, num));
      }
      return newArr;
    },
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  color: #fff;

  .wrap {
    transform-origin: 0px 0px 0px;
    background-size: contain;
    background-position: 50% 0;
    min-width: auto;
    width: 1920px;
    min-height: auto;
    height: 1080px;
    overflow: auto;
    overflow-x: hidden;

    // transition: all 0.3s;
    div {
      font-size: 30px;
      text-align: center;
    }
  }
}
</style>
