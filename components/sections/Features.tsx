import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Satellite, Search, BarChart3, Users, Shield, Clock } from 'lucide-react';

const features = [
  {
    icon: Satellite,
    title: "Advanced GIS Mapping",
    description: "Utilize satellite imagery and machine learning to identify and measure roof areas with precision."
  },
  {
    icon: Search,
    title: "Shingle Type Detection",
    description: "AI-powered analysis to identify different roofing materials and their conditions."
  },
  {
    icon: BarChart3,
    title: "Comprehensive Analytics",
    description: "Detailed reports on roof size, material type, condition, and replacement timeline."
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "Connect with property owners and generate qualified leads for your roofing business."
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Enterprise-grade security to protect your business data and customer information."
  },
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "Stay updated with the latest roof condition changes and market opportunities."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Find Big Roofs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge GIS technology with practical business tools
            to help you identify and analyze the largest roofs in any area.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}