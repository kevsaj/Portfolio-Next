import Link from 'next/link'
import SiteHead, { SITE_URL } from '../components/SiteHead'
import SiteNav from '../components/SiteNav'
import Footer from '../components/Footer'
import CtaBanner from '../components/CtaBanner'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Building operator screens for heavy machines',
  url: `${SITE_URL}/hmi`,
  author: { '@id': `${SITE_URL}/about#kevin` },
  about: 'Human-machine interface (HMI) software for mining equipment',
}

const layers = [
  { name: 'Machine controller (PLC)', body: 'Reads sensors and drives the machine. It is the source of truth for every value on screen.' },
  { name: 'OPC UA', body: 'An industrial standard for publishing machine data. The display subscribes to the signals it needs and is told when they change.' },
  { name: 'Data layer (C++)', body: 'Checks each incoming value: right type, sensible range, good status. Bad or missing data is flagged instead of shown as if it were real.' },
  { name: 'View models (C++)', body: 'Turn raw signals into things an operator cares about: "parking brake on", "battery at 62%", "door open".' },
  { name: 'Screens (Qt / QML)', body: 'Reusable gauges, indicators and warning bars, laid out so the important thing is readable in a glance.' },
]

const principles = [
  { title: 'Never show a wrong number', body: 'On a machine, a stale or made-up value is worse than a blank one. If a signal is missing or invalid, the gauge says so clearly instead of freezing on the last good reading.' },
  { title: 'Readable in one glance', body: 'Operators are driving, not reading. Colour means something (green, amber, red), text is large, and warnings appear in the same place every time.' },
  { title: 'Build parts, not pages', body: 'A speedometer, a battery gauge or a tilt indicator is built once as a tested component, then reused across screens and machine models.' },
  { title: 'Test on real hardware early', body: 'Every release has a written test plan that is run on a simulation board with the real display and controller before it goes near a machine.' },
]

const stories = [
  {
    title: 'The crash that only happened with real data',
    body: [
      'A display was restarting on its own on the test bench. Nothing failed in normal testing.',
      'I traced it to one signal that the controller sometimes published with no value at all. The code that handled live updates assumed there was always something there, and fell over when there was not.',
      'The fix was a few lines: treat "no value" the same as "bad value" and show the gauge as unavailable. The more useful part was the test. I added a fake signal to our test server that sends exactly that empty value, wrote a test around it, and confirmed the test crashes on the old code and passes on the new code. That fault now gets caught automatically.',
    ],
  },
  {
    title: 'Why the gauge had no decimal places',
    body: [
      'A battery reading on screen jumped in whole numbers when the design called for decimals. The obvious move was to "fix the display".',
      'Instead I followed the value backwards, from the screen to the data layer to the controller, and found the controller itself was sending whole numbers. No amount of display code could add precision that was never sent.',
      'I wrote up what I found for the controls engineers so the change could be made at the source. Knowing where a problem really lives saves days of patching the wrong layer.',
    ],
  },
  {
    title: 'Testing remote control without a machine',
    body: [
      'Some machines can be run from a rugged tablet, with live camera views and machine status on screen. Testing that normally needs a machine, which is expensive and rarely free.',
      'I set up a laptop to stand in for the machine and send the same messages a real one would, so the tablet software can be checked at a desk: status lights, fault codes in English and Spanish, and connection loss.',
      'I also scripted the packaging step so a developer can build the same installer locally that the automated pipeline produces, instead of waiting on the pipeline to find out whether a build works.',
    ],
  },
]

export default function Hmi() {
  return (
    <>
      <SiteHead
        title="Building operator screens for heavy machines | Kevin Sajan"
        description="A case study by Kevin Sajan on building HMIs for underground mining equipment: C++ and Qt/QML displays, OPC UA machine data, Python remote-control software and hardware testing."
        path="/hmi"
        jsonLd={jsonLd}
      />
      <SiteNav />
      <main className="mx-auto max-w-4xl px-4 pb-8 pt-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-pink-600 dark:text-pink-400">Case study · MacLean Engineering</p>
        <h1 className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl">Building operator screens for heavy machines</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          An HMI, or human-machine interface, is the screen an operator uses to run a machine. Since 2021 I&apos;ve worked on five of them for underground
          mining equipment, from in-cab displays on a battery-electric grader to tablet software for running machines by remote control.
          This is how that work is put together and what it has taught me.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {['C++', 'Qt / QML', 'Python', 'OPC UA', 'Embedded Linux', 'Docker', 'CI/CD'].map((t) => (
            <span key={t} className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900/40 dark:text-purple-200">{t}</span>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">From sensor to screen</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">Every value an operator sees passes through the same five layers. My work is mostly in the bottom three.</p>
          <ol className="mt-6 space-y-3">
            {layers.map((l, i) => (
              <li key={l.name}>
                <div className={`rounded-2xl border p-5 ${i >= 2 ? 'border-pink-200 bg-pink-50/80 dark:border-pink-900/60 dark:bg-pink-950/30' : 'border-white/60 bg-white/70 dark:border-gray-700/60 dark:bg-gray-800/60'}`}>
                  <p className="font-bold text-gray-900 dark:text-white">{l.name}</p>
                  <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{l.body}</p>
                </div>
                {i < layers.length - 1 && <p className="py-1 text-center text-gray-400" aria-hidden="true">↓</p>}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What matters on a machine</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/60 bg-white/70 p-6 dark:border-gray-700/60 dark:bg-gray-800/60">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{p.title}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Three problems, and how I solved them</h2>
          <div className="mt-6 space-y-6">
            {stories.map((s) => (
              <article key={s.title} className="rounded-3xl border border-white/60 bg-white/80 p-7 shadow dark:border-gray-700/60 dark:bg-gray-800/70">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{s.title}</h3>
                <div className="mt-3 space-y-3 text-gray-700 dark:text-gray-300">
                  {s.body.map((para) => <p key={para}>{para}</p>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
          This page describes my work in general terms. Screens, code and machine details belong to MacLean Engineering and are not shown here.
        </p>
        <p className="mt-6">
          <Link href="/about" className="font-semibold text-pink-600 underline-offset-4 hover:underline dark:text-pink-400">← Back to my experience and résumé</Link>
        </p>
      </main>
      <CtaBanner title="Need someone who can do this?" body="I’m open to software engineering roles, and I take on client projects through KIS Studios." />
      <Footer />
    </>
  )
}
