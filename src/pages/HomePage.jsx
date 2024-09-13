import Banner from "../components/Banner"
import Features from "../components/Features"

const HomePage = () => {
  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-green-700 via-green-800 to-green-900'>
        <Banner/>
        <Features/>
    </main>
  )
}

export default HomePage