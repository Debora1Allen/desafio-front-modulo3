import './style.css';
import logo from '../../assests/logoDindin.svg';

 function Header () {
    return(
    <header>
      <img src={logo} alt='logo'/> <h1>Dindin</h1>  
    </header>

    )
}

export default Header;