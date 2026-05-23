import React from 'react';
import PdfIcon from '../../assets/resources/PDF.svg';

interface PdfResource {
    id: number;
    title: string;
    size: string;
    date: string;
    assetPath: string;
}

export const ResourcePdf: React.FC = () => {
    const resources: PdfResource[] = [
        {
            id: 1,
            title: 'Year-End Financial Review Worksheet',
            size: '675 MB',
            date: 'Sep 5, 2026, 12:27 AM',
            assetPath: '#',
        },
        {
            id: 2,
            title: 'Monthly Bookkeeping Reconciliation Guide',
            size: '675 MB',
            date: 'Sep 5, 2026, 12:27 AM',
            assetPath: '#',
        },
        {
            id: 3,
            title: 'Quarterly Cash Flow Analysis Report',
            size: '675 MB',
            date: 'Sep 5, 2026, 12:27 AM',
            assetPath: '#',
        },
        {
            id: 4,
            title: 'Strategic Financial Growth Workbook',
            size: '675 MB',
            date: 'Sep 5, 2026, 12:27 AM',
            assetPath: '#',
        },
        {
            id: 5,
            title: 'Tax Planning & Compliance Checklist',
            size: '675 MB',
            date: 'Sep 5, 2026, 12:27 AM',
            assetPath: '#',
        },
        {
            id: 6,
            title: 'Business Advisory Summary Report',
            size: '675 MB',
            date: 'Sep 5, 2026, 12:27 AM',
            assetPath: '#',
        },
    ];

    const handleDownload = (resource: PdfResource) => {
        console.log(`Downloading: ${resource.title}`);
    };

    return (
        <section className="w-full bg-[#F5F5F5] py-10 md:py-14 px-6 md:px-12 lg:px-24 select-none">
            <div className="max-w-7xl mx-auto">

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {resources.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow-sm border border-neutral-100 flex flex-col overflow-hidden transition-all duration-200 hover:shadow-md"
                        >
                            {/* Top grey area with PDF icon + title */}
                            <div className="bg-[#EAEAEA] p-5 flex items-start gap-3 min-h-[110px]">
                                <img
                                    src={PdfIcon}
                                    alt="PDF"
                                    className="w-9 h-9 shrink-0 object-contain"
                                />
                                <h3 className="text-gray-900 font-bold text-[13.5px] leading-snug tracking-tight line-clamp-3">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Bottom content */}
                            <div className="p-5 flex flex-col flex-grow justify-between bg-white">
                                <div className="space-y-2.5 mb-5">
                                    {/* Size */}
                                    <div className="flex items-center gap-2.5 text-neutral-400">
                                        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                        </svg>
                                        <span className="text-xs font-medium">{item.size}</span>
                                    </div>

                                    {/* Date */}
                                    <div className="flex items-center gap-2.5 text-neutral-400">
                                        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                        </svg>
                                        <span className="text-xs font-medium">{item.date}</span>
                                    </div>
                                </div>

                                {/* Download button */}
                                <div className="w-full flex justify-center">
                                    <button
                                        onClick={() => handleDownload(item)}
                                        className="w-4/5 max-w-[160px] py-2 border-2 border-[#1F3864] text-[#1F3864] rounded-full text-sm font-semibold tracking-wide bg-transparent transition-all duration-200 hover:bg-[#1F3864] hover:text-white active:scale-95"
                                    >
                                        Download
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ResourcePdf;