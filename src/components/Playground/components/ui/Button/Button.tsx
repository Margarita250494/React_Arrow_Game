import cn from "classnames"

import {
  Button as MaterialButton,
  type ButtonProps as MaterilaButtonProps,
} from "@mui/material"

import styles from "./Button.module.css"

export interface ButtonPropsI extends MaterilaButtonProps {
  children: React.ReactNode
}

const Button = ({ className, children, ...props }: ButtonPropsI) => {
  return (
    <MaterialButton
      variant="outlined"
      size="small"
      {...props}
      className={cn(styles.mainButton, className)}
    >
      {children}
    </MaterialButton>
  )
}

export default Button
