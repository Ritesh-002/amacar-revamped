import Header from './components/Header/Header.jsx'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="pt-24">
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Sell your car to multiple dealerships — effortlessly</h1>
          <p className="mt-4 text-slate-700">Private sellers can auction their cars to a network of trusted dealers. Fast, transparent, and competitive.</p>
        </section>
      </main>
    </div>
  )
}

export default App
