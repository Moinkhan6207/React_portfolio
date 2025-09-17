import { useState } from "react";
import "../styles/Feedback.css";

function Feedback() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        rating: 0,
        feedback: "",
        suggestions: "",
        contactBack: false,
        likedPart: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleRating = (rating) => {
        setFormData({ ...formData, rating });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Feedback Submitted:", formData);
        setSubmitted(true);
    };

    return (
        <div className="feedback-page">
            <div className="feedback-container">
                <h1>💬 We Value Your Feedback</h1>
                <p>Your thoughts help me improve and deliver better projects 🚀</p>

                {submitted ? (
                    <div className="thank-you">
                        ✅ Thank you for your valuable feedback!
                    </div>
                ) : (
                    <form className="feedback-form" onSubmit={handleSubmit}>
                        {/* Name */}
                        <label>
                            Name<span className="required">*</span>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        {/* Email */}
                        <label>
                            Email (optional)
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </label>

                        {/* Rating */}
                        <label>
                            How would you rate my portfolio?
                            <div className="rating-stars">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        className={`star ${formData.rating >= star ? "selected" : ""}`}
                                        onClick={() => handleRating(star)}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                        </label>

                        {/* Feedback */}
                        <label>
                            Feedback
                            <textarea
                                name="feedback"
                                placeholder="Write your feedback here..."
                                value={formData.feedback}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </label>

                        {/* Suggestions */}
                        <label>
                            Any suggestions for improvement?
                            <input
                                type="text"
                                name="suggestions"
                                value={formData.suggestions}
                                onChange={handleChange}
                            />
                        </label>

                        {/* Dropdown */}
                        <label>
                            Which part did you like the most?
                            <select
                                name="likedPart"
                                value={formData.likedPart}
                                onChange={handleChange}
                            >
                                <option value="">Select...</option>
                                <option value="design">Design</option>
                                <option value="projects">Projects</option>
                                <option value="skills">Skills</option>
                            </select>
                        </label>

                        {/* Checkbox */}
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                name="contactBack"
                                checked={formData.contactBack}
                                onChange={handleChange}
                            />
                            Do you want me to contact you back?
                        </label>

                        {/* Submit */}
                        <button type="submit" className="submit-btn">
                            🚀 Submit Feedback
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Feedback;
