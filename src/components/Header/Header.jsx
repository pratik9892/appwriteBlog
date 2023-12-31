import React from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => (state.auth.status))
  const navigate = useNavigate()
  console.log(authStatus);
  const navItems = [
    {
      name: 'Home',
      slug : '/',
      active : true
    },
    {
      name: 'Login',
      slug : '/login',
      active : !authStatus
    },
    {
      name: 'Signup',
      slug : '/signup',
      active : !authStatus
    },
    {
      name: 'All Posts',
      slug : '/all-posts',
      active : authStatus
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className='py-3 shadow bg-yellow-500 h-[80px]'>
      <Container>
        <nav className='flex items-center justify-between'>
          <div >
            <Link to='/'>
              <Logo width="70px"/>
            </Link>
          </div>
          <div className="flex ml-auto">
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button 
                   onClick={() => navigate(item.slug)} 
                   className='inline-block py-2 px-6 duration-200 hover:bg-black rounded-full hover:text-white'>
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {
              authStatus && (
                <li>
                  <LogoutBtn/>
                </li>
              )
            }
          </ul>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header