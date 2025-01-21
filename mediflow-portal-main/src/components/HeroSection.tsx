import { Button } from "@/components/ui/button";
import { Calendar, Heart, Shield } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-primary-light to-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Health, Our Priority
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Access medical records, appointments, and treatment plans at your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Book Appointment
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <FeatureCard
              icon={Calendar}
              title="Easy Scheduling"
              description="Book and manage appointments online"
            />
            <FeatureCard
              icon={Heart}
              title="Health Tracking"
              description="Monitor your health progress"
            />
            <FeatureCard
              icon={Shield}
              title="Secure Platform"
              description="Your data is protected"
            />
            <div className="bg-primary-light rounded-lg p-6 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">24/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <Icon className="w-8 h-8 text-primary mb-4" />
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};