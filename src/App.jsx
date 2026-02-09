import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VisionMission from './components/VisionMission'
import ProgramCards from './components/ProgramCards'
import ImpactTimeline from './components/ImpactTimeline'
import Team from './components/Team'
import Contribution from './components/Contribution'
import Footer from './components/Footer'
import Seo from './components/Seo'

function App() {
  return (
    <div className="min-h-screen">
      <Seo />
      <Navbar />
      <main>
        <Hero />
        <VisionMission />
        <ProgramCards />
        <ImpactTimeline />
        <Team />
        <Contribution />
      </main>
      <Footer />
    </div>
  )
}

export default App
