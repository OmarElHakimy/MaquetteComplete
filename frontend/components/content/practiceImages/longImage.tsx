import {FC} from 'react';
import Image, { StaticImageData } from 'next/image'

type Props = {
    title :string,
    img :string
}

const longImage :FC<Props> = ({title, img}) => {
    return (
            <div className='col-span-12 md:col-span-6 lg:col-span-8 my-2 mx-2'> 
            <div className='relative w-full h-[342px] rounded-2xl bg-gradient-to-b from-zinc-500 via-zinc-600 to-zinc-700'>
                <Image src={img} fill alt="long one" className='relative mix-blend-overlay rounded-2xl'/>
                <h5 className='font-medium text-center absolute bottom-2 inset-x-0 mx-auto object-contain text-xl xl:text-2xl'>{title}</h5>
            </div>    
            </div>
            
    );
}
export default longImage;