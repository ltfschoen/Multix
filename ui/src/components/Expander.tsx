import { Box, Collapse } from "@mui/material";
import { ReactNode, useState } from "react";
import styled from "styled-components";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface Props {
  className?: string;
  title: ReactNode
  content: ReactNode
  expanded?: boolean
}

const Expander = ({ className = '', title, content, expanded = false }: Props) => {
  const [open, setOpen] = useState(expanded);

  return (
    <Box className={className}>
      <div
        onClick={() => setOpen(!open)}
        className="titleWrapper"
      >
        <KeyboardArrowRightIcon className={`${open ? "rotated" : ""} expanderIcon`} />
        {title}
      </div>
      <Collapse in={open}>
        {content}
      </Collapse>
    </Box >
  );
}

export default styled(Expander)(({ theme }) => `
display: flex;
flex-direction: column;
min-width: 0;

.titleWrapper {
  cursor: pointer;
  display: flex;
}

.expanderIcon {
  transition: transform 0.2s ease-in-out;
    &.rotated {
      transform: rotate(90deg)
    }
  }
`)