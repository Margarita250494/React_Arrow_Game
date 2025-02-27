import type { SvgIconProps } from "@mui/material";

export interface MapArrowCodesI {
    ArrowUp:React.ComponentType<SvgIconProps>;
    ArrowDown:React.ComponentType<SvgIconProps>;
    ArrowLeft:React.ComponentType<SvgIconProps>;
    ArrowRight:React.ComponentType<SvgIconProps>;
}

export interface EndGameConditionI {
    SUCCESS_COUNT:number,
    UNSUCCESS_COUNT:number,
}