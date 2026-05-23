import React, { useEffect, useMemo, useState } from 'react';
import PdfIcon from '../../assets/resources/PDF.svg';

interface PdfResource {
    id: string;
    title: string;
    size: string;
    date: string;
    url: string;
}

const pdfModules = import.meta.glob<string>('../../assets/**/*.pdf', {
    query: '?url',
    import: 'default',
    eager: true,
});

const formatPdfName = (filename: string): string =>
    filename
        .replace(/\.pdf$/i, '')
        .replace(/_/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const formatDate = (dateStr: string | null): string => {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
    });
};

const buildResourcesFromAssets = (): Omit<PdfResource, 'size' | 'date'>[] =>
    Object.entries(pdfModules)
        .map(([path, url]) => {
            const filename = path.split('/').pop() ?? path;
            return {
                id: filename,
                title: formatPdfName(filename),
                url,
            };
        })
        .sort((a, b) => a.title.localeCompare(b.title));

export const ResourcePdf: React.FC = () => {
    const baseResources = useMemo(() => buildResourcesFromAssets(), []);
    const [resources, setResources] = useState<PdfResource[]>(
        baseResources.map((item) => ({ ...item, size: 'Loading...', date: '—' })),
    );
    const [openingId, setOpeningId] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        const loadMetadata = async () => {
            const withMeta = await Promise.all(
                baseResources.map(async (item) => {
                    try {
                        const response = await fetch(item.url);
                        const blob = await response.blob();
                        const lastModified = response.headers.get('Last-Modified');

                        return {
                            ...item,
                            size: formatFileSize(blob.size),
                            date: formatDate(lastModified),
                        };
                    } catch {
                        return {
                            ...item,
                            size: '—',
                            date: '—',
                        };
                    }
                }),
            );

            if (!cancelled) {
                setResources(withMeta);
            }
        };

        loadMetadata();
        return () => {
            cancelled = true;
        };
    }, [baseResources]);

    const handleOpenPdf = async (resource: PdfResource) => {
        if (openingId) return;

        setOpeningId(resource.id);
        try {
            const response = await fetch(resource.url);
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
            window.open(blobUrl, '_blank', 'noopener,noreferrer');
            setTimeout(() => URL.revokeObjectURL(blobUrl), 60_000);
        } catch {
            window.open(resource.url, '_blank', 'noopener,noreferrer');
        } finally {
            setOpeningId(null);
        }
    };

    return (
        <section className="w-full bg-[#F5F5F5] py-10 md:py-14 px-6 md:px-12 lg:px-24 select-none">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {resources.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow-sm border border-neutral-100 flex flex-col overflow-hidden transition-all duration-200 hover:shadow-md cursor-pointer"
                            onClick={() => handleOpenPdf(item)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    handleOpenPdf(item);
                                }
                            }}
                            role="button"
                            tabIndex={0}
                            aria-label={`Open ${item.title}`}
                        >
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

                            <div className="p-5 flex flex-col flex-grow justify-between bg-white">
                                <div className="space-y-2.5 mb-5">
                                    <div className="flex items-center gap-2.5 text-neutral-400">
                                        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                        </svg>
                                        <span className="text-xs font-medium">{item.size}</span>
                                    </div>

                                    <div className="flex items-center gap-2.5 text-neutral-400">
                                        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                        </svg>
                                        <span className="text-xs font-medium">{item.date}</span>
                                    </div>
                                </div>

                                <div className="w-full flex justify-center">
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleOpenPdf(item);
                                        }}
                                        disabled={openingId === item.id}
                                        className="w-4/5 max-w-[160px] py-2 border-2 border-[#1F3864] text-[#1F3864] rounded-full text-sm font-semibold tracking-wide bg-transparent transition-all duration-200 hover:bg-[#1F3864] hover:text-white active:scale-95 disabled:opacity-60 disabled:cursor-wait"
                                    >
                                        {openingId === item.id ? 'Opening...' : 'Open PDF'}
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
