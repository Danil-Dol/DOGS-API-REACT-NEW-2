import { Logo } from "../shared/ui"
import { Link } from "../shared/ui"

const links = [
    {link: "#", children: "что такое собака"},
    {link: "#", children: "интересные факты"},
    {link: "#", children: "породы"},
    {link: "#", children: "сгенерировать"}
]

export const Header = () =>{
    return(
        <div>
            <Logo />
            <nav>

            </nav>
        </div>
    )
}