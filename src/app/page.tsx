import ProdutoItem from "../components/produto/ProdutoItem";
import { produtos } from "../core";

export default function Inicio() {
  return (
    <div className="flex gap-5 flex-wrap">
      <ProdutoItem produto={produtos[0]}/>
      <ProdutoItem produto={produtos[1]}/>
      <ProdutoItem produto={produtos[12]}/>
      <ProdutoItem produto={produtos[3]}/>
    </div>
  );
}
