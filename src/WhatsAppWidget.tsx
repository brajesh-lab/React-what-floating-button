import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

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

export const WhatsAppFloating: React.FC<WhatsAppFloatingProps> = ({
  phoneNumber,
  companyName = "Support Team",
  companyLogo,
  message = "Hi there! 👋 How can I help you?",
  replyTime = "Typically replies within 5 minutes",
  position = "right",
  buttonSize = 60,
  buttonColor = "#25D366",
  headerColor = "#075E54",
  textColor = "#fff",
  placeholder = "Type a message...",
  zIndex = 1000,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  const handleSend = () => {
    if (!userMessage.trim()) return;
    
    const encodedMessage = encodeURIComponent(userMessage);
    const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
    const isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);

    const url = isMobile
      ? `https://api.whatsapp.com/send?phone=${cleanPhoneNumber}&text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${cleanPhoneNumber}&text=${encodedMessage}`;

    window.open(url, "_blank");
    setUserMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const positionStyles = {
    left: { left: "20px" },
    right: { right: "20px" },
  };

  return (
    <div>
      {/* Floating Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          ...positionStyles[position],
          backgroundColor: buttonColor,
          borderRadius: "50%",
          width: `${buttonSize}px`,
          height: `${buttonSize}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          zIndex: zIndex,
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <FaWhatsapp size={buttonSize * 0.5} color={textColor} />
      </div>

      {/* Chat Box */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: `${buttonSize + 30}px`,
            ...positionStyles[position],
            width: "300px",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.15)",
            overflow: "hidden",
            zIndex: zIndex,
            animation: "slideUp 0.3s ease",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: headerColor,
              color: textColor,
              padding: "15px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {/* Company Avatar */}
              {companyLogo && (
                <img
                  src={companyLogo}
                  alt={`${companyName} logo`}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: `1px solid ${textColor}`,
                  }}
                />
              )}

              {/* Company Info */}
              <div>
                <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                  {companyName}
                </div>
                <div style={{ fontSize: "12px", opacity: 0.8 }}>
                  {replyTime}
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: textColor,
                fontSize: "20px",
                cursor: "pointer",
                lineHeight: "1",
                padding: "0",
                width: "20px",
                height: "20px",
              }}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          {/* Welcome Message */}
          <div
            style={{
              padding: "15px",
              fontSize: "14px",
              background: "#ece5dd",
              lineHeight: "1.4",
            }}
          >
            {message}
          </div>

          {/* Input Section */}
          <div style={{ display: "flex", borderTop: "1px solid #e0e0e0" }}>
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              style={{
                flex: 1,
                border: "none",
                padding: "15px",
                fontSize: "14px",
                outline: "none",
                backgroundColor: "#fff",
              }}
            />
            <button
              onClick={handleSend}
              disabled={!userMessage.trim()}
              style={{
                background: "transparent",
                border: "none",
                padding: "15px",
                cursor: userMessage.trim() ? "pointer" : "not-allowed",
                fontSize: "16px",
                color: userMessage.trim() ? headerColor : "#ccc",
                transition: "color 0.2s ease",
              }}
              aria-label="Send message"
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* CSS Animation */}
      <style>
        {`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default WhatsAppFloating;