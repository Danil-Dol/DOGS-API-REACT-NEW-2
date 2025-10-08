import { Link } from "../../shared/ui";
import { Button } from "../../shared/ui";
import { Title } from "../../shared/ui";
import { Header } from "../../widgets/header";

export default function Home() {
  return (
    <div>
      <Header/>
      <Button children="Это кнопка"/>
      <Title children="Это заголовок"/>
      <Link/>
    </div>
  );
}
