import { Box, CircularProgress } from "@mui/material"
import LaunchIcon from '@mui/icons-material/Launch';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import styled from "styled-components";
import { useCallback } from "react";

export type ToastType = "success" | "error" | "loading"

export interface Toast {
  id: number
  type: ToastType
  title: string
  link?: string
}

export interface ToastContentProps extends Toast {
  className?: string
}

const ToastContent = ({ type, title, className, link }: ToastContentProps) => {
  const onOpenLink = useCallback(() => {
    window.open(link, "_blank")
  }, [link])

  return (
    <div
      className={className}
    >

      <div className='iconContainer'>
        {type === "success"
          ? <CheckCircleOutlineIcon className="toastIcon" />
          : type === "loading"
            ? <CircularProgress className="toastIcon" />
            : <ErrorOutlineIcon className="toastIcon errorIcon" />
        }
      </div>
      <Box
        component="p"
        className="titleContainer"
      >
        {title}
      </Box>
      {!!link && (
        <Box
          className="linkIcon"
          onClick={onOpenLink}
        >
          <LaunchIcon fontSize="small" />
        </Box>
      )}
    </div >
  )
}

export default styled(ToastContent)(({ theme }) => `
    display: flex;
    flex-direction: row;
    align-items: center;

    .linkIcon {
        display: flex;
        cursor: pointer;
        padding-left: 1rem; 
    }

    .iconContainer {
        margin-right: 1rem;
    }

    .toastIcon {
        font-size: 2.5rem;
    }

    .errorIcon {
        color: ${theme.custom.text.errorColor}
    }

`)