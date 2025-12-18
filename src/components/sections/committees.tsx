"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const Committees = () => {
  return (
    <section
      id="committes"
      className="section-padding bg-[#f8f9fa] py-[80px] lg:py-[100px]"
    >
      <div className="container max-w-[1170px] mx-auto px-[15px]">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-[60px]">
          <h2 className="text-[32px] font-bold font-display text-[#1c1c1c] capitalize tracking-tight">
            Committees
          </h2>
        </div>

        <div className="row flex justify-center py-3">
          <div className="w-full lg:w-[83.33333333%] mx-auto">
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-[32px]"
            >
              {/* Chief Patron */}
              <AccordionItem
                value="chief-patron"
                className="border-none bg-white rounded-[8px] overflow-hidden card-shadow"
              >
                <AccordionTrigger className="flex items-center justify-between px-[30px] py-[20px] hover:no-underline group">
                  <span className="text-[20px] font-semibold font-display text-[#1c1c1c]">
                    Chief Patron
                  </span>
                  <div className="w-[32px] h-[32px] bg-[#ff8a2d] rounded-full flex items-center justify-center transition-transform duration-200 group-data-[state=open]:rotate-180">
                    <ChevronDown className="h-5 w-5 text-white" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-[#0a0d14] p-0 overflow-hidden">
                  <div className="p-[30px]">
                    <table className="w-full border-collapse border border-[#333]">
                      <tbody className="text-white font-body">
                        <tr className="border-b border-[#333]">
                          <td className="w-1/5 p-4 border-r border-[#333] font-semibold">Chief Patron</td>
                          <td className="p-4">
                            <strong>Dr. Sandip N. Jha</strong>
                            <br />
                            Hon'ble Chairman, Sandip University, Nashik
                          </td>
                        </tr>
                        <tr className="border-b border-[#333]">
                          <td className="p-4 border-r border-[#333] font-semibold">Patrons</td>
                          <td className="p-4">
                            <strong>Prof. Pramod Karole</strong>
                            <br /> Academic Facilitator, Sandip Foundation, Nashik.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 border-r border-[#333] font-semibold">Convenor</td>
                          <td className="p-4">
                            <strong>Dr. Amol D Potgantwar</strong>,
                            <br /> Principal, Sandip Institute of Technology and Research Centre, Nashik.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Chairperson */}
              <AccordionItem
                value="chairperson"
                className="border-none bg-white rounded-[8px] overflow-hidden card-shadow"
              >
                <AccordionTrigger className="flex items-center justify-between px-[30px] py-[20px] hover:no-underline group">
                  <span className="text-[20px] font-semibold font-display text-[#1c1c1c]">
                    Chairperson of Organising Committee
                  </span>
                  <div className="w-[32px] h-[32px] bg-[#ff8a2d] rounded-full flex items-center justify-center transition-transform duration-200 group-data-[state=open]:rotate-180">
                    <ChevronDown className="h-5 w-5 text-white" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-[#0a0d14] p-0 overflow-hidden">
                  <div className="p-[30px]">
                    <table className="w-full border-collapse border border-[#333]">
                      <tbody className="text-white font-body">
                        <tr>
                          <td className="p-4">
                            <strong>Dr. Ankita Karale</strong>, <br />
                            Associate Professor &amp; Head of Department, Department of Computer Engineering, Sandip Institute of Technology and Research Centre, Nashik.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* FDP Coordinator */}
              <AccordionItem
                value="coordinator"
                className="border-none bg-white rounded-[8px] overflow-hidden card-shadow"
              >
                <AccordionTrigger className="flex items-center justify-between px-[30px] py-[20px] hover:no-underline group">
                  <span className="text-[20px] font-semibold font-display text-[#1c1c1c]">
                    FDP Coordinator
                  </span>
                  <div className="w-[32px] h-[32px] bg-[#ff8a2d] rounded-full flex items-center justify-center transition-transform duration-200 group-data-[state=open]:rotate-180">
                    <ChevronDown className="h-5 w-5 text-white" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-[#0a0d14] p-0 overflow-hidden">
                  <div className="p-[30px]">
                    <table className="w-full border-collapse border border-[#333]">
                      <tbody className="text-white font-body">
                        <tr>
                          <td className="p-4">
                            <strong>Dr. Mohammed Abdul Wassay</strong>,
                            <br /> Professor, IQAC-Incharge &amp; Research Coordinator, Sandip Institute of Technology and Research Centre, Nashik
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* FDP Co-coordinator */}
              <AccordionItem
                value="co-coordinator"
                className="border-none bg-white rounded-[8px] overflow-hidden card-shadow"
              >
                <AccordionTrigger className="flex items-center justify-between px-[30px] py-[20px] hover:no-underline group">
                  <span className="text-[20px] font-semibold font-display text-[#1c1c1c]">
                    FDP Co-coordinator
                  </span>
                  <div className="w-[32px] h-[32px] bg-[#ff8a2d] rounded-full flex items-center justify-center transition-transform duration-200 group-data-[state=open]:rotate-180">
                    <ChevronDown className="h-5 w-5 text-white" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-[#0a0d14] p-0 overflow-hidden">
                  <div className="p-[30px]">
                    <table className="w-full border-collapse border border-[#333]">
                      <tbody className="text-white font-body">
                        <tr>
                          <td className="p-4">
                            <strong>Dr. Naresh Thoutam</strong>,
                            <br /> Assistant Professor, Sandip Institute of Technology and Research Centre, Nashik
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Program Committee Members */}
              <AccordionItem
                value="committee-members"
                className="border-none bg-white rounded-[8px] overflow-hidden card-shadow"
              >
                <AccordionTrigger className="flex items-center justify-between px-[30px] py-[20px] hover:no-underline group">
                  <span className="text-[20px] font-semibold font-display text-[#1c1c1c]">
                    Program Committee Members
                  </span>
                  <div className="w-[32px] h-[32px] bg-[#ff8a2d] rounded-full flex items-center justify-center transition-transform duration-200 group-data-[state=open]:rotate-180">
                    <ChevronDown className="h-5 w-5 text-white" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-[#0a0d14] p-0 overflow-hidden">
                  <div className="p-[30px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white font-body">
                      {[
                        "Dr. Pramod A. Patil",
                        "Dr. R. S. Bhadane",
                        "Dr. G. K. Gaikwad",
                        "Prof. P. R. Gaidhani",
                        "Prof. M. V. Korade",
                        "Prof. S. R. Shinde",
                        "Prof. J. R. Prasad",
                        "Prof. T. D. Pawar",
                        "Prof. D. J. Salunke",
                        "Prof. V. D. Kardak",
                        "Prof. R. M. Walunj",
                        "Prof. A. S. Patil",
                      ].map((member, index) => (
                        <div key={index} className="flex items-center space-x-2 border-b border-[#333] pb-2">
                          <span className="w-2 h-2 bg-[#ff8a2d] rounded-full"></span>
                          <span>{member}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committees;