
import './App.css';
import { Brand, CTA, NAvbar, } from "./component/index"
import {Blog, Features, Footer, Header, Possibilty, WhatGPT3} from './container/index'


function App() {
  return (
    <div className="App">
    <div className='gradient__bg'>
      <NAvbar />
      <Header />
    </div>
   <Brand />
   <WhatGPT3 />
   <Features />
   <Possibilty />
   <CTA />
   <Blog />
   <Footer />
   hello
    </div>
  );
}

export default App;
