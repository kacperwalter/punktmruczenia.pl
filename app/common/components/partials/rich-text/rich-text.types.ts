import { Color } from "@/app/types/"

export type RichTextProps = {
  text?: string | TrustedHTML
  children?: React.ReactNode
  color?: Color
}