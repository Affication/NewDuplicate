import React from "react";
import { AlertTriangle, Clock, TrendingDown, Zap } from "lucide-react";

export const ProblemSection = (): JSX.Element => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Slow replies lose customers. Act fast or lose them.
            </h2>
            <p className="text-lg text-gray-600">
              Manual review replies take too long and sound different every time. 
              Customers notice when businesses don't respond quickly or professionally.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Review Management</h3>
                  <span className="text-red-500 text-sm bg-red-50 px-2 py-1 rounded-full">
                    Behind Schedule
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-700">New review from Sarah M.</span>
                    </div>
                    <span className="text-xs text-red-600">3 days ago</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-700">New review from Mike T.</span>
                    </div>
                    <span className="text-xs text-red-600">5 days ago</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-700">New review from Lisa K.</span>
                    </div>
                    <span className="text-xs text-red-600">1 week ago</span>
                  </div>
                </div>

                <div className="text-center py-4">
                  <div className="text-2xl mb-2">😰</div>
                  <p className="text-sm text-gray-600">
                    "I don't have time to reply to all these reviews..."
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce">
              15 Unread Reviews
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};