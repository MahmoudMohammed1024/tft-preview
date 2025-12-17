import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import type { Product } from '../data/products';
import { Button } from '../components/Button';
import { Card, CardContent } from '../components/Card';
import { SITE_CONFIG } from '../config/site';
import { useCartStore } from '../store/useCartStore';
import { cn } from '../utils/cn';

export default function ProductDetails() {
    const { slug } = useParams<{ slug: string }>();
    const [product, setProduct] = useState<Product | undefined>(undefined);
    const [selectedSize, setSelectedSize] = useState<string>('');
    const [selectedColor, setSelectedColor] = useState<string>('');
    const [quantity, setQuantity] = useState(1);

    const addItem = useCartStore((state) => state.addItem);

    useEffect(() => {
        const foundProduct = PRODUCTS.find((p) => p.slug === slug);
        setProduct(foundProduct);
        if (foundProduct) {
            // Reset selections when product changes
            setSelectedSize('');
            setSelectedColor('');
            setQuantity(1);
        }
    }, [slug]);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
                <Link to="/shop">
                    <Button>Return to Shop</Button>
                </Link>
            </div>
        );
    }

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            alert('Please select a size and color.');
            return;
        }

        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: selectedSize,
            color: selectedColor,
            quantity: quantity
        });
        alert('Added to cart!'); // Replace with toast later
    };

    const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

    return (
        <div className="container mx-auto px-4 py-24 min-h-screen">
            <Link to="/shop" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Shop
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                {/* Image Gallery */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    {/* Additional thumbnails would go here */}
                </motion.div>

                {/* Product Info */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold font-serif mb-2">{product.name}</h1>
                    <p className="text-2xl font-semibold mb-6">{SITE_CONFIG.currency} {product.price}</p>

                    <p className="text-muted-foreground mb-8 leading-relaxed">
                        {product.description}
                    </p>

                    {/* Colors */}
                    <div className="mb-6">
                        <h3 className="font-medium mb-3">Color</h3>
                        <div className="flex gap-3">
                            {product.colors.map((color) => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={cn(
                                        "h-10 px-4 rounded-md border text-sm font-medium transition-all",
                                        selectedColor === color
                                            ? "border-primary bg-primary text-primary-foreground"
                                            : "border-input hover:border-primary hover:text-primary"
                                    )}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Sizes */}
                    <div className="mb-8">
                        <h3 className="font-medium mb-3">Size</h3>
                        <div className="flex gap-3">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={cn(
                                        "h-10 w-10 flex items-center justify-center rounded-md border text-sm font-medium transition-all",
                                        selectedSize === size
                                            ? "border-primary bg-primary text-primary-foreground"
                                            : "border-input hover:border-primary hover:text-primary"
                                    )}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity & Add to Cart */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8 border-t pt-8">
                        <div className="flex items-center border rounded-md">
                            <button
                                className="px-4 py-2 hover:bg-secondary transition-colors"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            >
                                <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-12 text-center font-medium">{quantity}</span>
                            <button
                                className="px-4 py-2 hover:bg-secondary transition-colors"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                <Plus className="h-4 w-4" />
                            </button>
                        </div>

                        <Button
                            size="lg"
                            className="flex-1"
                            onClick={handleAddToCart}
                            disabled={!selectedSize || !selectedColor}
                        >
                            <ShoppingBag className="mr-2 h-5 w-5" />
                            Add to Cart
                        </Button>
                    </div>

                    <div className="text-sm text-muted-foreground">
                        <p>Free standard shipping on orders over {SITE_CONFIG.currency} 1000</p>
                    </div>
                </motion.div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <div className="mt-20">
                    <h2 className="text-2xl font-bold font-serif mb-8">You May Also Like</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {relatedProducts.map((p) => (
                            <Link key={p.id} to={`/product/${p.slug}`}>
                                <Card className="h-full border-none shadow-none hover:shadow-sm transition-shadow">
                                    <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden mb-4">
                                        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                                    </div>
                                    <CardContent className="p-0">
                                        <h3 className="font-medium truncate">{p.name}</h3>
                                        <p className="text-sm text-muted-foreground">{SITE_CONFIG.currency} {p.price}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
