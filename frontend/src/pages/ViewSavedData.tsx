import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../store/actions/getUser';
import { FormData } from '../types/form.types';

export const ViewSavedData: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [data, setData] = useState<FormData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!userId) throw new Error('No user ID provided');
        const userData = await getUser(userId);
        setData(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="max-w-md mx-auto p-6 text-center">
        <div className="bg-red-50 text-red-500 p-4 rounded-lg">
          {error || 'Failed to load data'}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="border-b p-6">
          <h1 className="text-2xl font-semibold">Saved Form Data</h1>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">Contact Information</h2>
              <div className="space-y-2">
                <p><span className="font-medium">Email:</span> {data.email}</p>
                <p><span className="font-medium">Phone:</span> {data.mobileNumber}</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold">Personal Information</h2>
              <div className="space-y-2">
                <p><span className="font-medium">Name:</span> {data.title} {data.fullName}</p>
                <p><span className="font-medium">Date of Birth:</span> {data.dateOfBirth}</p>
                <p><span className="font-medium">Address:</span> {data.currentAddress}</p>
                <p><span className="font-medium">Duration at Address:</span> {data.addressDuration}</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold">Financial Information</h2>
              <div className="space-y-2">
                <p><span className="font-medium">Employment Status:</span> {data.employmentStatus}</p>
                <p><span className="font-medium">Additional Savings:</span> {data.additionalSavings}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};