import { Zap, Shield, BarChart3 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    { icon: <Zap size={36} />, title: "Fast Automation", desc: "Automate routine tasks with AI and save hours daily." },
    { icon: <Shield size={36} />, title: "Secure & Reliable", desc: "Data protection and privacy guaranteed at every step." },
    { icon: <BarChart3 size={36} />, title: "Analytics & Insights", desc: "Get actionable insights in real-time to boost growth." },
  ];

  return (
    <section className="py-24 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-16">Our Key Features</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {features.map((f, i) => (
          <div
            key={i}
            className="w-80 h-96 p-8 rounded-3xl bg-white shadow-2xl flex flex-col items-center justify-center transform transition-transform duration-500 hover:-translate-y-4 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white"
          >
            <div className="mb-6">{f.icon}</div>
            <h3 className="text-2xl font-semibold mb-4">{f.title}</h3>
            <p className="text-gray-700 hover:text-white">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
