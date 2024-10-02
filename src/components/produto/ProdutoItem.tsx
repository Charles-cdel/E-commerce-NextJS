import {Produto} from "@/core"
import Image from "next/image"
import Link from "next/link"


export interface ProdutoItemProps{
    produto : Produto
}

export default function ProdutoItem(props : ProdutoItemProps){
    const {produto} = props

   return <Link href={`/produto/${produto.id}`} className="flex flex-col bg-violet-dark border border-white/10 
   rounded-xl relative max-w-[350px]" 
   
   >
    <div>
        <Image
            src={produto.imagem}
            alt="Imagem do Produto" 
            fill          
        />
    </div>
    {props.produto.nome}
   </Link>
    
}