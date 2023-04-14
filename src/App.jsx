import React from 'react'
import { AnimatePresence } from 'framer-motion';
import FramerRoutes from './FramerRoutes';

function App() {
  return (
    <AnimatePresence mode="wait">
      <FramerRoutes/>
    </AnimatePresence>
  )
}

export default App
