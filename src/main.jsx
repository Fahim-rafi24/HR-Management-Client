import './index.css'
// html root link up
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// react router
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/router.jsx'
import AuthContext from './context/AuthContext.jsx'
import UserContext from './Context/UserContext.jsx'




// set auth & user Context for drealling data
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <UserContext>
        <RouterProvider router={router} />
      </UserContext>
    </AuthContext>
  </StrictMode>,
)