
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const activities = [
  {
    id: 1,
    title: "Coffee & Conversation",
    description: "Looking to meet new people in a casual setting! Join me at my favorite coffee shop for drinks and interesting conversations. All topics welcome!",
    type: "Social",
    date: "May 15, 2024",
    time: "10:00 AM",
    location: "Brew & Bean Cafe, Downtown",
    currentAttendees: 3,
    maxAttendees: 5,
    host: {
      name: "Alex",
      avatar: "A"
    }
  },
  {
    id: 2,
    title: "Sunset Dinner Date",
    description: "I've reserved a table for two at this amazing Italian restaurant with stunning sunset views. Looking for someone who appreciates good food and conversation.",
    type: "Date",
    date: "May 16, 2024",
    time: "7:30 PM",
    location: "Italian Bistro, West End",
    currentAttendees: 1,
    maxAttendees: 2,
    host: {
      name: "Jamie",
      avatar: "J"
    }
  },
  {
    id: 3,
    title: "Weekend Mountain Adventure",
    description: "I'm organizing a 5-mile hike with breathtaking views. Moderate difficulty, ideal for casual hikers. I'll bring trail mix, you bring your sense of adventure!",
    type: "Sport",
    date: "May 18, 2024",
    time: "8:00 AM",
    location: "Mountain Trail Park",
    currentAttendees: 6,
    maxAttendees: 8,
    host: {
      name: "Taylor",
      avatar: "T"
    }
  }
];

export const ActivityShowcase = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Trending <span className="dymm-text-gradient">Activities</span>
        </h2>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
          Join these popular activities and meet new people who share your interests
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <Card key={activity.id} className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <Badge className={`
                  px-4 py-1 rounded-full text-xs font-medium
                  ${activity.type === 'Social' ? 'bg-amber-100 text-amber-800' : 
                    activity.type === 'Date' ? 'bg-pink-100 text-pink-800' : 
                    'bg-green-100 text-green-800'}
                `}>
                  {activity.type}
                </Badge>
                <div className="flex items-center text-sm text-black">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{activity.currentAttendees}/{activity.maxAttendees}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mt-4 mb-2 text-black">{activity.title}</h3>
              <p className="text-sm text-black mb-6 line-clamp-2">{activity.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-black">
                  <CalendarDays className="h-4 w-4 text-gray-400" />
                  <span>{activity.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-black">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span>{activity.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-black">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span>{activity.location}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between border-t pt-4">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2 bg-gray-100">
                    <AvatarFallback>{activity.host.avatar}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-black">Hosted by {activity.host.name}</span>
                </div>
                <Button variant="outline" size="sm" className="rounded-full px-4">View</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link to="/download">
          <Button variant="outline" size="lg" className="rounded-full border-dymm-pink text-dymm-pink hover:bg-dymm-pink hover:text-white">
            Explore All Activities
          </Button>
        </Link>
      </div>
    </section>
  );
};
