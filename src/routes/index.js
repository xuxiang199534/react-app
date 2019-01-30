import Home from '@/containers/home/index';
import Main from '@/containers/main/index';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/main',
    component: Main,
  }
]
export default routes;