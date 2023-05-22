import Link from 'next/link';
import {useRouter} from 'next/router';

const Nav :React.FC<any>= ({menu, children}) => {
    const router = useRouter();
    
    return(
            <ul className="flex xl:flex-row xl:justify-center xl:space-x-6 flex-col justify-left md:py-4">
                {
                    menu.map((navItem :any) => (
                    <li key={navItem.url} className='xl:my-0 my-0.5'>
                            <Link href={`${navItem.url}`} className={router.pathname == navItem.url ? "font-normal hover:text-yellow-500" : "font-semibold hover:text-yellow-500"}>{navItem.title}</Link>
                        </li>
                    ))
                }
                {children}
            </ul>
    )
}
export default Nav;