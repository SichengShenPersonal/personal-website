function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          👋 Hi, I'm <span className="text-blue-600">Qinlan</span>
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed mb-8">
          I'm a Data Analyst at Speedx. I build data dashboards, automate reports, clean big datasets,
          and design tools to make operations smarter.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-base font-medium transition"
          >
            📊 View My Projects
          </a>
          <a
            href="#"
            className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl text-base font-medium transition"
          >
            💡 Read My Blog
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
