import React from 'react';
import RecommendationCard from './RecommendationCard';
import { Recommendation } from '../../types';

interface RegionalRecommendationsProps {
  regionId: string;
  recommendations: Recommendation[];
}

const RegionalRecommendations: React.FC<RegionalRecommendationsProps> = ({
  regionId,
  recommendations
}) => {
  const filteredRecommendations = recommendations.filter(
    (rec) => rec.regionId === regionId
  );

  // Group recommendations by type
  const groupedRecommendations = filteredRecommendations.reduce(
    (groups, recommendation) => {
      const { type } = recommendation;
      if (!groups[type]) {
        groups[type] = [];
      }
      groups[type].push(recommendation);
      return groups;
    },
    {} as Record<string, Recommendation[]>
  );

  // Order of recommendation types
  const typeOrder = ['restaurant', 'sightseeing', 'taxi'];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-heading font-semibold">Local Recommendations</h2>

      <div className="grid grid-cols-3 gap-6">
        {typeOrder.map((type) => {
          const recommendations = groupedRecommendations[type] || [];
          if (recommendations.length === 0) return null;

          return (
            <div key={type} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <h3 className="text-lg font-semibold capitalize p-4 bg-primary-100">
                {type === 'restaurant' ? 'Where to Eat' :
                 type === 'sightseeing' ? 'What to See' :
                 type === 'taxi' ? 'Getting Around' : type}
              </h3>
              <div className="p-4">
                {recommendations.map((recommendation, index) => (
                  <RecommendationCard
                    key={recommendation.id}
                    recommendation={recommendation}
                    index={index}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {filteredRecommendations.length === 0 && (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-600">No recommendations available for this region yet.</p>
        </div>
      )}
    </div>
  );
};

export default RegionalRecommendations;