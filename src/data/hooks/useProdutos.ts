'use client'


import { Produto } from "@/core";
import { useState } from "react";

export default function useProdutos() {
    const [produtos, setProdutos] = useState <Produto[]> ([])

    return{
        produtos,
    }
}
