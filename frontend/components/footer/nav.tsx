import Link from 'next/link';
import {useRouter} from 'next/router';

const Nav :React.FC<any> = ({menu}) => {
    const router = useRouter();

    return(
        <div className="flex justify-left xl:justify-center">
            <ul className="xl:grid xl:grid-flow-col lg:gap-x-4 gap-2">
                {
                    menu.map((navItem :any) => (
                        <li key={navItem.url} className='xl:my-0 my-2'>
                            <Link href={`${navItem.url}`} className={router.pathname == navItem.url ? "font-normal hover:text-lg hover:text-yellow-500" : "font-semibold hover:text-lg hover:text-yellow-500"}>{navItem.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Nav;