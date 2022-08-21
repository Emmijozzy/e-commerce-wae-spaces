import { IProduct } from '../types/Dindex'

export const findMaxPrice = (products: IProduct[]) => {
   let max = products[0].price
   products.forEach((product) => product.price > max && (max = product.price))
   return max
}
