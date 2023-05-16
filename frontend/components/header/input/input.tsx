import {useState, useRef, FormEvent} from 'react'

type Props = {
    title :string,
    placeholder :string
}

const Input :React.FC<Props> = ({title, placeholder}) => {
    const [onTop, setOnTop] = useState<string>("absolute left-3 top-4 lg:left-4 lg:top-6 text-zinc-700 text-md md:text-lg font-semibold peer-focus:text-sm peer-focus:top-1 peer-focus:left-4 peer-focus:text-zinc-500");

    const sendEmailInput = useRef<HTMLInputElement>(null);

    const onChangeHandler = (event :FormEvent) => {
        event.preventDefault();
        const value = sendEmailInput.current!.value;
        if(value.length == 0){
            setOnTop("absolute left-3 top-4 lg:left-4 lg:top-6 text-zinc-700 text-md md:text-lg font-semibold peer-focus:text-sm peer-focus:top-1 peer-focus:left-4 peer-focus:text-zinc-500");
        }else{
            setOnTop("absolute font-semibold text-sm top-1 left-4 text-zinc-500");
        }
    }

    return (
            <div className='relative rounded-full bg-gray-700 opacity-90 lg:h-20 h-16 lg:w-[550px] sm:w-96 w-full'>
                <input type="email" className='relative peer h-full w-full rounded-full bg-zinc-900 text-zinc-700 text-lg font-semibold focus:outline-none px-2' name="email" id="emailLabel" aria-describedby="talk" onChange={(event) => onChangeHandler(event)} ref={sendEmailInput}/>
                <label  htmlFor="emailLabel" className={`${onTop}`}><i className='bi bi-envelope-fill'> </i>{placeholder}</label>
                <button className="absolute right-1 top-1 lg:right-1.5 lg:top-1.5 rounded-full bg-yellow-400 py-4 px-3 lg:py-5 lg:px-8 font-semibold lg:font-semibold text-black text-md lg:text-xl hover:bg-yellow-600" type="button" id="talk">{title}</button>
            </div>
    )
}
export default Input