export default interface ICurrency {
  id: number,
  img: string,
  code: string,
  title: string,
  symbol: string,
  lost: number,
  canIn: boolean,
  canOut: boolean
}