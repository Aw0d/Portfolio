import { createApp } from 'vue';
import router from './router';
import './assets/global.css';

import App from './App.vue';
import { setupEffects } from './effects.js';

const app = createApp(App).use(router);
app.mount('#app');
setupEffects();
// re-run reveal effects after navigation to handle new DOM
router.afterEach(() => setTimeout(setupEffects, 0));
