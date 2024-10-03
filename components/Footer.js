'use client'
import React from 'react';

const FooterGrid = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 flex justify-center">
            <div className="w-[90%]">
                <div className="grid sm:grid-cols-2   grid-cols-4 gap-8">
                    {/* AI Tools */}
                    <div className='flex justify-center'>
                        <div className="">

                            <h3 className="font-semibold text-lg mb-4">AI Tools</h3>
                            <ul className="space-y-2">
                                <li>AI Image Generator</li>
                                <li>AI Avatar</li>
                                <li>AI Portrait</li>
                                <li>AI Replace</li>
                                <li>AI Filter</li>
                                <li>AI Product Photoshoot</li>
                            </ul>
                        </div>
                    </div>

                    {/* Editor Tools */}
                    <div className='flex justify-center'>
                        <div className="">
                            <h3 className="font-semibold text-lg mb-4">Editor Tools</h3>
                            <ul className="space-y-2">
                                <li>Remove Background</li>
                                <li>Profile Picture Maker</li>
                                <li>Change Color</li>
                                <li>Add Music to Video</li>
                                <li>Sticker Maker</li>
                                <li>Color Correction</li>
                            </ul>
                        </div>
                    </div>

                    {/* Templates */}
                    <div className='flex justify-center'>

                        <div>
                            <h3 className="font-semibold text-lg mb-4">Templates</h3>
                            <ul className="space-y-2">
                                <li>Flyer</li>
                                <li>Product Promotion</li>
                                <li>Instagram Story</li>
                                <li>Fashion</li>
                                <li>Invitation</li>
                                <li>Product Sale</li>
                                <li>Facebook Video</li>
                            </ul>
                        </div>
                    </div>

                    {/* Company */}
                    <div className='flex justify-center'>
                        <div className=''>
                            <h3 className="font-semibold text-lg mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li>API</li>
                                <li>Pricing</li>
                                <li>Mobile Apps</li>
                                <li>Blog</li>
                                <li>Email Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterGrid;
