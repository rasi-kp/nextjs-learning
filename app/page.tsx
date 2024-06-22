import Image from "next/image";
import Link from "next/link";

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Home() {

  const back = '/images/hero-bg1.d2c9f21bc62ac9b9a32d.png'
  return (

    <>
      <div id="mainNav" className='fixed z-10 w-full flex justify-between items-center h-20 mx-auto px-12 text-blue-900 transition-bg duration-1000 ease-in-out '>
        <Link href="/"> <img className='' src='' width="118" alt="logo" /></Link>

        <ul className='hidden md:flex'>
          <li className='p-4 m-2 cursor-pointer duration-200 hover:text-[#38488f] hover:font-semibold'>Departments</li>
          <li className='p-4 m-2 cursor-pointer duration-200 hover:text-[#38488f] hover:font-semibold'>Subscription</li>
          <li className='p-4 m-2 cursor-pointer duration-200 hover:text-[#38488f] hover:font-semibold'>Contact</li>
          <li className='p-4 m-2 cursor-pointer duration-200 hover:text-[#38488f] hover:font-semibold'><Link href='/dlogin'>Doctor Login</Link></li>
          <Link href='/login'><li className='m-2 pl-5 pt-3 border border-blue-900 font-bold rounded-full border-[#283779] w-24 h-12 hover:bg-blue-900 hover:text-white'>
            Sign In
          </li></Link>
        </ul>
        <div className='block md:hidden z-50'>
          {/* {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />} */}
        </div>

        {/* <ul
        className={
          nav
            ? 'pl-8 fixed md:hidden left-0 top-0 w-full bg-[#ffffff] ease-in-out duration-500 z-10'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
        >

        <img className='mt-2 ml-3' src="" width="118" alt="logo" />

        <li className='p-2 m-2 cursor-pointer duration-200 hover:text-[#38488f] hover:font-semibold'>Departments</li>
        <li className='p-2 m-2 cursor-pointer duration-200 hover:text-[#38488f] hover:font-semibold'>Subscription</li>
        <li className='p-2 m-2 cursor-pointer duration-200 hover:text-[#38488f] hover:font-semibold'>Contact</li>
        <li className='p-2 m-2 cursor-pointer duration-200 hover:text-[#38488f] hover:font-semibold'><Link href="/dlogin">Doctor Login</Link></li>
        <Link href='/login'>
        <li className='m-2 pl-5 pt-3 border border-blue-900 font-bold rounded-full border-[#283779] w-24 h-12 hover:bg-blue-900 hover:text-white'>Sign In </li>
        </Link>
      </ul> */}
      </div>

      <section className="relative md:py-8 xxl:py-8 pb-0" >
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url("${back}")`,
          }} ></div>
        {/* <div className="container mx-auto px-3 py-4"> */}
        <div className=" container mx-auto relative px-1">
          <div className=" md:flex min-h-screen xl:min-h-screen">
            <div className="xl:min-h-screen min-h-1/4 md:order-1">
            <Image
              className="md:mt-20 md:mr-10 pt-24 md:pt-1 pt-md-0 w-100"
              src="/images/19778-removebg-preview.png"
              alt="hero-header"
              width={118}
              height={60}
            />
            </div>
            <div className="md:w-3/4 xl:w-2/3 xxl:w-6/12 px-2 xxl:ml-20 xl:pl-20 py-6 text-center md:text-left">
              <h1 className="md:mt-28 font-normal font-sans text-5xl" style={{ color: '#283779' }}>We're <strong className='font-bold'>determined </strong>for<br />your&nbsp;<strong className='font-bold'>better life.</strong></h1>
              <p className="text-xl font-normal  mt-3 mb-4" style={{ color: '#1B71A1' }}>You can get the care you need 24/7 – be it online or in <br />person. You will be treated by caring specialist doctors. </p>
              <Link href='/doctors'> <button className="font-semibold px-12 py-4 text-white rounded-full mt-3"
                style={{ backgroundColor: '#283779', borderColor: '#283779' }}>Make an Appointment</button> </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
