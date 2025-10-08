


export const Button = ({children}) =>{
    return (
        <div className="bg-[#4D86FF] w-fit py-2.5 px-11 rounded-full hover:bg-[#8cb0ff] transition ease-in-out duration-500">
            <a href="#">
                <span className="text-white font-[Montserrat] font-semibold text-sm">{children}</span>
            </a>
        </div>
    )
}