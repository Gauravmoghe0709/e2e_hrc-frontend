import worldMapImg from "../../assets/images/Career Growth imgs/map 1.png";

const locations = [
  { name: "Global HQ", left: "45.01%", top: "30.06%", size: 16, z: 1, dotColor: "#00458D", ringColor: "rgba(0,69,141,0.2)" },
  { name: "Dubai Office", left: "57.99%", top: "45.01%", size: 12, z: 2, dotColor: "#FFB952", ringColor: "rgba(255,185,82,0.2)" },
  { name: "Europe Hub", left: "50%", top: "35.05%", size: 12, z: 3, dotColor: "#FFB952", ringColor: "rgba(255,185,82,0.2)" },
  { name: "Asia Office", left: "64.97%", top: "50%", size: 12, z: 4, dotColor: "#FFB952", ringColor: "rgba(255,185,82,0.2)" },
];

function GlobalPresence() {
  return (
    <section className="bg-white overflow-hidden" style={{ padding: "48px 0 47px" }}>
      <div className="mx-auto flex flex-col items-center" style={{ maxWidth: "1280px", padding: "0 32px", gap: "44px" }}>
        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center" style={{ gap: "16px", maxWidth: "672px" }}>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              fontSize: "36px",
              lineHeight: "56px",
              letterSpacing: "-0.48px",
              color: "#191C1E",
            }}
          >
            Our Global Footprint
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "28px",
              color: "#424752",
            }}
          >
            Connecting talent across borders with localized expertise and global reach.
          </p>
        </div>

        {/* ── Map Card ── */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            maxWidth: "1196px",
            background: "#F2F4F6",
            border: "1px solid rgba(194, 198, 212, 0.2)",
            borderRadius: "24px",
            aspectRatio: "1196 / 385",
          }}
        >
          {/* World map image at 30% opacity with white blend */}
          <div className="absolute inset-0 pointer-events-none select-none" style={{ zIndex: 0 }}>
            <img
              src={worldMapImg}
              alt=""
              className="w-full h-full object-cover"
              style={{ opacity: 0.3 }}
            />
          </div>

          {/* Location markers (dots with tooltip labels) */}
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="absolute group flex flex-col items-center"
              style={{ left: loc.left, top: loc.top, zIndex: loc.z }}
            >
              {/* Dot */}
              <div
                className="rounded-full"
                style={{
                  width: `${loc.size}px`,
                  height: `${loc.size}px`,
                  background: loc.dotColor,
                  boxShadow: `0px 0px 0px 4px ${loc.ringColor}`,
                }}
              />
              {/* Tooltip label (hidden by default) */}
              <div
                className="absolute whitespace-nowrap transition-opacity duration-200 group-hover:opacity-100"
                style={{
                  top: "100%",
                  marginTop: "8px",
                  padding: "4px 12px",
                  background: "#FFFFFF",
                  boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                  borderRadius: "8px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "16px",
                  color: "#00458D",
                  opacity: 0,
                }}
              >
                {loc.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GlobalPresence;
