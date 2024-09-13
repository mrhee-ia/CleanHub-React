import bannerImg from '../assets/images/bannerImg.png'
import logoImg from '../assets/images/logo.jpg'

const Banner = () => {
  return (
    <section className="m-10 border border-gray-200 border-opacity-70 rounded-lg shadow-2xl shadow-black backdrop-blur-lg bg-transparent">
        <nav className="px-2 sm:px-6 lg:px-8 text-white">
            <div className="flex h-20 items-center justify-between">
                <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                    {/* LOGO */}
                    <div className="flex flex-shrink-0 items-center mr-4">
                        <img className="h-10 w-10 rounded-full" src={logoImg}/>
                        <span className="hidden md:block text-2xl font-bold ml-3">CleanHub</span>
                    </div>
                    {/* BUTTONS */}
                    <div className="md:ml-auto flex space-x-2">
                        <a href='#' className='px-4 py-2 hover:bg-green-950 hover:bg-opacity-50 hover:rounded-md'>Jobs</a>
                        <a href='#' className='px-4 py-2 hover:bg-green-950 hover:bg-opacity-50 hover:rounded-md'>Help</a>
                        <a href='#' className='px-4 py-2 hover:bg-green-950 hover:bg-opacity-50 hover:rounded-md'>About</a>
                        <a href='' className="px-4 py-2 bg-green-950 border border-gray-300 rounded-md hover:bg-white hover:text-green-500">Join Now!</a>
                    </div>
                </div>
            </div>
        </nav>
        <div className="px-2 sm:px-6 lg:px-8 flex md:flex-row items-center justify-between">
            <div className="p-6 text-white w-full md:w-6/10 text-left">
                <h1 className="font-Oswald text-4xl">"Spark Up Spaces to Power Up Careers — Jobs and Cleaners, <span className="font-Oswald text-green-400">Perfectly Matched!</span>"</h1>
                <p className="mt-5">Welcome to <span className="text-green-400">CleanHub</span>, an online community that easily connects job hunters with flexible cleaning gigs. Are you a government agency looking to maintain public spaces? Private homeowner in need of a tidy vacation house? Someone seeking short-term work with fast pay? CleanHub got you covered! Post or find cleaning jobs effortlessly, and get tasks done on your schedule.</p>
            </div>
            <div className='md:w-4/10 hidden md:block'>
                <img src={bannerImg} className='w-full h-auto scale-110'/>
            </div>
        </div>
        <div className="px-2 sm:px-6 lg:px-8 -mt-7">
            <button className='m-6 px-6 py-3 text-white rounded-md border border-white bg-green-950 whiteShadow'><p>Let's Begin</p></button>
        </div>
    </section>
  )
}

export default Banner