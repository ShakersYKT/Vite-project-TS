import  { PureComponent } from 'react'
import Button from './Button'

class Footer extends PureComponent {
    render() {
        return (
            <div className="bg-black text-white text-lg py-4 px-8 flex items-center justify-center">
                <div className="flex items-center">
                    <p className="uppercase mr-100 text-4xl">Адрес: Семена Данилова, 3/3а 1 этаж</p>
                    <div>
                      <Button color="primary" size="medium" title="+7-914-298-77-27" onClick={function (): void {
                            throw new Error('Function not implemented.')
                        } }/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer