export default function StatCard({ label, value, status }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="p-5">
        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
          {label}
        </div>

        <div className="mt-2 text-2xl font-semibold text-gray-900">
          {value}
        </div>

        {status && (
          <div className="mt-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
              {status}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
