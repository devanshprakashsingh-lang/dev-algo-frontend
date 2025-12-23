export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8">
      <div className="flex items-center justify-between w-full">
        {/* Left */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Dashboard
          </h2>
          <p className="text-xs text-gray-500">
            Read-only system view
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500">Status</span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
            RUNNING
          </span>
        </div>
      </div>
    </header>
  );
}
