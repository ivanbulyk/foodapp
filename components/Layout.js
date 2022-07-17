import React, { Children } from 'react'
// import { Footer } from './Footer'
// import { Navbar } from './Navbar'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  )
}

// const Layout = ({children}) => {
//   return (
//     <div>
//     <Navbar />
//         {children}
//      <Footer />
//     </div>
//   )
// }

// export default Layout