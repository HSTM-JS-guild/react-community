import Main from './Main';
import Login from './Login';


const contentPages = [
    {
        id: 0,
        component: Main,
        title: "Home",
        route: "/home",
        description: "Home",
    },
    {
        id: 1,
        component: Login,
        title: "Login",
        route: "/login",
        description: "Login",
    }
  ]

  export default contentPages;