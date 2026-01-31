import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VisionMission from './components/VisionMission'
import ProgramCards from './components/ProgramCards'
import ImpactTimeline from './components/ImpactTimeline'
import Team from './components/Team'
import Contribution from './components/Contribution'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <VisionMission />
      <ProgramCards />
      <ImpactTimeline />
      <Team />
      <Contribution />
      <Footer />
    </div>
  )
}

export default App
