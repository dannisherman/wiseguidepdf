import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PDFLibrary: React.FC = () => {
  const pdfs = [
    {
      title: "How to Use Email Safely",
      description: "Complete guide to secure email usage with screenshots and step-by-step instructions",
      pages: "5 pages",
      type: "free",
      icon: "📧",
      url: "/pdfs/how-to-use-email-safely.pdf"
    },
    {
      title: "Avoiding Common Online Scams",
      description: "Learn to identify and protect yourself from online scams with real case examples",
      pages: "4 pages",
      type: "free",
      icon: "🛡️",
      url: "/pdfs/avoiding-online-scams.pdf"
    },
    {
      title: "Smartphone Basics for Beginners",
      description: "Master your smartphone with annotated images and easy-to-follow instructions",
      pages: "6 pages",
      type: "free",
      icon: "📱",
      url: "/pdfs/smartphone-basics.pdf"
    }
  ];

  const handleDownload = (url: string) => {
    const confirm = window.confirm("Would you like to download this PDF?");
    if (confirm) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Free PDF Library
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Download our comprehensive guides designed specifically for seniors.
            All PDFs are completely free and easy to follow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pdfs.map((pdf, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">{pdf.icon}</div>
                <CardTitle className="text-xl text-slate-800">{pdf.title}</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {pdf.type.toUpperCase()}
                  </Badge>
                  <span className="text-sm text-slate-500">{pdf.pages}</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 mb-4 leading-relaxed">
                  {pdf.description}
                </CardDescription>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => handleDownload(pdf.url)}
                >
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PDFLibrary;
