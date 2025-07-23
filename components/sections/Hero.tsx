"use client";

import { Button } from '@/components/ui/button';
import { MapPin, Zap, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { subscribeEmail } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export function Hero() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        'service_ttxgrs4',
        'template_a52k5pj',
        { email },
        'jB8RtYGb36FkQu3se'
      );
      toast({ title: 'Success!', description: 'You have been subscribed for early access.' });
      setEmail('');
    } catch (error: any) {
      toast({ title: 'Error', description: error.message || 'Failed to subscribe.', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-300 rounded-full filter blur-xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-300 rounded-full filter blur-xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Find the
                <span className="text-blue-600"> Biggest Roofs</span>
                <br />
                in Your Area
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Advanced GIS technology to identify large commercial roofs and analyze their shingle types. 
                Perfect for contractors, solar installers, and roofing professionals.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">GIS Mapping</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <Zap className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Instant Analysis</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Lead Generation</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for early access"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <Button size="lg" type="submit" className="bg-blue-600 hover:bg-blue-700 px-8">
                Get Started Free
              </Button>
            </form>

            <p className="text-sm text-gray-500">
              Join 500+ roofing professionals already using Big Roof Finder
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Aerial view of commercial buildings with large roofs"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Large Commercial Roof</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">15,000 sq ft</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Shingle Type</span>
                  <span className="text-sm font-medium text-gray-900">Architectural Asphalt</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Condition</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Excellent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}