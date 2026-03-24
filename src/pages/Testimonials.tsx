import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Assuming this exists or I'll use standard textarea
import { useToast } from "@/hooks/use-toast";
import { Star, User } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

import { getFeedbacks, createFeedback, Feedback } from "@/api/feedbacks";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
    const { toast } = useToast();
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    // Observer for infinite scroller
    const { ref, inView } = useInView();

    const [formData, setFormData] = useState({
        name: "",
        rating: 5,
        feedback: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        fetchFeedbacks(1, true);
    }, []);

    useEffect(() => {
        if (inView && hasMore && !isLoading) {
            fetchFeedbacks(page + 1);
        }
    }, [inView, hasMore, isLoading]);

    const fetchFeedbacks = async (pageNum: number, isInitial = false) => {
        setIsLoading(true);
        try {
            const response = await getFeedbacks({ page: pageNum, limit: 10 });
            console.log("Feedbacks API response:", response);

            // Check if backend returns array or paginated object with common keys
            let newItems: Feedback[] = [];
            if (Array.isArray(response)) {
                newItems = response;
            } else if (response && typeof response === 'object') {
                newItems = (response as any).data || (response as any).results || (response as any).feedbacks || (response as any).items || [];
            }

            if (isInitial) {
                setFeedbacks(newItems);
            } else {
                setFeedbacks(prev => [...prev, ...newItems]);
            }

            setPage(pageNum);

            // Handle pagination end
            if (Array.isArray(response)) {
                if (response.length < 10) setHasMore(false);
                else setHasMore(true);
            } else {
                const totalPages = (response as any).totalPages || (response as any).total_pages || 1;
                if (pageNum >= totalPages) setHasMore(false);
                else setHasMore(true);

                if (newItems.length === 0) setHasMore(false);
            }

        } catch (err) {
            console.error("Failed to fetch feedbacks", err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await createFeedback({
                name: formData.name,
                rating: formData.rating,
                feedback: formData.feedback,
            });

            toast({ title: "Feedback received!", description: "Thank you for your feedback." });
            setFormData({ name: "", rating: 5, feedback: "" });
            // Refresh with first page on new post
            await fetchFeedbacks(1, true);
        } catch (err: any) {
            console.error(err);
            toast({ title: "Error", description: err.response?.data?.error || err.message || "Failed to submit feedback." });
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
                                        className="bg-background border-input text-foreground placeholder:text-muted-foreground focus:border-primary transition-all"
                                    />
                                </div>
 
                                <div className="space-y-2">
                                    <Label className="text-foreground font-semibold">Rating</Label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => handleRatingChange(star)}
                                                className={`transition-all duration-200 hover:scale-125 hover:brightness-110 cursor-pointer ${star <= formData.rating ? "text-yellow-400" : "text-gray-400"
                                                    }`}
                                            >
                                                <Star
                                                    className="w-8 h-8"
                                                    fill={star <= formData.rating ? "currentColor" : "none"}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
 
                                <div className="space-y-2">
                                    <Label htmlFor="feedback" className="text-foreground font-semibold">Feedback</Label>
                                    <textarea
                                        id="feedback"
                                        name="feedback"
                                        placeholder="Tell us about your experience..."
                                        required
                                        rows={4}
                                        value={formData.feedback}
                                        onChange={handleChange}
                                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px] text-foreground focus:border-primary transition-all"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full relative overflow-hidden bg-gradient-to-r from-primary via-cyan-500 to-blue-500 hover:from-primary hover:via-cyan-400 hover:to-blue-400 text-white font-bold py-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 border-2 border-white/20"
                                    disabled={isSubmitting}
                                >
                                    <span className="relative z-10">{isSubmitting ? "Submitting..." : "Submit Feedback"}</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Feedbacks List */}
                    <div className="animate-fade-in space-y-6" style={{ animationDelay: "0.3s" }}>
                        <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">Recent Reviews</h2>
                        {feedbacks.length === 0 && !isLoading ? (
                            <div className="glass-card p-8 text-center text-muted-foreground">
                                No reviews yet. Be the first to leave one!
                            </div>
                        ) : (
                            <div className="grid gap-4 max-h-[450px] overflow-y-auto pr-4 custom-scrollbar bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-inner">
                                {feedbacks.map((f) => (
                                    <div key={f._id || f.id} className="glass-card p-6 flex flex-col gap-3 group hover:border-primary/30 transition-colors">
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                                    {f.name.charAt(0).toUpperCase()}
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-lg">{f.name}</p>
                                                    <div className="flex text-yellow-400">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className={`w-4 h-4 ${i < f.rating ? "fill-current" : "text-gray-600 fill-none"}`}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="text-xs text-muted-foreground whitespace-nowrap">
                                                {(f.createdAt || f.date)
                                                    ? formatDistanceToNow(new Date(f.createdAt || f.date || ""), { addSuffix: true })
                                                    : "Just now"}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground mt-2 italic">"{f.feedback || (f as any).comment || (f as any).message || (f as any).content || ""}"</p>
                                    </div>
                                ))}

                                {/* Loading trigger element */}
                                <div ref={ref} className="h-10 flex items-center justify-center">
                                    {isLoading && <p className="text-muted-foreground text-sm">Loading more...</p>}
                                    {!hasMore && feedbacks.length > 0 && <p className="text-muted-foreground text-xs opacity-50">You've reached the end.</p>}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
