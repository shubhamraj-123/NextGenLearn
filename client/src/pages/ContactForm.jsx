import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useSubmitContactMutation } from "@/features/api/contactApi";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitContact, { isLoading }] = useSubmitContactMutation();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await submitContact(formData).unwrap();
      toast.success(res.message || "Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 px-4 bg-background shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Get in Touch with NextGenLearn</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            placeholder="e.g. Shubham Raj"
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            placeholder="e.g. contact@nextgenlearn.com"
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Write your message..."
            rows={5}
            onChange={handleChange}
            required
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
