import React, { useState } from 'react';
import Masonry from '@/components/Masonry';
import { Search, Filter, Grid3X3, List, X, ArrowUpRight } from 'lucide-react';

interface MasonryItem {
    id: string;
    img: string;
    url: string;
    height: number;
    title?: string;
    category?: string;
    description?: string;
}

const items: MasonryItem[] = [
    {
        id: "1",
        img: "https://picsum.photos/id/1015/600/900",
        url: "https://example.com/one",
        height: 400,
        title: "Mountain Landscape",
        category: "Nature",
        description: "Beautiful mountain scenery with dramatic lighting"
    },
    {
        id: "2",
        img: "https://picsum.photos/id/1011/600/750",
        url: "https://example.com/two",
        height: 250,
        title: "Urban Architecture",
        category: "Architecture",
        description: "Modern building design with geometric patterns"
    },
    {
        id: "3",
        img: "https://picsum.photos/id/1020/600/800",
        url: "https://example.com/three",
        height: 600,
        title: "Wildlife Portrait",
        category: "Animals",
        description: "Close-up wildlife photography in natural habitat"
    },
    {
        id: "4",
        img: "https://picsum.photos/id/1035/600/700",
        url: "https://example.com/four",
        height: 350,
        title: "Coastal View",
        category: "Nature",
        description: "Serene coastal landscape with rocky shoreline"
    },
    {
        id: "5",
        img: "https://picsum.photos/id/1038/600/850",
        url: "https://example.com/five",
        height: 450,
        title: "Forest Path",
        category: "Nature",
        description: "Mysterious forest path with morning mist"
    },
    {
        id: "6",
        img: "https://picsum.photos/id/1040/600/500",
        url: "https://example.com/six",
        height: 300,
        title: "Historic Building",
        category: "Architecture",
        description: "Ancient architecture with intricate details"
    },
    {
        id: "7",
        img: "https://picsum.photos/id/1043/600/950",
        url: "https://example.com/seven",
        height: 550,
        title: "Winter Wonderland",
        category: "Nature",
        description: "Snow-covered landscape with frozen trees"
    },
    {
        id: "8",
        img: "https://picsum.photos/id/1047/600/650",
        url: "https://example.com/eight",
        height: 350,
        title: "City Skyline",
        category: "Urban",
        description: "Metropolitan skyline at golden hour"
    },
    {
        id: "9",
        img: "https://picsum.photos/id/1055/600/800",
        url: "https://example.com/nine",
        height: 400,
        title: "Desert Dunes",
        category: "Nature",
        description: "Vast desert landscape with sand patterns"
    },
    {
        id: "10",
        img: "https://picsum.photos/id/106/600/720",
        url: "https://example.com/ten",
        height: 320,
        title: "Vintage Interior",
        category: "Architecture",
        description: "Classic interior design with retro elements"
    }
];

const categories = ['All', 'Nature', 'Architecture', 'Animals', 'Urban'];

const ReactSection = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [viewMode, setViewMode] = useState<'masonry' | 'grid'>('masonry');
    const [selectedItem, setSelectedItem] = useState<MasonryItem | null>(null);

    const filteredItems = items.filter(item => {
        const matchesSearch = item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const clearFilters = () => {
        setSearchQuery('');
        setSelectedCategory('All');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
                        Gallery Showcase
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
                        Discover stunning visuals and explore our curated collection of photography and artwork.
                    </p>
                </div>

                {/* Controls */}
                <div className="mb-8 space-y-4">

                    {/* Search Bar */}
                    <div className="relative max-w-md mx-auto">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search images..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-10 py-3 border border-slate-200 rounded-2xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all duration-300"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        )}
                    </div>

                    {/* Filters and View Controls */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

                        {/* Category Filters */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                            ? 'bg-slate-800 text-white shadow-lg transform scale-105'
                                            : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-800 border border-slate-200'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* View Mode Toggle */}
                        <div className="flex items-center gap-2 bg-white rounded-2xl p-1 border border-slate-200">
                            <button
                                onClick={() => setViewMode('masonry')}
                                className={`p-2 rounded-xl transition-all duration-300 ${viewMode === 'masonry'
                                        ? 'bg-slate-800 text-white shadow-md'
                                        : 'text-slate-400 hover:text-slate-600'
                                    }`}
                            >
                                <Grid3X3 className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-xl transition-all duration-300 ${viewMode === 'grid'
                                        ? 'bg-slate-800 text-white shadow-md'
                                        : 'text-slate-400 hover:text-slate-600'
                                    }`}
                            >
                                <List className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Active Filters Info */}
                    {(searchQuery || selectedCategory !== 'All') && (
                        <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                            <span>Showing {filteredItems.length} results</span>
                            <span className="text-slate-300">•</span>
                            <button
                                onClick={clearFilters}
                                className="text-slate-500 hover:text-slate-700 underline transition-colors"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>

                {/* Masonry Grid */}
                <div className="relative">
                    {viewMode === 'masonry' ? (
                        <Masonry
                            items={filteredItems}
                            ease="power3.out"
                            duration={0.6}
                            stagger={0.05}
                            animateFrom="bottom"
                            scaleOnHover={true}
                            hoverScale={0.95}
                            blurToFocus={true}
                            colorShiftOnHover={false}
                            onItemClick={(item) => setSelectedItem(item)}
                        />
                    ) : (
                        /* Grid View Fallback */
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-200"
                                    onClick={() => setSelectedItem(item)}
                                >
                                    <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-semibold text-slate-800 group-hover:text-slate-900">
                                                {item.title}
                                            </h3>
                                            <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                                                {item.category}
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-600 line-clamp-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Empty State */}
                {filteredItems.length === 0 && (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 mx-auto mb-4 bg-slate-200 rounded-full flex items-center justify-center">
                            <Search className="w-10 h-10 text-slate-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-600 mb-2">
                            No results found
                        </h3>
                        <p className="text-slate-500 mb-4">
                            Try adjusting your search or filters to find what you're looking for.
                        </p>
                        <button
                            onClick={clearFilters}
                            className="px-6 py-2 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Modal for Item Detail */}
                {selectedItem && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden">
                            <div className="relative">
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                                <img
                                    src={selectedItem.img}
                                    alt={selectedItem.title}
                                    className="w-full h-auto max-h-[70vh] object-contain"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-2xl font-bold text-slate-800">
                                        {selectedItem.title}
                                    </h3>
                                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                                        {selectedItem.category}
                                    </span>
                                </div>
                                <p className="text-slate-600 mb-4">
                                    {selectedItem.description}
                                </p>
                                <a
                                    href={selectedItem.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors"
                                >
                                    Visit Source
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReactSection;