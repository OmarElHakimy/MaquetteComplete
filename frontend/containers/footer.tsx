import {useState, useEffect} from 'react';
import Image from 'next/image';
import logo from '../public/assets/images/logo.png';
import Nav from '../components/footer/nav';

const strapiAssetsUrl = "http://127.0.0.1:1337";

const Footer :React.FC<any> = ({footer}) => {
    
    let screen = 0;
    if(typeof window !== 'undefined'){
        screen = window.innerWidth
    }

    const [width, setWidth] = useState<number>(screen);
    const [isSmall, setIsSmall] = useState<boolean>(false);

    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [setWidth])

    useEffect(() => {
        if(width < 1000){
            setIsSmall(true);
        }else{
            setIsSmall(false)
        }
    }, [width])

    return (
        <div className='pt-20 pb-10'>
            <div className='grid grid-cols-12'>
                <div className='col-span-12 my-4 xl:m-0 xl:col-span-3'>
                    <Image src={`${strapiAssetsUrl}${footer.logo.data.attributes.formats}`} alt="eight_id" width={162} height={38}/>
                </div>
                <div className='col-span-12 flex items-center justify-left  my-4 xl:m-0 xl:col-span-6 xl:mx-auto'>
                    <Nav menu={footer.menu}/>
                </div>
                <div className='col-span-12 my-4 xl:m-0 xl:col-span-3 xl:ml-auto'>
                    <a className='mx-2 text-yellow-500 hover:text-yellow-600' href="/"><i className='h4 bi bi-instagram'></i></a>
                    <a className='mx-2 text-yellow-500 hover:text-yellow-600' href="/"><i className='h4 bi bi-facebook'></i></a>
                    <a className='mx-2 text-yellow-500 hover:text-yellow-600' href="/"><i className='h4 bi bi-twitter'></i></a>
                    <a className='mx-2 text-yellow-500 hover:text-yellow-600' href="/"><i className='h4 bi bi-linkedin'></i></a>
                </div>
            </div>
            <div className='flex justify-evenly mt-10 xl:mt-20'>
                <p className='text-md'><i className='bi bi-c-circle'> </i> {footer.copyright}</p>
                {
                   footer.routes.map((route :any) => (
                        <a key={route.url} className='text-md hidden lg:block' href={route.url}>{route.title}</a>
                   ))
                }
            </div>
        </div>
    )
}
export default Footer;