import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { Plus, Trash2 } from "lucide-react";

interface Harvest {
  id: string;
  farmerName: string;
  cropType: string;
  quantity: number;
  harvestDate: string;
  location: string;
}

const cropTypes = ["Coffee", "Cocoa", "Fresh Produce", "Vanilla", "Copra"];
const locations = ["Port Moresby", "Lae", "Mt. Hagen", "Madang", "Goroka"];

export const HarvestTracking = () => {
  const [harvests, setHarvests] = useState<Harvest[]>([]);
  const [formData, setFormData] = useState({
    farmerName: "",
    cropType: "",
    quantity: "",
    harvestDate: "",
    location: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("harvests");
    if (stored) {
      setHarvests(JSON.parse(stored));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.farmerName || !formData.cropType || !formData.quantity || !formData.harvestDate || !formData.location) {
      toast.error("Please fill in all fields");
      return;
    }

    const newHarvest: Harvest = {
      id: Date.now().toString(),
      farmerName: formData.farmerName,
      cropType: formData.cropType,
      quantity: Number(formData.quantity),
      harvestDate: formData.harvestDate,
      location: formData.location,
    };

    const updated = [...harvests, newHarvest];
    setHarvests(updated);
    localStorage.setItem("harvests", JSON.stringify(updated));
    
    setFormData({
      farmerName: "",
      cropType: "",
      quantity: "",
      harvestDate: "",
      location: "",
    });
    
    toast.success("Harvest recorded successfully!");
  };

  const handleDelete = (id: string) => {
    const updated = harvests.filter(h => h.id !== id);
    setHarvests(updated);
    localStorage.setItem("harvests", JSON.stringify(updated));
    toast.success("Harvest deleted");
  };

  const totalsByLocation = harvests.reduce((acc, harvest) => {
    acc[harvest.location] = (acc[harvest.location] || 0) + harvest.quantity;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Log New Harvest</CardTitle>
          <CardDescription>Record harvest data for sales forecasting and efficiency tracking</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="farmerName">Farmer/Cooperative Name</Label>
                <Input
                  id="farmerName"
                  value={formData.farmerName}
                  onChange={(e) => setFormData({ ...formData, farmerName: e.target.value })}
                  placeholder="Enter name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cropType">Crop Type</Label>
                <Select value={formData.cropType} onValueChange={(value) => setFormData({ ...formData, cropType: value })}>
                  <SelectTrigger id="cropType">
                    <SelectValue placeholder="Select crop" />
                  </SelectTrigger>
                  <SelectContent>
                    {cropTypes.map((crop) => (
                      <SelectItem key={crop} value={crop}>
                        {crop}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity (kg)</Label>
                <Input
                  id="quantity"
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  placeholder="0"
                  min="0"
                  step="0.1"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="harvestDate">Harvest Date</Label>
                <Input
                  id="harvestDate"
                  type="date"
                  value={formData.harvestDate}
                  onChange={(e) => setFormData({ ...formData, harvestDate: e.target.value })}
                />
              </div>
              
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
            </div>
            
            <Button type="submit" className="w-full sm:w-auto">
              <Plus className="mr-2 h-4 w-4" />
              Record Harvest
            </Button>
          </form>
        </CardContent>
      </Card>

      {Object.keys(totalsByLocation).length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Harvest Summary by Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {Object.entries(totalsByLocation).map(([location, total]) => (
                <Card key={location}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">{location}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{total.toFixed(1)} kg</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Recent Harvests</CardTitle>
          <CardDescription>View and manage recorded harvest data</CardDescription>
        </CardHeader>
        <CardContent>
          {harvests.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">No harvests recorded yet</p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Farmer/Cooperative</TableHead>
                    <TableHead>Crop</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {harvests.map((harvest) => (
                    <TableRow key={harvest.id}>
                      <TableCell className="font-medium">{harvest.farmerName}</TableCell>
                      <TableCell>{harvest.cropType}</TableCell>
                      <TableCell>{harvest.quantity} kg</TableCell>
                      <TableCell>{new Date(harvest.harvestDate).toLocaleDateString()}</TableCell>
                      <TableCell>{harvest.location}</TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(harvest.id)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
