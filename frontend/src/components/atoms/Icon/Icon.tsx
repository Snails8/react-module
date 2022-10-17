import { ReactNode } from "react"

type IconProps = {
  height: number;
  width: number;
  children: ReactNode
}

export const Icon = (props: IconProps) => {
  const {height, width, children} = props
  return (
    <div style={{ height: height, width: width }}>
      {children}
    </div>
  )
}