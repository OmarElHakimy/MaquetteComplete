import {useState} from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from '../components/navigation/nav'
import logo from '../public/assets/images/logo.png'
import Link from 'next/link'
// import NavMobi from '../components/navigation/navMobi';
import {NavAnimation} from '../animation/animation';
import Button from '../components/layout/button'

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
                    <Image className='my-auto' src={logo} alt="eight-id" width={176} height={41}/>
                </div>
                <div className='hidden xl:flex items-center justify-center'>
                    <Nav menu={header.menu.navItem}/>
                </div>
                <div className='hidden xl:flex items-center justify-end'>
                    <Button href={header.button.href} title={header.button.title}/>
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
                    <Nav menu={header.menu.navItem}>
                        <li className='my-8'>
                            <Button href={header.button.href} title={header.button.title}/>
                        </li>
                    </Nav>
                </motion.div>
            }
            </AnimatePresence>    
        </>
    )
}
export default Navigation;