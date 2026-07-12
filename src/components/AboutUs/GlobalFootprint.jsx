import React from "react";
import mapImg from "../../assets/images/Career Growth imgs/map 1.png";

const markers = [
  { id: 1, label: "Dubai HQ", left: "43.73%", top: "29.09%", color: "#0B4A9A", size: 18, hasPin: true },
  { id: 2, label: "Europe Hub", left: "50%", top: "35.05%", color: "#FFB952", size: 12 },
  { id: 3, label: "India Office", left: "57.99%", top: "45.01%", color: "#FFB952", size: 12 },
  { id: 4, label: "UK Branch", left: "64.97%", top: "50%", color: "#FFB952", size: 12 },
];

const GlobalFootprint = () => {
  return (
    <section
      style={{
        width: "1440px",
        maxWidth: "100%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "48px 0px 47px",
        gap: "44px",
        background: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Header container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0px 32px",
          gap: "16px",
          width: "1280px",
          maxWidth: "1280px",
        }}
      >
        {/* Heading */}
        <div style={{ width: "1216px", height: "56px", display: "flex", justifyContent: "center" }}>
          <h2
            style={{
              margin: 0,
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              fontSize: "36px",
              lineHeight: "56px",
              letterSpacing: "-0.48px",
              color: "#191C1E",
              textAlign: "center",
            }}
          >
            Our Global Footprint
          </h2>
        </div>

        {/* Subtitle */}
        <div style={{ width: "672px", maxWidth: "672px", height: "28px", display: "flex", justifyContent: "center" }}>
          <p
            style={{
              margin: 0,
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "28px",
              color: "#424752",
              textAlign: "center",
            }}
          >
            Connecting talent across borders with localized expertise and global reach.
          </p>
        </div>
      </div>

      {/* Map container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0px",
          gap: "16px",
          width: "1440px",
          height: "385px",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "672px",
            maxWidth: "672px",
            height: "385px",
            isolation: "isolate",
          }}
        >
          {/* Map card */}
          <div
            style={{
              position: "relative",
              width: "1196px",
              height: "385px",
              background: "#F2F4F6",
              border: "1px solid rgba(194,198,212,0.2)",
              borderRadius: "24px",
              overflow: "hidden",
              boxSizing: "border-box",
            }}
          >
            {/* Map image */}
            <img
              src={mapImg}
              alt="Global Map"
              style={{
                width: "1194px",
                height: "606px",
                objectFit: "cover",
                opacity: 0.3,
                mixBlendMode: "saturation",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 0,
              }}
            />

            {/* Markers */}
            {markers.map((m) => (
              <div
                key={m.id}
                style={{
                  position: "absolute",
                  left: m.left,
                  top: m.top,
                  zIndex: m.hasPin ? 5 : 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* Pin icon for Dubai HQ */}
                {m.hasPin ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      padding: "3px 0px 5px",
                      filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.06)) drop-shadow(0px 4px 3px rgba(0,0,0,0.07))",
                    }}
                  >
                    <div style={{ width: "18px", height: "23.95px", background: m.color }}>
                      <svg width="18" height="24" viewBox="0 0 18 24" fill="none">
                        <path d="M9 0C4.03 0 0 4.03 0 9c0 6.75 9 15 9 15s9-8.25 9-15c0-4.97-4.03-9-9-9z" fill={m.color} />
                      </svg>
                    </div>
                  </div>
                ) : (
                  /* Dot marker */
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        width: `${m.size}px`,
                        height: `${m.size}px`,
                        background: m.color,
                        borderRadius: "9999px",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        width: `${m.size}px`,
                        height: `${m.size}px`,
                        top: 0,
                        left: 0,
                        background: "rgba(255,255,255,0.002)",
                        boxShadow: `0px 0px 0px 4px ${m.color === "#FFB952" ? "rgba(255,185,82,0.2)" : "rgba(0,69,141,0.2)"}`,
                        borderRadius: "9999px",
                      }}
                    />
                  </div>
                )}

                {/* Label */}
                <div
                  style={{
                    marginTop: "8px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      padding: m.hasPin ? "2px 8px" : "4px 12px",
                      background: "#FFFFFF",
                      boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                      borderRadius: m.hasPin ? "4px" : "8px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: m.hasPin ? 600 : 500,
                        fontSize: "12px",
                        lineHeight: "16px",
                        color: m.hasPin ? "#1F2937" : "#00458D",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {m.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalFootprint;
