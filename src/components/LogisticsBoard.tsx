import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Plus, Package, Truck, MapPin, User, Trash2 } from "lucide-react";

interface LogisticsPost {
  id: string;
  type: "produce" | "transport";
  title: string;
  description: string;
  location: string;
  contact: string;
  postedDate: string;
}

const locations = ["Port Moresby", "Lae", "Mt. Hagen", "Madang", "Goroka"];

export const LogisticsBoard = () => {
  const [posts, setPosts] = useState<LogisticsPost[]>([]);
  const [postType, setPostType] = useState<"produce" | "transport">("produce");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    contact: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("logisticsPosts");
    if (stored) {
      setPosts(JSON.parse(stored));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.location || !formData.contact) {
      toast.error("Please fill in all fields");
      return;
    }

    const newPost: LogisticsPost = {
      id: Date.now().toString(),
      type: postType,
      title: formData.title,
      description: formData.description,
      location: formData.location,
      contact: formData.contact,
      postedDate: new Date().toISOString(),
    };

    const updated = [...posts, newPost];
    setPosts(updated);
    localStorage.setItem("logisticsPosts", JSON.stringify(updated));
    
    setFormData({
      title: "",
      description: "",
      location: "",
      contact: "",
    });
    
    toast.success("Post created successfully!");
  };

  const handleDelete = (id: string) => {
    const updated = posts.filter(p => p.id !== id);
    setPosts(updated);
    localStorage.setItem("logisticsPosts", JSON.stringify(updated));
    toast.success("Post deleted");
  };

  const producePosts = posts.filter(p => p.type === "produce");
  const transportPosts = posts.filter(p => p.type === "transport");

  const PostCard = ({ post }: { post: LogisticsPost }) => (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            {post.type === "produce" ? (
              <Package className="h-5 w-5 text-chart-1" />
            ) : (
              <Truck className="h-5 w-5 text-chart-2" />
            )}
            <CardTitle className="text-lg">{post.title}</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleDelete(post.id)}
          >
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>
        <CardDescription className="flex items-center gap-2">
          <MapPin className="h-3 w-3" />
          {post.location}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-foreground">{post.description}</p>
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-3 w-3" />
            {post.contact}
          </div>
          <Badge variant="secondary" className="text-xs">
            {new Date(post.postedDate).toLocaleDateString()}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create New Post</CardTitle>
          <CardDescription>Connect farmers with transporters across PNG</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>Post Type</Label>
              <Tabs value={postType} onValueChange={(v) => setPostType(v as "produce" | "transport")}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="produce" className="gap-2">
                    <Package className="h-4 w-4" />
                    Available Produce
                  </TabsTrigger>
                  <TabsTrigger value="transport" className="gap-2">
                    <Truck className="h-4 w-4" />
                    Available Transport
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder={postType === "produce" ? "e.g., 500kg Fresh Coffee Beans" : "e.g., Truck Available Port Moresby to Lae"}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Provide details about your produce or transport service"
                rows={3}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Select value={formData.location} onValueChange={(value) => setFormData({ ...formData, location: value })}>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((loc) => (
                      <SelectItem key={loc} value={loc}>
                        {loc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Contact (Phone/Name)</Label>
                <Input
                  id="contact"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="Your contact info"
                />
              </div>
            </div>

            <Button type="submit" className="w-full sm:w-auto">
              <Plus className="mr-2 h-4 w-4" />
              Post to Board
            </Button>
          </form>
        </CardContent>
      </Card>

      <Tabs defaultValue="produce" className="space-y-4">
        <TabsList>
          <TabsTrigger value="produce" className="gap-2">
            <Package className="h-4 w-4" />
            Available Produce ({producePosts.length})
          </TabsTrigger>
          <TabsTrigger value="transport" className="gap-2">
            <Truck className="h-4 w-4" />
            Available Transport ({transportPosts.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="produce" className="space-y-4">
          {producePosts.length === 0 ? (
            <Card>
              <CardContent className="py-8">
                <p className="text-center text-muted-foreground">No produce listings yet</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {producePosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="transport" className="space-y-4">
          {transportPosts.length === 0 ? (
            <Card>
              <CardContent className="py-8">
                <p className="text-center text-muted-foreground">No transport listings yet</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {transportPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};
