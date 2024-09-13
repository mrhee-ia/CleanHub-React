import { FaCheck } from "react-icons/fa"

const Features = () => {
  return (
    <section className='m-10 mt-10'>
      {/* HEADING */}
      <div className='flex justify-center'>
        <div className='text-left'>
          <h1 className='font-medium font-Oswald text-2xl sm:text-2xl md:text-3xl text-green-950'>Discover</h1>
          <h1 className='font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-white'>Platform Features</h1>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-10 gap-4 p-4 mt-10'>
        {/* RECRUITERS */}
        <div className='col-span-3 p-6 rounded-md bg-customWhite ml-6 mr-6'>
          <h2 className="mb-4 text-xl text-center font-semibold">RECRUITERS</h2>
          <ul className="space-y-5">
            <li className="flex justify-start">
              <FaCheck className="text-xl mb-2 mr-2 text-green-500 flex-shrink-0"/>
              <span>Create job listings easily for specific cleaning tasks to recruit the right cleaner</span>
            </li>
            <li className="flex justify-start">
              <FaCheck className="text-xl mb-2 mr-2 text-green-500 flex-shrink-0"/>
              <span>View and Manage all posted jobs, applications, and hired cleaners in one place</span>
            </li>
            <li className="flex justify-start">
              <FaCheck className="text-xl mb-2 mr-2 text-green-500 flex-shrink-0"/>
              <span>Screen applicants based on qualifications, location, and ratings to find the best match</span>
            </li>
            <li className="flex justify-start">
              <FaCheck className="text-xl mb-2 mr-2 text-green-500 flex-shrink-0"/>
              <span>Receive alerts when someone applies for your job or when a cleaner is available nearby</span>
            </li>
          </ul>
        </div>
        {/* GENERAL */}
        <div className='col-span-4 p-6 rounded-md bg-customWhite md:scale-110'>
          <h2 className="mb-4 text-2xl text-center text-green-600 font-bold">GENERAL</h2>
          <ul className="space-y-5">
            <li className="flex justify-start">
              <FaCheck className="text-xl mb-2 mr-2 text-green-500 flex-shrink-0"/>
              <span>Ensure safety and trust with user verification for both recruiters and job hunters</span>
            </li>
            <li className="flex justify-start">
              <FaCheck className="text-xl mb-2 mr-2 text-green-500 flex-shrink-0"/>
              <span>Use location-based filtering to connect recruiter and hunters nearby</span>
            </li>
            <li className="flex justify-start">
              <FaCheck className="text-xl mb-2 mr-2 text-green-500 flex-shrink-0"/>
              <span>Access all features on the go including job posting, browsing, managing, and tracking</span>
            </li>
            <li className="flex justify-start">
              <FaCheck className="text-xl mb-2 mr-2 text-green-500 flex-shrink-0"/>
              <span>Keep track of all past jobs or applications for both recruiters and job hunters</span>
            </li>
            <li className="flex justify-start">
              <FaCheck className="text-xl mb-2 mr-2 text-green-500 flex-shrink-0"/>
              <span>Get assistance with job disputes or platform-related questions through customer support</span>
            </li>
            <li className="flex justify-start">
              <FaCheck className="text-xl mb-2 mr-2 text-green-500 flex-shrink-0"/>
              <span>Both recruiters and job hunters can rate and review each other, fostering a trusted community</span>
            </li>
          </ul>
        </div>
        {/* JOB HUNTERS */}
        <div className='col-span-3 p-6 rounded-md bg-customWhite ml-6 mr-6'>
          <h2 className="mb-4 text-xl text-center font-semibold">JOB HUNTERS</h2>
          <ul className="space-y-5">
            <li className="flex justify-start">
              <FaCheck className="text-xl mb-2 mr-2 text-green-500 flex-shrink-0"/>
              <span>Search for available cleaning tasks by location, type, pay rate, schedule, and urgency with ease</span>
            </li>
            <li className="flex justify-start">
              <FaCheck className="text-xl mb-2 mr-2 text-green-500 flex-shrink-0"/>
              <span>Quick application process for jobs that suit your skills and availability</span>
            </li>
            <li className="flex justify-start">
              <FaCheck className="text-xl mb-2 mr-2 text-green-500 flex-shrink-0"/>
              <span>Build a profile showcasing your cleaning experience and past work</span>
            </li>
            <li className="flex justify-start">
              <FaCheck className="text-xl mb-2 mr-2 text-green-500 flex-shrink-0"/>
              <span>Notifications for new posted jobs matching your preferences in your area</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Features