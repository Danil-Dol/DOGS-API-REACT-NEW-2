import { Link } from "../../shared/ui";
import { Button } from "../../shared/ui";
import { Title } from "../../shared/ui";

export default function Home() {
  return (
    <div>
      <Button children="Это кнопка"/>
      <Title children="Это заголовок"/>
      <Link></Link>
    </div>
  );
}
