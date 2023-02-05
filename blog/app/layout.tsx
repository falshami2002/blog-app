import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}

const NavBar = () => {
  return (
    <div className='h-[7vh] w-screen max-w-full flex bg-black'>
      <div className='w-1/3 h-full flex items-center'>
        <button className='text-white bg-black rounded-lg font-semibold w-[15%] p-1 m-5 transition-colors duration-200 hover:border hover:text-blue-500'>
          HOME
        </button>
        <button className='text-white bg-black rounded-lg font-semibold w-[15%] p-1 m-5 transition-colors duration-200 hover:border hover:text-blue-500'>
          ABOUT
        </button>
        <button className='text-white bg-black rounded-lg font-semibold w-[15%] p-1 m-5 transition-colors duration-200 hover:border hover:text-blue-500'>
          BLOG
        </button>
      </div>
      <div className='w-1/3 h-full flex justify-center items-center'>
        <h1 className='text-white text-[3vh] transition-all hover:text-blue-500'>My Blog</h1>
      </div>
      <div className='w-1/3 h-full flex justify-end items-center'>
        <button className='text-white bg-black rounded-lg font-semibold w-[15%] p-1 m-5 transition-colors duration-200 hover:border hover:text-blue-500'>
          ADFADSF
        </button>
      </div>
    </div>
  )
}
