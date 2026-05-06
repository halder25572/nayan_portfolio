"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { experiences } from "@/data/experience";

const NAVBAR_HEIGHT = 80; // px
const CARD_HEADER_HEIGHT = 84; // px - visible header when stacked

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-gray-100 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-primary text-sm font-bold mb-4">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Educational & Professional Background
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
            A timeline of my career growth, from my academic roots to my current senior developer role.
          </p>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="sticky"
              style={{
                top: `${NAVBAR_HEIGHT + index * CARD_HEADER_HEIGHT}px`,
                zIndex: index + 1,
                // Give each card enough scroll distance to be covered by the next
                marginBottom: index < experiences.length - 1 ? "0px" : "0px",
              }}
            >
              <div
                className="bg-white rounded-[14px] border border-gray-200 shadow-sm overflow-hidden"
                style={{
                  // Scale down slightly based on stack position so they feel layered
                  transformOrigin: "top center",
                }}
              >
                {/* ─── Card Header (always visible when stacked) ─── */}
                <div
                  className="flex items-center justify-between gap-4 px-8 py-5"
                  style={{ minHeight: `${CARD_HEADER_HEIGHT}px` }}
                >
                  <div className="flex items-center gap-4">
                    {/* Company Logo */}
                    <div className="relative w-11 h-11 rounded-xl bg-gray-900 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                        <line x1="12" y1="22" x2="12" y2="15.5" />
                        <polyline points="22 8.5 12 15.5 2 8.5" />
                      </svg>
                      {/* Green dot for current job */}
                      {index === 0 && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-white" />
                      )}
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-gray-900 leading-tight">{exp.title}</h3>
                      <p className="text-sm text-gray-500 font-medium">{exp.company}</p>
                    </div>
                  </div>

                  {/* Date badge */}
                  <span className="shrink-0 text-xs font-semibold text-gray-500 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {/* ─── Card Body (hidden when stacked under next card) ─── */}
                <div className="px-8 pb-8 pt-0">
                  {/* Divider */}
                  <div className="h-px bg-gray-100 mb-5" />

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-5">
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full border border-gray-200 text-gray-500 text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Spacer so the last card has room to fully scroll into view */}
          <div style={{ height: `${(experiences.length - 1) * 200}px` }} />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
