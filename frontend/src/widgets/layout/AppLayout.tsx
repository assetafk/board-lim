import { Sidebar } from './Sidebar';
import { Header } from './Header';

type Props = {
    childre: React.ReactNode;
};

export const AppLayout = ({ childre }: Props) => {
    return (
        <div className='flex h -screen'>

            <Sidebar
        </div>
    )
}