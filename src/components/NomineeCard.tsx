import { motion } from 'framer-motion';

interface NomineeProps {
  nominee: {
    id: number;
    name: string;
    image: string;
    description: string;
    achievements: string[];
  };
  onVoteClick: () => void;
}

const NomineeCard = ({ nominee, onVoteClick }: NomineeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative h-[400px] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
    >
      <div className="absolute inset-0">
        <img
          src={nominee.image}
          alt={nominee.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-2xl font-bold text-white mb-2">{nominee.name}</h3>
        <p className="text-white/90 text-sm mb-4">{nominee.description}</p>
        <button
          onClick={onVoteClick}
          className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2.5 rounded-full
            font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1
            transition-all duration-300 w-full sm:w-auto"
        >
          Vote Now
        </button>
      </div>

      <div className="absolute inset-0 bg-black/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="h-full p-6 flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-2">{nominee.name}</h3>
          <p className="text-white/90 text-sm mb-6">{nominee.description}</p>
          
          <div className="flex-grow">
            <h4 className="text-white font-semibold mb-3">Achievements:</h4>
            <ul className="space-y-2">
              {nominee.achievements.map((achievement, index) => (
                <li key={index} className="text-white/90 text-sm flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={onVoteClick}
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2.5 rounded-full
              font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1
              transition-all duration-300 w-full sm:w-auto mt-auto"
          >
            Vote Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default NomineeCard;