export default function StatCard({ label, value, status }) {
  return (
    <div className="bg-white border border-gray-200 rounded-md px-4 py-3">
      <div className="text-[11px] uppercase tracking-wide text-gray-500">
        {label}
      </div>
      <div className="mt-1 text-lg font-semibold text-gray-900">
        {value}
      </div>
      {status && (
        <div className="mt-1 text-xs font-medium text-green-700">
          {status}
        </div>
      )}
    </div>
  );
}
