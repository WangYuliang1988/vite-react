import { NavLink } from 'react-router-dom'

export default function Navigator() {
  return (
    <>
      <NavLink to="/home">Home</NavLink> | <NavLink to="/about">About</NavLink>
    </>
  )
}
