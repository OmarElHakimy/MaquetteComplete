// import Link from 'next/link';
// import {useRouter} from 'next/router';
// import React from 'react';

// const Nav :React.FC<any> = ({menu, children}) => {
//     const router = useRouter();

//     return(
//         <ul className="my-8">
//             {
//                 menu.map((navItem :any) => (
//                     <li key={navItem.url}>
//                         <Link href={navItem.url} className={router.pathname === navItem.url ? "font-medium hover:text-lg hover:text-yellow-500" : "font-semibold hover:text-lg hover:text-yellow-500"}>{navItem.title}</Link>
//                     </li>
//                 ))
                
//             }
            
//             {
//                 children
//             }
//         </ul>
//     )
// }
// export default Nav;