import { User, Clock, Calendar } from "lucide-react";


const defaultPosts = {
  featured: {
    image: new URL("https://images.unsplash.com/photo-1483972117325-ce4920ff780b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
    badge: "Hiring Trends",
    title: "Hiring Trends in the UK: What Employers Need to Know in 2025",
    description:
      "From AI-driven screening to flexible working demands, the UK recruitment landscape is shifting rapidly.",
    author: "Sarah Mitchell",
    readTime: "5 min read",
    date: "28 May 2025",
    link: "#",
  },
  cards: [
    {
      image: new URL("https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
      badge: "Strategy",
      badgeBg: "#FFF4E0",
      badgeColor: "#C17800",
      title: "Talent Acquisition Strategies That Actually Work",
      readTime: "4 min read",
      date: "20 May 2025",
      link: "#",
    },
    {
      image: new URL("https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
      badge: "Workforce Planning",
      badgeBg: "#F0F7E0",
      badgeColor: "#5A7A00",
      title: "Future Workforce Planning: Building Teams for Tomorrow",
      readTime: "6 min read",
      date: "12 May 2025",
      link: "#",
    },
    {
      image: new URL("https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
      badge: "Leadership",
      badgeBg: "#004CA5",
      badgeColor: "#C8D96F",
      title: "Building High Performing Teams From Day One",
      readTime: "5 min read",
      date: "5 May 2025",
      link: "#",
    },
  ],
};

function FeaturedCard({ card }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl"
      style={{ width: "100%", maxWidth: "532px", height: "480px" }}
    >
      <img
        src={card.image}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,15,40,0.93) 35%, rgba(0,15,40,0.3) 80%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-end p-9">
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "12px",
            backgroundColor: "#004CA5",
            color: "#ffffff",
            padding: "4px 12px",
            borderRadius: "999px",
            width: "fit-content",
          }}
        >
          {card.badge}
        </span>

        <h3
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: "24px",
            color: "#ffffff",
            marginTop: "12px",
            lineHeight: 1.3,
          }}
        >
          {card.title}
        </h3>

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            color: "rgba(255,255,255,0.7)",
            marginTop: "8px",
            lineHeight: 1.6,
          }}
        >
          {card.description}
        </p>

        <div className="flex items-center justify-between" style={{ marginTop: "16px" }}>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px" }}>
              <User size={12} />
              {card.author}
            </span>
            <span className="flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px" }}>
              <Clock size={12} />
              {card.readTime}
            </span>
          </div>
          <span className="flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px" }}>
            <Calendar size={12} />
            {card.date}
          </span>
        </div>

        <a
          href={card.link}
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "12px",
            color: "#C8D96F",
            marginTop: "16px",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Read More →
        </a>
      </div>
    </div>
  );
}

function SmallCard({ card }) {
  return (
    <div
      className="flex flex-col sm:flex-row rounded-2xl overflow-hidden"
      style={{
        backgroundColor: "#F8FAFC",
        gap: "20px",
      }}
    >
      <img
        src={card.image}
        alt={card.title}
        className="sm:w-[144px] w-full"
        style={{
          height: "144px",
          objectFit: "cover",
          flexShrink: 0,
          display: "block",
        }}
      />
      <div
        className="flex flex-col justify-center pt-0 pr-5 pb-5 pl-5 sm:pt-5 sm:pr-5 sm:pb-5 sm:pl-0"
        style={{
          gap: "8px",
          flex: 1,
          minWidth: 0,
        }}
      >
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "12px",
            backgroundColor: card.badgeBg,
            color: card.badgeColor,
            padding: "4px 10px",
            borderRadius: "999px",
            width: "fit-content",
          }}
        >
          {card.badge}
        </span>

        <h4
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: "14px",
            color: "#004CA5",
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          {card.title}
        </h4>

        <div className="flex items-center gap-3" style={{ color: "#64748B", fontSize: "12px" }}>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {card.readTime}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {card.date}
          </span>
        </div>
      </div>
    </div>
  );
}

function BlogSection({ posts = defaultPosts }) {
  const { featured, cards } = posts;

  return (
    <section className="bg-white px-6 sm:px-8 lg:px-[32px] xl:pl-[124px]">
      <div className="mx-auto" style={{ maxWidth: "1440px" }}>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between" style={{ marginBottom: "40px" }}>
          <div>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "12px",
                backgroundColor: "#E8EDF5",
                color: "#004CA5",
                padding: "6px 16px",
                borderRadius: "999px",
                display: "inline-block",
              }}
            >
              Latest Blog
            </span>

            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                fontSize: "36px",
                color: "#004CA5",
                marginTop: "12px",
                lineHeight: 1.2,
              }}
            >
              Career Growth Strategies for Professionals
            </h2>
          </div>

          <button
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              border: "1.5px solid #004CA5",
              color: "#004CA5",
              backgroundColor: "transparent",
              padding: "10px 24px",
              borderRadius: "999px",
              cursor: "pointer",
              whiteSpace: "nowrap",
              flexShrink: 0,
              marginTop: "16px",
            }}
          >
            View All Articles →
          </button>
        </div>

        <div className="flex flex-col xl:flex-row items-start gap-10 xl:gap-[24px]">
          <FeaturedCard card={featured} />

          <div
            className="flex flex-col w-full"
            style={{
              maxWidth: "532px",
              gap: "41px",
            }}
          >
            {cards.map((card, i) => (
              <SmallCard key={i} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;