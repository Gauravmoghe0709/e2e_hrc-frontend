import teamImg from "../../assets/images/hero.png";

function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* "HR" watermark */}
      <div
        className="absolute pointer-events-none select-none leading-none"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 900,
          fontSize: "577px",
          lineHeight: "866px",
          color: "rgba(236, 238, 240, 0.3)",
          left: "248px",
          top: "-1px",
          width: "819px",
          height: "866px",
          zIndex: 0,
        }}
      >
        HR
      </div>

      {/* Decorative orange circle */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "128px",
          height: "128px",
          right: "calc(50% - 720px + 41px)",
          top: "15px",
          background: "#F39308",
          opacity: 0.2,
          borderRadius: "9999px",
          zIndex: 1,
        }}
      />

      <div className="relative z-10 mx-auto px-4 sm:px-8 lg:px-12" style={{ maxWidth: "1300px", paddingTop: "66px", paddingBottom: "14px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
          {/* ── Left column ── */}
          <div className="max-w-[593px]">
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
              Who We Are
            </h2>

            <div className="mt-1" style={{ width: "64px", height: "4px", background: "#00458D" }} />

            <div className="mt-2 space-y-6">
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "#424752",
                }}
              >
                Established in 2007, E2E Human Resource Consultancy has evolved from a boutique agency into a premier global recruitment powerhouse. We specialize in identifying, attracting, and securing top-tier talent for organizations that demand excellence.
              </p>

              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "#424752",
                }}
              >
                Our approach is deeply consultative. We don't just fill vacancies; we analyze workforce requirements, understand corporate cultures, and deliver talent solutions that drive measurable business outcomes. With deep multi-sector expertise ranging from Engineering to Healthcare, our consultants operate as an extension of your own internal teams.
              </p>

              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "#424752",
                }}
              >
                In an era of automated hiring, we remain staunch advocates for the human element—balancing cutting-edge sourcing technology with nuanced human judgment to create perfect professional alignments.
              </p>
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="relative flex items-start justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative" style={{ width: "100%", maxWidth: "593px" }}>
              {/* Image card */}
              <div
                className="overflow-hidden"
                style={{
                  width: "100%",
                  aspectRatio: "593 / 432",
                  borderRadius: "24px",
                  border: "1px solid rgba(194, 198, 212, 0.2)",
                  boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                  background: "#f0f2f5",
                }}
              >
                <img
                  src={teamImg}
                  alt="Diverse team of corporate professionals collaborating in a modern boardroom"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating stat card */}
              <div
                className="absolute"
                style={{
                  left: "-8px",
                  bottom: "-8px",
                  padding: "32px",
                  gap: "4px",
                  background: "rgba(255, 255, 255, 0.85)",
                  border: "1px solid rgba(226, 232, 240, 0.8)",
                  boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                  borderRadius: "24px",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "32px",
                    lineHeight: "40px",
                    color: "#00458D",
                  }}
                >
                  25+
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: "0.7px",
                    textTransform: "uppercase",
                    color: "#424752",
                    whiteSpace: "nowrap",
                  }}
                >
                  Years of Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
