import { useState } from 'react';

export const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(searchTerm);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm kiếm..."
                className="w-24 sm:w-48 rounded-md border border-green-300 bg-white px-2 py-1 text-sm focus:border-green-600 focus:ring-1 focus:ring-green-600 placeholder-gray-500"
            />
        </form>
    );
};