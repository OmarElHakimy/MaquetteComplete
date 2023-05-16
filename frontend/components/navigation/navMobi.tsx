import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';

const Nav :React.FC<any> = ({menu, button}) => {
    const router = useRouter();

    return(
        <ul className="my-8">
            {
                menu.map((navItem :any) => (
                    <li key={navItem.url}>
                        <Link href={navItem.url} className={router.pathname === navItem.url ? "font-medium hover:text-lg hover:text-yellow-500" : "font-semibold hover:text-lg hover:text-yellow-500"}>{navItem.title}</Link>
                    </li>
                ))
                
            }
            
            <li className='my-8'>
            <Link href={button.href} className='border-2 border-white border-solid px-4 py-2 hover:bg-yellow-500 hover:border-zinc-900 hover:text-black font-semibold'>{button.title}</Link>
            </li>
        </ul>
    )
}
export default Nav;