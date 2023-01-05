import styled from './header.module.css';
import logo from '../../assets/logo.png'

export function Header() {
  return (
    <>
      <header className={styled.header}>
        <img src={logo} alt='logo' />
      </header>
    </>
  )
}