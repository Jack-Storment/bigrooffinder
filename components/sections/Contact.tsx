"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { submitContactForm } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitContactForm(formData); 
      await emailjs.send(
        'service_aamm0lj',
        'template_a52k5pj',
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        },
        'jB8RtYGb36FkQu3se'
      );
      toast({ title: 'Message sent!', description: 'We will get back to you soon.' });
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error: any) {
      toast({ title: 'Error', description: error.message || 'Failed to send message.', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Find Big Roofs?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started today and discover how Big Roof Finder can transform your roofing business.
            Contact us for a personalized demo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Get in Touch</CardTitle>
                <CardDescription>
                  We're here to help you find the biggest roofs and grow your business.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                  <Textarea
                    name="message"
                    placeholder="Tell us about your roofing business and how we can help"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                  <p className="text-gray-600">reagan@bigrooffinder.com</p>
                  <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                  <p className="text-gray-600">(919) 525-4567</p>
                  <p className="text-sm text-gray-500 mt-1">Monday - Friday, 9 AM - 6 PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
                  <p className="text-gray-600">Wilmington, NC 28401</p>
                  <p className="text-sm text-gray-500 mt-1">By appointment only</p>
                </div>
              </div>
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Schedule a Demo
                </h3>
                <p className="text-gray-600 mb-4">
                  See Big Roof Finder in action with a personalized demo tailored to your business needs.
                </p>
                <a
                  href="https://calendly.com/reagan-bigrooffinder/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block"
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Book Demo Call
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}