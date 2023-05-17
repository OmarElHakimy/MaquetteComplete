import {FC} from 'react';
import Image, {StaticImageData} from 'next/image';

type Props = {
    title :string,
    img :string
}

const shortImage :FC<Props> = ({title, img}) => {
    return (
            <div className='col-span-12 md:col-span-6 lg:col-span-4 my-2 mx-2'> 
                <div className='relative w-full h-[342px] rounded-xl bg-gradient-to-b from-zinc-500 via-zinc-700 to-zinc-900'>
                    <Image src={img} fill alt="long one" className='relative mix-blend-overlay'/>
                    <h4 className='font-medium text-center absolute bottom-2 inset-x-0 mx-auto object-contain text-xl xl:text-2xl'>{title}</h4>
                </div>    
            </div>
    );
}
export default shortImage;