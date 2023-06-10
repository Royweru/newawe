import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
       <div className=' flex flex-row mx-auto mt-12 justify-evenly'>
         <Link href={"/UploadButton"} className='text-2xl px-9 text-green-300 hover:text-white'>Upload Using Button</Link>
         <Link href={"/UploadDnD"} className='text-2xl px-9 text-green-300 hover:text-white'>Upload Using Drag and Drop</Link>
       </div>
      </div>
    </main>
  )
}
