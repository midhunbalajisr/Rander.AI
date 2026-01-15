import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Assuming this exists or I'll use standard textarea
import { useToast } from "@/hooks/use-toast";
import { Star, User } from "lucide-react";
import { API_BASE_URL } from "@/config";

interface Testimonial {
    id: string;
    name: string;
    rating: number;
    feedback: string;
    date: string;
}

const Testimonials = () => {
    const { toast } = useToast();
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        rating: 5,
        feedback: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/testimonials`);
            if (res.ok) {
                const data = await res.json();
                setTestimonials(data);
            }
        } catch (err) {
            console.error("Failed to fetch testimonials", err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch(`${API_BASE_URL}/api/testimonials`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (res.ok && data.ok) {
                toast({ title: "Feedback received!", description: "Thank you for your feedback." });
                setFormData({ name: "", rating: 5, feedback: "" });
                setTestimonials((prev) => [...prev, data.testimonial]);
            } else {
                toast({ title: "Error", description: data.error || "Failed to submit feedback." });
            }
        } catch (err) {
            console.error(err);
            toast({ title: "Error", description: "Failed to submit feedback." });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRatingChange = (newRating: number) => {
        setFormData({ ...formData, rating: newRating });
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* Header */}
                <div className="text-center animate-fade-in">
                    <span className="inline-block px-4 py-2 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
                        Community Feedback
                    </span>
                    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
                        What Our Users <span className="text-gradient">say</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                        We value your feedback. See what others are saying about their experience with Rander.AI.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Feedback Form */}
                    <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        <div className="glass-card p-8 border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-3 opacity-10">
                                <Star className="w-24 h-24 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold mb-6">Leave your feedback</h2>
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="bg-muted/50 border-white/10"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label>Rating</Label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => handleRatingChange(star)}
                                                className={`transition-all hover:scale-110 ${star <= formData.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
                                                    }`}
                                            >
                                                <Star className="w-8 h-8" />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="feedback">Feedback</Label>
                                    <textarea
                                        id="feedback"
                                        name="feedback"
                                        placeholder="Tell us about your experience..."
                                        required
                                        rows={4}
                                        value={formData.feedback}
                                        onChange={handleChange}
                                        className="flex w-full rounded-md border border-white/10 bg-muted/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    variant="hero"
                                    className="w-full animate-fade-in-up"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Submitting..." : "Submit Feedback"}
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Testimonials List */}
                    <div className="animate-fade-in space-y-6" style={{ animationDelay: "0.3s" }}>
                        <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">Recent Reviews</h2>
                        {isLoading ? (
                            <p className="text-muted-foreground">Loading reviews...</p>
                        ) : testimonials.length === 0 ? (
                            <div className="glass-card p-8 text-center text-muted-foreground">
                                No reviews yet. Be the first to leave one!
                            </div>
                        ) : (
                            <div className="grid gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                                {testimonials.slice().reverse().map((t) => (
                                    <div key={t.id} className="glass-card p-6 flex flex-col gap-3 group hover:border-primary/30 transition-colors">
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                                    {t.name.charAt(0).toUpperCase()}
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-lg">{t.name}</p>
                                                    <div className="flex text-yellow-400">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className={`w-4 h-4 ${i < t.rating ? "fill-current" : "text-gray-600 fill-none"}`}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="text-xs text-muted-foreground">
                                                {new Date(t.date).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground mt-2 italic">"{t.feedback}"</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
