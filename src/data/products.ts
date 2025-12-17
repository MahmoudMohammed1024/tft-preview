export interface Product {
    id: string;
    slug: string;
    name: string;
    category: 'T-Shirts' | 'Hoodies' | 'Accessories';
    price: number;
    sizes: string[];
    colors: string[];
    image: string;
    description: string;
    isNew?: boolean;
    isSale?: boolean;
}

export const PRODUCTS: Product[] = [
    {
        id: '1',
        slug: 'essential-tee-black',
        name: 'Essential Oversized Tee',
        category: 'T-Shirts',
        price: 450,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'White', 'Beige'],
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
        description: 'A premium quality oversized t-shirt made from 100% cotton. Perfect for a relaxed, urban look.',
        isNew: true
    },
    {
        id: '2',
        slug: 'streetwear-hoodie-grey',
        name: 'Urban Hoodie',
        category: 'Hoodies',
        price: 850,
        sizes: ['M', 'L', 'XL', 'XXL'],
        colors: ['Grey', 'Black'],
        image: 'https://images.unsplash.com/photo-1556906781-9a412961d289?auto=format&fit=crop&q=80&w=800',
        description: 'Heavyweight cotton hoodie with a boxy fit. Features a minimal logo on the chest.',
        isSale: true
    },
    {
        id: '3',
        slug: 'vintage-cap',
        name: 'Vintage Cap',
        category: 'Accessories',
        price: 200,
        sizes: ['One Size'],
        colors: ['Green', 'Navy'],
        image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800',
        description: 'Classic 6-panel cap with a curved brim and adjustable strap.',
    },
    {
        id: '4',
        slug: 'graphic-tee-white',
        name: 'Graphic Print Tee',
        category: 'T-Shirts',
        price: 500,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['White'],
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800',
        description: 'Statement graphic tee featuring original artwork.',
        isNew: true
    },
    {
        id: '5',
        slug: 'denim-jacket',
        name: 'Classic Denim Jacket',
        category: 'Accessories', // Just grouping it here for now
        price: 1200,
        sizes: ['M', 'L', 'XL'],
        colors: ['Blue'],
        image: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=800',
        description: 'Timeless denim jacket with a modern fit.',
    }
];
