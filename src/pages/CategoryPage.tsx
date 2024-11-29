import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NomineeCard from '../components/NomineeCard';
import VoteModal from '../components/VoteModal';


const CategoryPage = () => {
  const { id } = useParams();
  const [selectedNominee, setSelectedNominee] = useState(null);
  // const categoryNominees = nominees[id as keyof typeof nominees] || [];
  const [categoryNominees, setCategoryNominees] = useState([]);
  
  useEffect(() => {
    // Fetch nominees for the specific category from Firestore
    const fetchNominees = async () => {
      try {
        const categoryRef = doc(db, 'categories', id); // Get the category document by ID
        const categorySnapshot = await getDoc(categoryRef);
        
        if (categorySnapshot.exists()) {
          const nomineesData = categorySnapshot.data().nominees;
          setCategoryNominees(nomineesData);
        } else {
          console.log("Category not found");
        }
      } catch (error) {
        console.error("Error fetching nominees: ", error);
      }
    };

    fetchNominees();
  }, [id]);

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Vote for Your Favorite Nominee
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryNominees.map((nominee) => (
            <NomineeCard
              key={nominee.id}
              nominee={nominee}
              onVoteClick={() => setSelectedNominee(nominee)}
            />
          ))}
        </div>
      </div>
      {selectedNominee && (
        <VoteModal
          nominee={selectedNominee}
          onClose={() => setSelectedNominee(null)}
        />
      )}
    </div>
  );
};

export default CategoryPage;