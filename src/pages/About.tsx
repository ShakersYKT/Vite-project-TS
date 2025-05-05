import { PureComponent, type ReactNode } from 'react'

interface Props {}
interface State {}

class About extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {

        }
    }

    render(): ReactNode {
        return (
            <div className="bg-cover bg-center h-screen">
                <p className="text-black text-center text-2xl">Услуги и цены</p>
            </div>
        )
    }
}

export default About