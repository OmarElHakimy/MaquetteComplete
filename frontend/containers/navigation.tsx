import {useState} from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from '../components/navigation/nav'
import logo from '../public/assets/images/logo.png'
import Link from 'next/link'
import NavMobi from '../components/navigation/navMobi';
import {NavAnimation} from '../animation/animation';

const Navigation :React.FC<any> = ({header}) => {

    const [isDisplay, setIsDisplay] = useState<boolean>(false)

    // const onClickHandler = () => {
    //     if(isDisplay){
    //         setIsDisplay(false);
    //     }else{
    //         setIsDisplay(true);
    //     }
    // }
    const onDisplayHandler = () => {
        setIsDisplay(true);
    }

    const onHiddenHandler = () => {
        setIsDisplay(false);
    }

    return(
        <>
        <div className="grid grid-cols-2 xl:grid-cols-3">
            <div>
                <Image src={logo} alt="eight-id" width={176} height={41}/>
            </div>
            <div className='hidden xl:flex items-center justify-center'>
                <Nav menu={header.menu.navItem}/>
            </div>
            <div className='hidden xl:flex items-center justify-end'>
                <Link href={header.button.href} className='border-2 border-white border-solid px-4 py-2 hover:bg-white hover:text-black font-semibold'>{header.button.title}</Link>
            </div>
            {
                !isDisplay
                ?
                <div className='flex xl:hidden justify-end items-center'>
                    <i className='bi bi-list text-4xl hover:cursor-pointer hover:scale-110 hover:text-yellow-500' onClick={onDisplayHandler}></i>
                </div>
                :
                <div className='flex xl:hidden justify-end items-center'>
                    <i className='bi bi-x-lg text-4xl hover:cursor-pointer hover:text-yellow-500' onClick={onHiddenHandler}></i>
                </div>
            }
            
        </div>
            <AnimatePresence mode="wait">
            {
                isDisplay
                &&
                <motion.div className='block xl:hidden' initial="initial" animate="animate" exit="exit" variants={NavAnimation}>
                    <NavMobi menu={header.menu.navItem} button={header.button}/>
                </motion.div>
            }
            </AnimatePresence>    
        </>
    )
}
export default Navigation;