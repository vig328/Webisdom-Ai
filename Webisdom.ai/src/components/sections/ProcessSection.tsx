import { Zap, BarChart3, Shield } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    { icon: <Zap size={36} />, title: "Step 1", desc: "Discover your business needs." },
    { icon: <BarChart3 size={36} />, title: "Step 2", desc: "Analyze with AI insights." },
    { icon: <Shield size={36} />, title: "Step 3", desc: "Implement and optimize solutions." },
  ];

  return (
    <section className="py-24 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-16">How It Works</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {steps.map((step, i) => (
          <div
            key={i}
            className="w-80 h-96 p-8 rounded-3xl bg-white shadow-2xl flex flex-col items-center justify-center transform transition-transform duration-500 hover:-translate-y-4 hover:scale-105 hover:bg-gradient-to-r hover:from-green-400 hover:to-teal-500 hover:text-white"
          >
            <div className="mb-6">{step.icon}</div>
            <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
            <p className="text-gray-700 hover:text-white">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
