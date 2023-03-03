import { useState } from 'react'
import styles from './styles'
import { Clients, CTA, Footer, Testimonials, Hero, Navbar, Billing, Business, Stats, CardDeals } from './components'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="bg-primary w-full overflow-hidden">
     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
     <div className={`${styles.boxWidth}`}>
        <Navbar />
     </div>
     </div>

     <div className={`bg-primary ${styles.flexstart}`}>
     <div className={`${styles.boxWidth}`}>
        <Hero />
     </div>
     </div>

     <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
     <div className={`${styles.boxWidth}`}>
      <Stats />
        <Business /> 
        <Billing />
        <CardDeals />
        <Testimonials /> 
        <Clients />
        <CTA />
        <Footer />
     </div>
     </div>
    </div>
  )
}

export default App
