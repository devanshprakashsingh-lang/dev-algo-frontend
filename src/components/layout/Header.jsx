export default function Header() {
  return (
    <header className="bg-white border-b px-8 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-semibold text-gray-800">Dev Algo</h1>
        <p className="text-xs text-gray-500">Dashboard · Read-only</p>
      </div>

      <div className="text-sm">
        Status: <span className="font-semibold text-green-600">RUNNING</span>
      </div>
    </header>
  );
}
