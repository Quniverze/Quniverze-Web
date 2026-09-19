import React from 'react';
import { Calendar, Home, Key, BarChart3, Settings, TrendingUp } from 'lucide-react';

export const NivaOpsDashboardPreview: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[300px] bg-[#FAF9F5] rounded-xl border border-neutral-200/80 shadow-sm overflow-hidden flex flex-row text-xs select-none">
      {/* Dark left sidebar */}
      <div className="w-12 bg-[#1C2028] text-neutral-400 flex flex-col items-center py-4 justify-between shrink-0">
        <div className="flex flex-col items-center gap-4">
          <div className="w-6 h-6 rounded bg-white/10 text-white font-bold text-[10px] flex items-center justify-center">
            N
          </div>
          <div className="w-7 h-[1px] bg-neutral-700/50 my-1" />
          <div className="p-1.5 rounded-md bg-white/10 text-white cursor-pointer"><Home className="w-3.5 h-3.5" /></div>
          <div className="p-1.5 rounded-md hover:text-white cursor-pointer"><Calendar className="w-3.5 h-3.5" /></div>
          <div className="p-1.5 rounded-md hover:text-white cursor-pointer"><Key className="w-3.5 h-3.5" /></div>
          <div className="p-1.5 rounded-md hover:text-white cursor-pointer"><BarChart3 className="w-3.5 h-3.5" /></div>
        </div>
        <div className="p-1.5 rounded-md hover:text-white cursor-pointer">
          <Settings className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Main dashboard content */}
      <div className="flex-1 p-4 flex flex-col justify-between overflow-hidden bg-white/60">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
          <div>
            <div className="font-semibold text-neutral-900 text-sm">Good morning!</div>
            <div className="text-[10px] text-neutral-400">14 units active today</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <div className="w-6 h-6 rounded-full bg-neutral-200 text-[10px] font-medium text-neutral-700 flex items-center justify-center">
              OP
            </div>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-3 gap-2 my-3">
          <div className="bg-white p-2.5 rounded-lg border border-neutral-200/60 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <div className="text-[18px] font-bold text-neutral-900 leading-none">12</div>
            <div className="text-[10px] text-neutral-400 mt-1 font-medium">Bookings</div>
          </div>
          <div className="bg-white p-2.5 rounded-lg border border-neutral-200/60 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <div className="text-[18px] font-bold text-neutral-900 leading-none">28</div>
            <div className="text-[10px] text-neutral-400 mt-1 font-medium">Guests</div>
          </div>
          <div className="bg-white p-2.5 rounded-lg border border-neutral-200/60 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <div className="text-[18px] font-bold text-emerald-600 leading-none">3</div>
            <div className="text-[10px] text-neutral-400 mt-1 font-medium">Pending</div>
          </div>
        </div>

        {/* Dynamic Occupancy Curve Graph */}
        <div className="bg-white p-3 rounded-lg border border-neutral-200/60 flex-1 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] mb-1">
            <span className="font-medium text-neutral-700 flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-emerald-600" /> Occupancy Trend
            </span>
            <span className="text-emerald-600 font-semibold text-[10px]">+18.4% this wk</span>
          </div>

          <div className="relative w-full h-16 mt-1">
            <svg viewBox="0 0 240 60" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="nivaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 0 45 C 30 45, 45 25, 75 30 C 105 35, 125 15, 155 20 C 185 25, 205 8, 240 12 L 240 60 L 0 60 Z"
                fill="url(#nivaGradient)"
              />
              <path
                d="M 0 45 C 30 45, 45 25, 75 30 C 105 35, 125 15, 155 20 C 185 25, 205 8, 240 12"
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="155" cy="20" r="3" fill="#10b981" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="240" cy="12" r="3" fill="#10b981" stroke="#FFFFFF" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="flex justify-between text-[9px] text-neutral-400 pt-1 border-t border-neutral-100">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CrmDashboardPreview: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[300px] bg-[#FAF9F5] rounded-xl border border-neutral-200/80 shadow-sm overflow-hidden flex flex-row text-xs select-none">
      {/* Mini Sidebar */}
      <div className="w-10 bg-neutral-100 border-r border-neutral-200/70 flex flex-col items-center py-3 gap-3 shrink-0">
        <div className="w-5 h-5 rounded-full border border-neutral-800 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
        </div>
        <div className="w-5 h-[1px] bg-neutral-300/60 my-1" />
        <div className="w-2.5 h-2.5 rounded-sm bg-neutral-800" />
        <div className="w-2.5 h-2.5 rounded-sm bg-neutral-400" />
        <div className="w-2.5 h-2.5 rounded-sm bg-neutral-400" />
      </div>

      {/* Main Kanban Content */}
      <div className="flex-1 p-3.5 flex flex-col justify-between overflow-hidden bg-white/70">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-200/60">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-neutral-900 text-xs">Pipeline: Q3 Revenue</span>
            <span className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 text-[9px] font-medium border border-blue-200/60">Active</span>
          </div>
          <div className="text-[10px] text-neutral-500 font-medium">$218,500 Total</div>
        </div>

        {/* Kanban Columns */}
        <div className="grid grid-cols-2 gap-2 flex-1">
          {/* Column 1: Qualified */}
          <div className="bg-neutral-100/70 p-2 rounded-lg border border-neutral-200/50 flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-[10px] font-semibold text-neutral-600 px-0.5">
              <span>Discovery</span>
              <span className="text-[9px] bg-neutral-200/80 px-1 rounded text-neutral-600">2</span>
            </div>
            
            {/* Card 1 */}
            <div className="bg-white p-2 rounded border border-neutral-200/70 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <div className="font-semibold text-neutral-800 text-[11px] truncate">Frontier Dynamics</div>
              <div className="flex justify-between items-center mt-1.5 text-[9px] text-neutral-500">
                <span className="font-semibold text-neutral-900">$34,000</span>
                <span className="px-1 rounded bg-amber-50 text-amber-700 text-[8px]">In Review</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-2 rounded border border-neutral-200/70 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <div className="font-semibold text-neutral-800 text-[11px] truncate">Helios Systems</div>
              <div className="flex justify-between items-center mt-1.5 text-[9px] text-neutral-500">
                <span className="font-semibold text-neutral-900">$52,000</span>
                <span className="px-1 rounded bg-blue-50 text-blue-700 text-[8px]">Meeting</span>
              </div>
            </div>
          </div>

          {/* Column 2: Proposal / Closing */}
          <div className="bg-neutral-100/70 p-2 rounded-lg border border-neutral-200/50 flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-[10px] font-semibold text-neutral-600 px-0.5">
              <span>Proposal</span>
              <span className="text-[9px] bg-neutral-200/80 px-1 rounded text-neutral-600">2</span>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-2 rounded border border-neutral-200/70 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <div className="font-semibold text-neutral-800 text-[11px] truncate">Apex Logistics</div>
              <div className="flex justify-between items-center mt-1.5 text-[9px] text-neutral-500">
                <span className="font-semibold text-emerald-700">$78,000</span>
                <span className="px-1 rounded bg-emerald-50 text-emerald-700 text-[8px]">Signed</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-2 rounded border border-neutral-200/70 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <div className="font-semibold text-neutral-800 text-[11px] truncate">Verve Mobility</div>
              <div className="flex justify-between items-center mt-1.5 text-[9px] text-neutral-500">
                <span className="font-semibold text-neutral-900">$54,500</span>
                <span className="px-1 rounded bg-purple-50 text-purple-700 text-[8px]">Final Deck</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer status */}
        <div className="pt-2 mt-1 border-t border-neutral-100 flex items-center justify-between text-[9px] text-neutral-400">
          <span>Synced with Product Sprint 14</span>
          <span className="text-neutral-500 font-medium">98.2% on schedule</span>
        </div>
      </div>
    </div>
  );
};
