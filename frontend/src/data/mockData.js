import { Heart, Compass, Coffee, Palette, Utensils, Zap, Sunset, BookOpen } from 'lucide-react';

export const moods = [
  { id: 'romantic', name: 'Romantic', icon: Heart, color: '#FFC0CB' },
  { id: 'adventurous', name: 'Adventurous', icon: Compass, color: '#ADD8E6' },
  { id: 'relaxed', name: 'Relaxed', icon: Coffee, color: '#FFFACD' },
  { id: 'cultural', name: 'Cultural', icon: Palette, color: '#E6E6FA' },
  { id: 'foodie', name: 'Foodie', icon: Utensils, color: '#FFE4B5' },
  { id: 'energetic', name: 'Energetic', icon: Zap, color: '#FFFFE0' },
  { id: 'scenic', name: 'Scenic', icon: Sunset, color: '#FFB6C1' },
  { id: 'curious', name: 'Curious', icon: BookOpen, color: '#AFEEEE' }
];

export const spots = [
  {
    id: 1,
    name: 'The Artisan Coffeehouse',
    type: 'Café',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
    rating: 4.8,
    reviews: 342,
    distance: '0.8 km',
    price: '300/ per person',
    description: 'Cozy neighborhood café with locally roasted coffee and homemade pastries.',
    badges: ['Local Favorite', 'Best Coffee 2024'],
    isHiddenGem: true
  },
  {
    id: 2,
    name: 'Modern Art Collective',
    type: 'Gallery',
    image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800',
    rating: 4.9,
    reviews: 189,
    distance: '1.2 km',
    price: 'Free',
    description: 'Contemporary art space featuring emerging local artists and rotating exhibitions.',
    badges: ['Hidden Gem', 'Free Entry'],
    isHiddenGem: true
  },
  {
    id: 3,
    name: 'SkyView Rooftop',
    type: 'Bar',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800',
    rating: 4.7,
    reviews: 891,
    distance: '2.1 km',
    price: '1000/ per person',
    description: 'Upscale rooftop lounge with panoramic city views and craft cocktails.',
    badges: ['Top Rated Bar', 'Best Views']
  },
  {
    id: 4,
    name: 'Riverside Gardens',
    type: 'Park',
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=800',
    rating: 4.6,
    reviews: 567,
    distance: '1.5 km',
    price: 'Free',
    description: 'Beautiful urban park with walking trails, gardens, and riverside picnic areas.',
    badges: ['Local Favorite', 'Family-Friendly']
  },
  {
    id: 5,
    name: 'Ember & Oak',
    type: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    rating: 4.9,
    reviews: 1234,
    distance: '1.8 km',
    price: '600/ per person',
    description: 'Farm-to-table restaurant featuring seasonal menus and wood-fired cuisine.',
    badges: ['Top Rated Restaurant', 'Michelin Recommended']
  },
  {
    id: 6,
    name: 'Chapter & Verse Books',
    type: 'Bookstore',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800',
    rating: 4.8,
    reviews: 276,
    distance: '0.6 km',
    price: '150/ per person',
    description: 'Independent bookstore with curated collections, author events, and a cozy reading nook.',
    badges: ['Hidden Gem', 'Local Business'],
    isHiddenGem: true
  }
];

export const events = [
  {
    id: 1,
    name: 'Summer Jazz Festival',
    type: 'Music',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800',
    date: 'Nov 20, 2025',
    time: '7:00 PM',
    location: 'Central Park Amphitheater',
    price: '$35-$75',
    tickets: '234 tickets available',
    isTrending: true
  },
  {
    id: 2,
    name: 'Artisan Food Market',
    type: 'Food & Drink',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    date: 'Nov 16, 2025',
    time: '10:00 AM',
    location: 'Downtown Square',
    price: 'Free',
    isTrending: false
  }
];

export const localGuides = [
  {
    id: 1,
    name: 'Maria Rodriguez',
    location: 'Downtown',
    rating: 4.9,
    reviews: 187,
    tours: 312,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    bio: 'Born and raised here, I love showing visitors the authentic side of our city through its incredible food scene and rich history.',
    languages: ['English', 'Spanish', 'Portuguese'],
    specialties: ['Food Tours', 'History', 'Hidden Gems']
  },
  {
    id: 2,
    name: 'James Chen',
    location: 'Arts District',
    rating: 4.8,
    reviews: 143,
    tours: 256,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    bio: 'Professional photographer turned tour guide. I\'ll show you the most Instagrammable spots and hidden murals in the city.',
    languages: ['English', 'Mandarin', 'Cantonese'],
    specialties: ['Photography Tours', 'Street Art', 'Architecture']
  },
  {
    id: 3,
    name: 'Sophie Laurent',
    location: 'Culinary District',
    rating: 5.0,
    reviews: 98,
    tours: 189,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    bio: 'French chef with 15 years experience. Join me for an unforgettable culinary journey through our vibrant food scene.',
    languages: ['English', 'French', 'Italian'],
    specialties: ['Food Tours', 'Wine Tasting', 'Cooking Classes']
  },
  {
    id: 4,
    name: 'Amir Hassan',
    location: 'Historic Quarter',
    rating: 4.9,
    reviews: 221,
    tours: 445,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    bio: 'History professor passionate about sharing the fascinating stories of our city\'s past and architectural heritage.',
    languages: ['English', 'Arabic', 'French'],
    specialties: ['History Tours', 'Architecture', 'Museums']
  }
];