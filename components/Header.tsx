const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 sticky w-full">
      <div className="flex justify-between">
        <div>
          <h1>Image Frame</h1>
        </div>
        <div className="flex justify-between gap-3"></div>
      </div>
    </header>
  );
};
export default Header;
