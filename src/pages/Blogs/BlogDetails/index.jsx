import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

const blogData = [
  {
    id: "1",
    title: "Mastering the Roads as a New Driver - A Beginner's Guide",
    author: "John Doe", // Author field added
    date: "AUGUST 15, 2025",
    image: "/images/article1.jpg",
    content: `
## Introduction
Driving for the first time can be both exciting and intimidating. 
New drivers often struggle with nerves and lack of experience on the road. 
The good news is: with practice and the right mindset, you can become a safe, confident driver.

## Essential Safety Habits
Below are the core habits every beginner should adopt:

- **Always wear your seatbelt** → This simple habit saves lives. Make it automatic before starting the car.  
- **Keep a safe distance** → Use the “3-second rule” to give yourself time to react.  
- **Follow speed limits** → They’re designed for your safety, not to slow you down unnecessarily.  
- **Check your mirrors often** → Stay aware of your surroundings and anticipate changes.  
- **Use indicators clearly** → Signal early to let others know your intentions.  

## Avoiding Distractions
One of the most dangerous mistakes beginners make is **multitasking while driving**.  
- Never text or scroll your phone.  
- If you need navigation, set it up before starting.  
- Keep conversations with passengers minimal until you feel confident.  

## Driving in Difficult Conditions
Weather can turn a normal trip into a challenge:  
- **Rain** → Slow down, increase distance, and use headlights.  
- **Fog** → Use low-beam headlights and avoid sudden braking.  
- **Night driving** → Keep your windshield clean, avoid staring at oncoming lights, and drive slower.  

## Practicing Defensive Driving
Defensive driving means **anticipating the mistakes of others**:  
- Expect sudden lane changes.  
- Watch for pedestrians or cyclists who may appear unexpectedly.  
- Don’t assume other drivers will follow the rules—be ready.  

## Final Thoughts
Learning to drive is not just about handling the car—it’s about responsibility and awareness.  
Respect the rules, respect other drivers, and remember: the more you practice, the safer and more confident you’ll become.  
`,
    quote: "Safe driving is not about being the fastest—it’s about being the most careful.",
  },
];

const gradientStyle = {
  backgroundImage: "linear-gradient(90deg,#f68b2c 0%,#c05a00 100%)",
};

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === id);

  if (!blog) {
    return (
      <main className="w-full bg-black min-h-screen flex items-center justify-center text-center px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Blog Not Found
        </h1>
      </main>
    );
  }

  const sections = blog.content
    .split("##")
    .map((sec) => sec.trim())
    .filter(Boolean);

  return (
    <main className="w-full bg-black flex flex-col min-h-screen">
      <Header />

      <section className="flex-1 w-full px-4 sm:px-8 lg:px-16 py-12 text-white">
        {/* Date + Author + Title */}
        <div className="text-center mb-16 px-4">
          <p className="text-gray-400 text-sm mb-2 flex items-center justify-center gap-2">
            <span>📅</span> {blog.date}
          </p>
          <p className="text-gray-500 text-sm mb-6">By {blog.author}</p>

          {/* Responsive Gradient Title */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-snug sm:leading-relaxed mb-12 bg-clip-text text-transparent tracking-tight break-words"
            style={gradientStyle}
          >
            {blog.title}
          </h1>
        </div>

        {/* Hero Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full max-w-4xl mx-auto object-cover rounded-3xl mb-16 shadow-2xl"
        />

        {/* Article Sections */}
        <article className="max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed space-y-16">
          {sections.map((sec, index) => {
            const [heading, ...body] = sec.split("\n").filter(Boolean);
            return (
              <div key={index} className="space-y-6">
                <h2
                  className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent tracking-tight break-words"
                  style={gradientStyle}
                >
                  {heading}
                </h2>
                <p className="whitespace-pre-line text-gray-200 text-lg sm:text-xl leading-relaxed">
                  {body.join("\n")}
                </p>
              </div>
            );
          })}
        </article>

        {/* Quote Box */}
        {blog.quote && (
          <div className="bg-[#111111] rounded-lg p-8 sm:p-12 mt-20 shadow-2xl max-w-2xl mx-auto border-l-4 border-[#f68b2c]">
            <p className="text-center text-xl sm:text-2xl font-semibold italic text-gray-200">
              ❝ {blog.quote} ❞
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
};

export default BlogDetails;
