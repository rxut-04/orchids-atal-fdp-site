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
        <div className="flex flex-col items-center mb-[60px]">
          <h2 className="text-[32px] font-bold font-display text-[#0d5c2e] capitalize tracking-tight">
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
              <AccordionItem
                value="chief-patron"
                className="border-none bg-white rounded-[8px] overflow-hidden card-shadow"
              >
                <AccordionTrigger className="flex items-center justify-between px-[30px] py-[20px] hover:no-underline group">
                  <span className="text-[20px] font-semibold font-display text-[#1c1c1c]">
                    Chief Patron
                  </span>
                  <div className="w-[32px] h-[32px] bg-[#0d5c2e] rounded-full flex items-center justify-center transition-transform duration-200 group-data-[state=open]:rotate-180">
                    <ChevronDown className="h-5 w-5 text-white" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-[#0d5c2e] p-0 overflow-hidden">
                  <div className="p-[30px]">
                    <table className="w-full border-collapse border border-[#1a7a3e]">
                      <tbody className="text-white font-body">
                        <tr className="border-b border-[#1a7a3e]">
                          <td className="w-1/4 p-4 border-r border-[#1a7a3e] font-semibold">Chief Patron</td>
                          <td className="p-4">
                            <strong>Hon&apos;ble Namdar Shri. Radhakrishna Vikhe Patil</strong>
                            <br />
                            (Minister Water Resources (Godavari &amp; Krishna Valley Development Corporation), Govt. of Maharashtra)
                            <br />
                            Chairman, Loknete Dr. Balasaheb Vikhe Patil (Padma Bhushan Awardee) PRES, Loni
                          </td>
                        </tr>
                        <tr className="border-b border-[#1a7a3e]">
                          <td className="p-4 border-r border-[#1a7a3e] font-semibold">Patron</td>
                          <td className="p-4">
                            <strong>Hon&apos;ble Sau. Shalinitai Vikhe Patil</strong>
                            <br />
                            (Ex-President, Zilha Parishad, Ahmednagar)
                            <br />
                            Trustee, Loknete Dr. Balasaheb Vikhe Patil (Padma Bhushan Awardee) PRES, Loni
                          </td>
                        </tr>
                        <tr className="border-b border-[#1a7a3e]">
                          <td className="p-4 border-r border-[#1a7a3e] font-semibold">Patron</td>
                          <td className="p-4">
                            <strong>Dr. Sujay Vikhe Patil</strong>
                            <br />
                            (Ex. Member of Parliament, Govt of India)
                            <br />
                            (Chairman, PDVVPSSK, Loni)
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 border-r border-[#1a7a3e] font-semibold">CEO</td>
                          <td className="p-4">
                            <strong>Dr. Susmita Vikhe Patil</strong>
                            <br />
                            CEO, Loknete Dr. Balasaheb Vikhe Patil (Padma Bhushan Awardee) PRES, Loni
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="program-director"
                className="border-none bg-white rounded-[8px] overflow-hidden card-shadow"
              >
                <AccordionTrigger className="flex items-center justify-between px-[30px] py-[20px] hover:no-underline group">
                  <span className="text-[20px] font-semibold font-display text-[#1c1c1c]">
                    Program Director
                  </span>
                  <div className="w-[32px] h-[32px] bg-[#0d5c2e] rounded-full flex items-center justify-center transition-transform duration-200 group-data-[state=open]:rotate-180">
                    <ChevronDown className="h-5 w-5 text-white" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-[#0d5c2e] p-0 overflow-hidden">
                  <div className="p-[30px]">
                    <table className="w-full border-collapse border border-[#1a7a3e]">
                      <tbody className="text-white font-body">
                        <tr>
                          <td className="p-4">
                            <strong>Dr. Sarang Pande</strong>
                            <br />
                            Principal, SVIT, Chincholi, Nashik
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="coordinator"
                className="border-none bg-white rounded-[8px] overflow-hidden card-shadow"
              >
                <AccordionTrigger className="flex items-center justify-between px-[30px] py-[20px] hover:no-underline group">
                  <span className="text-[20px] font-semibold font-display text-[#1c1c1c]">
                    FDP Coordinator
                  </span>
                  <div className="w-[32px] h-[32px] bg-[#0d5c2e] rounded-full flex items-center justify-center transition-transform duration-200 group-data-[state=open]:rotate-180">
                    <ChevronDown className="h-5 w-5 text-white" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-[#0d5c2e] p-0 overflow-hidden">
                  <div className="p-[30px]">
                    <table className="w-full border-collapse border border-[#1a7a3e]">
                      <tbody className="text-white font-body">
                        <tr>
                          <td className="p-4">
                            <strong>Dr. Mahendra V. Guddad</strong>
                            <br />
                            Department of Chemical Engineering
                            <br />
                            Mob: 9881396844
                            <br />
                            Email: <a href="mailto:mahendra.guddad@pravara.in" className="text-[#ffd700] hover:underline">mahendra.guddad@pravara.in</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="co-coordinator"
                className="border-none bg-white rounded-[8px] overflow-hidden card-shadow"
              >
                <AccordionTrigger className="flex items-center justify-between px-[30px] py-[20px] hover:no-underline group">
                  <span className="text-[20px] font-semibold font-display text-[#1c1c1c]">
                    FDP Co-coordinator
                  </span>
                  <div className="w-[32px] h-[32px] bg-[#0d5c2e] rounded-full flex items-center justify-center transition-transform duration-200 group-data-[state=open]:rotate-180">
                    <ChevronDown className="h-5 w-5 text-white" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-[#0d5c2e] p-0 overflow-hidden">
                  <div className="p-[30px]">
                    <table className="w-full border-collapse border border-[#1a7a3e]">
                      <tbody className="text-white font-body">
                        <tr>
                          <td className="p-4">
                            <strong>Ms. Archana Hatkar</strong>
                            <br />
                            Department of Electronics &amp; Computer Engineering
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="organizing-committee"
                className="border-none bg-white rounded-[8px] overflow-hidden card-shadow"
              >
                <AccordionTrigger className="flex items-center justify-between px-[30px] py-[20px] hover:no-underline group">
                  <span className="text-[20px] font-semibold font-display text-[#1c1c1c]">
                    Organizing Committee
                  </span>
                  <div className="w-[32px] h-[32px] bg-[#0d5c2e] rounded-full flex items-center justify-center transition-transform duration-200 group-data-[state=open]:rotate-180">
                    <ChevronDown className="h-5 w-5 text-white" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-[#0d5c2e] p-0 overflow-hidden">
                  <div className="p-[30px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white font-body">
                      {[
                        "Dr. Ganesh Shinde",
                        "Dr. Rana Mahajan",
                        "Mr. Sharad Rokade",
                        "Dr. Pratibha Waje",
                        "Dr. Vishaka Gaidhani",
                        "Mr. K. P. Tambe",
                        "Mr. Rahul Dhokane",
                        "Ms. Shital Aher",
                        "Dr. D.K. Chandre",
                        "Mr. R. D. Patil",
                        "Dr. S. N. Nikam",
                        "Mr. Sushant Kurhe",
                        "Mr. Nilesh Khalse",
                        "Ms. Mohini Waje",
                      ].map((member, index) => (
                        <div key={index} className="flex items-center space-x-2 border-b border-[#1a7a3e] pb-2">
                          <span className="w-2 h-2 bg-[#ffd700] rounded-full"></span>
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
