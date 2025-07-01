import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import ContactPage from './pages/ContactPage.vue';

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/projects', component: ProjectsPage, name: 'projects' },
    { path: '/contact', component: ContactPage, name: 'contact' },
    { path: '/project/:slug', component: () => import('./pages/ProjectDetailPage.vue'), name: 'project' },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
});
