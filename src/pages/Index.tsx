
import React from 'react';
import { AppProvider } from '@/contexts/AppContext';
import { AppLayout } from "@/components/AppLayout";

const Index = () => {
  return (
    <AppProvider>
      <AppLayout>
  <div className="text-center">
    <h1 className="text-2xl font-bold">Welcome to Wise Guide PDF</h1>
    <p className="mt-2 text-slate-600">Helping seniors navigate tech, one guide at a time.</p>
  </div>
</AppLayout>
    </AppProvider>
  );
};

export default Index;


