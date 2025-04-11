import { useState } from "react";
import { motion } from "framer-motion";
import { MegaphoneIcon, XIcon, MicIcon, StarIcon, ClockIcon } from "lucide-react";

const Home = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FEACC6] to-[#F8FAFC] text-gray-900">
      {/* Announcement Banner */}
      {isBannerVisible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className="w-full bg-white p-3 shadow-md text-center"
        >
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            <div className="flex items-center space-x-2">
              <MegaphoneIcon className="w-6 h-6 text-black" />
              <p className="text-lg font-semibold">
                🎉 Welcome to <span className="font-bold">InterviewMate.pro</span> – Your AI-Powered Interview Coach!
              </p>
            </div>
            <button onClick={() => setIsBannerVisible(false)}>
              <XIcon className="w-5 h-5 text-black hover:text-gray-700" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4"
        >
          🚀 Ace Your Next Interview with <span className="text-pink-600">AI-Powered Practice</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-700 max-w-xl"
        >
          Get real-time AI-driven feedback on your interview answers and improve your skills with
          interactive mock interviews.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-lg cursor-not-allowed"
          disabled
        >
          Coming Soon ⏳
        </motion.button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white shadow-md rounded-xl mx-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">🔥 Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-100 rounded-lg shadow-sm">
            <MicIcon className="w-10 h-10 mx-auto text-blue-600" />
            <h3 className="text-xl font-semibold mt-3">Voice-Based Interviews</h3>
            <p className="text-gray-600 mt-2">Speak your answers & get AI-powered feedback.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-100 rounded-lg shadow-sm">
            <StarIcon className="w-10 h-10 mx-auto text-yellow-500" />
            <h3 className="text-xl font-semibold mt-3">Performance Scoring</h3>
            <p className="text-gray-600 mt-2">Get AI-powered insights & score breakdown.</p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="text-center py-10">
        <h2 className="text-2xl font-semibold">⏳ We're Working on It!</h2>
        <p className="text-gray-600 mt-2">Stay tuned for updates and be the first to try InterviewMate.pro.</p>
        <ClockIcon className="w-12 h-12 mx-auto text-gray-400 mt-4" />
      </section>
    </div>
  );
};

export default Home;
