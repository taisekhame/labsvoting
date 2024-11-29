import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface CategoryProps {
  category: {
    id: number;
    category_name: string;

    image: string;
    description: string;
  };
}

const CategoryCard = ({ category }: CategoryProps) => {
  const navigate = useNavigate();
  console.log(category)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={category.image}
        alt={category.category_name}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
        <div className="absolute bottom-0 p-8 text-white">
          <h3 className="text-3xl font-bold mb-3">{category.category_name}</h3>
          <p className="text-lg mb-6 opacity-90">{category.description}</p>
          <button
            onClick={() => navigate(`/category/${category.id}`)}
            className="bg-gradient-to-r from-blue-600 to-blue-400 px-8 py-3 rounded-full
              text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1
              transition-all duration-300"
          >
            Vote Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryCard;