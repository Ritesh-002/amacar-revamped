import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Carousel from './components/Carousel/Carousel.jsx'
import SectionHeader from './components/SectionHeader/SectionHeader.jsx'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="pt-0">
        <Hero />
        <SectionHeader title="How Amacar works" highlight="Sell smarter, faster" />
        <Carousel />
      </main>
    </div>
  )
}

export default App
