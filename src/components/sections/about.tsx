import React from 'react';

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="bg-[#f8f9fa] relative py-12 lg:py-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-[1170px]">
        <div className="space-y-10">
          
          <div className="about-item">
            <h2 className="text-[28px] md:text-[32px] font-display font-bold text-[#0d5c2e] mb-6 capitalize leading-[1.2]">
              About Pravara Rural Education Society
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#1c1c1c] text-justify font-body">
              The Pravara Rural Education Society was established in July 1964 by Late Padmashri Dr. Vitthalrao Vikhe Patil, a visionary, philanthropist, and the pioneer behind the first cooperative sugar factory in the cooperative sector — not just in India, but in all of Asia. His mission was to make technical education accessible and affordable in rural areas. Carrying forward this legacy, Late Padmabhushan Dr. Balasaheb Vikhe Patil, an eminent leader in Maharashtra and a Member of Parliament for over three decades, undertook the monumental task of transforming this vision into reality through dedicated planning and execution. The Society today stands as a symbol of academic excellence, offering quality education from pre-primary to doctorate levels.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#1c1c1c] text-justify font-body mt-4">
              Under the dynamic leadership of Hon&apos;ble Chairman Namdar Shri Radhakrishna Vikhe Patil and CEO Dr. Sushmita Vikhe Patil, the Society continues to make remarkable strides in enhancing the quality and reach of education, upholding its commitment to educational empowerment in rural India.
            </p>
          </div>

          <div className="about-item">
            <h2 className="text-[28px] md:text-[32px] font-display font-bold text-[#0d5c2e] mb-6 capitalize leading-[1.2]">
              About The Institute
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#1c1c1c] text-justify font-body">
              Sir Visvesvaraya Institute of Technology, established by the Pravara Rural Education Society in 1998–99, offers undergraduate programs in Chemical Engineering, Computer Engineering, Information Technology, and Electronics &amp; Computer Engineering, along with a postgraduate program in Master of Business Administration (MBA).
            </p>
            <p className="text-[16px] leading-[1.8] text-[#1c1c1c] text-justify font-body mt-4">
              The institute boasts a team of highly qualified, dedicated, and committed faculty members. A positive and collaborative environment exists between the staff and students, fostering academic growth and innovation. Emphasis is placed on delivering quality technical education, supported by state-of-the-art laboratories and modern equipment, to prepare students for the global challenges.
            </p>
          </div>

          <div className="about-item">
            <h2 className="text-[28px] md:text-[32px] font-display font-bold text-[#0d5c2e] mb-6 capitalize leading-[1.2]">
              About Department of Chemical Engineering
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#1c1c1c] text-justify font-body">
              The department is supported by a team of dynamic, experienced and highly qualified faculty members committed to academic excellence and student development. To foster innovation and technical skills, the department organizes an annual state-level event, <strong>&quot;Chemcoalesce&quot;</strong>, which includes paper and project competitions.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#1c1c1c] text-justify font-body mt-4">
              The department has been the recipient of several grants from AICTE under the MODROBS scheme, and has also secured multiple BCUD grants under QIP (Quality Improvement Program) and RPS (Research Promotion Scheme), further enhancing its research and infrastructure capabilities.
            </p>
          </div>

          <div className="about-item">
            <h2 className="text-[28px] md:text-[32px] font-display font-bold text-[#0d5c2e] mb-6 capitalize leading-[1.2]">
              About The Program
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#1c1c1c] text-justify font-body">
              The Faculty Development Program (FDP) on <strong>&quot;Energy, Sustainability and Climate Change&quot;</strong>, sponsored by AICTE Training and Learning (ATAL) Academy, aims to equip faculty members, researchers, and professionals with the knowledge, tools, and best practices necessary to address some of the most critical challenges of our time.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#1c1c1c] text-justify font-body mt-4">
              As the world grapples with the growing impacts of climate change and energy scarcity, there is an urgent need to transition towards sustainable energy solutions, adopt climate-resilient technologies, and promote environmental stewardship. This FDP provides a multidisciplinary platform to explore the intersection of energy systems, sustainability practices, and climate change mitigation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="about-item bg-white p-6 rounded-lg shadow-md border-l-4 border-[#0d5c2e]">
              <h2 className="text-[24px] font-display font-bold text-[#0d5c2e] mb-4">
                Objectives
              </h2>
              <ul className="text-[15px] leading-[1.8] text-[#1c1c1c] font-body space-y-3 list-disc list-inside">
                <li>To provide faculty members with an understanding of the fundamental concepts of energy, sustainability, and climate change.</li>
                <li>To explore renewable energy technologies and their role in reducing carbon footprints.</li>
                <li>To highlight the importance of climate policy, carbon management, and environmental ethics.</li>
                <li>To promote interdisciplinary research and teaching methodologies for sustainability.</li>
              </ul>
            </div>

            <div className="about-item bg-white p-6 rounded-lg shadow-md border-l-4 border-[#0d5c2e]">
              <h2 className="text-[24px] font-display font-bold text-[#0d5c2e] mb-4">
                Expected Outcomes
              </h2>
              <ul className="text-[15px] leading-[1.8] text-[#1c1c1c] font-body space-y-3 list-disc list-inside">
                <li>Participants will gain an in-depth understanding of key concepts related to energy systems, sustainability principles, and climate change science.</li>
                <li>Faculty members will be equipped with relevant content and teaching methodologies to design new courses focused on renewable energy, environmental policy, and SDGs.</li>
                <li>The FDP will facilitate cross-disciplinary engagement by integrating technical, environmental, and policy aspects.</li>
                <li>Exposure to recent advances will inspire participants to explore new research opportunities aligned with national and global sustainability agendas.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
