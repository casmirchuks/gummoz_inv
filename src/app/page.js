import Image from "next/image";
// import Page from '@/app/dashboard/page'
import Navbar from "./comps/navbar/page";
import Dashboard from "./comps/dashboard/page";
import Head from "next/head";

export default function Home() {
  return (
    <main className=" min-h-screen bg-gray-900 relative">
      <Head>
			  <link rel='icon' href='/logo.ico' />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png"></link>
		  </Head>
      <div className="flex ">
        <Navbar/> 
        <div className="flex py-2 ">
          <h1 className=" text-4xl font-bold border-red-400">Gummoz Inventory</h1>
        </div>
        
      </div>
      <div className="p-8 text-white ">    
        <Dashboard/>  
      </div>
    </main>
  );
}
