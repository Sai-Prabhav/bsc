import React from "react";
export const Committee = () => {
  return <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Executive Committee Members
        </h2>
        {/* Hall of Fame */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-brand-blue mb-8">
            Hall of Fame
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[{
            name: "Sri.Shiva Rao",
            role: "Chief Patron",
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&h=200&q=80"
          }, {
            name: "Sri.Ramakrishna Yanamandala",
            role: "Honorable Chairman",
            description: "Contractor",
            image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&h=200&q=80"
          }, {
            name: "Sri.Narasimhappa Muttuluri",
            role: "Founder Member",
            description: "Commissioner (Retd), Indian Revenue Services",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&q=80"
          }].map((member, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex flex-col items-center">
                  <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-brand-blue/20" />
                  <h4 className="text-xl font-semibold text-gray-900 text-center">
                    {member.name}
                  </h4>
                  <p className="text-brand-blue font-medium mt-2 text-center">
                    {member.role}
                  </p>
                  {member.description && <p className="text-gray-600 text-sm mt-1 text-center">
                      {member.description}
                    </p>}
                </div>
              </div>)}
          </div>
        </div>
        {/* Core Committee */}
        <div className="grid md:grid-cols-3 gap-6">
          {[{
          name: "Sri.Raveendranath Naidu N P",
          role: "President",
          description: "Chartered Accountant",
          image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&q=80"
        }, {
          name: "Sri.Rajendraa Naidu A",
          role: "Vice President",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&q=80"
        }, {
          name: "Sri.Venkataramaiah K",
          role: "Vice President",
          description: "Banker (Retd)",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&q=80"
        }].map((member, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center">
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-brand-blue/20" />
                <h4 className="text-lg font-semibold text-gray-900 text-center">
                  {member.name}
                </h4>
                <p className="text-brand-blue font-medium text-center">
                  {member.role}
                </p>
                {member.description && <p className="text-gray-600 text-sm text-center">
                    {member.description}
                  </p>}
              </div>
            </div>)}
        </div>
        {/* Executive Members */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Executive Members
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
            name: "Sri.T V V Prasad",
            role: "Executive Member",
            image: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?w=200&h=200&q=80"
          }, {
            name: "Sri.A V Nagaraju",
            role: "Executive Member",
            image: "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?w=200&h=200&q=80"
          }, {
            name: "Sri.G N Balaji",
            role: "Executive Member",
            image: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=200&h=200&q=80"
          }, {
            name: "Sri.Prof. R Munirajappa",
            role: "Executive Member",
            description: "Retd Professor, GKVK University",
            image: "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=200&h=200&q=80"
          }, {
            name: "Sri.D V Shekar",
            role: "Executive Member",
            description: "Builder, Developer",
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&h=200&q=80"
          }, {
            name: "Sri.P Bharani Kumar",
            role: "Executive Member",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&q=80"
          }, {
            name: "Sri.Dr. T M Naidu",
            role: "Executive Member",
            description: "Director (Retd), ADA",
            image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=200&h=200&q=80"
          }, {
            name: "Sri.P G Ramesh",
            role: "Executive Member",
            image: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?w=200&h=200&q=80"
          }, {
            name: "Sri.Rajashekar",
            role: "Executive Member",
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&h=200&q=80"
          }, {
            name: "Sri.A V Prasad",
            role: "Executive Member",
            description: "RTO, GoK",
            image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=200&h=200&q=80"
          }, {
            name: "Sri.Satheesh Amilineni",
            role: "Executive Member",
            description: "Software Engineer",
            image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=200&h=200&q=80"
          }].map((member, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex flex-col items-center">
                  <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-brand-blue/20" />
                  <h4 className="text-lg font-semibold text-gray-900 text-center">
                    {member.name}
                  </h4>
                  <p className="text-brand-blue text-center">{member.role}</p>
                  {member.description && <p className="text-gray-600 text-sm text-center">
                      {member.description}
                    </p>}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};