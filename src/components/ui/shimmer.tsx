// components/Shimmer.js
const Shimmer = () => {
    return (
        <div className="w-24 h-6 bg-gray-200 relative overflow-hidden rounded">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-[shimmer_1.5s_infinite]"></div>
        </div>
    );
};

export default Shimmer;
