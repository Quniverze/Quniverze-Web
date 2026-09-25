import React from 'react';
import { QuniverzeWordmark } from './BrandLogos';

export const QuniverzeOverviewDashboard: React.FC = () => {
  return (
    <div className="w-full bg-[#12151C] text-[#F4F6F9] rounded-xl border border-[#12151C] shadow-2xl overflow-hidden font-sans text-xs select-none">
      {/* Top Window Bar */}
      <div className="bg-[#12151C] px-4 py-2.5 border-b border-[#232834] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#232834]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#232834]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#232834]" />
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-[#A0AEC0] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
          <span>system.quniverze.internal</span>
        </div>
        <div className="w-12" />
      </div>

      <div className="flex flex-row bg-[#F4F6F9] text-[#12151C] min-h-[340px]">
        {/* Sidebar */}
        <div className="w-40 bg-[#FFFFFF] border-r border-[#E5E7EB] p-3 flex flex-col justify-between hidden sm:flex shrink-0">
          <div className="space-y-4">
            <div className="px-2 pt-1">
              <QuniverzeWordmark className="text-sm" />
            </div>

            <nav className="space-y-0.5 text-[11px]">
              <div className="px-2.5 py-1.5 rounded-md bg-[#12151C] text-[#F4F6F9] font-medium flex items-center justify-between">
                <span>Overview</span>
                <span className="w-1 h-3 rounded-full bg-[#3B82F6]" />
              </div>
              <div className="px-2.5 py-1.5 rounded-md text-[#4A5568] hover:bg-[#F4F6F9]">Projects</div>
              <div className="px-2.5 py-1.5 rounded-md text-[#4A5568] hover:bg-[#F4F6F9]">Clients</div>
              <div className="px-2.5 py-1.5 rounded-md text-[#4A5568] hover:bg-[#F4F6F9]">Tasks</div>
              <div className="px-2.5 py-1.5 rounded-md text-[#4A5568] hover:bg-[#F4F6F9]">Invoices</div>
              <div className="px-2.5 py-1.5 rounded-md text-[#4A5568] hover:bg-[#F4F6F9]">Reports</div>
            </nav>
          </div>

          <div className="px-2.5 py-2 border-t border-[#E5E7EB] text-[10px] text-[#718096] font-mono">
            BUILD v4.0.8
          </div>
        </div>

        {/* Dashboard Main Canvas */}
        <div className="flex-1 p-5 flex flex-col justify-between overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
            <div>
              <h4 className="font-bold text-[#12151C] text-sm tracking-tight">Overview</h4>
              <p className="text-[10px] text-[#718096]">Real-time operational systems</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E5E7EB] text-[#12151C]">Live Node</span>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-3 gap-2.5 my-3">
            <div className="bg-[#FFFFFF] p-3 rounded-lg border border-[#E5E7EB]">
              <div className="text-[10px] text-[#718096] uppercase font-mono tracking-wider">Total Projects</div>
              <div className="text-xl font-bold text-[#12151C] mt-1 leading-none">12</div>
              <div className="text-[9px] text-[#3B82F6] font-semibold mt-1.5">+33% active</div>
            </div>

            <div className="bg-[#FFFFFF] p-3 rounded-lg border border-[#E5E7EB]">
              <div className="text-[10px] text-[#718096] uppercase font-mono tracking-wider">Active Clients</div>
              <div className="text-xl font-bold text-[#12151C] mt-1 leading-none">8</div>
              <div className="text-[9px] text-[#3B82F6] font-semibold mt-1.5">+14% retained</div>
            </div>

            <div className="bg-[#FFFFFF] p-3 rounded-lg border border-[#E5E7EB]">
              <div className="text-[10px] text-[#718096] uppercase font-mono tracking-wider">Monthly Revenue</div>
              <div className="text-xl font-bold text-[#12151C] mt-1 leading-none">₹ 2,48,000</div>
              <div className="text-[9px] text-[#3B82F6] font-semibold mt-1.5">+19% MoM</div>
            </div>
          </div>

          {/* Recent Activity Table */}
          <div className="bg-[#FFFFFF] rounded-lg border border-[#E5E7EB] p-3 flex-1 flex flex-col justify-between">
            <div className="flex justify-between items-center text-[10px] font-mono uppercase text-[#718096] pb-2 border-b border-[#E5E7EB]">
              <span>System & Engagement Activity</span>
              <span>Timestamp</span>
            </div>

            <div className="space-y-2 py-1 text-[11px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                  <span className="font-semibold text-[#12151C]">NivaOps</span>
                  <span className="text-[#718096]">Core reservation sync deployed</span>
                </div>
                <span className="text-[10px] font-mono text-[#718096]">2h ago</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#12151C]" />
                  <span className="font-semibold text-[#12151C]">Boven Frontier</span>
                  <span className="text-[#718096]">Wholesale catalog build review</span>
                </div>
                <span className="text-[10px] font-mono text-[#718096]">5h ago</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#12151C]" />
                  <span className="font-semibold text-[#12151C]">IGCC</span>
                  <span className="text-[#718096]">Card generation pipeline verification</span>
                </div>
                <span className="text-[10px] font-mono text-[#718096]">1d ago</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                  <span className="font-semibold text-[#12151C]">StayB</span>
                  <span className="text-[#718096]">NivaOps live guest integration active</span>
                </div>
                <span className="text-[10px] font-mono text-[#718096]">2d ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NivaOpsInterfacePreview: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] shadow-sm overflow-hidden text-xs select-none">
      {/* App Bar */}
      <div className="bg-[#12151C] text-[#F4F6F9] px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#3B82F6] flex items-center justify-center text-[9px] font-bold text-white">N</div>
          <span className="font-semibold text-xs tracking-tight">NivaOps</span>
          <span className="text-[9px] text-[#A0AEC0] font-mono">/ Properties</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-[#A0AEC0]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
          <span>Active PMS Node</span>
        </div>
      </div>

      <div className="p-4 bg-[#F4F6F9]">
        {/* Status Bar */}
        <div className="grid grid-cols-3 gap-2.5 mb-3">
          <div className="bg-[#FFFFFF] p-2.5 rounded-lg border border-[#E5E7EB]">
            <div className="text-[9px] text-[#718096] font-mono uppercase">Occupancy</div>
            <div className="text-base font-bold text-[#12151C] mt-0.5">88.4%</div>
          </div>
          <div className="bg-[#FFFFFF] p-2.5 rounded-lg border border-[#E5E7EB]">
            <div className="text-[9px] text-[#718096] font-mono uppercase">Active Units</div>
            <div className="text-base font-bold text-[#12151C] mt-0.5">14 Managed</div>
          </div>
          <div className="bg-[#FFFFFF] p-2.5 rounded-lg border border-[#E5E7EB]">
            <div className="text-[9px] text-[#718096] font-mono uppercase">Turnovers Today</div>
            <div className="text-base font-bold text-[#3B82F6] mt-0.5">3 Scheduled</div>
          </div>
        </div>

        {/* Units Live Status Table */}
        <div className="bg-[#FFFFFF] rounded-lg border border-[#E5E7EB] overflow-hidden">
          <div className="px-3 py-2 border-b border-[#E5E7EB] flex justify-between items-center text-[10px] font-mono text-[#718096]">
            <span>Unit / Property</span>
            <span>Guest Workflow</span>
            <span>Status</span>
          </div>
          <div className="divide-y divide-[#E5E7EB] text-[11px]">
            <div className="px-3 py-2 flex items-center justify-between">
              <div>
                <span className="font-semibold text-[#12151C]">StayB Suite 01</span>
                <span className="text-[10px] text-[#718096] block">2 Nights · 2 Guests</span>
              </div>
              <span className="text-[10px] font-mono text-[#718096]">Keycode Sent</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#12151C] text-[#F4F6F9]">Checked In</span>
            </div>

            <div className="px-3 py-2 flex items-center justify-between">
              <div>
                <span className="font-semibold text-[#12151C]">StayB Villa West</span>
                <span className="text-[10px] text-[#718096] block">4 Nights · 4 Guests</span>
              </div>
              <span className="text-[10px] font-mono text-[#718096]">Digital ID Verified</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-medium border border-[#3B82F6] text-[#3B82F6]">Arriving Today</span>
            </div>

            <div className="px-3 py-2 flex items-center justify-between">
              <div>
                <span className="font-semibold text-[#12151C]">Harbor View Loft</span>
                <span className="text-[10px] text-[#718096] block">Turnover inspection</span>
              </div>
              <span className="text-[10px] font-mono text-[#718096]">Housekeeping Assigned</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#E5E7EB] text-[#12151C]">Ready at 14:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CrmInterfacePreview: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] shadow-sm overflow-hidden text-xs select-none">
      {/* App Bar */}
      <div className="bg-[#12151C] text-[#F4F6F9] px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border border-white/80 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
          </div>
          <span className="font-semibold text-xs tracking-tight">Quniverze CRM</span>
          <span className="text-[9px] text-[#A0AEC0] font-mono">/ Pipeline</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-[#A0AEC0]">
          <span>Lead Operations</span>
        </div>
      </div>

      <div className="p-4 bg-[#F4F6F9]">
        <div className="grid grid-cols-2 gap-3">
          {/* Column 1 */}
          <div className="bg-[#FFFFFF] p-2.5 rounded-lg border border-[#E5E7EB]">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E7EB]">
              <span className="font-semibold text-[11px] text-[#12151C]">Discovery</span>
              <span className="text-[10px] font-mono bg-[#E5E7EB] px-1.5 rounded text-[#12151C]">2</span>
            </div>
            <div className="space-y-2">
              <div className="p-2 rounded border border-[#E5E7EB] bg-[#F4F6F9]">
                <div className="font-semibold text-[11px] text-[#12151C]">Global Trade Logistics</div>
                <div className="text-[10px] text-[#718096] mt-0.5">Platform architecture review</div>
                <div className="text-[9px] font-mono text-[#3B82F6] mt-1">High Intent</div>
              </div>
              <div className="p-2 rounded border border-[#E5E7EB] bg-[#F4F6F9]">
                <div className="font-semibold text-[11px] text-[#12151C]">Apex Consumer Goods</div>
                <div className="text-[10px] text-[#718096] mt-0.5">System scope defined</div>
                <div className="text-[9px] font-mono text-[#718096] mt-1">Follow-up scheduled</div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="bg-[#FFFFFF] p-2.5 rounded-lg border border-[#E5E7EB]">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E7EB]">
              <span className="font-semibold text-[11px] text-[#12151C]">Proposal & Scoping</span>
              <span className="text-[10px] font-mono bg-[#E5E7EB] px-1.5 rounded text-[#12151C]">2</span>
            </div>
            <div className="space-y-2">
              <div className="p-2 rounded border border-[#E5E7EB] bg-[#F4F6F9]">
                <div className="font-semibold text-[11px] text-[#12151C]">Frontier Distribution</div>
                <div className="text-[10px] text-[#718096] mt-0.5">Technical specification v1.2</div>
                <div className="text-[9px] font-mono text-[#12151C] mt-1">Reviewing Architecture</div>
              </div>
              <div className="p-2 rounded border border-[#E5E7EB] bg-[#F4F6F9]">
                <div className="font-semibold text-[11px] text-[#12151C]">Nordic Stay Co.</div>
                <div className="text-[10px] text-[#718096] mt-0.5">NivaOps custom pilot scope</div>
                <div className="text-[9px] font-mono text-[#3B82F6] mt-1">Contract Scoping</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
