import Link from "next/link"

export default function Home() {
  return (
    <div className="h-[93vh] w-screen max-w-full bg-slate-200 flex flex-col">
      <div className="w-screen max-w-full h-[23vh] flex flex-col items-center justify-center">
        <h1 className="text-[5vh] font-bold">My Blog App</h1>
        <h2 className="text-[3vh]">Firas Alshami</h2>
      </div>
      <div className="w-screen max-w-full h-[70vh] flex">
        <div className="w-1/2 h-full bg-red-500 flex justify-center">
          <p className="w-3/4 text-[3vh]">This is the left section for paragraphs</p>
        </div>
        <div className="w-1/2 h-full grid grid-cols-2 grid-rows-2">
          <Card link='/about' title='About' paragraph='Visit the about page to learn about me and the tech stack I used to create this app'/>
          <Card link='https://firasalshami.vercel.app/' title='Portolio Website' paragraph='Visit my porfolio website to learn more about me'/>
          <Card link='/blog' title='Blog' paragraph='Check out my blog posts where I post about the latest technologies that I am learning'/>
          <Card link='/about' title='About' paragraph='Visit the about page to learn about me and the tech stack I used to create this app'/>
        </div>
      </div>
    </div>
  )
}

type cardProps = {
  link: string,
  title: string,
  paragraph: string
}

const Card = ({link, title, paragraph}:cardProps) => {
  return (
    <Link href={link} className="flex items-center justify-center hover:cursor-pointer">
      <div className="h-3/4 w-2/3 bg-white shadow-2xl rounded-2xl flex flex-col items-center">
        <div className="h-[25%] w-[80%] flex justify-center items-center">
          <h1 className="text-[3vh] font-semibold">{title}</h1>
        </div>
        <div className="h-[75%] w-[80%]">
          <p className="text-[2vh]">{paragraph}</p>
        </div>
      </div>
    </Link>
  )
}
