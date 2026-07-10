import React from 'react';
import { BriefcaseBusiness } from "lucide-react";

const EmployeeJourneyServices = () => {
  const services = [
    {
      id: 1,
      title: 'Register',
      icon: BriefcaseBusiness,
      position: 'left'
    },
    {
      id: 2,
      title: 'Interview Preparation',
      icon: BriefcaseBusiness,
      position: 'right'
    },
    {
      id: 3,
      title: 'CV Review',
      icon: BriefcaseBusiness,
      position: 'left'
    },
    {
      id: 4,
      title: 'Placement',
      icon: BriefcaseBusiness,
      position: 'right'
    },
    {
      id: 5,
      title: 'Job Matching',
      icon: BriefcaseBusiness,
      position: 'left'
    },
    {
      id: 6,
      title: 'Career Support',
      icon: BriefcaseBusiness,
      position: 'right'
    }
  ];

  return (
    <div className="w-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-green-400 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-gray-600 text-sm font-semibold tracking-wide mb-4">
            TRUSTED DIGITAL SOLUTIONS FOR YOUR BUSINESS
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
            Why choose Our Employee<br />Journey Services?
          </h1>
        </div>

        {/* Services Grid */}
        <div className="space-y-px">
          {/* Row 1 */}
          <div className="flex divide-x divide-gray-400 border-b border-gray-400">
            {/* Left Column - Service 1 */}
            <div className="flex-1 flex items-center gap-8 p-8 pl-0">
              <div className="flex-shrink-0">
                {React.createElement(services[0].icon, {
                  size: 48,
                  className: 'text-gray-700'
                })}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {services[0].title}
                </h3>
              </div>
            </div>

            {/* Right Column - Service 2 */}
            <div className="flex-1 flex items-center gap-8 p-8 pl-12">
              <div className="flex-shrink-0">
                {React.createElement(services[1].icon, {
                  size: 48,
                  className: 'text-gray-700'
                })}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {services[1].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex divide-x divide-gray-400 border-b border-gray-400">
            {/* Left Column - Service 3 */}
            <div className="flex-1 flex items-center gap-8 p-8 pl-0">
              <div className="flex-shrink-0">
                {React.createElement(services[2].icon, {
                  size: 48,
                  className: 'text-gray-700'
                })}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {services[2].title}
                </h3>
              </div>
            </div>

            {/* Right Column - Service 4 */}
            <div className="flex-1 flex items-center gap-8 p-8 pl-12">
              <div className="flex-shrink-0">
                {React.createElement(services[3].icon, {
                  size: 48,
                  className: 'text-gray-700'
                })}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {services[3].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex divide-x divide-gray-400">
            {/* Left Column - Service 5 */}
            <div className="flex-1 flex items-center gap-8 p-8 pl-0">
              <div className="flex-shrink-0">
                {React.createElement(services[4].icon, {
                  size: 48,
                  className: 'text-gray-700'
                })}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {services[4].title}
                </h3>
              </div>
            </div>

            {/* Right Column - Service 6 */}
            <div className="flex-1 flex items-center gap-8 p-8 pl-12">
              <div className="flex-shrink-0">
                {React.createElement(services[5].icon, {
                  size: 48,
                  className: 'text-gray-700'
                })}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {services[5].title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeJourneyServices;