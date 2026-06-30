function Process() {
  const employerSteps = [
    {
      title: "Discovery",
      text: "Understanding your business, culture, and requirements.",
    },
    {
      title: "Requirement Planning",
      text: "Defining the ideal candidate profile and timeline.",
    },
    {
      title: "Candidate Search",
      text: "Active headhunting across our talent network.",
    },
    {
      title: "Shortlisting",
      text: "Presenting only the best-matched candidates.",
    },
    {
      title: "Interview Support",
      text: "Full coordination and coaching throughout.",
    },
    {
      title: "Successful Hire",
      text: "Placement, onboarding support, and follow-up.",
    },
  ];

  const employeeSteps = [
    {
      title: "Register",
      text: "Create your profile and tell us about your goals.",
    },
    {
      title: "CV Review",
      text: "Expert feedback to make your application stand out.",
    },
    {
      title: "Job Matching",
      text: "We match you with roles that fit your experience.",
    },
    {
      title: "Interview Preparation",
      text: "Tailored coaching and briefing for every interview.",
    },
    {
      title: "Placement",
      text: "We negotiate the best offer on your behalf.",
    },
    {
      title: "Career Support",
      text: "Ongoing support as your career progresses.",
    },
  ];

  return (
    <section className="bg-[#f4f7fb] py-20">
      <div className="max-w-[1500px] mx-auto px-14">
        <div className="text-center">
          <span className="bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-sm font-bold">
            Our Process
          </span>

          <h2 className="text-5xl font-extrabold text-blue-700 mt-5">
            How We Work
          </h2>

          <p className="text-gray-500 text-lg mt-4">
            Dedicated pathways for employers and job seekers, united by one
            commitment to success.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-10 mt-16 items-center">
          {/* Employer Journey */}
          <div>
            <div className="bg-blue-700 text-white rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-lime-300 text-blue-700 flex items-center justify-center font-bold">
                E
              </div>
              <div>
                <h3 className="font-bold text-xl">Employer Journey</h3>
                <p className="text-blue-100 text-sm">
                  From brief to successful hire
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-6 relative">
              {employerSteps.map((step, index) => (
                <div key={index} className="flex gap-5 items-start relative">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-sm z-10 relative">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {index !== employerSteps.length - 1 && (
                      <div className="absolute left-1/2 top-12 w-[2px] h-10 bg-blue-100 -translate-x-1/2"></div>
                    )}
                  </div>

                  <div>
                    <h4 className="text-blue-700 font-extrabold text-xl">
                      {step.title}
                    </h4>
                    <p className="text-gray-500 text-base">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Circle */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-52 h-52 rounded-full border-2 border-dashed border-blue-200 flex items-center justify-center">
              <div className="absolute w-36 h-36 rounded-full border-2 border-blue-200"></div>

              <div className="w-24 h-24 rounded-full bg-blue-700 text-white flex items-center justify-center text-2xl font-extrabold z-10">
                E2E
              </div>

              <span className="absolute top-[-8px] w-3 h-3 bg-orange-400 rounded-full"></span>
              <span className="absolute bottom-[-8px] w-3 h-3 bg-orange-400 rounded-full"></span>
              <span className="absolute left-[-8px] w-3 h-3 bg-lime-300 rounded-full"></span>
              <span className="absolute right-[-8px] w-3 h-3 bg-lime-300 rounded-full"></span>

              <p className="absolute -bottom-12 text-center text-blue-700 font-bold text-sm">
                Connecting
                <br />
                Both Journeys
              </p>
            </div>
          </div>

          {/* Employee Journey */}
          <div>
            <div className="bg-lime-300 text-blue-700 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-700 text-lime-300 flex items-center justify-center font-bold">
                E
              </div>
              <div>
                <h3 className="font-bold text-xl">Employee Journey</h3>
                <p className="text-blue-700 text-sm">
                  From registration to career support
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-6 relative">
              {employeeSteps.map((step, index) => (
                <div key={index} className="flex gap-5 items-start relative">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-lime-300 text-blue-700 flex items-center justify-center font-bold text-sm z-10 relative">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {index !== employeeSteps.length - 1 && (
                      <div className="absolute left-1/2 top-12 w-[2px] h-10 bg-lime-200 -translate-x-1/2"></div>
                    )}
                  </div>

                  <div>
                    <h4 className="text-blue-700 font-extrabold text-xl">
                      {step.title}
                    </h4>
                    <p className="text-gray-500 text-base">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;