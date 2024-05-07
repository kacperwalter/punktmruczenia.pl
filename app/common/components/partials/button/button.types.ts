import type { ButtonType } from "@/app/types"

export type ButtonProps = {
  as?: ButtonType
  variant?: 'primary' | 'secondary' 
  text: string
  href?: string
  arrow?: boolean
  arrowDirection?: 'down' | 'right'
  onClick?: () => void
}