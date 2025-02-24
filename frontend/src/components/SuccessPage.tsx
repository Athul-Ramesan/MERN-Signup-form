import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useEffect, useState } from 'react';

export const SuccessPage: React.FC = () => {
  const { userId } = useSelector((state: RootState) => state.form);
  const [viewLink, setViewLink] = useState('')
  useEffect(()=>{
      const viewLink = userId ? `${window.location.origin}/view/${userId}` : ""
      setViewLink(viewLink)
  },[])
      console.log("🚀 ~ useEffect ~ viewLink:", viewLink)
  console.log("🚀 ~ viewLink:", viewLink)

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-center">
          <div className="text-green-500 text-5xl mb-4">✓</div>
          <h2 className="text-2xl font-semibold mb-4">Registration Successful!</h2>
          <p className="text-gray-600 mb-6">
            Your information has been saved successfully.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-600 mb-2">View your saved information at:</p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={viewLink}
                readOnly
                className="w-full p-2 border text-black rounded bg-white"
              />
              <button
                onClick={() => navigator.clipboard.writeText(viewLink)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Copy
              </button>
            </div>
          </div>

          <div className="space-x-4">
            <a
              href={viewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              View Saved Data
            </a>
            <button
              onClick={() => window.location.href = '/'}
              className="text-gray-500 hover:text-gray-700"
            >
              Submit Another Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};