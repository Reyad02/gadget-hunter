import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>Gadget Hunter - About</title>
            </Helmet>
            <div className="max-w-7xl mx-auto ">
                <div className="my-4">
                    <h2 className="text-2xl font-bold mb-4">About Us</h2>
                    <p className="mb-4">
                        Welcome to <strong>Gadget-Hunter</strong>—your ultimate destination for discovering the latest and greatest in the world of gadgets. Whether you're a tech enthusiast, a gadget lover, or someone searching for the perfect gift, Gadget-Hunter is here to make your journey seamless and enjoyable.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="mb-4">
                        At Gadget-Hunter, we believe in the power of innovation and the joy that gadgets bring into our lives. Our mission is to connect you with the most innovative, unique, and cutting-edge gadgets on the market. We strive to be the go-to platform for gadget hunters like you, where you can explore, compare, and choose from a diverse collection of products tailored to your needs.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">What We Offer</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>Extensive Selection:</strong> From the latest tech releases to quirky, hard-to-find gadgets, our curated selection caters to all tastes and preferences.</li>
                        <li><strong>Detailed Comparisons:</strong> Make informed decisions with our comprehensive comparison tools that highlight features, prices, and user reviews.</li>
                        <li><strong>Expert Reviews:</strong> Our team of tech enthusiasts and experts provides insightful reviews, helping you understand the pros and cons of each product.</li>
                        <li><strong>Personalized Experience:</strong> Create a wishlist, track your favorite gadgets, and receive tailored recommendations based on your interests.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Our Story</h3>
                    <p className="mb-4">
                        Founded by a group of tech aficionados, Gadget-Hunter was born out of a shared passion for gadgets and a desire to create a platform that makes discovering new technology easier and more fun. We've grown into a trusted source for gadget lovers worldwide, offering a seamless shopping experience and exceptional customer service.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Join the Community</h3>
                    <p className="mb-4">
                        Gadget-Hunter is more than just a shopping platform; it's a community of like-minded individuals who share a love for innovation. Join our community, explore the latest trends, share your experiences, and stay ahead of the curve with Gadget-Hunter.
                    </p>

                    <p>Thank you for choosing Gadget-Hunter. We’re excited to be part of your journey in exploring the world of gadgets!</p>
                </div>

                <div className=" my-4">
                    <div className="flex gap-4">
                        <div className="space-y-2">
                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" name="faq-accordion" id="faq1" defaultChecked />
                                <label htmlFor="faq1" className="collapse-title text-xl font-medium">
                                    What is Gadget-Hunter?
                                </label>
                                <div className="collapse-content">
                                    <p>Gadget-Hunter is a platform where users can explore a wide range of gadgets, from the latest tech to unique gadgets you might not find elsewhere.</p>
                                </div>
                            </div>

                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" name="faq-accordion" id="faq2" />
                                <label htmlFor="faq2" className="collapse-title text-xl font-medium">
                                    How do I find gadgets on Gadget-Hunter?
                                </label>
                                <div className="collapse-content">
                                    <p>You can browse gadgets by categories, use the search bar for specific items, or explore the featured gadgets section.</p>
                                </div>
                            </div>

                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" name="faq-accordion" id="faq3" />
                                <label htmlFor="faq3" className="collapse-title text-xl font-medium">
                                    Can I compare gadgets on Gadget-Hunter?
                                </label>
                                <div className="collapse-content">
                                    <p>Yes, you can compare different gadgets based on features, prices, and user reviews to make an informed decision.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" name="faq-accordion" id="faq4" />
                                <label htmlFor="faq4" className="collapse-title text-xl font-medium">
                                    How often is the gadget inventory updated?
                                </label>
                                <div className="collapse-content">
                                    <p>Our inventory is updated regularly to include the latest gadgets, as well as any new arrivals or trending items.</p>
                                </div>
                            </div>

                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" name="faq-accordion" id="faq5" />
                                <label htmlFor="faq5" className="collapse-title text-xl font-medium">
                                    Is there a way to save my favorite gadgets?
                                </label>
                                <div className="collapse-content">
                                    <p>Yes, you can create a personalized wishlist to save your favorite gadgets and revisit them later.</p>
                                </div>
                            </div>

                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" name="faq-accordion" id="faq6" />
                                <label htmlFor="faq6" className="collapse-title text-xl font-medium">
                                    Do you offer customer support?
                                </label>
                                <div className="collapse-content">
                                    <p>Absolutely! Our customer support team is available to assist you with any questions or issues you may have regarding your gadget purchase.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;