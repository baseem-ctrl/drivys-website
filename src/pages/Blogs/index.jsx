import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; // <-- import Link
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const Blogs = () => {
  const articles = [
    {
      id: '1',
      image: '/images/article1.jpg',
      date: 'AUGUST 15, 2025',
      title: 'Read Expertly Written Articles About Driving & Road Safety',
    },
    {
      id: '2',
      image: '/images/article2.jpg',
      date: 'AUGUST 15, 2025',
      title: 'Read Expertly Written Articles About Driving & Road Safety',
    },
    {
      id: '3',
      image: '/images/article3.jpg',
      date: 'AUGUST 15, 2025',
      title: 'Read Expertly Written Articles About Driving & Road Safety',
    },
    {
      id: '4',
      image: '/images/article4.jpg',
      date: 'AUGUST 15, 2025',
      title: 'Read Expertly Written Articles About Driving & Road Safety',
    },
    {
      id: '5',
      image: '/images/article5.jpg',
      date: 'AUGUST 15, 2025',
      title: 'Read Expertly Written Articles About Driving & Road Safety',
    },
    {
      id: '6',
      image: '/images/article3.jpg',
      date: 'AUGUST 15, 2025',
      title: 'Read Expertly Written Articles About Driving & Road Safety',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Drivys - Expert Driving Instructors & Professional Training UAE</title>
        <meta
          name="description"
          content="Learn about Drivys mission to bridge learners with expert driving instructors across UAE. 22+ years experience in professional driving education with modern technology and certified trainers."
        />
      </Helmet>
      <main className="w-full bg-black min-h-screen">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="flex flex-col gap-[50px] md:gap-[75px] lg:gap-[100px] justify-start items-center">
            {/* Header */}
            <div className="w-full px-4 sm:px-6 lg:px-[80px] mt-4">
              <Header />
            </div>
               <section className="w-full px-4 sm:px-6 lg:px-[80px]">
              <div className="w-full max-w-[1760px] mx-auto">
                <div
                  className="relative w-full rounded-[24px] overflow-hidden flex items-center"
                  style={{
                    backgroundImage: 'url(/images/img_image_29.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '360px', // ensures enough height for centering
                  }}
                >
                  <div className="flex flex-col lg:flex-row justify-between items-center w-full px-4 lg:px-[48px]">
                    {/* Text Area */}
                    <div className="flex flex-col justify-center items-start w-full lg:w-[58%]">
                      {/* Breadcrumb */}
                      <div className="bg-[linear-gradient(180deg,#ffffff19_0%,#ffffff19_50%,#ffffff19_100%)] border border-solid border-transparent rounded-[10px] px-[8px] md:px-[12px] lg:px-[16px] py-[4px] md:py-[6px] lg:py-[8px]">
                        <p
                          className="text-base md:text-lg lg:text-xl font-normal leading-[22px] md:leading-[26px] lg:leading-[30px] text-left text-white"
                          style={{ fontFamily: 'Poppins' }}
                        >
                          <span className="text-white">Home / </span>
                          <span className="text-white font-semibold">Blogs</span>
                        </p>
                      </div>

                      {/* Main Heading */}
                      <h1
                        className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[38px] sm:leading-[48px] md:leading-[68px] text-left mt-2"
                        style={{
                          fontFamily: 'Poppins',
                          background:
                            'linear-gradient(270deg, #cccccc 0%, #ffffff 50%, #cccccc 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        About Drivys
                      </h1>

                      {/* Description */}
                      <p
                        className="text-base md:text-xl lg:text-2xl font-normal leading-[24px] md:leading-[30px] lg:leading-[34px] text-left text-[#94969c] w-full lg:w-[64%] mt-2"
                        style={{ fontFamily: 'Poppins' }}
                      >
                        Drivys makes learning to drive simple, safe, and flexible with trusted
                        instructors and modern tools.
                      </p>
                    </div>

                    {/* Hero Image */}
                    <div className="w-full lg:w-[38%] flex justify-center items-center"></div>
                  </div>
                </div>
              </div>
            </section>


            {/* Articles Section */}
            <section className="w-full px-4 sm:px-6 lg:px-[80px]">
              <div className="w-full max-w-[1760px] mx-auto">
               

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.map((article) => (
                    <div
                      key={article.id}
                      className="bg-[#111] rounded-lg overflow-hidden shadow-lg flex flex-col"
                    >
                      {/* Image */}
                      <div className="w-full h-[200px] sm:h-[220px] lg:h-[250px] overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-1">
                        <p className="text-gray-400 text-sm flex items-center gap-2 mb-2">
                          <span>📅</span> {article.date}
                        </p>
                        <h3 className="text-white text-lg font-semibold mb-4 leading-snug">
                          {article.title}
                        </h3>

                        {/* Read More Button as Link */}
                        <Link
                          to={`/blog/${article.id}`} // <-- navigate to BlogDetails page
                          className="mt-auto w-fit px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center mt-8 space-x-2">
                  <button className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
                    1
                  </button>
                  <button className="w-8 h-8 rounded-full bg-[#222] text-white flex items-center justify-center">
                    2
                  </button>
                </div>
              </div>
            </section>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Blogs;
