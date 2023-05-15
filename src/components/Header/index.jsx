import './styles.css'
import Logo from '../../../public/logo-adc.svg' 

export function Header() {
    return (
        <header>
            <img src={Logo} alt="" />
        </header>
    )
}