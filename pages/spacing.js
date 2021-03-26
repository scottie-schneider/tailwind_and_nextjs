import resizeHeight from "../hooks/resizeHeight";

export default function Spacing() {
  resizeHeight();
  return (
    <div className="py-20 bg-gray-200 h-screen">
      <div className="container mx-auto ">
        <div className="relative bg-white p-10 rounded-lg shadow-lg">
          {/* Absolutely positioned label */}
          <div className="absolute top-0 right-0 bg-red-500 text-red-100 text-xs rounded py-2 px-4 transform translate-x-2 -translate-y-2">
            Brand new
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            perferendis exercitationem at dolorem architecto! Voluptas tenetur,
            voluptatibus neque architecto doloribus a necessitatibus et ut
            iusto. Quibusdam ut voluptate quam ea.
          </p>
        </div>
      </div>
    </div>
  );
}
