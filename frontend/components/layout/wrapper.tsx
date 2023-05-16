import type { AppProps } from 'next/app'

const Wrapper :React.FC<any> = (props) => {
    return(
        <div className={`px-10 bg-black py-10 ${props.class}`}>
            <div className='container mx-auto'>
                {props.children}
            </div>
        </div>
    )
}

export default Wrapper;