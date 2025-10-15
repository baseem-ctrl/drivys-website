import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

// Blog Data
const blogData = [
  {
    id: '1',
    title: "Top 7 Mistakes Beginners Make When Learning to Drive in the UAE",
    author: "Drivys Team",
    date: "OCTOBER 5, 2025",
    heroImage: "/images/blogs/blog-hero.jpg", // Top hero image
    metaTitle: "Top Beginner Driving Mistakes in UAE and How to Avoid Them | Drivys Guide",
    metaDescription: "Avoid common beginner driving mistakes in the UAE. Learn from Drivys guides how to stay safe, improve faster, and gain confidence with professional driving instructors in Abu Dhabi.",
    keywords: "driving mistakes UAE, beginner driver tips, learning to drive safely, driving school Abu Dhabi, Drivys guide, driving UAE, Drivys",
    content: [
      { type: 'paragraph', text: "Avoid common beginner driving mistakes in the UAE. Learn from Drivys guides how to stay safe, improve faster, and gain confidence with professional driving instructors." },

      { type: 'heading2', text: "Introduction" },
      { type: 'heading3', text: "Why Beginners Make Mistakes" },
      { type: 'paragraph', text: "Learning to drive is exciting, but new drivers often make errors due to inexperience, nervousness, or lack of preparation. Understanding these mistakes early can save time, reduce stress, and improve safety." },
      { type: 'heading3', text: "Importance of Learning Safely in the UAE" },
      { type: 'paragraph', text: "UAE roads can be busy and fast-paced. Beginner drivers need proper guidance to navigate traffic safely, follow local rules, and build confidence behind the wheel." },

      { type: 'heading2', text: "Mistake 1 – Not Checking Mirrors Regularly" },
      { type: 'heading3', text: "Why It’s Important" },
      { type: 'paragraph', text: "Mirrors provide crucial awareness of surrounding traffic. Beginners who forget to check them risk collisions, lane drifting, and unsafe maneuvers." },
      { type: 'heading3', text: "How Instructors Correct This" },
      { type: 'paragraph', text: "Drivys instructors emphasize mirror checks before every turn or lane change. Repetition in lessons helps learners make it a natural habit." },
      { type: 'image', src: "/images/blogs/mistake1.jpg", alt: "Checking mirrors while driving" },

      { type: 'heading2', text: "Mistake 2 – Over-Speeding Early On" },
      { type: 'heading3', text: "Risks of Driving Too Fast as a Beginner" },
      { type: 'paragraph', text: "Speeding reduces reaction time and increases accident risk, especially in urban areas like Abu Dhabi. Many beginners feel pressure to keep up with traffic, which can be dangerous." },
      { type: 'heading3', text: "Tips from Drivys Instructors" },
      { type: 'paragraph', text: "Instructors advise maintaining safe speeds, focusing on control rather than speed, and gradually adjusting to faster roads as confidence grows." },
      { type: 'image', src: "/images/blogs/mistake2.jpg", alt: "Over-speeding risk" },

      { type: 'heading2', text: "Mistake 3 – Hesitation or Nervous Driving" },
      { type: 'heading3', text: "Causes of Hesitation" },
      { type: 'paragraph', text: "Beginners often hesitate at intersections, lane changes, or roundabouts. Nervousness slows reaction times and can confuse other drivers." },
      { type: 'heading3', text: "How Consistent Practice Helps" },
      { type: 'paragraph', text: "Regular lessons with a Drivys instructor build muscle memory and confidence, reducing hesitation. Simulated scenarios in the app can also help prepare learners." },
      { type: 'image', src: "/images/blogs/mistake3.jpg", alt: "Nervous driving scenario" },

      // Add remaining mistakes and content here
      { type: 'heading2', text: "How Drivys Helps Beginners Avoid Mistakes" },
      { type: 'heading3', text: "Instructor Guidance and Feedback" },
      { type: 'paragraph', text: "Each Drivys instructor gives personalized feedback, correcting errors and teaching safe driving habits. You can also view all your instructor’s feedback in the app to track progress." },
      { type: 'heading3', text: "App Tools for Progress Tracking" },
      { type: 'paragraph', text: "The Drivys app tracks lesson history, milestones, and skill improvements, helping learners focus on weak areas and track overall progress efficiently." },
    ],
  },
  {
    id: '2',
    title: "Top Time-Saving Tips for Learners Booking Lessons on Drivys",
    author: "Drivys Team",
    date: "OCTOBER 5, 2025",
    heroImage: "/images/blogs/blog-hero2.png", // hero image
    metaTitle: "Time-Saving Tips for Booking Driving Lessons in UAE | Drivys App Guide",
    metaDescription: "Discover how to schedule driving lessons efficiently using Drivys. Maximize learning in fewer sessions, track progress, and prepare for each lesson to become a confident driver faster.",
    keywords: "booking driving lessons, Drivys app tips, learner driving efficiency, schedule driving lessons, Drivys guide, UAE driving tips",
    content: [
      { type: 'paragraph', text: "Want to save time while learning to drive? Discover top tips for booking driving lessons efficiently with Drivys. Learn how to maximize progress, schedule lessons smartly, and prepare better for each session." },



      { type: 'heading2', text: "Why Time Management Matters in Driving Lessons" },
      { type: 'heading3', text: "Learning to Drive Efficiently" },
      { type: 'paragraph', text: "Driving lessons are an investment of both time and money. By managing your schedule wisely, you can learn faster, build confidence more quickly, and reach your driving goals sooner." },

      { type: 'heading3', text: "Saving Costs by Maximizing Sessions" },
      { type: 'paragraph', text: "Fewer, well-planned lessons often mean lower costs in the long run. Instead of wasting sessions on unprepared practice, you’ll get more value out of every hour with your tutor." },

      // Image after first section
      { type: 'image', src: "/images/blogs/time-management.jpg", alt: "Time management" },

      { type: 'heading2', text: "Scheduling Driving Lessons with Drivys" },
      { type: 'heading3', text: "Easy Lesson Booking in the App" },
      { type: 'paragraph', text: "The Drivys app makes booking lessons quick and simple. In just a few taps, you can select your preferred tutor, set the lesson type (manual or automatic), and confirm your session." },
      { type: 'heading3', text: "Choosing Instructors Based on Availability" },
      { type: 'paragraph', text: "Instead of adjusting your schedule around instructors, Drivys lets you filter by tutor availability. This flexibility helps learners fit lessons into their daily routine without long gaps in between." },
      { type: 'heading3', text: "Setting a Consistent Learning Schedule" },
      { type: 'paragraph', text: "Consistency is key. Booking lessons in a regular pattern—like two or three times a week—helps you retain knowledge and improve faster, instead of forgetting skills between long breaks." },

      // Image after second section
      { type: 'image', src: "/images/blogs/lesson-scheduling.jpg", alt: "Lesson scheduling" },

      { type: 'heading2', text: "Maximizing Learning in Fewer Sessions" },
      { type: 'heading3', text: "Focus on Core Driving Skills First" },
      { type: 'paragraph', text: "Start by mastering the basics—mirror checks, lane discipline, parking, and safe turns. Once you’re confident with these, advanced techniques will come naturally and require fewer practice hours." },
      { type: 'heading3', text: "Use Tutor Feedback to Improve Quickly" },
      { type: 'paragraph', text: "Every tutor on Drivys provides personalized feedback. Take notes after each lesson, review them, and apply the advice in your next session. This reduces the need for repeating the same mistakes." },
      { type: 'heading3', text: "Avoid Common Beginner Mistakes" },
      { type: 'paragraph', text: "Many beginners waste time by rushing, ignoring road signs, or over-relying on their tutor. Staying calm and practicing defensive driving helps you progress faster while staying safe." },

      // Image after third section


      { type: 'heading2', text: "Preparing for Each Lesson in Advance" },
      { type: 'heading3', text: "Review Previous Lesson Notes" },
      { type: 'paragraph', text: "Before every lesson, go over what you learned previously. This keeps the knowledge fresh and allows you to pick up where you left off, saving valuable practice time." },
      { type: 'heading3', text: "Understand Traffic Rules Beforehand" },
      { type: 'paragraph', text: "Knowing the basics of UAE road rules—speed limits, lane usage, and right-of-way—beforehand means you won’t spend lesson time on theory that you could have studied at home." },
      { type: 'heading3', text: "Stay Relaxed and Focused During Lessons" },
      { type: 'paragraph', text: "Stress and distraction slow learning. Arrive prepared, well-rested, and ready to focus on your tutor’s guidance. A calm mindset helps you absorb skills faster." },

      { type: 'heading2', text: "How Drivys Helps Learners Save Time" },
      { type: 'heading3', text: "Progress Tracking in the App" },
      { type: 'paragraph', text: "Drivys allows you to monitor your lesson history, completed milestones, and next steps. By seeing your progress clearly, you can identify which areas need more focus." },
      { type: 'heading3', text: "Quick Communication with Instructors" },
      { type: 'paragraph', text: "Need to ask a question or adjust your schedule? Drivys makes it easy to message instructors directly in the app, saving you time compared to traditional calls or visits." },
      { type: 'heading3', text: "Location-Based Tutor Matching" },
      { type: 'paragraph', text: "Instead of traveling far for lessons, Drivys connects you with nearby instructors in Abu Dhabi and across the UAE. Less commuting means more time spent actually learning." },
      { type: 'heading3', text: "Book Smarter, Learn Faster with Drivys" },
      { type: 'paragraph', text: "Time is valuable—make the most of every driving lesson with Drivys. From flexible scheduling to progress tracking, the app helps you learn smarter, faster, and with more confidence. Book your first lesson today and take the fastest route to becoming a safe, skilled driver in the UAE." },
    ],
  },
  {
    id: '3',
    title: "How to Choose the Right Driving Instructor on Drivys: A Student’s Guide for Safe Learning in Abu Dhabi",
    author: "Drivys Team",
    date: "OCTOBER 5, 2025",
    heroImage: "/images/blog-hero3.jpg", // hero image
    metaTitle: "How to Choose the Best Driving Tutor in UAE | Drivys Student Guide",
    metaDescription: "Learn how to select the right driving instructor on Drivys. Compare certified instructors, read reviews, and book lessons in Abu Dhabi and across the UAE for safe, confident driving.",
    keywords: "choose driving Instructor, best driving instructor, Drivys student guide, learning to drive, driving school Abu Dhabi, driving school for beginners UAE, driving UAE",
    content: [
      { type: 'paragraph', text: "Learn how to choose the best driving instructor on Drivys. Compare instructors, avoid common mistakes, and find the perfect driving instructor for beginners in the UAE." },

      // Hero image immediately after title
      { type: 'image', src: "/images/blogs/blog-hero3.jpg", alt: "Hero image" },

      { type: 'heading2', text: "Why Choosing the Right Driving Tutor Matters" },
      { type: 'heading3', text: "The Impact on Learning Progress" },
      { type: 'paragraph', text: "Learning to drive is a major milestone, and selecting the right driving instructor is crucial for your progress. A skilled instructor helps you understand driving techniques, improves your confidence, and ensures faster skill development." },
      { type: 'heading3', text: "Safety and Confidence Behind the Wheel" },
      { type: 'paragraph', text: "A qualified instructor not only teaches driving skills but also emphasizes road safety. Choosing the wrong instructor may lead to bad habits or unsafe driving practices. In busy cities like Abu Dhabi, learning with a trusted instructor is essential." },

      // Image after first section
      { type: 'image', src: "/images/blogs/choosing-instructor.jpg", alt: "Choosing instructor" },

      { type: 'heading2', text: "Tips for Selecting the Best Driving Instructor" },
      { type: 'heading3', text: "Check Qualifications and Experience" },
      { type: 'paragraph', text: "Always verify that your instructor is certified and experienced. Look for instructors with proper licenses and years of experience teaching learners at your level. Experienced instructors know how to handle nervous beginners and provide practical tips for passing the driving test." },
      { type: 'heading3', text: "Read Reviews and Ratings" },
      { type: 'paragraph', text: "Student reviews are invaluable. Platforms like Drivys allow you to read ratings and feedback from previous learners. Tutors with consistent positive reviews are more likely to provide high-quality instruction and a better learning experience." },
      { type: 'heading3', text: "Consider Availability and Flexibility" },
      { type: 'paragraph', text: "An instructor who fits your schedule is key to consistent learning. Regular lessons help build skills faster, so choose an instructor with flexible hours who can accommodate your availability." },

      { type: 'heading2', text: "Using Drivys to Compare Tutors" },
      { type: 'heading3', text: "Features of the Drivys App (Linked with our Site)" },
      { type: 'paragraph', text: "Drivys makes it easy to find and compare driving instructors. You can view instructor profiles, check experience, teaching style, and ratings—all in one platform." },
      { type: 'heading3', text: "Filtering Tutors by Location, Language and Skill" },
      { type: 'paragraph', text: "No matter if you’re in Abu Dhabi or anywhere else in the UAE, Drivys makes it simple to find the right instructor. You can filter instructors based on location, preferred language, lesson type (manual or automatic), and driving specialization—ensuring you connect with the perfect match nearby." },
      { type: 'heading3', text: "Scheduling Lessons with Ease" },
      { type: 'paragraph', text: "Once you choose an instructor, Drivys simplifies booking and payments. You can schedule lessons, receive reminders, and even track your progress within the app." },

      // Image after second section
      { type: 'image', src: "/images/blogs/drivys-app.png", alt: "Drivys app" },

      { type: 'heading2', text: "Common Mistakes Students Should Avoid" },
      { type: 'heading3', text: "Ignoring Student Feedback" },
      { type: 'paragraph', text: "Reviews and feedback from past learners provide real insight. Ignoring them may result in disappointment or slow progress. Always check ratings before booking." },
      { type: 'heading3', text: "Skipping Trial Lessons" },
      { type: 'paragraph', text: "Many students commit to multiple lessons without a trial session. A trial lesson helps you evaluate if the instructor’s teaching style suits your learning needs." },

      { type: 'heading2', text: "Bonus Tips for Beginners in Abu Dhabi and UAE" },
      { type: 'heading3', text: "Preparing for Your First Lesson" },
      { type: 'paragraph', text: "Understand basic traffic rules, bring your ID, and arrive on time. Being prepared allows you to focus entirely on learning instead of worrying about logistics." },
      { type: 'heading3', text: "Staying Consistent with Practice" },
      { type: 'paragraph', text: "Regular practice is essential. Follow your instructor’s guidance, schedule lessons consistently, and reinforce learning outside of lessons if possible." },
      { type: 'heading3', text: "Learning to Drive Safely" },
      { type: 'paragraph', text: "Focus on defensive driving, obeying traffic rules, and understanding road signs. Safety should always be your top priority, especially in busy city traffic." },
      { type: 'heading3', text: "Book Your First Lesson Confidently with Drivys (Linked with our Site)" },
      { type: 'paragraph', text: "Choosing the right driving instructor on Drivys sets you on the path to becoming a confident and safe driver. Use the app to compare instructors, read reviews, and schedule lessons that fit your routine. Start your driving journey today and take the first step toward success in Abu Dhabi and across the UAE!" },
    ],
  },
  {
    id: '4',
    title: "Top Qualities of a Professional Driving Trainer in Abu Dhabi",
    author: "Drivys Team",
    date: "OCTOBER 5, 2025",
    heroImage: "/images/blogs/blog-hero4.png", // hero image
    metaTitle: "Top Qualities of a Professional Driving Trainer in Abu Dhabi",
    metaDescription: "Discover the top qualities that define a professional driving trainer in Abu Dhabi. Learn what makes a great instructor who builds safe and confident drivers.",
    keywords: "driving trainer Abu Dhabi, best driving instructor Abu Dhabi, professional driving school Abu Dhabi, certified driving trainer Abu Dhabi, driving lessons Abu Dhabi, Abu Dhabi driving license, driving trainer qualities, affordable driving trainer Abu Dhabi, driving instructor UAE, safe driving instructor",
    content: [
      { type: 'paragraph', text: "There can be no overestimation of the role of a driving trainer in Abu Dhabi, given the busy city traffic. With the help of a proper trainer, learners can become confident, skilled drivers. This blog explores the top qualities that define a professional driving trainer Abu Dhabi residents can trust." },



      { type: 'heading2', text: "1. Patience – The Cornerstone of Effective Training" },
      { type: 'paragraph', text: "Patience sets a convenient learning atmosphere in which students do not feel criticized but nurtured. This accelerates learning and generates confidence at the wheel." },

      { type: 'heading2', text: "2. Excellent Communication Skills" },
      { type: 'paragraph', text: "Clear and effective communication is key. Instructors must adjust their style to the learner’s age, language, and experience." },

      // Content image 1
      { type: 'image', src: "/images/blogs/patience-communication.jpg", alt: "Patience and Communication" },

      { type: 'heading2', text: "3. Knowledge of Traffic Laws and Regulations" },
      { type: 'paragraph', text: "A professional trainer stays updated on Abu Dhabi traffic laws, road structures, and regulations to ensure learners become responsible drivers." },

      { type: 'heading2', text: "4. Adaptability to Learners’ Needs" },
      { type: 'paragraph', text: "Each learner is different, and a good trainer adapts lessons to suit individual needs, providing the right balance of challenge and support." },

      { type: 'heading2', text: "5. Calmness Under Pressure" },
      { type: 'paragraph', text: "Trainers who stay calm during stressful driving situations reassure learners and manage errors effectively." },

      { type: 'heading2', text: "6. Strong Observational Skills" },
      { type: 'paragraph', text: "Attention to detail ensures that learners develop safe driving habits from the start, reducing accident risk." },

      { type: 'heading2', text: "7. Technical Expertise and Driving Skills" },
      { type: 'paragraph', text: "A trainer must demonstrate mastery of all driving techniques, vehicle mechanics, and emergency responses." },

      // Content image 2
      { type: 'image', src: "/images/blogs/technical-expertise.jpg", alt: "Technical expertise" },

      { type: 'heading2', text: "8. Professionalism and Reliability" },
      { type: 'paragraph', text: "Punctuality, proper vehicle maintenance, and distraction-free lessons create trust and enhance learning outcomes." },

      { type: 'heading2', text: "9. Encouraging and Positive Attitude" },
      { type: 'paragraph', text: "Positive reinforcement motivates learners, accelerates learning, and reduces anxiety." },

      { type: 'heading2', text: "10. Safety Awareness" },
      { type: 'paragraph', text: "Trainers instill a strong sense of road safety, ensuring learners understand and follow all rules." },

      { type: 'heading2', text: "Conclusion" },
      { type: 'paragraph', text: "A great driving trainer in Abu Dhabi is patient, communicative, adaptable, professional, and technically competent. They prepare learners not just to pass tests but to drive confidently and safely in real-world conditions." }
    ]
  },





];
const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  if (!blog) return <p className="text-white text-center mt-20">Blog not found</p>;

  return (
    <>
      <Helmet>
        <title>{blog.metaTitle}</title>
        <meta name="description" content={blog.metaDescription} />
        <meta name="keywords" content={blog.keywords} />
      </Helmet>

      <main className="w-full bg-black min-h-screen text-white">
        <Header />

        {/* Title & Author */}
        <section className="px-4 sm:px-6 lg:px-20 py-8 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{blog.title}</h1>
          <p className="text-gray-400 text-sm">
            By <span className="font-semibold">{blog.author}</span> | {blog.date}
          </p>
        </section>

        {/* Hero Image - immediately after title */}
        <section className="px-4 sm:px-6 lg:px-20 max-w-4xl mx-auto">
          <img
            src={blog.heroImage}
            alt="Hero"
            className="w-full rounded-lg shadow-lg mb-8"
          />
        </section>

        {/* Blog Content */}
        <section className="px-4 sm:px-6 lg:px-20 py-6 max-w-4xl mx-auto flex flex-col gap-8">
          {blog.content.map((block, index) => {
            switch (block.type) {
              case 'paragraph':
                return <p key={index} className="text-gray-300 leading-relaxed">{block.text}</p>;
              case 'heading2':
                return <h2 key={index} className="text-2xl md:text-3xl font-bold mt-6">{block.text}</h2>;
              case 'heading3':
                return <h3 key={index} className="text-xl md:text-2xl font-semibold mt-4">{block.text}</h3>;
              case 'image':
                return (
                  <div key={index} className="my-6">
                    <img src={block.src} alt={block.alt} className="w-full rounded-lg shadow-lg" />
                  </div>
                );
              default:
                return null;
            }
          })}
        </section>

        <Footer />
      </main>
    </>
  );
};

export default BlogDetails;
