import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"
import  { Product } from '../../types/index'

interface ProductState {
    products: Product[]
}

const initialState: ProductState = {
    products: [
        {
            id: 1,
            name: 'Plant1',
            price: 150,
            category: 'Bedroom Plant',
            image: 'https://assets.api.uizard.io/api/cdn/stream/ab148d11-028d-4fe4-af04-8c2710fca1cd.jpg',
            sold: false,
        },
        {
            id: 2,
            name: 'Plant2',
            price: 50,
            category: 'Bedroom Plant',
            image: 'https://assets.api.uizard.io/api/cdn/stream/c0dfbf89-8d77-42ab-ad3b-155bd55178da.jpg',
            sold: true,
        },
        // {
        //     id: 3,
        //     name: 'plant3',
        //     price: 600,
        //     category: 'Outdoor',
        //     image: 'https://assets.api.uizard.io/api/cdn/stream/f1ceb50f-3635-48fa-9717-11110a0f5703.jpg',
        //     sold: true,
        // }
    ]
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    }
})

// export const getStoredProducts = () => {
// }

export default productsSlice.reducer