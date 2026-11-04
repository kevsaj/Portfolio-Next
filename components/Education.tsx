const education = [
    { school: 'University of Pittsburgh, School of Computing and Information', credential: 'Master of Data Science (in progress)', detail: 'Data modelling and warehousing, AI in data management', years: '2025 – 2027' },
    { school: 'University of Toronto School of Continuing Studies', credential: 'Full Stack Web Development Certificate (Coding Boot Camp)', years: '2020 – 2021' },
    { school: 'University of Toronto', credential: 'HBSc, Biological and Environmental Sciences', years: '2014 – 2018' },
];

const certifications = [
    'Udacity: Android Basics Nanodegree by Google',
    'Coursera: Google IT Support Professional Certificate',
    'LinkedIn Learning / Microsoft Press: Complete Guide to Power BI for Data Analysts',
];

export default function Education() {
    return (
        <section id="education" className="mx-auto max-w-5xl px-4 py-12">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">Education & certifications</h2>
            <div className="grid gap-6 md:grid-cols-[1.5fr_1fr]">
                <ul className="space-y-4">
                    {education.map((e) => (
                        <li key={e.school} className="rounded-2xl border border-white/60 bg-white/70 p-5 dark:border-gray-700/60 dark:bg-gray-800/60">
                            <div className="flex flex-col justify-between gap-1 sm:flex-row">
                                <p className="font-bold text-gray-900 dark:text-white">{e.credential}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{e.years}</p>
                            </div>
                            <p className="text-sm text-purple-700 dark:text-purple-300">{e.school}</p>
                            {e.detail && <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{e.detail}</p>}
                        </li>
                    ))}
                </ul>
                <div className="rounded-2xl border border-white/60 bg-white/70 p-5 dark:border-gray-700/60 dark:bg-gray-800/60">
                    <h3 className="mb-3 font-bold text-gray-900 dark:text-white">Certifications</h3>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        {certifications.map((c) => <li key={c}>• {c}</li>)}
                    </ul>
                </div>
            </div>
        </section>
    );
}
