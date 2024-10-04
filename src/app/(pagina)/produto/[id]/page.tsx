'use client'

import { Produto } from "@/core"
import useProdutos from "@/data/hooks/useProdutos"
import { useEffect, useState } from "react"



export default function PaginaProduto(props: any){
   const {obterProdutosporId} = useProdutos ()
   const [produto, setProduto] = useState <Produto| null>(null)

   useEffect (() => {
      obterProdutosporId(+props.params.id ).then(setProduto)

   },[props.params.id])

   
   return produto ? <div>{produto?.nome}</div> : <div>Produto não encontrado</div>
}