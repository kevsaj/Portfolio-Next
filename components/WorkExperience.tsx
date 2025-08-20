import React from 'react';
import FlipCard from './FlipCard';
import CompactPointCloudDemo from './CompactPointCloudDemo';

function WorkExperience() {
    return (
        <>
            <div id="experience" className="flex flex-col justify-center items-center py-12">
                <h1 className="mb-12 text-3xl font-bold">Work Experience</h1>
                
                <div className="max-w-6xl mx-auto px-4">
                    {/* MacLean Engineering - Flip Card */}
                    <div className="mb-12">
                        <FlipCard
                            autoFlip={true}
                            flipInterval={8000}
                            backContent={
                                <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-lg p-8 pb-16 text-white h-full">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                                        <div>
                                            <h2 className="text-2xl font-bold text-white">3D Point Cloud System</h2>
                                            <h3 className="text-xl font-semibold text-blue-400 mb-2">Live Demo</h3>
                                        </div>
                                        <div className="text-gray-300 font-medium">
                                            Interactive Visualization
                                        </div>
                                    </div>
                                    
                                    <CompactPointCloudDemo />
                                    
                                    <div className="mt-6 mb-6 text-gray-300 text-sm">
                                        <p className="mb-2">🔬 <strong>Technologies:</strong> Python, Open3D, matplotlib, Three.js</p>
                                        <p className="mb-2">📊 <strong>Features:</strong> Real-time clustering, automated analysis, statistical reporting</p>
                                        <p>⚡ <strong>Performance:</strong> Processing 5K+ points with sub-second response times</p>
                                    </div>
                                </div>
                            }
                        >
                            <div className="bg-gradient-to-b from-pink-200 to-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden opacity-80">
                                <div className="p-8 pb-16">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-900">Software Developer</h2>
                                            <h3 className="text-xl font-semibold text-blue-600 mb-2">MacLean Engineering</h3>
                                        </div>
                                        <div className="text-gray-600 font-medium">
                                            July 2021 - Present
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3 text-gray-700">
                                        <div className="flex items-start">
                                            <span className="text-blue-500 mr-2 mt-1">▶</span>
                                            <p>Built <strong>3D point cloud visualization system</strong> using Python, Open3D, and matplotlib with automated reporting and statistical analysis</p>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-blue-500 mr-2 mt-1">▶</span>
                                            <p>Led <strong>full-stack development and DevOps deployment</strong> using Microsoft Azure</p>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-blue-500 mr-2 mt-1">▶</span>
                                            <p>Developed <strong>Python GUI tools</strong> with Tkinter, threading, and i18n support, featuring custom animations</p>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-blue-500 mr-2 mt-1">▶</span>
                                            <p>Created <strong>dynamic React components</strong> for machine data visualization and vehicle management</p>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-blue-500 mr-2 mt-1">▶</span>
                                            <p>Designed and tested <strong>RESTful APIs</strong> with Node.js, Express, PostgreSQL, and Sequelize</p>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-blue-500 mr-2 mt-1">▶</span>
                                            <p>Implemented <strong>automated testing</strong> with Jest and Cypress; deployed via Azure Kubernetes</p>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-blue-500 mr-2 mt-1">▶</span>
                                            <p>Leveraged <strong>Power BI and analytics tools</strong> to extract insights from machine data</p>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {['Python', 'React', 'Azure', 'Open3D', 'Node.js', 'PostgreSQL', 'Power BI', 'Kubernetes'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FlipCard>
                    </div>

                    {/* Deloitte */}
                    <div className="mb-8 bg-gradient-to-b from-pink-200 to-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden opacity-80">
                        <div className="p-8">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Financial Advisory & Tax Technician</h2>
                                    <h3 className="text-xl font-semibold text-green-600 mb-2">Deloitte</h3>
                                </div>
                                <div className="text-gray-600 font-medium">
                                    February 2019 - July 2021
                                </div>
                            </div>
                            
                            <div className="space-y-3 text-gray-700">
                                <div className="flex items-start">
                                    <span className="text-green-500 mr-2 mt-1">▶</span>
                                    <p>Automated <strong>document linking and data entry</strong> using Puppeteer, improving efficiency and accuracy</p>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-green-500 mr-2 mt-1">▶</span>
                                    <p>Audited invoices and tax returns to identify discrepancies and resolve client-vendor disputes</p>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-green-500 mr-2 mt-1">▶</span>
                                    <p>Conducted <strong>financial analysis</strong> and supported compliance across multiple advisory engagements</p>
                                </div>
                            </div>
                            
                            <div className="mt-6 flex flex-wrap gap-2">
                                {['Puppeteer', 'Financial Analysis', 'Tax Compliance', 'Process Automation'].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Education Highlight */}
                    <div className="bg-gradient-to-b from-pink-200 to-white rounded-3xl p-6 opacity-80">
                        <h3 className="text-lg font-bold text-purple-800 mb-2">Currently Pursuing</h3>
                        <p className="text-gray-700">
                            <strong>Master of Data Science</strong> at University of Pittsburgh School of Computing and Information (2025-2027)
                            <br />
                            <span className="text-sm text-gray-600">Focus: Data Modeling/Warehousing and AI in Data Management</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorkExperience;
