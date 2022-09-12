const Index = () => {
  return (
    <>
                                       

<div class="py-16 bg-purple-50">  
  <div class="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-8 lg:items-center lg:gap-24">
        <div class="md:5/12 lg:w-5/12">
          <img src="img/hero-1.svg" alt="image" loading="lazy" width="" height="" />
        </div>
        <div class="md:7/12 lg:w-6/12">
          <h2 class="text-2xl text-purple-900 font-bold md:text-4xl">Nuxt development is carried out by passionate developers</h2>
          <p class="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
          <p class="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
        </div>
      </div>
  </div>
</div>
        <section className="w-full py-36 lg:py-44">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-12 items-center mt-10 gap-[30px]">
                    <div className="md:col-span-5">
                        <div>
                            <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl text-black dark:text-white">Our Creativity Is Your
                            <br />
                            <span className="text-blue-600">Success</span></h4>
                            <p className="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                        
                            <div className="mt-6">
                                <a href="contact-one.html" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2 mt-2"><i className="uil uil-envelope"></i> Get Started</a>
                                <a href="documentation.html" className="btn bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white rounded-md mt-2"><i className="uil uil-book-alt"></i> Documentation</a>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-5">
                        <img src="/img/hero-1.svg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Index;