import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowUpDown } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import type { Product } from '../data/products';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config/site';
import { useCartStore } from '../store/useCartStore';

export default function Shop() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [sortOption, setSortOption] = useState<'newest' | 'priceAsc' | 'priceDesc'>('newest');
    const addItem = useCartStore((state) => state.addItem);

    const categories = ['All', 'T-Shirts', 'Hoodies', 'Accessories'];

    const filteredProducts = useMemo(() => {
        let result = [...PRODUCTS];

        // Filter by Search
        if (searchQuery) {
            result = result.filter((p) =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Filter by Category
        if (selectedCategory !== 'All') {
            result = result.filter((p) => p.category === selectedCategory);
        }

        // Sorting
        if (sortOption === 'newest') {
            result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); // Simple sort putting new first
        } else if (sortOption === 'priceAsc') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'priceDesc') {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }, [searchQuery, selectedCategory, sortOption]);

    const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
        e.preventDefault(); // Prevent navigation if clicking the button
        e.stopPropagation();
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: product.sizes[0], // Default to first size
            color: product.colors[0], // Default to first color
            quantity: 1
        });
        // Optional: Add toast notification here
    };

    return (
        <div className="container mx-auto px-4 py-24 min-h-screen">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                <div>
                    <h1 className="text-4xl font-bold font-serif mb-2">Shop Collection</h1>
                    <p className="text-muted-foreground">Find your perfect look</p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                    {/* Search */}
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search products..."
                            className="pl-8"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Sort */}
                    <div className="flex items-center gap-2">
                        <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                        <select
                            className="bg-background border border-input rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-ring"
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value as any)}
                        >
                            <option value="newest">Newest</option>
                            <option value="priceAsc">Price: Low to High</option>
                            <option value="priceDesc">Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Categories Tabs */}
            <div className="flex overflow-x-auto gap-2 mb-8 pb-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${selectedCategory === cat
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-lg text-muted-foreground">No products found.</p>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <Link key={product.id} to={`/product/${product.slug}`}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Card className="h-full overflow-hidden border-none shadow-sm hover:shadow-md bg-card transition-shadow group cursor-pointer relative">
                                    {/* Badge */}
                                    {(product.isNew || product.isSale) && (
                                        <div className={`absolute top-2 right-2 z-10 px-2 py-1 text-xs font-bold text-white rounded ${product.isNew ? 'bg-blue-600' : 'bg-red-600'}`}>
                                            {product.isNew ? 'NEW' : 'SALE'}
                                        </div>
                                    )}

                                    <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <Button variant="secondary" size="sm" onClick={(e) => handleQuickAdd(e, product)}>
                                                Quick Add
                                            </Button>
                                        </div>
                                    </div>
                                    <CardHeader className="p-4 pb-0">
                                        <CardTitle className="text-base font-medium line-clamp-1">{product.name}</CardTitle>
                                        <p className="text-sm text-muted-foreground">{product.category}</p>
                                    </CardHeader>
                                    <CardContent className="p-4 pt-2">
                                        <p className="font-bold">{SITE_CONFIG.currency} {product.price}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
