import Link from 'next/link';
import {useRouter} from 'next/router';

const Nav :React.FC<any>= ({menu}) => {
    const router = useRouter();
    
    return(
        <ul className="grid grid-flow-col lg:gap-x-4 gap-x-2">
            {
                menu.map((navItem :any) => (
                    <li key={navItem.url}>
                        <Link href={navItem.url} className={(navItem.url == router.pathname) ? "font-normal hover:text-lg hover:text-yellow-500" : "font-semibold hover:text-lg hover:text-yellow-500"}>{navItem.title}</Link>
                    </li>
                ))
            }
            
        </ul>
    )
}
export default Nav;