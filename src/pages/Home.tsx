import { PureComponent, type ReactNode } from 'react'
import Text from '../components/Text';
import { AddingProduct } from '../components/AddingProduct';

interface Props {}
interface State {}

class Home extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {

        }
    }

    render(): ReactNode {
        return (
            <div className="bg-cover bg-center h-screen flex flex-col gap-3">
                <Text size="large" color="primary" text="Задание 6. Хуки"/>
                <AddingProduct/>
            </div>
        );
    }
}

export default Home