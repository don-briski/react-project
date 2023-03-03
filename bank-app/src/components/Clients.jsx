import React from 'react'
import { clients } from '../constants'
import styles from '../styles'


const Clients = () => {
  return (
    <section className={`${styles.flexCenter} 
    flex-wrap w-full`}>
    {
      clients.map((client, index) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[120px] ` }>
          <img src={client.logo} alt='client' className='sm:w-[192px] w-[100px] 
          object-contain coin-logo'/>
        </div>
      ))
    }
    </section>
  )
}

export default Clients