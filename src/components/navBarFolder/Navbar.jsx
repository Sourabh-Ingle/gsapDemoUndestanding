import NavbarLinks from "./NavbarLinks"


const Navbar = () => {
  return (
      <nav>
          <div className="navBar">
              <a href="#" className='flex items-center gap-2'>Valet Pour</a>
              <ul>
                  {NavbarLinks.map(link => {
                      console.log(link.id, link.title)
                      return (
                          <li key={link.id}>
                              <a href={`#${link.id}`}>{link.title}</a>
                          </li> 
                      )
                  }
                      
                  )}
              </ul>
          </div>
    </nav>
  )
}

export default Navbar