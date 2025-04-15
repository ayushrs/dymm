
import React, { memo } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageCircle, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

// Type definitions for Instagram posts
interface InstagramPost {
  id: number;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  url?: string;
}

// Mock data for Instagram posts (expanded to 6)
const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    caption: "Enjoying the perfect brunch with friends #weekendvibes",
    likes: 142,
    comments: 12,
    url: "https://instagram.com/dymm.app"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    caption: "Meet our new office cat! #officepet #cutecat",
    likes: 267,
    comments: 34,
    url: "https://instagram.com/dymm.app"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    caption: "New space, new energy. Our refreshed office lounge is the perfect spot for creativity ✨",
    likes: 195,
    comments: 21,
    url: "https://instagram.com/dymm.app"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    caption: "Weekend adventures with the team! Exploring new hiking trails and making connections #outdoors",
    likes: 312,
    comments: 45,
    url: "https://instagram.com/dymm.app"
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
    caption: "Late night coding sessions lead to the best ideas. Building the future of connections #techlife",
    likes: 178,
    comments: 19,
    url: "https://instagram.com/dymm.app"
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1528569937393-ee892b976859",
    caption: "Community meetup success! Thanks to everyone who joined us to discuss the future of dating apps",
    likes: 231,
    comments: 28,
    url: "https://instagram.com/dymm.app"
  }
];

// Memoized Instagram post card component for better performance
const InstagramPostCard = memo(({ post }: { post: InstagramPost }) => (
  <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border border-foreground/10">
    <div className="relative">
      <AspectRatio ratio={1 / 1}>
        <img 
          src={post.imageUrl} 
          alt={`Instagram post: ${post.caption.substring(0, 30)}...`}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </AspectRatio>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <p className="text-white text-sm line-clamp-2 mb-2">{post.caption}</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-white">
            <Heart className="w-4 h-4 fill-dymm-pink stroke-dymm-pink" />
            <span className="text-xs">{post.likes}</span>
          </div>
          <div className="flex items-center gap-1 text-white">
            <MessageCircle className="w-4 h-4" />
            <span className="text-xs">{post.comments}</span>
          </div>
        </div>
      </div>
    </div>
    
    <CardContent className="p-4">
      <p className="text-sm line-clamp-2 text-foreground/80">{post.caption}</p>
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4 text-dymm-pink" />
            <span className="text-xs text-foreground/70">{post.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4 text-dymm-purple" />
            <span className="text-xs text-foreground/70">{post.comments}</span>
          </div>
        </div>
        <a 
          href={post.url || "#"} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-xs text-dymm-purple hover:underline flex items-center gap-1"
        >
          View Post
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </CardContent>
  </Card>
));

InstagramPostCard.displayName = "InstagramPostCard";

export const InstagramFeed = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {instagramPosts.map((post) => (
        <InstagramPostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
