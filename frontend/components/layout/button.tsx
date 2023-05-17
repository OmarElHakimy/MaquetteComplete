import Link from 'next/link';

const Button :React.FC<any> = ({href, title}) => {
    return (

        <Link href={href} className='border-2 border-white border-solid px-4 py-2 hover:bg-yellow-500 hover:border-zinc-900 hover:text-black font-semibold'>{title}</Link> 
        
        )
}

export default Button;