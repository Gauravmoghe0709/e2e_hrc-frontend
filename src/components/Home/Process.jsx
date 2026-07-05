import { useEffect, useState } from "react";
import axios from "axios";

function Process() {
  const [section, setSection] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSection = async () => {
      try {
        const response = await axios.get('/api/how-we-work');
        setSection(response?.data?.data || null);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSection();
  }, []);

  const employerSteps = (section?.employerSteps || []).filter((step) => step.isActive !== false).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
  const employeeSteps = (section?.employeeSteps || []).filter((step) => step.isActive !== false).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));

  return (
    <section className="bg-[#f4f7fb]">
      <div className="max-w-375 mx-auto px-6 sm:px-10 lg:px-14">
        <div className="text-center">
          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-bold">
            Our Process
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold text-[#004CA5] mt-5">
            {section?.sectionTitle || "How We Work"}
          </h2>

          <p className="text-gray-500 text-lg mt-4 max-w-3xl mx-auto">
            {section?.sectionDescription || "Dedicated pathways for employers and job seekers, united by one commitment to success."}
          </p>
        </div>

        {isLoading ? (
          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="animate-pulse rounded-2xl bg-white p-6 shadow-sm">
                <div className="h-6 w-1/2 rounded bg-slate-200" />
                <div className="mt-4 h-20 rounded bg-slate-100" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="mt-16 rounded-2xl border border-dashed border-orange-200 bg-white p-10 text-center text-gray-600">
            How We Work content is temporarily unavailable.
          </div>
        ) : (
          <div className="grid gap-10 mt-16 items-center lg:grid-cols-3">
            <div>
              <div className="bg-[#004CA5] text-white rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#cde87a] text-blue-600 flex items-center justify-center font-bold">E</div>
                <div>
                  <h3 className="font-bold text-xl">Employer Journey</h3>
                  <p className="text-blue-100 text-sm">From brief to successful hire</p>
                </div>
              </div>

              <div className="mt-8 space-y-6 relative">
                {employerSteps.map((step, index) => (
                  <div key={step._id || `${step.title}-${index}`} className="flex gap-5 items-start relative">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-[#004CA5] text-white flex items-center justify-center font-bold text-sm z-10 relative">
                        {step.stepNumber || String(index + 1).padStart(2, "0")}
                      </div>
                      {index !== employerSteps.length - 1 && <div className="absolute left-1/2 top-12 w-0.5 h-10 bg-blue-100 -translate-x-1/2"></div>}
                    </div>
                    <div>
                      <h4 className="text-[#004CA5] font-extrabold text-m">{step.title}</h4>
                      <p className="text-gray-500 text-base">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-52 h-52 rounded-full border-2 border-dashed border-orange-200 flex items-center justify-center">
                <div className="absolute w-36 h-36 rounded-full border-2 border-orange-200"></div>
                <div className="w-24 h-24 rounded-full bg-[#004CA5] text-white flex items-center justify-center text-xl font-extrabold z-10">E2E</div>
                <span className="absolute -top-2 w-3 h-3 bg-orange-400 rounded-full"></span>
                <span className="absolute -bottom-2 w-3 h-3 bg-orange-400 rounded-full"></span>
                <span className="absolute -left-2 w-3 h-3 bg-[#C6D86D] rounded-full"></span>
                <span className="absolute -right-2 w-3 h-3 bg-[#C6D86D] rounded-full"></span>
                <p className="absolute -bottom-12 text-center text-orange-600 font-bold text-sm">Connecting<br />Both Journeys</p>
              </div>
            </div>

            <div>
              <div className="bg-[#C6D86D] text-[#004CA5] rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#004CA5] text-amber-300 flex items-center justify-center font-bold">E</div>
                <div>
                  <h3 className="font-bold text-xl">Employee Journey</h3>
                  <p className="text-[#004CA5] text-sm">From registration to career support</p>
                </div>
              </div>

              <div className="mt-8 space-y-6 relative">
                {employeeSteps.map((step, index) => (
                  <div key={step._id || `${step.title}-${index}`} className="flex gap-5 items-start relative">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-[#C6D86D] text-[#004CA5] flex items-center justify-center font-bold text-sm z-10 relative">
                        {step.stepNumber || String(index + 1).padStart(2, "0")}
                      </div>
                      {index !== employeeSteps.length - 1 && <div className="absolute left-1/2 top-12 w-0.5 h-10 bg-amber-100 -translate-x-1/2"></div>}
                    </div>
                    <div>
                      <h4 className="text-[#004CA5] font-extrabold text-m">{step.title}</h4>
                      <p className="text-gray-500 text-base">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Process;