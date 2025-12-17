
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { SITE_CONFIG } from '../config/site';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export default function Cart() {
    const { items, removeItem, updateQuantity, clearCart, getTotalPrice } = useCartStore();
    const [customerName, setCustomerName] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');

    const totalPrice = getTotalPrice();

    const handleWhatsAppOrder = () => {
        if (items.length === 0) return;
        if (!customerName || !customerAddress) {
            alert('Please enter your name and address to proceed.');
            return;
        }

        let message = `* New Order from ${SITE_CONFIG.name}*\n\n`;
        message += `* Customer:* ${customerName} \n`;
        message += `* Address:* ${customerAddress} \n\n`;
        message += `* Order Details:*\n`;

        items.forEach((item) => {
            message += `- ${item.name} (Size: ${item.size}, Color: ${item.color}) x${item.quantity} - ${SITE_CONFIG.currency} ${item.price * item.quantity} \n`;
        });

        message += `\n * Total Price:* ${SITE_CONFIG.currency} ${totalPrice} `;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
        clearCart();
    };

    if (items.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
                <div className="bg-secondary/30 p-8 rounded-full mb-6">
                    <MessageCircle className="h-12 w-12 text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Your Cart is Empty</h2>
                <p className="text-muted-foreground mb-8">Looks like you haven't added anything yet.</p>
                <Link to="/shop">
                    <Button size="lg">Start Shopping</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-24 min-h-screen">
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-8">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                    <AnimatePresence>
                        {items.map((item) => (
                            <motion.div
                                key={`${item.id}-${item.size}-${item.color}`}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="flex gap-4 border p-4 rounded-lg bg-card shadow-sm"
                            >
                                <div className="h-24 w-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>

                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-medium">{item.name}</h3>
                                            <p className="text-sm text-muted-foreground">Size: {item.size} | Color: {item.color}</p>
                                        </div>
                                        <button
                                            onClick={() => removeItem(item.id, item.size, item.color)}
                                            className="text-red-500 hover:text-red-600 transition-colors"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>

                                    <div className="flex justify-between items-end mt-4">
                                        <div className="flex items-center border rounded-md">
                                            <button
                                                className="p-1 hover:bg-secondary transition-colors"
                                                onClick={() => updateQuantity(item.id, item.size, item.color, Math.max(1, item.quantity - 1))}
                                            >
                                                <Minus className="h-3 w-3" />
                                            </button>
                                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                                            <button
                                                className="p-1 hover:bg-secondary transition-colors"
                                                onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                                            >
                                                <Plus className="h-3 w-3" />
                                            </button>
                                        </div>
                                        <p className="font-bold">{SITE_CONFIG.currency} {item.price * item.quantity}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Checkout / Order Form */}
                <div className="lg:col-span-1">
                    <div className="bg-secondary/10 border rounded-lg p-6 sticky top-24">
                        <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span className="font-medium">{SITE_CONFIG.currency} {totalPrice}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Delivery</span>
                                <span className="font-medium">Calculated via WhatsApp</span>
                            </div>
                            <div className="border-t pt-4 flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>{SITE_CONFIG.currency} {totalPrice}</span>
                            </div>
                        </div>

                        <div className="space-y-4 mb-6">
                            <Input
                                placeholder="Full Name"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                            />
                            <Input
                                placeholder="City / Address"
                                value={customerAddress}
                                onChange={(e) => setCustomerAddress(e.target.value)}
                            />
                        </div>

                        <Button
                            className="w-full bg-green-600 hover:bg-green-700 text-white"
                            size="lg"
                            onClick={handleWhatsAppOrder}
                        >
                            Complete Order on WhatsApp <MessageCircle className="ml-2 h-5 w-5" />
                        </Button>

                        <p className="text-xs text-muted-foreground text-center mt-4">
                            No payment required now. You will confirm your order details on WhatsApp.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
