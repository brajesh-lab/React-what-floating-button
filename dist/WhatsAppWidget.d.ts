import React from "react";
export interface WhatsAppFloatingProps {
    phoneNumber: string;
    companyName?: string;
    companyLogo?: string;
    message?: string;
    replyTime?: string;
    position?: "left" | "right";
    buttonSize?: number;
    buttonColor?: string;
    headerColor?: string;
    textColor?: string;
    placeholder?: string;
    zIndex?: number;
}
export declare const WhatsAppFloating: React.FC<WhatsAppFloatingProps>;
export default WhatsAppFloating;
