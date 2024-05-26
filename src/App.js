import React, { Fragment } from 'react'
<<<<<<< HEAD
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
>>>>>>> 7529782 (init project)
import { routes } from './routes'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
<<<<<<< HEAD
            const Layout = route.isShowPage ? DefaultComponent: Fragment
=======
            const Layout = route.isShowHeader ? DefaultComponent : Fragment
>>>>>>> 7529782 (init project)
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
<<<<<<< HEAD
            } />
=======
              } />
>>>>>>> 7529782 (init project)
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App