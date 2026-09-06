/**
 * Shared brand card for dynamic Open Graph images (next/og / ImageResponse).
 * Pure presentational JSX — rendered at 1200x630 by the opengraph-image
 * route files. Uses inline styles only (Satori-compatible subset).
 */

const CREAM = "#F0EEEB";
const INK = "#1F2430";
const AUBERGINE = "#200E32";
const CORAL = "#FF5F64";
const STEEL = "#6B7280";

export function OGCard({
  eyebrow,
  title,
  subline,
  chips,
  footer = "forgedcv.com",
}: {
  eyebrow: string;
  title: string;
  subline?: string;
  chips?: string[];
  footer?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: CREAM,
        color: INK,
        position: "relative",
        overflow: "hidden",
      }}
    >
        {/* Left brand bar */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 18,
            background: AUBERGINE,
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 6,
            background: CORAL,
          }}
        />

        {/* Copy column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 0 56px 88px",
            width: "64%",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 14,
                  background: AUBERGINE,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 8,
                    background: CORAL,
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: 26,
                  fontWeight: 700,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  color: STEEL,
                }}
              >
                {eyebrow}
              </div>
            </div>

            <div
              style={{
                fontSize: 78,
                fontWeight: 700,
                lineHeight: 1.06,
                letterSpacing: -2,
                color: AUBERGINE,
                whiteSpace: "pre-wrap",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {title}
            </div>

            <div
              style={{
                display: "flex",
                width: 96,
                height: 10,
                background: CORAL,
                borderRadius: 999,
              }}
            />

            {subline ? (
              <div
                style={{
                  fontSize: 30,
                  lineHeight: 1.4,
                  color: STEEL,
                  maxWidth: 620,
                }}
              >
                {subline}
              </div>
            ) : null}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            {chips && chips.length > 0 ? (
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {chips.map((c) => (
                  <div
                    key={c}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "10px 18px",
                      borderRadius: 999,
                      border: `2px solid rgba(32,30,50,0.18)`,
                      fontSize: 22,
                      color: INK,
                    }}
                  >
                    {c}
                  </div>
                ))}
              </div>
            ) : null}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 24,
                fontWeight: 700,
                color: AUBERGINE,
              }}
            >
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 999,
                  background: CORAL,
                }}
              />
              {footer}
            </div>
          </div>
        </div>

        {/* Resume-sheet motif */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "36%",
            height: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: -70,
              top: -40,
              width: 300,
              height: 300,
              borderRadius: 999,
              background: "rgba(32,30,50,0.06)",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 300,
              height: 400,
              background: "#FFFFFF",
              borderRadius: 22,
              border: "1px solid rgba(32,30,50,0.08)",
              boxShadow: "0 24px 60px rgba(32,30,50,0.18)",
              padding: 30,
              gap: 18,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: AUBERGINE,
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ width: 130, height: 12, borderRadius: 6, background: AUBERGINE }} />
                <div style={{ width: 84, height: 9, borderRadius: 5, background: CORAL }} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[196, 226, 176, 210, 160, 220, 190, 204].map((w, i) => (
                <div
                  key={i}
                  style={{
                    width: w,
                    height: 10,
                    borderRadius: 5,
                    background: i % 3 === 0 ? "rgba(255,95,100,0.55)" : "#DCD7D2",
                  }}
                />
              ))}
            </div>
            <div
              style={{
                width: 120,
                height: 8,
                borderRadius: 5,
                background: CORAL,
                marginTop: 4,
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[180, 200, 150].map((w, i) => (
                <div key={i} style={{ width: w, height: 10, borderRadius: 5, background: "#DCD7D2" }} />
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}