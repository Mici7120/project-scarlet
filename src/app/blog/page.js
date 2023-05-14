import Image from 'next/image'
import NavBar from '../NavBar'
import EntradaBlog from './EntradaBlog'
import entradasBlog from '../data/entradasBlog'
export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar></NavBar>
      {entradasBlog.map((blog, index) => {
        return (
        <EntradaBlog
        key={index}
        blog={blog}/>
        )
      })}
    </main>
  )
}
