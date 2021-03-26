import resizeHeight from "../hooks/resizeHeight";

export default function Cards() {
  resizeHeight();
  return (
    <div className="min-h-screen bg-green-200">
      <div className="p-20 bg-blue-100">
        <h3 className="text-blue-300 text-sm mb-4 font-bold">
          1. Card w/no image
        </h3>
        <div className="bg-white p-6 rounded shadow-lg hover:shadow-sm">
          <h2 className="font-bold mb-2 text-2xl text-gray-800">
            card with no image
          </h2>
          <p className="text-gray-700">This is my cool new card</p>
        </div>
      </div>
    </div>
  );
}
