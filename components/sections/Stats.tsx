export function Stats() {
  const stats = [
    {
      number: "2.5M+",
      label: "Roofs Analyzed",
      description: "Comprehensive analysis across major metropolitan areas"
    },
    {
      number: "15,000+",
      label: "Average Roof Size",
      description: "Square feet of commercial roofs identified"
    },
    {
      number: "95%",
      label: "Accuracy Rate",
      description: "Precise identification of roof materials and conditions"
    },
    {
      number: "500+",
      label: "Active Users",
      description: "Roofing professionals using our platform daily"
    }
  ];

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of roofing professionals who rely on our platform for accurate roof analysis and lead generation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-blue-100 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-blue-200">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}