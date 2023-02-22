import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 将自动注册所有组件为全局组件
import {scrollBoard} from '@jiaminghi/data-view';
import 'element-ui/lib/theme-chalk/index.css';

import '@/assets/styles/base.scss';
import '@/assets/styles/common.scss';
import '@/assets/iconfont/iconfont.css';

Vue.config.productionTip = false;
import ECharts from 'vue-echarts';
// import {use} from 'echarts/core';
import * as echarts from 'echarts';
import {Carousel, CarouselItem} from 'element-ui';

Vue.component('v-chart', ECharts);
Vue.prototype.$echarts = echarts;

Vue.use(scrollBoard);
Vue.use(Carousel).use(CarouselItem);

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
