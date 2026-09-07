import Navbar from './components/navbar/Navbar'
import Carousel from './components/carousel/Carousel'
import Categories from './components/categories/Categories'
import Body from './components/body/body'
import Footer from './components/footer/footer'
import { AuthInterceptor } from "./interceptors/AuthInterceptor";
import { TimeInterceptor } from './interceptors/TimeInterceptor'

function App(){
  AuthInterceptor();
  TimeInterceptor();
  return <div>
    <Navbar />
    <Categories />
    <Carousel />
    <Body />
    <Footer />
  </div>
}
export default App;
