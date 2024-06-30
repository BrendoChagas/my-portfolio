import { styled } from "@mui/material"
import React, { ReactNode } from "react"

interface StyledButtonProps {
  children: ReactNode
  onClick: () => void 
}

const StyledButton: React.FC<StyledButtonProps> = ({children, onClick}) =>  {

  const StyledButton = styled("button")(({theme}) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    gap: "10px",
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  }))

  return (
    <>
      <StyledButton onClick={onClick}>
        {children}
      </StyledButton>
    </>
  )
}

export default StyledButton
