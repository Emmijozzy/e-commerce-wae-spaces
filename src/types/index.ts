export interface Product {
    id: number
    name: string
    price: number
    category: string
    image: string
    sold: boolean
}

export interface CartItem {
    product: Product
    quantity: number
}

export interface CartItem {
    product: Product
    quantity: number
 }