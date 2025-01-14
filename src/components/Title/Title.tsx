import { ReactNode } from "react"
import s from './Title.module.scss'
type Props = {
   children: ReactNode 
}

export const Title = ({children}:Props) => {
  return (
    <h3 className={s.title}>{children}</h3>
  )
}
