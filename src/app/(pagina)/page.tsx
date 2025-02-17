'use client'

import useProdutos from "@/data/hooks/useProdutos";
import ProdutoItem from "@/components/produto/ProdutoItem";


export default function Inicio() {

  const {produtos} = useProdutos()
  return (
    

      <div className="grid grid-cols-4 gap-5 container">

        {produtos.map((produto) =>(

        <ProdutoItem
        key={produto.id}produto={produto}/>

        ))}
      </div>

    
  );
}
