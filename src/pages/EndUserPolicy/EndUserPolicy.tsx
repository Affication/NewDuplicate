import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "../../components/ui/button";

export const EndUserPolicy = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to SatisPro
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            End User Policy
          </h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              This End User Policy applies to individuals who are granted access to 
              SatisPro's approval portal by their organization. By using the portal, 
              you agree to this Policy.
            </p>

            <p>
              Access to the portal is limited to authorized individuals within a client 
              organization. Access may be revoked at any time by the organization or by 
              SatisPro.
            </p>

            <p>
              You may use the portal solely to review, edit, approve, or reject replies 
              to GBP reviews belonging to your organization. You must not misuse the 
              portal, introduce unlawful or offensive content, or interfere with the 
              operation of the system.
            </p>

            <p>
              Artificial intelligence is used to generate draft replies. These drafts 
              may be inaccurate, incomplete, or unsuitable. You are required to review 
              them carefully before approval. You remain responsible for any reply that 
              is posted as a result of your actions.
            </p>

            <p>
              SatisPro may log your activity within the portal, including approvals, 
              edits, and timestamps, for service and compliance purposes.
            </p>

            <p>
              This Policy is governed by Austrian law. Any disputes shall be subject 
              to the courts of Vienna, Austria.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Date: September 2025
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};