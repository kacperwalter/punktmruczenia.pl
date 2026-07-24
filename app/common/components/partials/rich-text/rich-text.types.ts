import { Color } from "@/app/types/"

export type RichTextProps = {
  text?: string | TrustedHTML
  children?: string | TrustedHTML
  color?: Color
}
