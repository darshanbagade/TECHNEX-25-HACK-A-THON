import { Stethoscope, MessageCircle, FileText } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Comprehensive Healthcare Management
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to manage your healthcare journey
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Stethoscope}
            title="Expert Care"
            description="Connect with qualified healthcare professionals for personalized care and treatment plans."
          />
          <FeatureCard
            icon={MessageCircle}
            title="Secure Messaging"
            description="Communicate directly with your healthcare providers through our secure messaging system."
          />
          <FeatureCard
            icon={FileText}
            title="Digital Records"
            description="Access your complete medical history, test results, and prescriptions anytime, anywhere."
          />
        </div>
      </div>
    </section>
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
    <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-up">
      <div className="bg-primary-light rounded-full w-12 h-12 flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};