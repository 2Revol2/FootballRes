import { ReactNode } from "react"
import s from './Title.module.scss'
type Props = {
   children: ReactNode
   variants: "green" | "yellow" | "lightgreen"; 
}

export const Title = ({children, variants}:Props) => {
  return (
    <h3 className={`${s.title} ${s[variants]}`}>{children}</h3>
  )
}
