export default function Skeleton() {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-64 bg-gray-400 rounded"></div>
        <div className="h-6 bg-gray-400 rounded w-1/3"></div>
        <div className="h-4 bg-gray-400 rounded w-2/3"></div>
        <div className="h-4 bg-gray-400 rounded w-1/4"></div>
      </div>
    );
  }