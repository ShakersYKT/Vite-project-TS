import { PureComponent } from 'react'
import logo from '../assets/logo.svg';
import Button from "./Button";

class Header extends PureComponent {
    render() {
        return (
            <div className="bg-black">
                <ul className="flex p-4 items-center justify-between">
                  <li className="flex items-center">
                      <img src={logo} alt="App Logo" className='w-16 h-16' />
                  </li>
                  <div className="flex-grow flex justify-center space-x-16 text-4xl">
                      <li><a href="/" className='text-white hover:text-gray-300'>Главная</a></li>
                      <li><a href="/about" className='text-white hover:text-gray-300'>Услуги и цены</a></li>
                      <li><a href="/blog" className='text-white hover:text-gray-300'>Качество</a></li>
                  </div>
                  <li className="flex items-center justify-end">
                      <Button color="primary" size="medium" title="Позвонить нам" onClick={function (): void {
                            throw new Error('Function not implemented.');
                        } }/>
                  </li>
              </ul>
            </div>
        )
    }
}

export default Header