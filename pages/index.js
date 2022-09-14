const Index = () => {
  return (
    <>
      <div className="py-40">
        <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-8 lg:items-center lg:gap-24">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="img/hero-1.svg"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-cerulean-blue font-bold md:text-4xl">
                Come learn with us!
              </h2>
              <p className="mt-6 text-gray-600">
              Explore exciting courses, engage existing interests, 
              and examine entrepreneurial skills. 
              What you find just might surprise and inspire you. 
              Pachyderm's e-learning platform empowers you to learn new skills and accomplish real growth, whether you're a studen or an instructor.
              All this, how you want, and when you want. Join us today!
              </p>
              <p className="mt-4 text-gray-600">
                {" "}
                <em>Tell me and I forget. Teach me and I remember. Involve me and I learn. 
                <br /> 
                
                Benjamin Franklin</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
