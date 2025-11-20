import { Heart, Compass, Coffee, Palette, Utensils, Zap, Sunset, BookOpen } from 'lucide-react';
import axios from 'axios';

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
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});
const events_data = await apiClient.get("/events/");
export const events = await events_data.data;

const guides_data = await apiClient.get("/guides/");
export const localGuides = await guides_data.data;