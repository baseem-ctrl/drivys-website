import React from "react";
import Button from "@/components/ui/Button.jsx";

const TestimonialsSection = () => {
    const testimonials = [
        { id: 1, name: "Alex Prokhorov", username: "@alex_pro_dsg", image: "/images/img_ellipse_8.png", text: "Stunning. I can finally make this link in bio website haha", verified: true },
        { id: 2, name: "Lam'aan", username: "@lamaandesign", image: "/images/img_ellipse_8_98x98.png", text: "Love the work on this one. Waitlisted and excited to see where it goes!", verified: false },
        { id: 3, name: "Brett", username: "@thebtjackson", image: "/images/img_ellipse_8_1.png", text: "I like this a lot. Signed up!", verified: true },
        { id: 4, name: "Dmitry Zhomir", username: "@DemetriusZhomir", image: "/images/img_ellipse_8_2.png", text: "You've un-ugly'fied this stuff!", verified: false },
        { id: 5, name: "Hewar", username: "@hewarsaber", image: "/images/img_ellipse_8.png", text: "If Linktree had taste, it'd look like this 🔥", verified: true },
        { id: 6, name: "Chinaa", username: "@chinwechinaa", image: "/images/img_ellipse_8_1.png", text: "this is so good 😍 ❤️ 💯", verified: false },
        { id: 7, name: "Jagdev Soni", username: "@SoniJagdev", image: "/images/img_ellipse_8_2.png", text: "Visually popsite looks better", verified: true },
        { id: 8, name: "ali", username: "@aaalixyz", image: "/images/img_ellipse_8.png", text: "Let me innnnnnnn", verified: false },
        { id: 9, name: "Brian ca", username: "@iambrianconnor", image: "/images/img_ellipse_8_1.png", text: "Its sooooo good", verified: true }
    ];

    // Arrange columns
    const column1 = [...testimonials.slice(0, 3), ...testimonials.slice(6, 9), ...testimonials.slice(0, 3)];
    const column2 = [...testimonials.slice(3, 6), ...testimonials.slice(0, 3), ...testimonials.slice(3, 6)];
    const column3 = [...testimonials.slice(6, 9), ...testimonials.slice(3, 6), ...testimonials.slice(6, 9)];
    const columns = [column1, column2, column3];

    return (
        <section
            style={{
                width: "100%",
                backgroundColor: "#0a0a0a",
                position: "relative",
                overflow: "hidden",
                paddingTop: "120px",
                paddingBottom: "120px",
                minHeight: "800px",
            }}
        >
            {/* Top fade overlay */}
            <div
                style={{
                    pointerEvents: "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "150px",
                    background: "linear-gradient(to bottom, rgba(10,10,10,1), rgba(10,10,10,0))",
                    zIndex: 30,
                }}
            />

            {/* Bottom fade overlay */}
            <div
                style={{
                    pointerEvents: "none",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "150px",
                    background: "linear-gradient(to top, rgba(10,10,10,1), rgba(10,10,10,0))",
                    zIndex: 30,
                }}
            />

            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "0 24px",
                    position: "relative",
                    zIndex: 10,
                }}
            >
                {/* Header */}


                {/* 3-column scrolling grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "20px",
                        overflow: "hidden",
                        height: "600px",
                        maskImage: "linear-gradient(to bottom, transparent, black 100px, black calc(100% - 100px), transparent)",
                        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 100px, black calc(100% - 100px), transparent)"
                    }}
                >
                    {columns.map((columnTestimonials, colIndex) => (
                        <div
                            key={colIndex}
                            className="scroll-column"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "16px",
                                paddingTop: `${colIndex * 100}px`,
                                animationDuration: `${40 + colIndex * 10}s` // Different speed for each column
                            }}
                        >
                            {columnTestimonials.map((testimonial, index) => (
                                <div
                                    key={`${colIndex}-${index}`}
                                    style={{
                                        backgroundColor: "#1a1a1a",
                                        border: "1px solid #2a2a2a",
                                        borderRadius: "16px",
                                        padding: "20px",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "12px",
                                        transition: "all 0.2s ease",
                                        cursor: "pointer",
                                        minHeight: `${testimonial.text.length > 50 ? '140' : '120'}px`,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = "#252525";
                                        e.target.style.transform = "translateY(-2px)";
                                        e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.4)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = "#1a1a1a";
                                        e.target.style.transform = "translateY(0)";
                                        e.target.style.boxShadow = "none";
                                    }}
                                >
                                    {/* User Info */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            style={{
                                                width: "44px",
                                                height: "44px",
                                                borderRadius: "50%",
                                                objectFit: "cover",
                                                border: "2px solid #333",
                                            }}
                                        />
                                        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                                <span style={{
                                                    color: "white",
                                                    fontWeight: "600",
                                                    fontSize: "15px",
                                                    fontFamily: "Inter, sans-serif"
                                                }}>
                                                    {testimonial.name}
                                                </span>
                                                {testimonial.verified && (
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#1d9bf0">
                                                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                                    </svg>
                                                )}
                                                <span style={{
                                                    color: "#888",
                                                    fontSize: "14px",
                                                    fontFamily: "Inter, sans-serif",
                                                    marginLeft: "4px"
                                                }}>
                                                    𝕏
                                                </span>
                                            </div>
                                            <span style={{
                                                color: "#666",
                                                fontSize: "14px",
                                                fontFamily: "Inter, sans-serif"
                                            }}>
                                                {testimonial.username}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <p style={{
                                        color: "#e1e5e9",
                                        fontSize: "15px",
                                        lineHeight: "1.5",
                                        margin: 0,
                                        fontFamily: "Inter, sans-serif",
                                        fontWeight: "400"
                                    }}>
                                        {testimonial.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <style>
                {`
                    @keyframes scrollUp {
                        0% { transform: translateY(0); }
                        100% { transform: translateY(-50%); }
                    }
                    .scroll-column {
                        animation-name: scrollUp;
                        animation-timing-function: linear;
                        animation-iteration-count: infinite;
                    }

                    @media (max-width: 768px) {
                        section > div {
                            padding: 0 16px !important;
                        }
                        section > div > div:first-child h2 {
                            font-size: 36px !important;
                        }
                        section > div > div:last-child {
                            grid-template-columns: 1fr !important;
                            height: 400px !important;
                        }
                    }
                `}
            </style>
        </section>
    );
};

export default TestimonialsSection;
